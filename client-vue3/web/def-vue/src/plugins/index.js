import {
  AuthPlugin,
  AutomationAPIPlugin,
  ComposeAPIPlugin,
  I18nPlugin,
  SettingsPlugin,
  SystemAPIPlugin,
  setThemes,
} from '@cortezaproject/corteza-vue-next'
import { createPinia } from 'pinia'
import router from '../router'
import { UIPlugin } from './components'

export function setupAndAuthenticate(app) {
  app.use(AuthPlugin, { app: 'one', rootApp: true })

  const $Auth = app.config.globalProperties.$Auth

  return $Auth
    .handle()
    .then(async () => {
      app.use(SystemAPIPlugin)
      app.use(ComposeAPIPlugin)
      app.use(AutomationAPIPlugin)

      app.use(SettingsPlugin, {
        api: app.config.globalProperties.$SystemAPI,
      })

      app.use(createPinia())
      app.use(router)

      app.use(I18nPlugin, {
        appName: 'corteza-webapp-one',
        locale: $Auth.user.meta.preferredLanguage,
        api: app.config.globalProperties.$SystemAPI,
      })

      const $Settings = app.config.globalProperties.$Settings

      return $Settings.init().then(() => {
        setThemes($Settings.get('ui.studio.themes'))
        app.use(UIPlugin, { theme: $Auth.user.meta.theme })
      })
    })
    .catch(err => {
      if (err instanceof Error && err.message === 'Unauthenticated') {
        $Auth.startAuthenticationFlow()
        return
      }
      throw err
    })
}
