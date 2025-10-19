
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)

interface _GlobalComponents {
      'UIBaseCard': typeof import("../../app/components/UI/BaseCard.vue")['default']
    'UIBasePagination': typeof import("../../app/components/UI/BasePagination.vue")['default']
    'UIDarkMode': typeof import("../../app/components/UI/DarkMode.vue")['default']
    'UILangSwitch': typeof import("../../app/components/UI/LangSwitch.vue")['default']
    'DashboardDeleteDialog': typeof import("../../app/components/dashboard/deleteDialog.vue")['default']
    'DashboardNavBar': typeof import("../../app/components/dashboard/navBar.vue")['default']
    'DashboardNotification': typeof import("../../app/components/dashboard/notification.vue")['default']
    'DashboardSideBar': typeof import("../../app/components/dashboard/sideBar.vue")['default']
    'DashboardVeiwDialog': typeof import("../../app/components/dashboard/veiwDialog.vue")['default']
    'HomePageLoginCard': typeof import("../../app/components/homePage/loginCard.vue")['default']
    'HomePageSideSection': typeof import("../../app/components/homePage/sideSection.vue")['default']
    'UAccordion': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
    'UAlert': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
    'UApp': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
    'UAvatar': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
    'UAvatarGroup': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
    'UBadge': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
    'UBreadcrumb': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
    'UButton': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
    'UButtonGroup': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
    'UCalendar': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']
    'UCard': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
    'UCarousel': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
    'UCheckbox': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
    'UCheckboxGroup': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']
    'UChip': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
    'UCollapsible': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
    'UColorPicker': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']
    'UCommandPalette': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
    'UContainer': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
    'UContextMenu': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
    'UContextMenuContent': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
    'UDrawer': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
    'UDropdownMenu': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
    'UDropdownMenuContent': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
    'UFileUpload': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue")['default']
    'UForm': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
    'UFormField': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
    'UIcon': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
    'UInput': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
    'UInputMenu': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
    'UInputNumber': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
    'UInputTags': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']
    'UKbd': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
    'ULink': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
    'ULinkBase': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
    'UModal': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
    'UNavigationMenu': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
    'UOverlayProvider': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']
    'UPagination': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
    'UPinInput': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
    'UPopover': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
    'UProgress': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
    'URadioGroup': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
    'USelect': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
    'USelectMenu': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
    'USeparator': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
    'USkeleton': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
    'USlideover': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
    'USlider': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
    'UStepper': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']
    'USwitch': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
    'UTable': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
    'UTabs': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
    'UTextarea': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
    'UTimeline': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']
    'UToast': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
    'UToaster': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
    'UTooltip': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
    'UTree': typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'Icon': typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtLinkLocale': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyUIBaseCard': LazyComponent<typeof import("../../app/components/UI/BaseCard.vue")['default']>
    'LazyUIBasePagination': LazyComponent<typeof import("../../app/components/UI/BasePagination.vue")['default']>
    'LazyUIDarkMode': LazyComponent<typeof import("../../app/components/UI/DarkMode.vue")['default']>
    'LazyUILangSwitch': LazyComponent<typeof import("../../app/components/UI/LangSwitch.vue")['default']>
    'LazyDashboardDeleteDialog': LazyComponent<typeof import("../../app/components/dashboard/deleteDialog.vue")['default']>
    'LazyDashboardNavBar': LazyComponent<typeof import("../../app/components/dashboard/navBar.vue")['default']>
    'LazyDashboardNotification': LazyComponent<typeof import("../../app/components/dashboard/notification.vue")['default']>
    'LazyDashboardSideBar': LazyComponent<typeof import("../../app/components/dashboard/sideBar.vue")['default']>
    'LazyDashboardVeiwDialog': LazyComponent<typeof import("../../app/components/dashboard/veiwDialog.vue")['default']>
    'LazyHomePageLoginCard': LazyComponent<typeof import("../../app/components/homePage/loginCard.vue")['default']>
    'LazyHomePageSideSection': LazyComponent<typeof import("../../app/components/homePage/sideSection.vue")['default']>
    'LazyUAccordion': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']>
    'LazyUAlert': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']>
    'LazyUApp': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']>
    'LazyUAvatar': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']>
    'LazyUAvatarGroup': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']>
    'LazyUBadge': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']>
    'LazyUBreadcrumb': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']>
    'LazyUButton': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']>
    'LazyUButtonGroup': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']>
    'LazyUCalendar': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Calendar.vue")['default']>
    'LazyUCard': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']>
    'LazyUCarousel': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']>
    'LazyUCheckbox': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']>
    'LazyUCheckboxGroup': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CheckboxGroup.vue")['default']>
    'LazyUChip': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']>
    'LazyUCollapsible': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']>
    'LazyUColorPicker': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ColorPicker.vue")['default']>
    'LazyUCommandPalette': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']>
    'LazyUContainer': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']>
    'LazyUContextMenu': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']>
    'LazyUContextMenuContent': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']>
    'LazyUDrawer': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']>
    'LazyUDropdownMenu': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']>
    'LazyUDropdownMenuContent': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']>
    'LazyUFileUpload': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue")['default']>
    'LazyUForm': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']>
    'LazyUFormField': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']>
    'LazyUIcon': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']>
    'LazyUInput': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']>
    'LazyUInputMenu': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']>
    'LazyUInputNumber': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']>
    'LazyUInputTags': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue")['default']>
    'LazyUKbd': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']>
    'LazyULink': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']>
    'LazyULinkBase': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']>
    'LazyUModal': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']>
    'LazyUNavigationMenu': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']>
    'LazyUOverlayProvider': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue")['default']>
    'LazyUPagination': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']>
    'LazyUPinInput': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']>
    'LazyUPopover': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']>
    'LazyUProgress': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']>
    'LazyURadioGroup': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']>
    'LazyUSelect': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']>
    'LazyUSelectMenu': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']>
    'LazyUSeparator': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']>
    'LazyUSkeleton': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']>
    'LazyUSlideover': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']>
    'LazyUSlider': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']>
    'LazyUStepper': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue")['default']>
    'LazyUSwitch': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']>
    'LazyUTable': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']>
    'LazyUTabs': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']>
    'LazyUTextarea': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']>
    'LazyUTimeline': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue")['default']>
    'LazyUToast': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']>
    'LazyUToaster': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']>
    'LazyUTooltip': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']>
    'LazyUTree': LazyComponent<typeof import("../../node_modules/@nuxt/ui/dist/runtime/components/Tree.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
