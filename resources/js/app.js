import { createApp } from 'vue';
import router from './router.js';
import App from './layouts/App.vue';

// const app = createApp(App);
// app.mount('#example');

createApp(App)
    .use(router)
    .mount("#example")