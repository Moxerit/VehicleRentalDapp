import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'

import { ColorModeScript } from '@chakra-ui/react'
import { BlockchainProvider } from './context/BlockchainContext'
import { ChakraProvider } from '@chakra-ui/react'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BlockchainProvider>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
    </ChakraProvider>
  </BlockchainProvider>
)
