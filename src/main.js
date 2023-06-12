import { createApp } from 'vue'
import App from './App.vue'
import ClickOutside from 'v-click-outside';
import BaseInput from "./components/BaseInput.vue";
import BaseButton from "./components/BaseButton.vue";

const app = createApp(App);

app.component('BaseInput', BaseInput);
app.component('BaseButton', BaseButton);
app.use(ClickOutside);
app.mount("#app");
