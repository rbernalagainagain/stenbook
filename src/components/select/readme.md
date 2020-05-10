# mrb-select



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute | Description | Type     | Default      |
| -------------------- | --------- | ----------- | -------- | ------------ |
| `idOption`           | `id`      |             | `string` | `'combobox'` |
| `label` _(required)_ | `label`   |             | `string` | `undefined`  |
| `options`            | --        |             | `any[]`  | `undefined`  |


## Events

| Event                    | Description | Type                   |
| ------------------------ | ----------- | ---------------------- |
| `changeVisibilityOption` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [app-root](../..)

### Depends on

- [mrb-select-option](option)

### Graph
```mermaid
graph TD;
  mrb-select --> mrb-select-option
  app-root --> mrb-select
  style mrb-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
