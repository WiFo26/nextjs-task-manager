import { useState } from "react"
import { ThemeContext, themes } from "./theme-context"

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light)
  
  const toggleThemeHandler = () => {
    setTheme(theme => theme === themes.light ? themes.dark : themes.light)
    // setTheme(themes.dark)
  }
  
  const DEFAULT_VALUE = {
    theme,
    toggleTheme: toggleThemeHandler
  } 
  return <ThemeContext.Provider value={DEFAULT_VALUE}>
    {children}
  </ThemeContext.Provider>
}