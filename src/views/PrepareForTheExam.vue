<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MCButton from '@/components/MCButton.vue';
import MCRouterLink from '@/components/MCRouterLink.vue';
import ConfirmPlayer from '@/components/ConfirmPlayer.vue';
import { getSlotsAPI, startSurvey, checkSurvey } from '@/apis/survey';
import { openAlert } from '@/utils/TsAlert';
import { useRouter } from 'vue-router';
import type { SurveySlot } from '@/types';

const router = useRouter();

const checkSurvey_ = () => {
  checkSurvey().then((res) => {
    if (res.data.code === 1) {
      openAlert(res.data.desc);
      router.push({ name: 'Examination', params: { sid: res.data.response } });
    }
  });
};
interface ExamineeInfo {
  playerName: string;
  playerUUID: string;
  sid?: number;
  slot_name?: string;
}
const examineeInfo = ref<ExamineeInfo>({
  playerName: '',
  playerUUID: 'none',
  sid: undefined,
});

const check = ref(false);
const surveyList = ref<SurveySlot[]>([]);

const choiceSurvey = (sid: number, sName: string) => {
  examineeInfo.value.sid = sid;
  examineeInfo.value.slot_name = sName;
};

// 已确认
const confirmed = () => {
  // 开始考试必须的三个参数：sid，mc-name，mc-uuid
  startSurvey(examineeInfo.value).then((res) => {
    if (res.data.code === 0) {
      openAlert(res.data.desc);
      router.push({ name: 'Examination', params: { sid: res.data.response } });
    } else {
      openAlert(res.data.desc);
    }
  });
};

// 用户点击开始按钮
const startExam = () => {
  // 检查用户是否填写必要信息
  if (examineeInfo.value.playerName && examineeInfo.value.sid) {
    // 这个组件只负责开启check，关闭check由confirm组件负责
    check.value = true;
  } else {
    openAlert('请填写个人信息并选择类型');
  }
};

onMounted(() => {
  // 检查用户有没有未完成的问卷
  checkSurvey_();
  // 获取可选的考试
  getSlotsAPI().then((res) => {
    surveyList.value = res.data.list;
  });
});
</script>

<template>
  <ConfirmPlayer v-model:check="check" v-model:info="examineeInfo" @confirm="confirmed"></ConfirmPlayer>
  <div class="prepare-exam-page">
    <div class="translucent-bg"></div>
    <div class="translucent-content">
      <div class="title">
        <p>参加考试</p>
      </div>
      <div class="main">
        <div>
          <div class="sub-title">
            <h1>我们会通过一些题目来确认您大致的游戏水平</h1>
          </div>
          <form class="examineeInfo">
            <input type="text" v-model="examineeInfo.playerName" placeholder="您的游戏昵称" />
            <p>系统会根据您的选择生成定制的试题</p>
            <ul class="option-list">
              <MCButton
                class="option"
                :class="{
                  selected: examineeInfo.sid == item.mountedSID,
                }"
                v-for="(item, index) in surveyList"
                v-bind:key="index"
                @click="choiceSurvey(item.mountedSID, item.slotName)"
              >
                {{ item.slotName }}类
              </MCButton>
              <p v-if="surveyList.length === 0" style="font-size: 30px; text-align: center; margin: 0 auto">
                暂无可用的问卷
              </p>
            </ul>
          </form>
        </div>
      </div>
      <div class="end">
        <MCRouterLink to="/" class="button">返回</MCRouterLink>
        <MCButton class="button" @click="startExam"> 开始</MCButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.prepare-exam-page .main .sub-title {
  text-align: center;
  user-select: none;
}
.examineeInfo {
  padding: 10px;
  margin: 0 10px 10px 10px;
}

.examineeInfo p {
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  user-select: none;
}

.examineeInfo .option-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  user-select: none;
  height: 200px;
  max-width: 800px;
}

.examineeInfo .option-list .option {
  font-size: 25px;
  flex: 1 1 calc(25% - 10px); /* 每个元素的基础宽度为 25%，减去间距 */
  box-sizing: border-box; /* 确保 padding 和 border 不会影响宽度 */
  height: 70px;
  text-align: center;
  font-family: 'mc-font';
  color: #fff;
}

.examineeInfo .option-list .selected {
  background-image: url(../assets/images/rainbow_pixel_gui/button_highlighted.png);
  image-rendering: pixelated;
}
@media screen and (max-width: 750px) {
  .examineeInfo {
    padding: 10px;
    margin: 0 0px 10px 0px;
  }
}
</style>
