<template>
  <div class="c-BodyPage">
    <slot />
    <message-input class="c-BodyPage__messageInput" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MessageInput from "@/components/MessageInput.vue"

export default Vue.extend({
  components: {MessageInput},
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-BodyPage {
  background-color: #262626;
  width: 100%;

  &__messageInput {
  }
}
</style>
