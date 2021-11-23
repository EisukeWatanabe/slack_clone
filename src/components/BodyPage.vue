<template>
  <div class="c-BodyPage">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped>
.c-BodyPage {
  height: calc(100vh - 100px);
  background-color: #42b983;
}
</style>
