import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core'

export type TextFieldTypes =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'time'

@Component({
  tag: 'imm-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input implements ComponentInterface {
  private nativeInput?: HTMLInputElement
  private inputId = `imm-input-${inputIds++}`
  private tabindex?: string | number

  @Element() el: HTMLInputElement
  @Prop() color?: string
  @Prop() placeholder: string
  @Prop() readonly = false
  @Prop() disabled = false
  @Prop() type: TextFieldTypes = 'text'

  componentWillLoad() {
    this.getTabindex()
  }

  render() {
    return (
      <Host>
        <input
          type={this.type}
          tabindex={this.tabindex}
          placeholder={this.placeholder}
          ref={(el: HTMLInputElement) => (this.nativeInput = el)}
          name={this.inputId}
          readonly={this.readonly}
          disabled={this.disabled}
        />
      </Host>
    )
  }

  private getTabindex() {
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex')
      this.tabindex = tabindex !== null ? tabindex : undefined
      this.el.removeAttribute('tabindex')
    }
  }

  componentDidLoad() {
    this.nativeInput.addEventListener('focus', () => {
      this.el.style.boxShadow = '0 0 10px 0 red'
    })

    this.nativeInput.addEventListener('blur', () => {
      this.el.style.boxShadow = 'none'
    })
  }
}

let inputIds = 0
