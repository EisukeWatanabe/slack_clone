import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(fas);
library.add(far);

Vue.component("v-fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
