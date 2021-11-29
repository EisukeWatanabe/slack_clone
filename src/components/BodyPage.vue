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
  height: calc(100vh - 40px);
  background-color: gold;
  width: 100%;
}
</style>
