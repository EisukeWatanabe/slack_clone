<template>
  <div class="p-AutifyChannel">
    <div class="p-AutifyChannel__header">
      <div class="p-AutifyChannel__text"># autify</div>
      <div class="p-AutifyChannel__icon">
        <v-fa icon="chevron-down" />
      </div>
      <p class="p-AutifyChannel__description">
        Autifyの実行結果が通知される部屋
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.p-AutifyChannel {
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
    margin-right: 8px;
  }

  &__icon {
    font-size: 10px;
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  &__description {
    margin: 0;
  }
}
</style>
