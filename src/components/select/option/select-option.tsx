import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core'

export type Value = string | number

@Component({
  tag: 'mrb-select-option',
  styleUrl: 'select-option.scss',
  scoped: true,
})
export class SelectOptionComponent implements ComponentInterface {
  @Element() el!: HTMLElement

  @Prop() value?: Value
  @Prop({ reflect: true }) role: string = 'option'

  @Event({ bubbles: true }) clickOption: EventEmitter<Value>

  @Listen('click')
  clickOptionHandler() {
    this.value = this.value || this.el.textContent
    this.clickOption.emit(this.value)
  }

  @Listen('changeVisibilityOption', { target: 'parent' })
  changeVisibilityOptionHandler({ detail }: MouseEvent) {
    detail ? (this.el.style.display = 'flex') : (this.el.style.display = 'none')
  }

  render() {
    return <Host></Host>
  }
}
