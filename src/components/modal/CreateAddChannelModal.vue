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
          <label for="name" class="p-CreateAddChannelModal__label">Name</label>
          <div>
            <div class="p-CreateAddChannelModal__wrapNameInput">
              <i class="p-CreateAddChannelModal__icon">#</i>
              <div class="p-CreateAddChannelModal__nameInput">
                <input
                  type="text"
                  id="name"
                  ref="nameInput"
                  class="p-CreateAddChannelModal__input"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CreateAddChannelModal",
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
    color: #d1d2d3;
    font-size: 15px;
    margin-bottom: 24px;
  }

  &__label {
    color: #d1d2d3;
    font-size: 15px;
  }

  &__wrapNameInput {
    margin-top: 4px;
    background-color: #1b1d21;
    display: flex;
    border: 1px solid #525357;
    padding: 8px 16px 8px 8px;
    border-radius: 6px;
    &:focus-within {
      border: 3px solid deepskyblue;
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
}
</style>
