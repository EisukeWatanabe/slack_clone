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
    padding: 14px 16px 14px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #36373b;
  }

  &__text {
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    display: flex;
    align-items: center;
  }
}
</style>
