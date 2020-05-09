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
import { Value } from '../../../types/value'

@Component({
  tag: 'mrb-select-option',
  styleUrl: 'select-option.scss',
  shadow: true,
})
export class SelectOptionComponent implements ComponentInterface {
  @Element() el!: HTMLElement

  @Prop() value?: Value
  @Prop({ reflect: true }) role: string = 'option'

  @Event() clickOption: EventEmitter<string>

  @Listen('click')
  clickOptionHandler() {
    this.clickOption.emit(this.value || this.el.textContent)
  }

  render() {
    return <Host></Host>
  }
}
