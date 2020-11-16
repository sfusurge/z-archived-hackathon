const toggleTheme = () => {
  if (document.documentElement.getAttribute('data-theme') !== 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.theme = "dark"
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.theme = "light"
  }
}

export default toggleTheme
