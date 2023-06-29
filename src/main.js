import { createApp } from 'vue'
import App from './App.vue'
import BaseInput from "./components/UI/BaseInput.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import store from "./store";

const app = createApp(App);

app.component('BaseInput', BaseInput);
app.component('BaseButton', BaseButton);
app.use(store);
app.mount("#app");
