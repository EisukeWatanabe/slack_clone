<template>
  <div id="app" class="p-App">
    <content-layout>
      <header-layout>
        <header-content></header-content>
      </header-layout>
      <div class="p-App__mainPage">
        <splitpanes class="default-theme p-App__splitpanes">
          <pane>
            <menu-sidebar />
          </pane>
          <pane>
            <body-page />
          </pane>
        </splitpanes>
      </div>
    </content-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentLayout from "@/components/ContentLayout.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import HeaderLayout from "@/components/HeaderLayout.vue";
import BodyPage from "@/components/BodyPage.vue";
import MenuSidebar from "@/components/MenuSidebar.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default Vue.extend({
  components: {
    ContentLayout,
    HeaderLayout,
    HeaderContent,
    BodyPage,
    MenuSidebar,
    Splitpanes,
    Pane
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

body {
  margin: 0;
}

.p-App {

  &__mainPage {
    display: flex;
  }

  &__splitpanes {
    height: calc(100vh - 40px);
  }
}
</style>
