<template>
  <div class="h-screen flex flex-col">
    <header>
      <CTopbar
        :settings="$Settings.get('ui.topbar', {})"
        :labels="{
          appMenu: $t('navigation.appMenu'),
          helpForum: $t('navigation.help.forum'),
          helpDocumentation: $t('navigation.help.documentation'),
          helpFeedback: $t('navigation.help.feedback'),
          helpVersion: $t('navigation.help.version'),
          userSettingsLoggedInAs: $t('navigation.userSettings.loggedInAs', { user }),
          userSettingsProfile: $t('navigation.userSettings.profile'),
          userSettingsChangePassword: $t('navigation.userSettings.changePassword'),
          userSettingsLogout: $t('navigation.userSettings.logout'),
          userSettingsTheme: $t('navigation.userSettings.theme'),
          lightTheme: $t('navigation.themes.labels.light'),
          darkTheme: $t('navigation.themes.labels.dark'),
        }"
        :hide-app-selector="true"
      />
    </header>

    <main class="flex-1 overflow-hidden">
      <RouterView />
    </main>

    <Toast
      :pt="{
        root: {
          style: {
            top: 'var(--topbar-height)',
          },
        },
        messageIcon: {
          style: {
            display: 'none',
          },
        },
      }"
    />
  </div>
</template>

<script setup>
import { components } from '@cortezaproject/corteza-vue-next'
import Toast from 'primevue/toast'
import { computed, inject, ref } from 'vue'
import { RouterView } from 'vue-router'
const { CTopbar } = components

const $Auth = inject('$Auth')
const user = computed(() => $Auth.user.name || $Auth.user.email)
</script>
