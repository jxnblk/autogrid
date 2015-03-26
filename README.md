# autogrid

Automatic CSS grid generator

```bash
npm install autogrid
```

```js
var fs = require('fs');
var autogrid = require('autogrid');
var css = autogrid({
  columns: 16,
  gutter: '20px',
  container: '960px'
});
fs.writeFileSync('grid.css', css);
```


## Options

### `columns`
default: 12
Number of columns used to generate the grid.

### `gutter`
default: 32px
Gutter width for columns.

### `container`
default: 1024px
Max width for the container style.

### `containerPadding`
default: false
Adds left and right padding to the container style.

### `row`
default: true
Creates a row style for containing columns.

### `customMedia`
default: true
Create CSS custom media declarations and uses them in @media rules. The result can be compiled to CSS3 with Cssnext, Postcss, or Rework.

### `customProperties`
default: true
Creates CSS custom properties (variables) and uses them as values. The result can be compiled to CSS3 with Cssnext, Postcss, or Rework.

### `breakpoints`
default:
```js
[
  {},
  { name: 'sm', value: '(min-width: 40em)' },
  { name: 'md', value: '(min-width: 52em)' },
  { name: 'lg', value: '(min-width: 64em)' }
],
```

### `method`
default: float
Determines the method (float, inline-block, or flexbox) to used for generating the grid. (Currently not implemented)

### `noCollapse`
default: true
Sets min-height 1px to prevent empty columns from collapsing.

### `mixedColumns`
default: false
Mixes float and gutter declarations into every column style.
If set to `false`, each breakpoint with generate a column float class that can be used without setting width, and each column width class can be used independently of the grid system.

```css
/* Mixed */
.col-1 {
  float: left;
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
  min-height: 1px
  width: 8.333333333333332%
}

/* Not Mixed */
.col {
  float: left;
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
  min-height: 1px
}
.col-1 {
  width: 8.333333333333332%
}
```

### `offset`
default: false
Creates column offset (margin-left) utilities.

### `prefix`
default ''
Prefixes each class, custom property, and custom media name with a given string.

### `containerName`
default: container
Class name for container style.

### `rowName`
default: row
Class name for row style.

### `columnName`
default: BB-col-NN-MM
Class name for columns and column modifiers, where BB is breakpoint.name, NN is column width number, and MM is modifier.
Currently only supports hyphens as separators.

```js
// Example
options.columnName: 'col-BB-MM-NN'
// Results in Bootstrap style naming convention
// e.g. .col-sm-6, .col-sm-offset-3
```

---

MIT License

