import { createRoot } from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { BrowserRouter } from 'react-router-dom'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';

import App from './App.tsx'
import './tailwind.css'

const manifestUrl = "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

createRoot(document.getElementById('root')!).render(
  <WebAppProvider
    options={{
      smoothButtonsTransition: true,
    }}
  >
    <TonConnectUIProvider manifestUrl={manifestUrl} actionsConfiguration={{
      twaReturnUrl: "https://t.me/orangekit_bot/OrangeShow"
    }}>
      <BrowserRouter basename='/ads-platform/'>
        <App />
      </BrowserRouter>
    </TonConnectUIProvider>
  </WebAppProvider>,
)
