<template>
  <div id="app">
    <content-layout>
      <header-layout>
        <header-content></header-content>
      </header-layout>
      <body-page></body-page>
    </content-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentLayout from "@/components/ContentLayout.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import HeaderLayout from "@/components/HeaderLayout.vue";
import BodyPage from "@/components/BodyPage.vue";

export default Vue.extend({
  components: {
    ContentLayout,
    HeaderLayout,
    HeaderContent,
    BodyPage,
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
</style>
