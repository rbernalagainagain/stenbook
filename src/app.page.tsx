import {Component, ComponentInterface, h, Element} from '@stencil/core'
import {getSolarSystem, Planet} from './utils/utils'

@Component({tag: 'app-root', styleUrl: 'app.page.scss', shadow: true})
export class AppPage implements ComponentInterface {
  @Element() el: HTMLElement

  options!: Planet[]

  async componentWillLoad() {
    this.options = await getSolarSystem()
  }

  render() {
    return <mrb-select label={'solar system'} options={this.options} />
  }
}
