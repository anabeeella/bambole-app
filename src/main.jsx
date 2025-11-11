import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import colors from './theme/colors'
import fonts from './theme/fonts'
import Button from './theme/components/button'
import Input from './theme/components/input'
import Modal from './theme/components/modal'
import '@fontsource/bricolage-grotesque/400.css'
import '@fontsource/bricolage-grotesque/700.css'

import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
    Input,
    Modal,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
