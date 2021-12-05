<template>
  <div class="c-MenuSidebar">
    <content-layout>
      <div class="c-MenuSidebar__groupName">
        SmartRound
      </div>
      <div class="c-MenuSidebar__wrapSelectMenu">
        <div class="c-MenuSidebar__selectMenu">
          <v-fa icon="comment-dots" /><p class="c-MenuSidebar__text">スレッド</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <v-fa icon="comments" /><p class="c-MenuSidebar__text">すべてのDM</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <v-fa icon="at" /><p class="c-MenuSidebar__text">メンション＆リアクション</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <v-fa icon="bookmark" /><p class="c-MenuSidebar__text">ブックマーク</p>
        </div>
        <div class="c-MenuSidebar__selectMenu">
          <div class="c-MenuSidebar__icon">
            <v-fa icon="ellipsis-v" />
          </div>
          <p class="c-MenuSidebar__text">Slackコネクト</p>
        </div>
      </div>
      <div class="c-MenuSidebar__section">
        <div class="c-MenuSidebar__subTitle">
          チャンネル
        </div>
        <div class="c-MenuSidebar__channelList">
          <div v-for="channel in channelList" :key="channel.id" class="c-MenuSidebar__channel">
            # {{ channel }}
          </div>
        </div>
      </div>
      <div class="c-MenuSidebar__section">
        <div class="c-MenuSidebar__subTitle">
          ダイレクトメッセージ
        </div>
        <div class="c-MenuSidebar__directMessageList">
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
      ] as string,
      directMessageList: [] as string
    }
  },
  async created() {
    await this.getUserName();
  },
  methods: {
    async getUserName() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (res.ok) {
        this.directMessageList = await res.json()
      } else {
        console.log("error");
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.c-MenuSidebar {
  background-color: green;
  text-align: left;
  color: white;

  &__groupName {
    padding: 16px;
    background-color: red;
    font-size: 20px;
    font-weight: bold;
  }

  &__wrapSelectMenu {
    padding: 16px;
  }

  &__selectMenu {
    display: flex;
    align-items: center;
  }

  &__text {
    margin-left: 8px;
  }

  &__icon {
    width: 12px;
    text-align: center;
  }

  &__section {
    font-size: 16px;
    padding: 16px;
  }

  &__subTitle {
    font-size: 18px;
  }

  &__channelList {
    padding: 16px;
    font-size: 18px;
  }

  &__channel {
    margin-top: 8px;
  }

}

</style>
