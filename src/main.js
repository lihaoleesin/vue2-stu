import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import less from "less";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(less);
Vue.use(antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
