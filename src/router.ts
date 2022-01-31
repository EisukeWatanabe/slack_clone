import Vue from "vue";
import VueRouter from "vue-router";

import DevelopmentChannel from "@/components/page/channels/DevelopmentChannel.vue";
import BizDevChannel from "@/components/page/channels/BizDevChannel.vue";
import AutifyChannel from "@/components/page/channels/AutifyChannel.vue";
import AwsChatbotStgChannel from "@/components/page/channels/AwsChatbotStgChannel.vue";
import CompetitorsChannel from "@/components/page/channels/CompetitorsChannel.vue";
import CustomerSupportChannel from "@/components/page/channels/CustomerSupportChannel.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/channels/15",
      component: AutifyChannel,
    },
    {
      path: "/channels/16",
      component: AwsChatbotStgChannel,
    },
    {
      path: "/channels/17",
      component: BizDevChannel,
    },
    {
      path: "/channels/18",
      component: CompetitorsChannel,
    },
    {
      path: "/channels/19",
      component: CustomerSupportChannel,
    },
    {
      path: "/channels/20",
      component: DevelopmentChannel,
    },
  ],
});

export default router;
