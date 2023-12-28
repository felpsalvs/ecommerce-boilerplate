"use client"

import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
