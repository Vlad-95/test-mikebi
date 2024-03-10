import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

// Bootsrap
import { createBootstrap } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

// Pinia
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(createBootstrap({ components: true, directives: true }))
  .mount('#app');
