import './assets/main.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(autoAnimatePlugin);
app.use(VueQueryPlugin);

app.mount('#app');
