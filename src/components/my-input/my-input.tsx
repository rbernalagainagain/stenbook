import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core'

const isNotEmptyStringOrNull = (value: string) => {
  return value !== '' && value !== undefined && value !== null
}

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  scoped: true,
})
export class IcFloatingLabel {
  @Prop({mutable: true}) value: string
  @Prop({mutable: true}) isValid: boolean
  @Prop() name: string
  @Prop() labelText: string = 'email'
  @Prop() required: boolean = false
  @Prop() disabled: boolean = false
  @Prop() autocomplete: boolean = false
  @Prop() onlyNumbers: boolean = false
  @Prop() maxLength?: number
  @Prop() typeText: string
  @Prop() preventReturn: boolean = true

  @State() isFilled: boolean = isNotEmptyStringOrNull(this.value)
  @State() hasFocus: boolean = false

  @Event() changeValue: EventEmitter<string>
  @Event() focusLost: EventEmitter

  @Element() el: HTMLElement

  private textInput?: HTMLInputElement
  private lastValidValue: string = this.value

  @Watch('value')
  checkIfFilled(newValue: string) {
    if (isNotEmptyStringOrNull(newValue)) {
      this.isFilled = true
    }
  }

  componentDidLoad() {
    this.el.addEventListener('focus', () => {
      setTimeout((_) => {
        this.onFocus()
        this.textInput!.focus()
      }, 0)
    })
    if (this.autocomplete) {
      const input = (this.textInput as unknown) as HTMLInputElement
      input.addEventListener &&
        input.addEventListener('animationstart', (e) => {
          switch (e.animationName) {
            case 'onAutoFillStart':
              this.isFilled = true
              break
            case 'onAutoFillCancel':
              this.isFilled = false
              break
          }
        })
    }
  }

  onInput = (event: Event) => {
    const numbersRegex = /^[0-9\b]+$/
    const value = (event.target as HTMLInputElement).value

    if (this.onlyNumbers) {
      if (value === '' || numbersRegex.test(value)) {
        this.lastValidValue = value
        this.changeValue.emit(value)
      } else {
        this.textInput!.value = this.lastValidValue
      }
    } else {
      this.changeValue.emit(value)
    }
  }

  onBlur = (event: Event) => {
    const value = (event.target as HTMLInputElement).value
    this.isFilled = isNotEmptyStringOrNull(value)
    this.hasFocus = false
    this.focusLost.emit()
  }

  onFocus = () => {
    this.hasFocus = true
  }

  preventEnterKey = (event: KeyboardEvent) => {
    event.key == 'Enter' && this.preventReturn && event.preventDefault()
  }

  render() {
    return (
      <Host tabindex="-1">
        <div class="ic-container">
          {this.required && <ic-icon-required class="ic-required" />}
          <div class="ic-field">
            <div>
              <label
                htmlFor={this.labelText}
                class={{
                  'ic-label-text': true,
                  'ic-label-text-up': this.hasFocus || this.isFilled,
                  // 'ic-label-text-up-focus': true,
                  '--text-error': !this.isValid,
                }}
              >
                {this.labelText}
              </label>
              <input
                id={this.name + '_field'}
                name={this.name}
                class={{
                  'ic-input': true,
                  'ic-error-input': !this.isValid,
                  'ic-input-disabled': this.disabled,
                }}
                type={this.typeText}
                value={this.value}
                maxLength={this.maxLength}
                required={this.required && !this.disabled}
                onFocus={this.onFocus}
                onInput={this.onInput}
                onBlur={this.onBlur}
                onKeyDown={this.preventEnterKey}
                disabled={this.disabled}
                aria-label={this.labelText}
                aria-required={
                  this.required && !this.disabled ? 'true' : 'false'
                }
                aria-invalid={!this.isValid ? 'true' : 'false'}
                aria-disabled={this.disabled ? 'true' : 'false'}
                aria-describedby={'message-' + this.name}
                autocomplete={this.autocomplete ? 'on' : 'off'}
                ref={(el) => (this.textInput = el as HTMLInputElement)}
              />
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
