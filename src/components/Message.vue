<template>
  <div class="c-Message">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-Message {
  height: calc(100vh - 122px);
  background-color: #1b1d21;
  width: 100%;
  color: white;
}
</style>
