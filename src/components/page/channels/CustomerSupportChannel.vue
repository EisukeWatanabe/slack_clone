<template>
  <div class="p-CustomerSupport">
    <div class="p-CustomerSupport__header">
      <div class="p-CustomerSupport__text"># customer-support</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.p-CustomerSupport {
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
