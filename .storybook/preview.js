import {addDecorator} from '@storybook/html'
import {defineCustomElements} from '../dist/esm/loader'
import centered from '@storybook/addon-centered/html'

addDecorator(centered)
defineCustomElements()
