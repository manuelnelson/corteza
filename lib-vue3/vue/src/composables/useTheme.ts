import { definePreset, palette, shade, tint, usePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

type Theme = 'light' | 'dark'

interface CortezaThemeVariables {
  primary: string
  secondary: string
  success: string
  warning: string
  danger: string
  'body-bg': string
  'topbar-bg': string
  'sidebar-bg': string
}

const defaultVariables: {
  light: CortezaThemeVariables
  dark: CortezaThemeVariables
} = {
  light: {
    primary: '#FF9661',
    secondary: '#64748B',
    success: '#43AA8B',
    warning: '#E27646',
    danger: '#E54122',
    'body-bg': '#F3F5F7',
    'topbar-bg': '#F3F5F7',
    'sidebar-bg': '#FFFFFF',
  },
  dark: {
    primary: '#FF9661',
    secondary: '#6B7280',
    success: '#43AA8B',
    warning: '#E27646',
    danger: '#E54122',
    'body-bg': '#030712',
    'topbar-bg': '#030712',
    'sidebar-bg': '#111827',
  },
}

let themes: Record<string, any> = {}

export function setThemes(tt: Record<string, any>) {
  themes = tt
}

export function getTheme(theme: Theme) {
  const variables = getThemeVariables(theme)

  document.documentElement.classList.toggle('dark-theme', theme === 'dark')

  return definePreset(Aura, {
    primitive: {
      green: palette(variables['success']),
      red: palette(variables['danger']),
      orange: palette(variables['warning']),
    },
    semantic: {
      primary: palette(variables['primary']),
      colorScheme: {
        light: {
          surface: getSurfacePallete(variables['secondary']),
        },
        dark: {
          surface: getSurfacePallete(variables['secondary']),
        },
      },
    },
    components: {
      drawer: {
        root: {
          borderColor: '#ffffff00',
        },
      },
    },
    css: () => `
      :root {
        --topbar-height: 64px;
        --topbar-bg: ${variables['topbar-bg']};
        --sidebar-width: 320px;
        --sidebar-bg: ${variables['sidebar-bg']};
        --body-bg: ${variables['body-bg']};
        --p-drawer-border-color: #ffffff00;
      }

      body {
        background-color: var(--body-bg);
      }

      .body-bg {
        background-color: var(--body-bg);
      }

      .topbar-bg {
        background-color: var(--topbar-bg);
      }

      .sidebar-bg {
        background-color: var(--sidebar-bg);
      }
    `,
  })
}

export function useTheme(theme: Theme) {
  usePreset(getTheme(theme))
}

export function getThemeVariables(theme: Theme) {
  const studioTheme = themes.find((t: any) => t.id === theme)

  return {
    ...defaultVariables[theme],
    // ...(studioTheme ? JSON.parse(studioTheme.values) : {}),
  }
}

function getSurfacePallete(color: string) {
  return {
    0: tint(color, 95),
    50: tint(color, 90),
    100: tint(color, 80),
    200: tint(color, 70),
    300: tint(color, 50),
    400: tint(color, 20),
    500: color,
    600: shade(color, 20),
    700: shade(color, 40),
    800: shade(color, 50),
    900: shade(color, 70),
    950: shade(color, 90),
  }
}
