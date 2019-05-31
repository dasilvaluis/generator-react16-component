# Generator React16 Component

Yeoman generator for basic/empty React components.

## Options

* Component name
* Stateful/Stateless component
* Connect with Redux using `mapStateToProps`, `mapDispatchToProps` and `connect()`

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
