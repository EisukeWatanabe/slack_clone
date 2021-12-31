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
            <div class="c-MenuSidebar__icon c-MenuSidebar__caret">
              <transition>
                <v-fa :icon="getChannelCaretIcon" />
              </transition>
            </div>
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
              <div class="c-MenuSidebar__hash">#</div>
              {{ channelItem.title }}
            </div>
          </div>
        </div>
        <div class="c-MenuSidebar__section">
          <div class="c-MenuSidebar__subTitle" @click="showDirectMessage">
            <div class="c-MenuSidebar__icon c-MenuSidebar__caret">
              <v-fa :icon="getDirectMessageCaretIcon" />
            </div>
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
              <img
                role="img"
                src="../assets/logo.png"
                class="c-MenuSidebar__directMessageIcon"
              />
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
        { title: "More", id: 15, icon: "ellipsis-v" },
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
        { title: "idea", id: 24 },
        { title: "incident", id: 25 },
        { title: "intern", id: 26 },
        { title: "landingpage", id: 27 },
        { title: "lunch", id: 28 },
        { title: "marketing", id: 29 },
        { title: "partner-success", id: 30 },
        { title: "product-management", id: 31 },
        { title: "random", id: 32 },
        { title: "random-dev", id: 33 },
        { title: "recruiting", id: 34 },
        { title: "schedule-sunny", id: 35 },
        { title: "transifex-notification", id: 36 },
        { title: "user-feedback", id: 37 },
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
        return "caret-right";
      }
    },
    getDirectMessageCaretIcon() {
      if (this.statusDirectMessage) {
        return "caret-down";
      } else {
        return "caret-right";
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
    font-size: 18px;
  }

  &__angleDown {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  &__newMessage {
    min-width: 34px;
    height: 34px;
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
    font-size: 15px;

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
    padding-top: 16px;
    border-right: 1px solid rgb(26, 58, 67);
    border-left: 1px solid rgb(26, 58, 67);
    cursor: pointer;
  }

  &__selectMenu {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 16px;
    &:hover {
      background-color: rgb(121, 4, 189);
    }
    &--isCurrent {
      color: #4ce7a8;
      background-color: #013644;
    }
  }

  &__icon {
    min-width: 18px;
  }

  &__caret {
    &:hover {
      background-color: rgba(209, 210, 211, 0.5);
      border-radius: 4px;
      //transform: rotate(90deg);
      //transition: 1s;
    }
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
    border-left: 1px solid rgb(26, 58, 67);
    margin-top: 8px;
  }

  &__subTitle {
    height: 36px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__channelList {
    cursor: pointer;
  }

  &__channel {
    height: 28px;
    padding-left: 29px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: rgb(121, 4, 189);
    }
    &--isCurrent {
      color: #4ce7a8;
      background-color: #013644;
    }
  }

  &__hash {
    min-width: 20px;
    display: inline-block;
  }

  &__directMessageList {
    cursor: pointer;
  }

  &__directMessage {
    height: 28px;
    padding-left: 29px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: rgb(121, 4, 189);
    }
    &--isCurrent {
      color: #4ce7a8;
      background-color: #013644;
    }
  }

  &__directMessageIcon {
    min-width: 20px;
    height: 20px;
    margin-right: 8px;
  }
}
</style>
