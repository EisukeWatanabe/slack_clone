<template>
  <div class="p-BizDevChannel">
    <div class="p-BizDevChannel__header">
      <div class="p-BizDevChannel__text"># biz-dev</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.p-BizDevChannel {
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
