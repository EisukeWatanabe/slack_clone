<template>
  <div class="c-MessageInput">
    <form action="" method="post" class="c-MessageInput__wrapTextArea">
      <textarea-autosize
          class="c-MessageInput__textArea"
          placeholder="Type something here..."
          ref="myTextarea"
          value=""
          :min-height="30"
          :max-height="350"
      />
      <button type="submit" class="c-MessageInput__button"><v-fa icon="paper-plane" /></button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize)


export default Vue.extend({
  components: {}
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-MessageInput {
  padding: 24px;

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