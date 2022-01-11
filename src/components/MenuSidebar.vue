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
          <div class="c-MenuSidebar__selectMenu">
            <div class="c-MenuSidebar__icon">
              <v-fa icon="ellipsis-v" />
            </div>
            <div class="c-MenuSidebar__text">More</div>
          </div>
        </div>
        <div class="c-MenuSidebar__section">
          <div class="c-MenuSidebar__subTitle" @click="showChannel">
            <div class="c-MenuSidebar__icon c-MenuSidebar__caret">
              <v-fa
                icon="caret-right"
                :class="{
                  'c-MenuSidebar__caret--rotatedShow': statusChannel,
                  'c-MenuSidebar__caret--rotatedClose': !statusChannel,
                }"
              />
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
            <div class="c-MenuSidebar__wrapAdd">
              <VMenu theme="add">
                <div class="c-MenuSidebar__add">
                  <div class="c-MenuSidebar__plus">
                    <v-fa icon="plus" />
                  </div>
                  Add channels
                </div>
                <template #popper>
                  <div class="c-MenuSidebar__menuItem">
                    Create a new channel
                  </div>
                  <div class="c-MenuSidebar__menuItem">Browse all channels</div>
                </template>
              </VMenu>
            </div>
          </div>
        </div>
        <div class="c-MenuSidebar__section">
          <div class="c-MenuSidebar__subTitle" @click="showDirectMessage">
            <div class="c-MenuSidebar__icon c-MenuSidebar__caret">
              <v-fa
                icon="caret-right"
                :class="{
                  'c-MenuSidebar__caret--rotatedShow': statusDirectMessage,
                  'c-MenuSidebar__caret--rotatedClose': !statusDirectMessage,
                }"
              />
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
            <div class="c-MenuSidebar__wrapAdd">
              <VMenu theme="add">
                <div class="c-MenuSidebar__add">
                  <div class="c-MenuSidebar__plus">
                    <v-fa icon="plus" />
                  </div>
                  Add teammates
                </div>
                <template #popper>
                  <div class="c-MenuSidebar__menuItem">Invite people</div>
                  <div class="c-MenuSidebar__menuItem">New conversation</div>
                </template>
              </VMenu>
            </div>
            <div class="c-MenuSidebar__bottom"></div>
          </div>
        </div>
      </div>
    </content-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ContentLayout from "@/components/ContentLayout.vue";
import VTooltip from "v-tooltip";
import "v-tooltip/dist/v-tooltip.css";

Vue.use(VTooltip, {
  themes: {
    add: {
      triggers: ["click"],
      autoHide: true,
      offset: [48, 6],
      placement: "bottom",
    },
  },
});

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
      ] as menuList[],
      channelList: [
        { title: "autify", id: 15 },
        { title: "aws-chatbot-stg", id: 16 },
        { title: "bug-report", id: 17 },
        { title: "competitiors", id: 18 },
        { title: "customer-support", id: 19 },
        { title: "dev-stg-ci-result", id: 20 },
        { title: "errors-app-stg", id: 21 },
        { title: "fulltime-employee", id: 22 },
        { title: "idea", id: 23 },
        { title: "incident", id: 24 },
        { title: "intern", id: 25 },
        { title: "landingpage", id: 26 },
        { title: "lunch", id: 27 },
        { title: "marketing", id: 28 },
        { title: "partner-success", id: 29 },
        { title: "product-management", id: 30 },
        { title: "random", id: 31 },
        { title: "random-dev", id: 32 },
        { title: "recruiting", id: 33 },
        { title: "schedule-sunny", id: 34 },
        { title: "transifex-notification", id: 35 },
        { title: "user-feedback", id: 36 },
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

<style lang="scss">
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
    &:hover {
      background-color: rgb(121, 4, 189);
    }
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
    }
    &--rotatedShow {
      transform: rotate(90deg);
      transition: 0.2s;
    }

    &--rotatedClose {
      transform: rotate(0deg);
      transition: 0.2s;
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

  &__wrapAdd {
    &:hover {
      background-color: rgb(121, 4, 189);
    }
  }

  &__add {
    height: 28px;
    padding-left: 24px;
    display: flex;
    align-items: center;
  }

  &__plus {
    min-width: 18px;
    height: 18px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    background-color: rgba(209, 210, 211, 0.2);
    border-radius: 4px;
  }

  &__menuItem {
    font-size: 15px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 0 16px;
    line-height: 28px;
    &:hover {
      background-color: #046f9d;
    }
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
    min-width: 12px;
    height: 12px;
    margin-right: 8px;
  }

  &__bottom {
    height: 64px;
  }
}

/* Style */
.v-popper--theme-add .v-popper__inner {
  background: #232529;
  border: 1px solid #1a3a43;
  color: #bbbcbe;
  padding: 16px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.v-popper {
  width: auto;
}

.v-popper--theme-add .v-popper__arrow {
  border-color: #02232e;
}
</style>
