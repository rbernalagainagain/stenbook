import { Component, ComponentInterface, h } from '@stencil/core'
import { getSolarSystem, Planet } from './utils/utils'

@Component({ tag: 'app-root', styleUrl: 'app.page.scss', shadow: true })
export class AppPage implements ComponentInterface {
  options!: Planet[]

  async componentWillLoad() {
    this.options = await getSolarSystem()
  }

  render() {
    return [
      <mrb-select label={'planets'}>
        {this.options.map((x) => (
          <mrb-select-option
            onClickOption={(ev) => {
              console.log(ev)
            }}
          >
            {x.name}
          </mrb-select-option>
        ))}
      </mrb-select>,
    ]
  }
}
