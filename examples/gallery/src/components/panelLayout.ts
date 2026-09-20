export const settingsPanelWidth = '380px'
export const filterPanelWidth = '300px'
export const detailsPanelWidth = '300px'

export const panelMotionDuration = '0.3s'
export const panelMotionEasing = 'cubic-bezier(0.4, 0, 0.2, 1)'
export const panelMotion = `${panelMotionDuration} ${panelMotionEasing}`
export const panelMotionTransition = import.meta.env.TEST ? 'none' : panelMotion

export const openAppPanelInset = (
  settingsOpen: boolean,
  filtersOpen: boolean,
) => {
  if (settingsOpen) return settingsPanelWidth
  if (filtersOpen) return filterPanelWidth
  return '0px'
}

export const packChromeEndInset = (pack: string) =>
  pack === 'glass' ? '12px' : '0px'

export const shellEndInset = (
  settingsOpen: boolean,
  filtersOpen: boolean,
  chromeInset: string,
) => {
  const panel = openAppPanelInset(settingsOpen, filtersOpen)
  if (panel === '0px') return chromeInset
  if (chromeInset === '0px') return panel
  return `calc(${chromeInset} + ${panel})`
}
