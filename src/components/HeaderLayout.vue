<template>
  <header class="c-HeaderLayout">
    <slot />
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped>
.c-HeaderContent {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #04313B;
  height: 24px;
}
</style>
