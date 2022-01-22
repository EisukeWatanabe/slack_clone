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
      <div>
        <form action="">
          <div class="p-CreateAddChannelModal__name">
            <label for="name" class="p-CreateAddChannelModal__label"
              >Name</label
            >
            <div>
              <div class="p-CreateAddChannelModal__wrapNameInput">
                <i class="p-CreateAddChannelModal__icon">#</i>
                <div class="p-CreateAddChannelModal__nameInput">
                  <input
                    type="text"
                    id="name"
                    v-model="nameInputValue"
                    ref="nameInput"
                    class="p-CreateAddChannelModal__input"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <form action="">
          <div class="p-CreateAddChannelModal__name">
            <label for="description" class="p-CreateAddChannelModal__label"
              >Description</label
            ><span class="p-CreateAddChannelModal__optional">(optional)</span>
            <div>
              <div class="p-CreateAddChannelModal__wrapNameInput">
                <i class="p-CreateAddChannelModal__icon">#</i>
                <div class="p-CreateAddChannelModal__nameInput">
                  <input
                    type="text"
                    id="description"
                    ref="nameInput"
                    class="p-CreateAddChannelModal__input"
                  />
                </div>
              </div>
              <div class="p-CreateAddChannelModal__inputBottom">
                what's this channel about?
              </div>
            </div>
          </div>
        </form>
        <div class="p-CreateAddChannelModal__wrapToggle">
          <div>
            <div class="p-CreateAddChannelModal__subTitle">Make private</div>
            <div class="p-CreateAddChannelModal__description">
              When a channel is set to private, it can only be<br />viewed or
              joined by invitation.
            </div>
          </div>
          <div class="p-CreateAddChannelModal__wrapToggleButton">
            <label for="toggle">
              <toggle-button
                name="toggle"
                class="p-CreateAddChannelModal__toggleButton"
                :width="54"
                :height="30"
                :margin="5"
                :labels="{ checked: '✔', unchecked: '' }"
                :color="{ checked: '#007A5A', unchecked: '#1b1d21' }"
              ></toggle-button>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="p-CreateAddChannelModal__footer">
      <div class="p-CreateAddChannelModal__wrapFooterContent">
        <label for="checkbox">
          <input type="checkbox" id="checkbox" />
          <span class="p-CreateAddChannelModal__inputText"
            >Share outside SmartRound</span
          >
          <span class="p-CreateAddChannelModal__infoCircle"
            ><v-fa icon="info-circle"
          /></span>
        </label>
      </div>
      <button
        class="p-CreateAddChannelModal__nextButton"
        :class="{ 'send-color': changeButtonColor }"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ToggleButton from "vue-js-toggle-button";

Vue.use(ToggleButton);

export default Vue.extend({
  name: "CreateAddChannelModal",
  data() {
    return {
      nameInputValue: "" as string,
    };
  },
  computed: {
    changeButtonColor(): boolean {
      return this.nameInputValue.length > 0;
    },
  },
  methods: {},
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
    color: #ababad;
    font-size: 15px;
  }

  &__name {
    margin-top: 24px;
  }

  &__label {
    color: #d1d2d3;
    font-size: 13px;
    font-weight: bold;
  }

  &__optional {
    color: #ababad;
    font-size: 14px;
    margin-left: 4px;
  }

  &__wrapNameInput {
    margin-top: 4px;
    background-color: #1b1d21;
    display: flex;
    border: 1px solid #808385;
    padding: 8px 16px 8px 8px;
    border-radius: 6px;
    &:focus-within {
      border: 1px solid deepskyblue;
      box-shadow: 0 0 0 3px rgba(29, 155, 209, 0.3);
    }
  }

  &__icon {
    color: #d1d2d3;
  }

  &__nameInput {
    width: 100%;
  }

  &__input {
    margin-left: 8px;
    border: none;
    background-color: #1b1d21;
    color: #d1d2d3;
    width: 100%;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  &__inputBottom {
    color: #ababad;
    font-size: 13px;
    margin-top: 4px;
  }

  &__toggleButton {
    border: 1px solid #808385;
    border-radius: 18px;

    &:focus-within {
      border: 1px solid deepskyblue;
      box-shadow: 0 0 0 3px rgba(29, 155, 209, 0.3);
      border-radius: 18px;
    }
  }

  &__subTitle {
    font-weight: bold;
    color: #d1d2d3;
  }

  &__wrapToggle {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }

  &__wrapToggleButton {
    display: flex;
    align-items: center;
  }

  &__footer {
    padding: 24px;
    height: auto;
    display: flex;
    justify-content: space-between;
  }

  &__wrapFooterContent {
    height: 36px;
    display: flex;
    align-items: center;
  }

  &__nextButton {
    font-size: 15px;
    height: 36px;
    min-width: 80px;
    padding: 0 12px 1px;
    background-color: #35373b;
    color: #ababad;
    border-radius: 4px;
    border: none;
  }

  &__inputText {
    color: #ababad;
    font-size: 15px;
    margin-left: 4px;
  }

  &__infoCircle {
    color: #d1d2d3;
    margin-left: 8px;
  }

  .send-color {
    background-color: #007a5a;
    color: white;
  }
}
</style>
