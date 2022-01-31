import Vue from "vue";
import VueRouter from "vue-router";

import DevelopmentChannel from "@/components/page/channels/DevelopmentChannel.vue";
import BizDevChannel from "@/components/page/channels/BizDevChannel.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/channels/20",
      component: DevelopmentChannel,
    },
    {
      path: "/channels/17",
      component: BizDevChannel,
    },
  ],
});

export default router;
