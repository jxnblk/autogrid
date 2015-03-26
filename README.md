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

### `gutter`
default: 32px

### `container`
default: 1024px

### `containerPadding`
default: false

### `row`
default: true

### `customMedia`
default: true

### `customProperties`
default: true

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

### `mixedColumns`
default: false

### `offset`
default: false

### `containerName`
default: container

### `rowName`
default: row

### `columnName`
default: BB-col-NN-MM
(where BB is breakpoint.name, NN is column width number, and MM is modifier)

---

MIT License

