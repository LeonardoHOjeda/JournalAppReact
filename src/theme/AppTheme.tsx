import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from '.'
import { ReactNode } from 'react'

export const AppTheme = ({ children }: { children: ReactNode}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
