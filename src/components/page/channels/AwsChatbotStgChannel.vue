<template>
  <div class="p-AwsChatBotStgChannel">
    <div class="p-AwsChatBotStgChannel__header">
      <div class="p-AwsChatBotStgChannel__text"># aws-chat-bot-stg</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.p-AwsChatBotStgChannel {
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
