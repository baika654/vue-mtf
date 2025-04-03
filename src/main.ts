import './assets/main.css'
import { stockList } from './components/LONXNames';

import { createApp } from 'vue'
import App from './App.vue'

const data = { stockList: stockList};

createApp(App,data).mount('#app')
