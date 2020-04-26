const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('component generator', () => {
  it('generates a component under src/components with all the files', () => {
    const componentName = 'TestComponent';
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(
        {
          name: componentName,
          type: 'stateful'
        }
      ).then(() => {
        assert.file(`src/components/${componentName}/${componentName}.scss`);
        assert.file(`src/components/${componentName}/${componentName}.spec.js`);
        assert.file(`src/components/${componentName}/${componentName}.jsx`);
        assert.file(`src/components/${componentName}/index.js`);
      })
  });

  it('generates a component with the component name provided as argument', () => {
    const componentName = 'TestComponent';
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments([componentName])
      .withPrompts(
        {
          type: 'stateful'
        }
      ).then(() => {
        assert.file(`src/components/${componentName}/${componentName}.scss`);
        assert.file(`src/components/${componentName}/${componentName}.spec.js`);
        assert.file(`src/components/${componentName}/${componentName}.jsx`);
        assert.file(`src/components/${componentName}/index.js`);
      })
  });

  it('generates a stateful component', () => {
    const componentName = 'TestComponent';
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(
        {
          name: componentName,
          type: 'stateful',
        }
      ).then(() => {
        assert.file(`src/components/${componentName}/${componentName}.jsx`);
        assert.fileContent(`src/components/${componentName}/${componentName}.jsx`, `class ${componentName} extends React.Component {`);
      })
  });

  it('generates a stateless component', () => {
    const componentName = 'TestComponent';
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(
        {
          name: componentName,
          type: 'stateless',
        }
      ).then(() => {
        assert.file(`src/components/${componentName}/${componentName}.jsx`);
        assert.fileContent(`src/components/${componentName}/${componentName}.jsx`, `const ${componentName} = (props) => {`);
      })
  });

  it('connects the generated component with redux', () => {
    const componentName = 'TestComponent';
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts(
        {
          name: componentName,
          type: 'stateless',
          connectRedux: 'Y'
        }
      ).then(() => {
        assert.file(`src/components/${componentName}/${componentName}.jsx`);
        assert.fileContent(
          [
            [`src/components/${componentName}/${componentName}.jsx`, `import { connect } from 'react-redux';`],
            [`src/components/${componentName}/${componentName}.jsx`, `export default connect(mapStateToProps, mapDispatchToProps)(${componentName});`]
          ]
        );
      })
  });
});
