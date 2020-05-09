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
  State,
} from '@stencil/core'
import { hasShadowDom } from '../../utils/utils'

export type Visible = boolean

@Component({
  tag: 'mrb-select',
  styleUrl: 'select.scss',
  scoped: true,
})
export class SelectComponent implements ComponentInterface {
  @Element() el: HTMLElement

  @Prop() label!: string
  @Prop() name: string = 'hola'
  @Prop() options: any[]
  @Prop({ attribute: 'id' }) idOption?: string = 'combobox'

  @State() value: string
  @State() icon: string = 'caret-down-outline'
  @State() isExpanded: boolean = false

  @Event() changeVisibilityOption: EventEmitter<Visible>

  input!: HTMLInputElement
  optionsValues: any[]

  @Listen('clickOption')
  async onChange({ detail }) {
    this.value = detail
    this.isShowList()
  }

  // @Watch('value')
  // hasMatchOption() {
  //   this.optionsValues.forEach((x) => {
  //     if (!x.textContent.toLowerCase().includes(this.value.toLowerCase())) {
  //       x.style.display = 'none'
  //     } else {
  //       this.icon = 'caret-up-outline'
  //       x.style.display = 'flex'
  //       this.isExpanded = true
  //     }
  //   })
  // }

  componentWillLoad(): Promise<void> | void {
    console.log('Padre, con el empezó todo')
  }

  componentDidLoad() {
    this.optionsValues = Array.from(
      this.el.shadowRoot.querySelectorAll('mrb-select-option')
    )
    console.log(this.optionsValues)
    if (hasShadowDom(this.el)) console.log('Padre, con el terminó todo')
  }

  render() {
    console.count()

    return (
      <Host>
        <div class={{ combobox: true }} role="combobox">
          <label>{this.label}</label>
          <input
            type="text"
            id={this.idOption}
            value={this.value}
            ref={(el: HTMLInputElement) => (this.input = el)}
            onInput={() => (this.value = this.input.value)}
          />
          <ion-icon
            class="icon"
            name={this.icon}
            onClick={this.isShowList.bind(this)}
          />
        </div>
        <div class={{ 'options-list': true, 'is-expanded': this.isExpanded }}>
          {
            // this.isExpanded &&
            this.options.map((option) => (
              <mrb-select-option>{option.name}</mrb-select-option>
            ))
          }
        </div>
      </Host>
    )
  }

  private isShowList(): void {
    if (!this.isExpanded) {
      this.openList()
    } else {
      this.closeList()
    }
    this.isExpanded = !this.isExpanded
  }

  private closeList(): void {
    this.icon = 'caret-down-outline'
  }

  private openList(): void {
    this.icon = 'caret-up-outline'
  }
}
