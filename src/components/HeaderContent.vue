<template>
  <div class="c-HeaderContent">
    <div class="c-HeaderContent__history">
      <v-fa :icon="['far', 'clock']" />
    </div>
    <div class="c-HeaderContent__searchContainer">
      <form action="">
        <button class="c-HeaderContent__input">
          <v-fa icon="search" />
          <span class="c-HeaderContent__inputPlaceholder">
            Search SmartRound
          </span>
        </button>
      </form>
    </div>
    <div class="c-HeaderContent__help">
      <v-fa :icon="['far', 'question-circle']" />
      <img
        src="../assets/logo.png"
        class="c-base_icon c-base_icon--image c-HeaderContent__img"
        role="img"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style lang="scss" scoped>
.c-HeaderContent {
  display: flex;
  justify-content: center;

  &__history {
    margin-right: 24px;
    color: rgb(156, 156, 156);
    font-size: 19px;
    text-align: right;
    flex: 1;
    min-width: 260px;
  }

  &__searchContainer {
    max-width: 723px;
    width: 100%;
  }

  &__input {
    width: 100%;
    justify-content: center;
    height: 24px;
    border-radius: 6px;
    background-color: rgba(156, 156, 156, 0.2);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
    border: solid 1px rgb(156, 156, 156);
    color: rgb(156, 156, 156);
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  &__inputPlaceholder {
    margin-left: 8px;
  }

  &__help {
    font-size: 19px;
    color: rgb(156, 156, 156);
    flex: 1;
    margin-left: auto;
    min-width: 260px;
    padding-left: 32px;
    margin-right: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__img {
    height: 28px;
    width: 28px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
