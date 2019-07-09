# Generator React16 Component

Yeoman generator for basic/empty React components.

## Options

* Component name
* Stateful/Stateless component
* Connect with Redux using `mapStateToProps`, `mapDispatchToProps` and `connect()`

## Installation

Globally:
```
yarn global add generator-react16-component
```
Locally:
```
yarn add generator-react16-component
```

## Usage
```
yo react16-component
```

You can insert the component name directly as an argument with:
```
yo react16-component [ComponentName]
```

**Generated files**

```
.
├── src
│   ...
│   ├── components
│   │   ...
│   │   ├── ComponentName
│   │   │   ├── index.js
│   │   │   ├── ComponentName.jsx
│   │   │   ├── ComponentName.scss
│   │   │   └── ComponentName.spec.js
│   │   ...
│   ...
```

## Config file

You can use a `.yo-rc.json` to configure a set of rules for the files creation.

These are the available options:

```json
"generator-react16-component": {
  "componentFileExtension": "jsx", // ['jsx', 'tsx', 'js']
  "componentsFolder": "src/components", // path string
  "testFileExtension": "spec.js", // ['spec.js', 'test.js']
  "testFolder": "src/components/[ComponentName]", // path string
  "stylesFileExtension": "scss", // ['scss', 'css', 'less', 'styl']
  "createStylesFile": true // [true, false]
}
```

Check [https://yeoman.io/authoring/storage.html](https://yeoman.io/authoring/storage.html) for more information.

## Known issues

- When sending the tests files to a different folder, the component import in the test file points to the same directory

## TODO:

**Add possibility for yeoman config file for**

- Typechecking (Proptypes/etc)
