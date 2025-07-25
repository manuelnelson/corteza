// No CSS imports - client's Tailwind handles all styling

// Export Vue plugins
export { default as AuthPlugin } from './plugins/auth'
export {
  AutomationAPIPlugin,
  ComposeAPIPlugin,
  FederationAPIPlugin,
  SystemAPIPlugin,
} from './plugins/corteza-api'
export { I18nPlugin } from './plugins/i18n'
export { SettingsPlugin } from './plugins/settings'
export { ToastPlugin } from './plugins/toast'

// Export utility composables
export { getTheme, setThemes, useTheme } from './composables/useTheme'

// Export components
export * as components from './components'
