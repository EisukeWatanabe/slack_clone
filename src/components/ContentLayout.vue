<template>
  <div class="l-ContentBody">
    <div class="l-ContentBody__inner">
      <div class="l-ContentMain">
        <div class="l-ContentMain__inner">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped></style>
