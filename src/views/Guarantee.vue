<script setup>
import { ref, useTemplateRef, watch } from 'vue'
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
const guaranteeRequest = ref({
    guaranteeQQ: "",
    playerQQ: "",
    playerName: "",
});
const confirmRequest = {
    guaranteeQQ: "",
    playerQQ: "",
    playerName: "",
    playerUUID: "none",
};

function checkDataNotNull(data) {
    for (let i in data) {
        if (data[i] == "") return false;
    }
    return true;
}
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

function oderGuaranteeRequest() {
    confirmRequest["guaranteeQQ"] =
        guaranteeRequest.value["guaranteeQQ"];
    confirmRequest["playerQQ"] = guaranteeRequest.value["playerQQ"];
    confirmRequest["playerName"] = guaranteeRequest.value["playerName"];

    if (!checkDataNotNull(confirmRequest)) {
        showBox(warnCard, 2, {
            type: "warn",
            text: "请填写全部信息",
        });
    } else {
        checkPlayerName(confirmRequest["playerName"]);
    }
}

const bgStonePatterns = ref({
    height: undefined,
    list: [],
});
const examBg = useTemplateRef("examBg");
watch(examBg, (newExamBg) => {
    console.log(examBg);
    console.log(examBg.value);
    console.log(newExamBg);
    console.log(newExamBg.value);

    if (newExamBg) {
        generatePatterns(examBg, bgStonePatterns);
    }
});
const resultPage = ref("getInfo");

watch(page, (newVal) => {
    if (newVal === "viewResult") {
        resultPage.value = "getInfo";
    }
});

</script>

<template>
    <div class="guarantee">
        <div class="bg"></div>
        <div class="content">
            <div class="title">
                <p>熟人担保</p>
            </div>
            <div class="main">
                <div class="form">
                    <p class="text">
                        该玩家在网站上同意您的请求后您将获得白名单
                    </p>
                    <input type="number" placeholder="对方的QQ号" v-model="guaranteeRequest.guaranteeQQ"
                        :class="{ 'input-red-color': warnCard.display }" />
                    <input type="number" placeholder="您的QQ号" v-model="guaranteeRequest.playerQQ"
                        :class="{ 'input-red-color': warnCard.display }" />
                    <input type="text" placeholder="您的游戏昵称" v-model="guaranteeRequest.playerName"
                        :class="{ 'input-red-color': warnCard.display }" />
                </div>
            </div>
            <div class="end">
                <button type="button" class="minecraft-button button" @click="page = 'choiceGetWhiteListMethod'">
                    <RouterLink to="/">返回</RouterLink>
                </button>
                <button type="button" class="minecraft-button button" @click="oderGuaranteeRequest">
                    提交
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>