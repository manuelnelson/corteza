import '@/assets/styles.css'
import { ToastPlugin } from '@cortezaproject/corteza-vue-next'

import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Drawer from 'primevue/drawer'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'
import Ripple from 'primevue/ripple'
import Select from 'primevue/select'
import Sidebar from 'primevue/sidebar'
import TieredMenu from 'primevue/tieredmenu'

import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'

import PortalVue from 'portal-vue'

import { getTheme } from '@cortezaproject/corteza-vue-next'

export const UIPlugin = {
  install(app, options = {}) {
    app.use(PrimeVue, {
      theme: {
        preset: getTheme(options.theme),
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
      },
      ripple: true,
    })

    app.directive('ripple', Ripple)

    app.component('Button', Button)
    app.component('Card', Card)
    app.component('Checkbox', Checkbox)
    app.component('InputText', InputText)
    app.component('Select', Select)
    app.component('Menu', Menu)
    app.component('Sidebar', Sidebar)
    app.component('TieredMenu', TieredMenu)
    app.component('IconField', IconField)
    app.component('InputIcon', InputIcon)
    app.component('Avatar', Avatar)
    app.component('Drawer', Drawer)

    app.use(ToastService)
    app.use(DialogService)

    // Other non PrimeVue plugins
    app.use(ToastPlugin)
    app.use(PortalVue)

    // Other non PrimeVue global components
  },
}
