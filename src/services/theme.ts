const theme = (() => {
  if (typeof window.localStorage !== 'undefined' && window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
})()
if (theme === 'light') {
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}
window.localStorage.setItem('theme', theme || 'light')
