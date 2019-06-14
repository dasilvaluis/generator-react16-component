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

**Genrated files**

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

## TODO:

**Add possibility for yeoman config file for**

- SCSS/LESS/CSS
- JSX/TSX
- Test folder
- Component folder
- Style folder
- Styles in CSS or JS
- Typechecking (Proptypes/etc)
