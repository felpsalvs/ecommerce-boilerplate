import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
