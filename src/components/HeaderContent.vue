<template>
  <div class="c-HeaderContent">
    <form action="">
      <input class="c-HeaderContent__input" type="text" />
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

  &__input {
    width: 560px;
    height: 20px;
    border-radius: 8px;
  }
}
</style>
