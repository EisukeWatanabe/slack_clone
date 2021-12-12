<template>
  <div>
    <form action="" method="post" class="c-MessageInput__wrapTextArea">
      <textarea name="" id="" cols="80" rows="1" class="c-MessageInput__textArea"></textarea>
      <button type="submit" class="c-MessageInput__button"><v-fa icon="paper-plane" /></button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MessageInput"
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-MessageInput {

  &__button {
    border: none;
    background-color: #262626;
    color: grey;
  }

  &__wrapTextArea {
    left: -200px;
    display: flex;
    width: 90%;
    margin: 0 auto;
  }

  &__textArea {
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    height: 100%;
    background-color: grey;
    border: 1px solid #b6c3c6;
    border-radius: 4px;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    resize: none;
  }
}

</style>