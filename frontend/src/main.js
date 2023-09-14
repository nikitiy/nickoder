import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import ui_components from "@/components/UI";
import "@/assets/styles/style.scss";


const app = createApp(App)

ui_components.forEach(component => {
    app.component(component.name, component)
});

app.config.globalProperties.$filters = {
  linebreaksbr(value) {
      return value.replace(/\n/g, '<br/>');
  },
}

app
    .use(store)
    .mount('#wrapper')

import "@/animations"


