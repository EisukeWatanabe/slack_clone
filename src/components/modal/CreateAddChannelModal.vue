<template>
  <div class="p-CreateAddChannelModal">
    <div class="p-CreateAddChannelModal__header">
      <div class="p-CreateAddChannelModal__headerTitle">Create a channel</div>
    </div>
    <div class="p-CreateAddChannelModal__content">
      <div class="p-CreateAddChannelModal__description">
        Channels are where your team communicates. They’re best when organized
        around a topic — #marketing, for example.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreateAddChannelModal",
});
</script>

<style lang="scss" scoped>
.p-CreateAddChannelModal {
  height: 518px;
  background-color: #1b1d21;
  border: 1px solid #1e282b;

  &__header {
  }

  &__headerTitle {
    color: #d1d2d3;
    padding: 20px 28px;
    font-size: 28px;
    font-weight: 900;
  }

  &__content {
    padding: 0 28px;
  }

  &__description {
    color: #d1d2d3;
    font-size: 15px;
  }
}
</style>
