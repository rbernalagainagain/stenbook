import {addDecorator} from '@storybook/html'
import {defineCustomElements} from '../dist/esm/loader'
import centered from '@storybook/addon-centered/html'
import '!style-loader!css-loader!../src/css/global.scss'

addDecorator(centered)
defineCustomElements()
