import { cartoonFontCss } from '../components/CartoonTheme'

const FONT_STYLE_ID = 'gallery-theme-fonts'
const DOCUMENT_STYLE_ID = 'gallery-document-reset'

export const bindThemeFonts = () => {
  if (typeof document === 'undefined') return
  const css = cartoonFontCss
  const existing = document.getElementById(FONT_STYLE_ID)
  if (existing instanceof HTMLStyleElement) {
    existing.textContent = css
    return
  }
  const style = document.createElement('style')
  style.id = FONT_STYLE_ID
  style.textContent = css
  document.head.append(style)
}

bindThemeFonts()

const documentResetCss = `
  html, body {
    margin: 0;
  }
  body {
    min-height: 100vh;
    overflow-x: hidden;
    background-color: var(--bg-primary);
    background-image: var(--app-bg-image);
    background-size: var(--bg-size);
    color: var(--text-primary);
    font-family: var(--font-ui);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::before, *::after { box-sizing: border-box; }
  @keyframes lightbox-enter {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const bindDocumentStyles = () => {
  if (typeof document === 'undefined') return
  const existing = document.getElementById(DOCUMENT_STYLE_ID)
  if (existing instanceof HTMLStyleElement) {
    existing.textContent = documentResetCss
    return
  }
  const style = document.createElement('style')
  style.id = DOCUMENT_STYLE_ID
  style.textContent = documentResetCss
  document.head.append(style)
}
