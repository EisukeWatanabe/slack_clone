<template>
  <div class="p-AutifyChannel">
    <div class="p-AutifyChannel__header">
      <div class="p-AutifyChannel__wrapTextIcon">
        <div class="p-AutifyChannel__text"># autify</div>
        <div class="p-AutifyChannel__icon">
          <v-fa icon="chevron-down" />
        </div>
      </div>
      <p class="p-AutifyChannel__description">
        Room where the result of Autify execution is notified.
      </p>
    </div>
    <div>
      <message-list
        :icon-image="setLogo"
        sender-name="Autify"
        :time-log="timeLog"
        :message-text="message"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MessageList from "@/components/MessageList.vue";

export default Vue.extend({
  components: { MessageList },
  data() {
    return {
      message: "",
    };
  },
  props: {
    lists: Object,
  },
  computed: {
    setLogo() {
      return "autify.png";
    },
    timeLog() {
      return "12:00 PM";
    },
    // textMessage() {
    //   return JSON.parse(localStorage.getItem("autify"));
    // },
  },
  mounted() {
    if (localStorage.autify) this.message = localStorage.autify;
  },
  watch: {
    message(val) {
      this.message = val;
    },
  },
});
</script>

<style lang="scss" scoped>
.p-AutifyChannel {
  &__header {
    padding: 10px 16px 10px 14px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #36373b;
  }

  &__wrapTextIcon {
    display: flex;
    cursor: pointer;
    padding: 4px;
    margin-right: 16px;

    &:hover {
      background-color: #232529;
      border-radius: 8px;
    }
  }

  &__text {
    font-size: 20px;
    font-weight: bold;
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 8px;
    margin-left: 8px;
  }

  &__icon {
    font-size: 10px;
    display: flex;
    align-items: center;
    width: 4px;
    margin-right: 12px;
  }

  &__description {
    margin: 0;
    color: #abacad;
    cursor: pointer;
  }
}
</style>
