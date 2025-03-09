import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { VAlert, VApp, VAppBar, VAutocomplete, VAvatar, VBadge, VBanner, VBottomNavigation, VBottomSheet, VBreadcrumbs, VBtn, VCard, VCarousel, VCheckbox, VChip, VCol, VColorPicker, VCombobox, VContainer, VDatePicker, VDialog, VDivider, VExpansionPanel, VExpansionPanels, VFileInput, VFooter, VForm, VHover, VImg, VInput, VLayout, VList, VListItem, VMain, VMenu, VNavigationDrawer, VProgressCircular, VProgressLinear, VRadio, VRating, VRow, VSelect, VSheet, VSlider, VSnackbar, VSpacer, VSpeedDial, VStepper, VSwitch, VSystemBar, VTab, VTabs, VTextarea, VTextField, VTimeline, VTimelineItem, VToolbar, VTooltip, VVirtualScroll } from 'vuetify/components'
import { Ripple } from 'vuetify/directives'
import { VCalendar, VTimePicker } from 'vuetify/labs/components'
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify(
    {
      // components: {
      //   VLayout,
      //   VApp,
      //   VAppBar,
      //   VMain,
      //   VContainer,
      //   VRow,
      //   VCol,
      //   VSpacer,
      //   VFooter,
      //   VSheet,
      //   // Navigasi
      //   VNavigationDrawer,
      //   VList,
      //   VListItem,

      //   VTabs,
      //   VTab,

      //   VToolbar,
      //   VBreadcrumbs,
      //   VBottomNavigation,
      //   VBottomSheet,
      //   VMenu,
      //   // Data Display
      //   VAlert,
      //   VAvatar,
      //   VBadge,
      //   VBanner,
      //   VCard,
      //   VCarousel,
      //   VChip,
      //   VExpansionPanel,
      //   VExpansionPanels,
      //   VImg,
      //   VTimeline,
      //   VTimelineItem,
      //   VCalendar,
      //   // Form & Input
      //   VForm,
      //   VTextField,
      //   VTextarea,
      //   VSelect,
      //   VAutocomplete,
      //   VCombobox,
      //   VCheckbox,
      //   VRadio,
      //   VSwitch,
      //   VSlider,
      //   VFileInput,
      //   VDatePicker,
      //   VTimePicker,
      //   VColorPicker,
      //   VInput,
      //   // Feedback & Indikator
      //   VProgressCircular,
      //   VProgressLinear,
      //   VSnackbar,
      //   VDialog,
      //   VTooltip,
      //   VRating,
      //   // Lainnya
      //   VHover,
      //   VDivider,
      //   VSpeedDial,
      //   VStepper,
      //   VVirtualScroll,
      //   VSystemBar,
      // },
    //   theme : {
    //     themes:{
    //       customTheme: {
    //         dark: true,
    //         colors: {
    //           // Daftar warna yang digunakan saja
    //           primary: '#1976D2',    // Warna utama
    //           secondary: '#424242',  // Warna sekunder
    //           accent: '#82B1FF',     // Warna aksen
    //           error: '#FF5252',      // Warna error
    //           info: '#2196F3',       // Warna informasi
    //           success: '#4CAF50',    // Warna sukses
    //           warning: '#FFC107',    // Warna peringatan
    //         },
    //       },
    //     }
    //   },
    //   directives: {
    //     Ripple,
    //   },
    // }
    }
  )
  nuxtApp.vueApp.use(vuetify)
})