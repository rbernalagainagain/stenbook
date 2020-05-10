/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import {HTMLStencilElement, JSXBase} from '@stencil/core/internal'
import {Visible} from './components/select/select'
import {Value} from './types/value'
export namespace Components {
  interface AppRoot {}
  interface MrbSelect {
    idOption?: string
    label: string
    options: any[]
  }
  interface MrbSelectOption {
    role: string
    value?: Value
  }
  interface MyComponent {
    /**
     * The first name
     */
    first: string
    /**
     * The last name
     */
    last: string
    /**
     * The middle name
     */
    middle: string
  }
}
declare global {
  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement
    new (): HTMLAppRootElement
  }
  interface HTMLMrbSelectElement
    extends Components.MrbSelect,
      HTMLStencilElement {}
  var HTMLMrbSelectElement: {
    prototype: HTMLMrbSelectElement
    new (): HTMLMrbSelectElement
  }
  interface HTMLMrbSelectOptionElement
    extends Components.MrbSelectOption,
      HTMLStencilElement {}
  var HTMLMrbSelectOptionElement: {
    prototype: HTMLMrbSelectOptionElement
    new (): HTMLMrbSelectOptionElement
  }
  interface HTMLMyComponentElement
    extends Components.MyComponent,
      HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement
    new (): HTMLMyComponentElement
  }
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'mrb-select': HTMLMrbSelectElement
    'mrb-select-option': HTMLMrbSelectOptionElement
    'my-component': HTMLMyComponentElement
  }
}
declare namespace LocalJSX {
  interface AppRoot {}
  interface MrbSelect {
    idOption?: string
    label: string
    onChangeVisibilityOption?: (event: CustomEvent<Visible>) => void
    options?: any[]
  }
  interface MrbSelectOption {
    onClickOption?: (event: CustomEvent<string>) => void
    role?: string
    value?: Value
  }
  interface MyComponent {
    /**
     * The first name
     */
    first?: string
    /**
     * The last name
     */
    last?: string
    /**
     * The middle name
     */
    middle?: string
  }
  interface IntrinsicElements {
    'app-root': AppRoot
    'mrb-select': MrbSelect
    'mrb-select-option': MrbSelectOption
    'my-component': MyComponent
  }
}
export {LocalJSX as JSX}
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>
      'mrb-select': LocalJSX.MrbSelect &
        JSXBase.HTMLAttributes<HTMLMrbSelectElement>
      'mrb-select-option': LocalJSX.MrbSelectOption &
        JSXBase.HTMLAttributes<HTMLMrbSelectOptionElement>
      'my-component': LocalJSX.MyComponent &
        JSXBase.HTMLAttributes<HTMLMyComponentElement>
    }
  }
}
