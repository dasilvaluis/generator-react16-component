const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.argument('name', { type: String, required: false });
  }

  // first stage
  async prompting() {
    this.log('Welcome to React16 Component Generator... 🤖');

    const questionsArr = [
      {
        type: 'list',
        name: 'type',
        message: 'Stateful or stateless component?',
        choices: ['stateful', 'stateless'],
        default: 'stateful'
      },
      {
        type: 'list',
        name: 'connectRedux',
        message: 'Connect with redux?',
        choices: ['N', 'Y'],
        default: 'N'
      },
    ];

    if (undefined === this.options.name) {
      questionsArr.unshift(
        {
          type: 'input',
          name: 'name',
          message: 'Component name',
          validate: input => Boolean(input.length),
          default: 'NewComponent'
        }
      );
    }

    this.answers = await this.prompt(questionsArr);

  }

  // second stage
  writing() {
    this.log('Writing files... 📝');

    const { type, connectRedux } = this.answers;

    const name = undefined !== this.answers.name ? this.answers.name : this.options.name;

    /**
     * Copy Component file
     */
    if (type === 'stateful') {
      this.fs.copyTpl(
        this.templatePath('ComponentStateful.jsx'),
        this.destinationPath(`components/${name}/${name}.jsx`),
        {
          name,
          connectRedux
        },
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('ComponentStateless.jsx'),
        this.destinationPath(`components/${name}/${name}.jsx`),
        {
          name,
          connectRedux
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
