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
      <div
        class="c-MenuSidebar__sideBarBody"
        :class="{ 'c-MenuSidebar__sideBarBody--hide': showScrollbar }"
        @mouseenter="onScrollbar"
        @mouseleave="offScrollbar"
      >
        <div class="c-MenuSidebar__wrapSelectMenu">
          <div
            class="c-MenuSidebar__selectMenu"
            v-for="menuItem in menuList"
            :key="menuItem.id"
            :class="{
              'c-MenuSidebar__selectMenu--isCurrent':
                menuItem.id === selectedMenu,
            }"
            @click="selectMenu(menuItem.id)"
          >
            <div class="c-MenuSidebar__icon">
              <v-fa :icon="menuItem.icon" />
            </div>
            <div class="c-MenuSidebar__text">{{ menuItem.title }}</div>
          </div>
        </div>
        <div class="c-MenuSidebar__section">
          <div class="c-MenuSidebar__subTitle" @click="showChannel">
            <v-fa :icon="getChannelCaretIcon" />
            <div class="c-MenuSidebar__text">Channels</div>
          </div>
          <div class="c-MenuSidebar__channelList" v-if="statusChannel">
            <div
              v-for="channelItem in channelList"
              :key="channelItem.id"
              :class="{
                'c-MenuSidebar__channel--isCurrent':
                  channelItem.id === selectedChannel,
              }"
              @click="selectChannel(channelItem.id)"
              class="c-MenuSidebar__channel"
            >
              # {{ channelItem.title }}
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
              v-for="directMessageItem in directMessageList"
              :key="directMessageItem.id"
              :class="{
                'c-MenuSidebar__directMessage--isCurrent':
                  directMessageItem.id === selectedDirectMessage,
              }"
              @click="selectDirectMessage(directMessageItem.id)"
            >
              {{ directMessageItem.name }}
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

type menuList = {
  title: string;
  id: number;
  icon: string;
};

type channelList = {
  title: string;
  id: number;
};

export default Vue.extend({
  components: { ContentLayout },
  data() {
    return {
      menuList: [
        { title: "Threads", id: 11, icon: ["far", "comment-dots"] },
        { title: "All DMs", id: 12, icon: ["far", "comments"] },
        { title: "Mentions & reactions", id: 13, icon: "at" },
        { title: "Save items", id: 14, icon: ["far", "bookmark"] },
        { title: "Channels", id: 15, icon: "ellipsis-v" },
      ] as menuList[],
      channelList: [
        { title: "autify", id: 16 },
        { title: "aws-chatbot-stg", id: 17 },
        { title: "bug-report", id: 18 },
        { title: "competitiors", id: 19 },
        { title: "customer-support", id: 20 },
        { title: "dev-stg-ci-result", id: 21 },
        { title: "errors-app-stg", id: 22 },
        { title: "fulltime-employee", id: 23 },
      ] as channelList[],
      directMessageList: [] as string[],
      statusChannel: true as boolean,
      statusDirectMessage: true as boolean,
      showScrollbar: true,
      selectedMenu: null as number | null,
      selectedChannel: null as number | null,
      selectedDirectMessage: null as number | null,
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
    onScrollbar() {
      this.showScrollbar = false;
    },
    offScrollbar() {
      this.showScrollbar = true;
    },
    selectMenu(id: number) {
      this.selectedMenu = id;
      this.resetSelectedChannel();
      this.resetDirectMessage();
    },
    selectChannel(id: number) {
      this.selectedChannel = id;
      this.resetSelectedMenu();
      this.resetDirectMessage();
    },
    selectDirectMessage(id: number) {
      this.selectedDirectMessage = id;
      this.resetSelectedMenu();
      this.resetSelectedChannel();
    },
    resetSelectedChannel() {
      this.selectedChannel = null;
    },
    resetSelectedMenu() {
      this.selectedMenu = null;
    },
    resetDirectMessage() {
      this.selectedDirectMessage = null;
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

    &--hide {
      overflow-y: hidden;
    }

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
    padding: 16px 0;
    border-right: 1px solid rgb(26, 58, 67);
    border-left: 1px solid rgb(26, 58, 67);
    cursor: pointer;
  }

  &__selectMenu {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 16px;
    &:hover {
      background-color: rgb(121, 4, 189);
    }
    &--isCurrent {
      color: #4ce7a8;
    }
  }

  &__icon {
    min-width: 18px;
  }

  &__text {
    margin-left: 4px;
  }

  &__icon {
    margin-left: 2px;
    margin-right: 4px;
    text-align: center;
  }

  &__section {
    font-size: 16px;
    padding: 16px 0;
    border-left: 1px solid rgb(26, 58, 67);
  }

  &__subTitle {
    padding-left: 16px;
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__channelList {
    padding: 16px 0;
    font-size: 18px;
    cursor: pointer;
  }

  &__channel {
    margin-top: 8px;
    padding-left: 29px;
    &:hover {
      background-color: rgb(121, 4, 189);
    }
    &--isCurrent {
      color: #4ce7a8;
    }
  }

  &__directMessageList {
    padding: 16px 0;
    font-size: 18px;
    cursor: pointer;
  }

  &__directMessage {
    margin-top: 8px;
    padding-left: 29px;
    &:hover {
      background-color: rgb(121, 4, 189);
    }
    &--isCurrent {
      color: #4ce7a8;
    }
  }
}
</style>
