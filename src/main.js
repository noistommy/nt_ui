import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/style/vendor/font-awesome-6.1.1.scss'
// import '@/assets/fonts/typography.scss'
// import '@/assets/style/index.scss'

import '@/assets/css/ga_ui.min.css'

// GaTeleport need 'mill' modules
import GabiaUi from '@/packages'
import GaModal from '@/packages/GaTeleport'
import GaTooltip from '@/packages/GaTooltip'
import GaToast from '@/packages/GaToast'

const app = createApp(App)

app.use(GabiaUi)
app.use(GaModal, {
  useStack: true,
  clickToClose: true,
  escapeToClose: true
})

app.use(GaTooltip)
app.use(GaToast)

app.use(store).use(router).mount('#app')
