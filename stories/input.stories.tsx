import {text} from '@storybook/addon-knobs'
import {withA11y} from '@storybook/addon-a11y'

export default {
  title: 'my-input',
  component: 'my-input',
  decorators: [withA11y],
}

export const Input = () => {
  const label = text('Label', 'Products')
  return `<my-input label-text=${label}  />`
}
