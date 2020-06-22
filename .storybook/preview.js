import {addDecorator, addParameters} from '@storybook/html'
import {defineCustomElements} from '../dist/esm/loader'
import centered from '@storybook/addon-centered/html'
import '!style-loader!css-loader!../src/css/global.scss'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

defineCustomElements()
addDecorator(centered)
