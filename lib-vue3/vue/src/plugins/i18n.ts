import { App } from 'vue'
import { createI18n } from 'vue-i18n'

interface Options {
  appName: string
  locale: string
  api: any
}

export const I18nPlugin = {
  async install(app: App, options: Options) {
    try {
      const messages = await options.api.localeGet({
        lang: options.locale,
        application: options.appName,
      })

      app.use(
        createI18n({
          legacy: false, // Composition API
          locale: options.locale,
          fallbackLocale: 'en',
          messages,
        }),
      )
    } catch (error) {
      console.error('Failed to load translations:', error)
    }
  },
}
