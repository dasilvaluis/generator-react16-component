const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  // first stage
  async prompting() {
    this.log('Welcome to React 16 Component Generator... 🤖');

    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        validate: input => Boolean(input.length),
        default: 'NewComponent'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Stateful or stateless component?',
        choices: ['stateful', 'stateless'],
        default: 'stateful'
      },
    ]);
  }

  // second stage
  writing() {
    this.log('Writing files... 📝');

    const { type, name } = this.answers;

    /**
     * Copy Component file
     */
    if (type === 'stateful') {
      this.fs.copyTpl(
        this.templatePath('ComponentStateful.jsx'),
        this.destinationPath(`components/${name}/${name}.jsx`),
        {
          name,
        },
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('ComponentStateless.jsx'),
        this.destinationPath(`components/${name}/${name}.jsx`),
        {
          name,
        },
      );
    }

    /**
     * Copy .SCSS file
     */
    this.fs.copyTpl(
      this.templatePath('Component.scss'),
      this.destinationPath(`components/${name}/${name}.scss`),
      {
        name,
      },
    );

    /**
     * Copy test file
     */
    this.fs.copyTpl(
      this.templatePath('Component.spec.js'),
      this.destinationPath(`components/${name}/${name}.spec.js`),
      {
        name,
      },
    );

    /**
     * Copy index file
     */
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`components/${name}/index.js`),
      {
        name,
      },
    );
  }

  // last stage
  end() {
    this.log('Bye... 👋');
  }
};
