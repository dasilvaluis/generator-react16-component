const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.argument('name', { type: String, required: false });

    this.config.defaults({
      componentFileExtension: "jsx",
      componentsFolder: "src/components",
      testFileExtension: "spec.js",
      testFolder: "src/components/[ComponentName]",
      stylesFileExtension: "scss",
      createStylesFile: true
    });

    this.userConfig = {
      componentFileExtension: this.validateConfigVariable(this.config.get("componentFileExtension")),
      componentsFolder: this.validateConfigVariable(this.config.get("componentsFolder")),
      testFileExtension: this.validateConfigVariable(this.config.get("testFileExtension")),
      testFolder: this.validateConfigVariable(this.config.get("testFolder")),
      stylesFileExtension: this.validateConfigVariable(this.config.get("stylesFileExtension")),
      createStylesFile: this.validateConfigVariable(this.config.get("createStylesFile")),
    };
  }

  validateConfigVariable(varName) {
    var allowedVariables = {
      componentFileExtension: ['jsx', 'tsx', 'js'],
      componentsFolder: undefined,
      testFileExtension: ['spec.js', 'test.js'],
      testFolder: undefined,
      stylesFileExtension: ['scss', 'css', 'less', 'styl'],
      createStylesFile: [true, false]
    };

    if (undefined === allowedVariables[varName] ||
      allowedVariables[varName].includes(toLowerCase(trim('varName')))
    ) {
      return varName;
    }

    return allowedVariables[varName][0];
  }

  // first stage
  async prompting() {
    this.log('Welcome to React16 Component Generator... 🤖');

    const questionsArr = [
      {
        type: 'list',
        name: 'type',
        message: 'Stateful or stateless component?',
        choices: ['stateless', 'stateful'],
        default: 'stateless'
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

    // Component file
    if (type === 'stateful') {
      this.fs.copyTpl(
        this.templatePath('ComponentStateful.jsx'),
        this.destinationPath(`${this.userConfig.componentsFolder}/${name}/${name}.${this.userConfig.componentFileExtension}`),
        {
          name,
          connectRedux
        },
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('ComponentStateless.jsx'),
        this.destinationPath(`${this.userConfig.componentsFolder}/${name}/${name}.${this.userConfig.componentFileExtension}`),
        {
          name,
          connectRedux
        },
      );
    }

    // Styles file
    if (this.userConfig.createStylesFile) {
      this.fs.copyTpl(
        this.templatePath('Component.scss'),
        this.destinationPath(`${this.userConfig.componentsFolder}/${name}/${name}.${this.userConfig.stylesFileExtension}`),
        {
          name,
        },
      );
    }

    // Tests file
    this.fs.copyTpl(
      this.templatePath('Component.spec.js'),
      this.destinationPath(`${this.userConfig.testFolder.replace('[ComponentName]', name)}/${name}.${this.userConfig.testFileExtension}`),
      {
        name,
      },
    );

    // Index file
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${this.userConfig.componentsFolder}/${name}/index.js`),
      {
        name,
      },
    );
  }

  // last stage
  end() {
    this.log('Component created! Bye... 👋');
  }
};
