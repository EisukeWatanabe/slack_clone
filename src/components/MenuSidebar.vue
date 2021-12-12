<template>
  <div class="c-MenuSidebar">
    <content-layout>
      <div class="c-MenuSidebar__groupName">
        SmartRound
      </div>
      <div class="c-MenuSidebar__wrapSelectMenu">
        <div class="c-MenuSidebar__selectMenu">
          <v-fa :icon="['far','comment-dots']" /><p class="c-MenuSidebar__text">Threads</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <v-fa :icon="['far','comments']" /><p class="c-MenuSidebar__text">All DMs</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <v-fa icon="at" /><p class="c-MenuSidebar__text">Mentions & reactions</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <v-fa :icon="['far','bookmark']" /><p class="c-MenuSidebar__text">Save items</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <div class="c-MenuSidebar__icon">
            <v-fa icon="ellipsis-v" />
          </div>
          <p class="c-MenuSidebar__text">Slack Connect</p>
        </div>
      </div>
      <div class="c-MenuSidebar__section">
        <div class="c-MenuSidebar__subTitle" @click="showChannel">
          <v-fa :icon="getChannelCaretIcon" /><p class="c-MenuSidebar__text">Channels</p>
        </div>
        <div class="c-MenuSidebar__channelList" v-if="statusChannel">
          <div v-for="channel in channelList" :key="channel.id" class="c-MenuSidebar__channel">
            # {{ channel }}
          </div>
        </div>
      </div>
      <div class="c-MenuSidebar__section">
        <div class="c-MenuSidebar__subTitle" @click="showDirectMessage">
          <v-fa :icon="getDirectMessageCaretIcon" /><p class="c-MenuSidebar__text">Direct messages</p>
        </div>
        <div class="c-MenuSidebar__directMessageList" v-if="statusDirectMessage">
          <div class="c-MenuSidebar__directMessage" v-for="directMessage in directMessageList" :key="directMessage.id">
            {{ directMessage.name }}
          </div>
        </div>
      </div>
    </content-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentLayout from "@/components/ContentLayout.vue";

export default Vue.extend({
  components: { ContentLayout },
  data() {
    return {
      channelList: [
        'autify', 'aws-chatbot-stg', 'biz-dev', 'bug-report', 'competitiors', 'customer-support', 'dev-stg-ci-result', 'errors-app-stg', 'fulltime-employee'
      ] as string[],
      directMessageList: [] as string[],
      statusChannel: true as boolean,
      statusDirectMessage: true as boolean
    }
  },
  async created() {
    await this.getUserName();
  },
  computed: {
    getChannelCaretIcon() {
      if (this.statusChannel) {
        return 'caret-down';
      } else {
        return 'caret-up';
      }
    },
    getDirectMessageCaretIcon() {
      if (this.statusDirectMessage) {
        return 'caret-down';
      } else {
        return 'caret-up';
      }
    }
  },
  methods: {
    async getUserName() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (res.ok) {
        this.directMessageList = await res.json()
      } else {
        console.log("error");
      }
    },
    showChannel() {
      this.statusChannel = !this.statusChannel
    },
    showDirectMessage() {
      this.statusDirectMessage = !this.statusDirectMessage
    }
  }
});
</script>

<style lang="scss" scoped>
.c-MenuSidebar {
  background-color: #01242E;
  text-align: left;
  color: white;
  white-space: nowrap;

  &__groupName {
    padding: 16px;
    background-color: #01242E;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid grey;
  }

  &__wrapSelectMenu {
    padding: 16px;
    border-right: 1px solid grey;
    border-left: 1px solid grey;
  }

  &__selectMenu {
    display: flex;
    align-items: center;
  }

  &__text {
    margin-left: 8px;
  }

  &__icon {
    margin-left: 2px;
    margin-right: 4px;
    text-align: center;
  }

  &__section {
    font-size: 16px;
    padding: 16px;
    border-left: 1px solid grey;
  }

  &__subTitle {
    font-size: 18px;
    display: flex;
    align-items: center;
  }

  &__channelList {
    padding: 16px;
    font-size: 18px;
  }

  &__channel {
    margin-top: 8px;
  }

  &__directMessageList {
    padding: 16px;
    font-size: 18px;
  }

  &__directMessage {
    margin-top: 8px;
  }

}

</style>
