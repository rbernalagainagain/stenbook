import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  State,
} from '@stencil/core'

@Component({
  tag: 'mrb-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select implements ComponentInterface {
  @Element() el: HTMLMrbSelectElement

  @State() isExpanded = false

  idOption = 'combobox'
  input!: HTMLInputElement

  // @Listen('clickOption')
  // async onChange({detail}) {
  //   this.value = detail
  //   // this.isShowList()
  // }

  // changeHiddenOptionToVisible() {
  //   if (hasShadowDom(this.el)) {
  //     const container = this.el.shadowRoot.querySelector(
  //       '.options-list',
  //     ) as HTMLElement
  //
  //     if (container) {
  //       this.options.forEach((x) => {
  //         const li = container.ownerDocument!.createElement('mrb-select-option')
  //         console.log(x.name)
  //         li.shadowRoot.textContent = x.name
  //         li.style.display = 'none'
  //         container.appendChild(li)
  //       })
  //     }
  //   }
  // }

  render() {
    return (
      <Host id={`${this.idOption}_${selectId}`}>
        <input
          type="text"
          name={this.idOption}
          ref={(el: HTMLInputElement) => (this.input = el)}
        />
        <div class={{'options-list': true}}></div>
      </Host>
    )
  }

  componentDidLoad() {
    this.input.addEventListener('focus', () => {
      this.el.style.boxShadow = '0 0 10px 0 red'
    })

    this.input.addEventListener('blur', () => {
      this.el.style.boxShadow = 'none'
    })
  }
}

const selectId = 0
