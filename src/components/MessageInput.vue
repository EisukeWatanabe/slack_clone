<template>
  <div class="c-MessageInput">
    <form action="" method="post" class="c-MessageInput__wrapTextArea">
      <textarea-autosize
          class="c-MessageInput__textArea"
          placeholder="Message"
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
    width: 100%;
    color: #D1D2D3;
    background-color: #222629;
    border: 1px solid #b6c3c6;
    border-radius: 4px;
  }
}

</style>