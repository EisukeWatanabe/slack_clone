<template>
  <div class="c-HeaderContent">
    <div class="c-HeaderContent__history">
      <v-fa :icon="['far','clock']" />
    </div>
    <form action="">
      <button class="c-HeaderContent__input">
        <v-fa icon="search" />
        <span class="c-HeaderContent__inputPlaceholder">Search</span>
      </button>
    </form>
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
  }

  &__input {
    width: 560px;
    flex: 5;
    height: 24px;
    border-radius: 6px;
    background-color: rgba(156, 156, 156, 0.2);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .08);;
    border: solid 1px rgb(156, 156, 156);
    color: rgb(156, 156, 156);
  }

  &__inputPlaceholder {
    margin-left: 8px;
  }
}
</style>
