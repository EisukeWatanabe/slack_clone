<template>
  <div id="app" class="p-App">
    <content-layout>
      <header-layout>
        <header-content></header-content>
      </header-layout>
      <div class="p-App__mainPage">
        <splitpanes class="default-theme" style="height: 100%">
          <pane size="35">
            <menu-sidebar />
          </pane>
          <pane min-size="65">
            <body-page>
              <message />
            </body-page>
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
import Message from "@/components/Message.vue";

export default Vue.extend({
  components: {
    ContentLayout,
    HeaderLayout,
    HeaderContent,
    BodyPage,
    MenuSidebar,
    Splitpanes,
    Pane,
    Message,
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

  .splitpanes--vertical > .splitpanes__splitter {
    width: 4px;
    opacity: 1;
    background-color: #262626;
    border: #01242e;

    &:hover {
      background-color: deepskyblue;
    }
  }
}
</style>
