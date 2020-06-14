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
import {Value} from '../../../types/value'

@Component({
  tag: 'mrb-option',
  styles: ':host { display: block; }',
  shadow: true,
})
export class Option implements ComponentInterface {
  @Element() el!: HTMLOptionElement

  @Prop() value?: Value
  @Event() clickOption: EventEmitter<string>

  @Listen('click')
  clickOptionHandler() {
    this.clickOption.emit(this.value || this.el.textContent)
  }

  render() {
    return <Host />
  }
}
