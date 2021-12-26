<template>
  <div class="c-BodyPage">
    <div class="c-BodyPage__viewBody">
      <slot />
    </div>
    <div class="c-BodyPage__viewFooter">
      <message-input class="c-BodyPage__messageInput" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MessageInput from "@/components/MessageInput.vue";

export default Vue.extend({
  components: { MessageInput },
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-BodyPage {
  background-color: #262626;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: calc(100vh - 40px);
  background-size: cover;
  position: relative;

  &__viewBody {
    flex: 1;
  }

  &__viewFooter {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #262626;
    position: absolute;
    bottom: 20px;
  }
}
</style>
