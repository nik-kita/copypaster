import './assets/main.css'
//
import { createApp } from 'vue'
import App from './App.vue'
import { formkit } from './plugins/formkit.plugin'

const app = createApp(App)
app.use(formkit.plugin, formkit.config)
app.mount('#app')
