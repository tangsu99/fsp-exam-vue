<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const page = ref("choiceGetWhiteListMethod");

const infoCard = ref({
    type: "",
    display: false,
    text: "",
    opacity: 1,
    imgUrl: "",
});
const warnCard = ref({
    type: "",
    display: false,
    text: "",
    opacity: 1,
    imgUrl: "",
});
const confirmRequest = {
    guaranteeQQ: "",
    playerQQ: "",
    playerName: "",
    playerUUID: "none",
};

const examineeInfo = ref({
    qqNumber: "",
    playerName: "",
    playerType: "",
});
const playerTypeList = ref([
    { id: "survival", option: "生存玩家" },
    { id: "redstone", option: "红石玩家" },
    { id: "construction", option: "建筑玩家" },
    { id: "pvp", option: "PVP玩家" },
]);
function showBox(box, showSecond, data) {
    box.value.type = data.type;
    if (data.type === "loading" || data.type === "msg") {
        box.value.text = data.text;
        box.value.opacity = 1;
        box.value.display = true;
    } else if (data.type === "warn") {
        box.value.text = data.text;
        box.value.opacity = 1;
        box.value.display = true;
    } else if (data.type === "playerCheck") {
        box.value.text = data.uuid;
        box.value.imgUrl = data.profilePicSrc;
        box.value.opacity = 1;
        box.value.display = true;
    }

    setTimeout(() => {
        const fadeOutInterval = setInterval(() => {
            if (box.value.opacity > 0) {
                box.value.opacity -= 0.1;
            } else {
                clearInterval(fadeOutInterval);
                box.value.display = false;
            }
        }, 100); // 消失动画时长
    }, showSecond * 1000);
}

function checkPlayerName(playerName) {
    showBox(infoCard, 1000, {
        // tag1
        type: "loading",
        text: "确认游戏名称中...",
    });
    getProfilePic(playerName).then((result) => {
        if (result.msg === "ok") {
            result.imgUrl.then((imageUrl) => {
                confirmRequest["playerUUID"] = result.uuid;
                showBox(infoCard, 1000, {
                    //我不知道为什么这里的1000没用，只有tag1的1000有用
                    type: "playerCheck",
                    uuid: confirmRequest["playerUUID"],
                    profilePicSrc: imageUrl,
                });
            });
        } else {
            infoCard.value.display = false;
            showBox(warnCard, 2, {
                type: "warn",
                text: result.msg,
            });
        }
    });
}
function choicePlayerType(playerType) {
    examineeInfo.value.playerType = playerType;
}

function checkRefDataNotNull(data) {
    for (const [key, value] of Object.entries(data.value)) {
        if (value === "" || value === undefined) {
            return false;
        }
    }
    return true;
}

const examineePlayer = {
    name: "",
};
function startExam() {
    if (!checkRefDataNotNull(examineeInfo)) {
        showBox(warnCard, 2, {
            type: "warn",
            text: "请填写个人信息",
        });
    } else {
        examineePlayer.name = examineeInfo.value.playerName;
        checkPlayerName(examineePlayer.name);
    }
}

const resultPage = ref("getInfo");

watch(page, (newVal) => {
    if (newVal === "viewResult") {
        resultPage.value = "getInfo";
    }
});

</script>

<template>
    <div class="prepare-exam-page">
        <div class="bg"></div>
        <div class="content">
            <div class="title">
                <p>参加考试</p>
            </div>
            <div class="main">
                <div>
                    <div class="sub-title">
                        <h1>
                            在开始答题之前，我们需要知晓一些您的个人信息
                        </h1>
                        <p>
                            请务必填写真实信息，否则系统可能无法正确添加白名单
                        </p>
                    </div>
                    <form class="examineeInfo">
                        <input type="number" v-model="examineeInfo.qqNumber" placeholder="您的QQ号"
                            :class="{ 'input-red-color': warnCard.display }" />

                        <input type="text" v-model="examineeInfo.playerName" placeholder="您的游戏昵称"
                            :class="{ 'input-red-color': warnCard.display }" />
                        <p>我们会根据您的选择生成定制的试题</p>
                        <ul class="option-list">
                            <li class="minecraft-button option"
                                :class="{ 'selected': examineeInfo.playerType == item.id, 'option-red-color': warnCard.display }"
                                v-for="(item, index) in playerTypeList" v-bind:key="index" @click="choicePlayerType(item.id)">
                                {{ item.option }}
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div class="end">
                <button type="button" class="minecraft-button button" @click="page = 'choiceGetWhiteListMethod'">
                    <RouterLink to="/">返回</RouterLink>
                </button>
                <button type="button" class="minecraft-button button" @click="startExam">
                    <RouterLink to="/examination">开始</RouterLink>
                </button>
            </div>
        </div>
    </div>
</template>