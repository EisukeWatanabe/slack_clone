<template>
  <div class="c-MessageList">
    <div class="c-MessageList__wrapperIcon">
      <img class="c-MessageList__icon" :src="loadImg()" alt="" role="img" />
    </div>
    <div>
      <div class="c-MessageList__header">
        {{ senderName
        }}<span class="c-MessageList__timeLog">{{ timeLog }}</span>
      </div>
      <div class="c-MessageList__text">{{ messageText }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MessageList",
  props: {
    iconImage: { type: String, required: true },
    senderName: { type: String, required: true },
    timeLog: { type: String, required: true },
    messageText: { type: String, default: "" },
  },
  methods: {
    loadImg() {
      return require(`../assets/${this.iconImage}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.c-MessageList {
  display: flex;
  padding: 8px 20px;
  position: relative;
  &:hover {
    background-color: #232529;
  }

  &__wrapperIcon {
    margin-right: 8px;
  }

  &__icon {
    border-radius: 4px;
    width: 36px;
  }

  &__header {
    position: absolute;
    top: 4px;
    left: 64px;
    font-weight: bold;
  }

  &__timeLog {
    margin-left: 8px;
    font-size: small;
    font-weight: normal;
  }

  &__text {
    position: absolute;
    top: 24px;
    left: 64px;
  }
}
</style>
