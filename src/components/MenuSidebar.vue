<template>
  <div class="c-MenuSidebar">
    <content-layout>
      <div class="c-MenuSidebar__top">
        <div class="c-MenuSidebar__groupName">
          SmartRound
          <div class="c-MenuSidebar__angleDown">
            <v-fa icon="angle-down" />
          </div>
        </div>
        <div class="c-MenuSidebar__newMessage">
          <v-fa :icon="['far', 'edit']" />
        </div>
      </div>
      <div class="c-MenuSidebar__sideBarBody">
        <div class="c-MenuSidebar__wrapSelectMenu">
          <div class="c-MenuSidebar__selectMenu">
            <v-fa :icon="['far', 'comment-dots']" />
            <div class="c-MenuSidebar__text">Threads</div>
          </div>
          <div class="c-MenuSidebar__selectMenu">
            <v-fa :icon="['far', 'comments']" />
            <div class="c-MenuSidebar__text">All DMs</div>
          </div>
          <div class="c-MenuSidebar__selectMenu">
            <v-fa icon="at" />
            <div class="c-MenuSidebar__text">Mentions & reactions</div>
          </div>
          <div class="c-MenuSidebar__selectMenu">
            <v-fa :icon="['far', 'bookmark']" />
            <div class="c-MenuSidebar__text">Save items</div>
          </div>
          <div class="c-MenuSidebar__selectMenu">
            <div class="c-MenuSidebar__icon">
              <v-fa icon="ellipsis-v" />
            </div>
            <div class="c-MenuSidebar__text">Slack Connect</div>
          </div>
        </div>
        <div class="c-MenuSidebar__section">
          <div class="c-MenuSidebar__subTitle" @click="showChannel">
            <v-fa :icon="getChannelCaretIcon" />
            <div class="c-MenuSidebar__text">Channels</div>
          </div>
          <div class="c-MenuSidebar__channelList" v-if="statusChannel">
            <div
              v-for="channel in channelList"
              :key="channel.id"
              class="c-MenuSidebar__channel"
            >
              # {{ channel }}
            </div>
          </div>
        </div>
        <div class="c-MenuSidebar__section">
          <div class="c-MenuSidebar__subTitle" @click="showDirectMessage">
            <v-fa :icon="getDirectMessageCaretIcon" />
            <div class="c-MenuSidebar__text">Direct messages</div>
          </div>
          <div
            class="c-MenuSidebar__directMessageList"
            v-if="statusDirectMessage"
          >
            <div
              class="c-MenuSidebar__directMessage"
              v-for="directMessage in directMessageList"
              :key="directMessage.id"
            >
              {{ directMessage.name }}
            </div>
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
        "autify",
        "aws-chatbot-stg",
        "biz-dev",
        "bug-report",
        "competitiors",
        "customer-support",
        "dev-stg-ci-result",
        "errors-app-stg",
        "fulltime-employee",
      ] as string[],
      directMessageList: [] as string[],
      statusChannel: true as boolean,
      statusDirectMessage: true as boolean,
    };
  },
  async created() {
    await this.getUserName();
  },
  computed: {
    getChannelCaretIcon() {
      if (this.statusChannel) {
        return "caret-down";
      } else {
        return "caret-up";
      }
    },
    getDirectMessageCaretIcon() {
      if (this.statusDirectMessage) {
        return "caret-down";
      } else {
        return "caret-up";
      }
    },
  },
  methods: {
    async getUserName() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        this.directMessageList = await res.json();
      } else {
        console.log("error");
      }
    },
    showChannel() {
      this.statusChannel = !this.statusChannel;
    },
    showDirectMessage() {
      this.statusDirectMessage = !this.statusDirectMessage;
    },
  },
});
</script>

<style lang="scss" scoped>
.c-MenuSidebar {
  background-color: #01242e;
  text-align: left;
  color: white;
  white-space: nowrap;
  height: calc(100vh - 40px);
  solid-color: red;

  &__top {
    background-color: #01242e;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid rgb(26, 58, 67);
    display: flex;
    cursor: pointer;
  }

  &__groupName {
    padding: 16px 44px 16px 16px;
    display: flex;
  }

  &__angleDown {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  &__newMessage {
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    color: #01242e;
    margin: auto 24px auto auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  &__sideBarBody {
    overflow-y: auto;
    height: calc(100vh - 100px);

    &::-webkit-scrollbar {
      background-color: #01242e;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.45);
      border-radius: 4px;
    }
  }

  &__wrapSelectMenu {
    padding: 16px;
    border-right: 1px solid rgb(26, 58, 67);
    border-left: 1px solid rgb(26, 58, 67);
    cursor: pointer;
  }

  &__selectMenu {
    display: flex;
    align-items: center;
    margin-top: 10px;
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
    border-left: 1px solid rgb(26, 58, 67);
  }

  &__subTitle {
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__channelList {
    padding: 16px;
    font-size: 18px;
    cursor: pointer;
  }

  &__channel {
    margin-top: 8px;
  }

  &__directMessageList {
    padding: 16px;
    font-size: 18px;
    cursor: pointer;
  }

  &__directMessage {
    margin-top: 8px;
  }
}
</style>
