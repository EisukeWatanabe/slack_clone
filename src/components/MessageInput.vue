<template>
  <div class="c-MessageInput">
    <form
      action=""
      method="post"
      class="c-MessageInput__wrapTextArea"
      @click="focusInput"
      @focusin="isFocus"
      @focusout="notFocus"
    >
      <div class="c-MessageInput__textArea">
        <div class="c-MessageInput__container">
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="bold" />
          </div>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="italic" />
          </div>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="strikethrough" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="link" />
          </div>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="list-ol" />
          </div>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="list-ul" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="bars" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
            <v-fa icon="code" />
          </div>
          <div
            class="c-MessageInput__icon"
            :class="{ 'c-MessageInput__icon--isFocus': changeOpacity }"
          >
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
          <div class="c-MessageInput__icon c-MessageInput__icon--isFocus">
            <v-fa icon="plus" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon c-MessageInput__icon--isFocus">
            <v-fa icon="video" />
          </div>
          <div class="c-MessageInput__icon c-MessageInput__icon--isFocus">
            <v-fa icon="microphone" />
          </div>
          <span class="c-MessageInput__separator"></span>
          <div class="c-MessageInput__icon">
            <v-fa :icon="['far', 'smile']" />
          </div>
          <div class="c-MessageInput__icon c-MessageInput__icon--isFocus">
            <v-fa icon="at" />
          </div>
          <div class="c-MessageInput__icon c-MessageInput__icon--isFocus">
            <v-fa icon="remove-format" />
          </div>
          <div
            class="c-MessageInput__sendMessage"
            :class="{ 'send-color': changeButtonColor }"
          >
            <button
              type="submit"
              class="c-MessageInput__button"
              :class="{ 'send-color': changeButtonColor }"
            >
              <v-fa icon="paper-plane" />
            </button>
            <span class="c-MessageInput__separator"></span>
            <div class="c-MessageInput__icon c-MessageInput__sendOption">
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
      changeOpacity: false,
    };
  },
  computed: {
    changeButtonColor(): boolean {
      return this.textMessage.length > 0;
    },
  },
  methods: {
    focusInput() {
      const myTextarea = this.$refs.myTextarea as any;
      myTextarea.$el.focus();
    },
    isFocus() {
      this.changeOpacity = true;
    },
    notFocus() {
      this.changeOpacity = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/import";

.c-MessageInput {
  &__button {
    border: none;
    background-color: #262626;
    color: #56595c;
  }

  &__wrapTextArea {
    left: -200px;
    display: flex;
    width: 96%;
    margin: 0 auto;

    :focus-within {
      border-color: rgb(209, 210, 211);
    }
  }

  &__textArea {
    width: 100%;
    color: #d1d2d3;
    background-color: #222629;
    border: 1px solid #565856;
    border-radius: 8px;
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
    font-size: 14px;
    &::placeholder {
      position: relative;
    }
  }

  &__container {
    display: flex;
    padding: 4px;
    color: #56595c;
    font-size: 14px;
    height: 100%;
    align-items: center;
  }

  &__separator {
    width: 1px;
    background: #56595c;
    margin: 12px 4px 16px;
    height: 20px;
    flex-shrink: 0;
    align-self: center;
  }

  &__icon {
    padding: 2px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 28px;
    cursor: pointer;

    &--isFocus {
      color: rgba(232, 232, 232, 0.7);
    }

    :hover {
      color: rgba(232, 232, 232, 1);
      background-color: #2f3135;
      border-radius: 4px;
      padding: 6px;
      width: 16px;
    }
  }

  &__sendMessage {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 56px;
    height: 26px;
    border-radius: 4px;
  }

  &__sendOption {
    pointer-events: none;
    justify-content: flex-start;
  }

  .send-color {
    background-color: #007a5a;
    color: white;
  }
}
</style>
