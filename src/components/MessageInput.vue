<template>
  <div class="c-MessageInput">
    <form action="" method="post" class="c-MessageInput__wrapTextArea">
      <div class="c-MessageInput__textArea">
        <div class="c-MessageInput__container">
          <div class="c-MessageInput__icon">
            <v-fa icon="bold" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="italic" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="strikethrough" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon">
            <v-fa icon="link" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="list-ol" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="list-ul" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon">
            <v-fa icon="bars" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon">
            <v-fa icon="code" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="terminal" />
          </div>
        </div>
        <textarea-autosize
          rows="1"
          class="c-MessageInput__testAreaAutosize"
          placeholder="Message"
          ref="myTextarea"
          v-model="textMessage"
          :max-height="400"
        />
        <div class="c-MessageInput__container">
          <div class="c-MessageInput__icon">
            <v-fa icon="plus" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon">
            <v-fa icon="video" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="microphone" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon">
            <v-fa :icon="['far', 'smile']" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="at" />
          </div>
          <div class="c-MessageInput__icon">
            <v-fa icon="remove-format" />
          </div>
          <div class="c-MessageInput__sendMessage">
            <button type="submit" class="c-MessageInput__button">
              <v-fa icon="paper-plane" />
            </button>
            <span class="c-MessageInput__separator"></span>
            <div class="c-MessageInput__icon">
              <v-fa icon="caret-down" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

export default Vue.extend({
  components: {},
  data() {
    return {
      textMessage: "" as string,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-MessageInput {
  &__button {
    border: none;
    background-color: #262626;
    color: rgb(209, 210, 211);
  }

  &__wrapTextArea {
    left: -200px;
    display: flex;
    width: 90%;
    margin: 0 auto;
  }

  &__textArea {
    width: 100%;
    color: #d1d2d3;
    background-color: #222629;
    border: 1px solid #565856;
    border-radius: 12px;
    display: grid;
    grid-template-rows: 36px 1fr 44px;
  }

  &__testAreaAutosize {
    color: #d1d2d3;
    background-color: #222629;
    border: none;
    outline: none;
    padding-left: 8px;
    margin-top: 18px;
    font-size: 15px;
    &::placeholder {
      position: relative;
    }
  }

  &__container {
    display: flex;
    padding: 8px 4px;
    color: #d1d2d3;
    opacity: 0.3;
    font-size: 14px;
    height: 100%;
    align-items: center;
  }

  &__separator {
    width: 1px;
    background: #fff;
    margin: 8px 4px 16px;
    height: 20px;
    flex-shrink: 0;
    align-self: center;
  }

  &__icon {
    padding: 2px;
    margin: 2px;
    width: 24px;
    height: 24px;
  }

  &__sendMessage {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
}
</style>
