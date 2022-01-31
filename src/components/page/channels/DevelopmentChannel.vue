<template>
  <div class="p-DevelopmentChannel">
    <div class="p-DevelopmentChannel__header">
      <div class="p-DevelopmentChannel__text"># development</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DevelopmentChannel",
};
</script>

<style lang="scss" scoped>
.p-DevelopmentChannel {
  &__header {
    height: 48px;
    margin-left: 16px;
    padding: 16px;
    display: flex;
  }

  &__text {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
