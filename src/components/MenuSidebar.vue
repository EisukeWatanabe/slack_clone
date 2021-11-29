<template>
  <div class="c-MenuSidebar">
    <content-layout>
      <div class="c-MenuSidebar__groupName">
        SmartRound
      </div>
      <div class="c-MenuSidebar__list">
        <ul>
          <li></li>
        </ul>
      </div>
    </content-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentLayout from "@/components/ContentLayout.vue";

export default Vue.extend({
  components: { ContentLayout }
});
</script>

<style lang="scss" scoped>
.c-MenuSidebar {
  background-color: green;

}

</style>
