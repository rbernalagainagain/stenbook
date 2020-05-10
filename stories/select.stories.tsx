import '../www/build/stenbook.css'
import {text} from '@storybook/addon-knobs'

export default {
  title: 'Select',
}

export const SelectComponent = () => {
  const firstName = text('Label', 'Solar System')

  return `<mrb-select label="${firstName}"></mrb-select>`
}
