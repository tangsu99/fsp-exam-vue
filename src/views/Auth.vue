<script setup>
import { ref } from 'vue';
import InfoDialog from '@/components/InfoDialog.vue'
import { login, register } from '@/apis/auth'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()

const store = useUserStore()

const currentTab = ref('login'); // 默认显示登录页面
const loginForm = ref({
    username: '',
    password: ''
});
const registerForm = ref({
    username: '',
    userQQ: '',
    password: '',
    repassword: ''
})

const sendLogin = () => {
    openDialog('登陆中')
    let timeout = delayClose(3000)

    // login({ 'username': loginForm.value.username, 'password': loginForm.value.password })
    store.login({ 'username': loginForm.value.username, 'password': loginForm.value.password })
        .then((res) => {
            if (res.data.code === 0) {
                clearTimeout(timeout)
                openDialog('登录成功! 即将跳转...')
                delayClose(3000, () => {
                    // 获取目标页面路径
                    const redirect = route.query.redirect;
                    // 如果存在目标页面路径，则跳转到该页面；否则跳转到首页
                    if (redirect) {
                        router.push(redirect);
                    } else {
                        router.push({ 'name': 'Main' })
                    }
                })
            } else if (res.data.code === 1) {
                clearTimeout(timeout)
                openDialog(res.data.desc)
                delayClose(3000)
            }
        })
        .catch((err) => {
            clearTimeout(timeout)
            openDialog('登录错误!')
            delayClose(3000)
        })
}

const sendRegister = () => {
    openDialog('提交中')
    let timeout = delayClose(3000)
    register({ 'username': registerForm.value.username, 'userQQ': registerForm.value.userQQ, 'password': registerForm.value.password, 'repassword': registerForm.value.repassword })
        .then((res) => {
            if (res.data.code === 0) {
                clearTimeout(timeout)
                localStorage.setItem('fsp_token', res.data.token)
                openDialog('注册成功! 即将跳转到主页')
                delayClose(3000, () => {
                    router.push({ 'name': 'Main' })
                })
            } else {
                clearTimeout(timeout)
                openDialog(res.data.desc)
                delayClose(3000)
            }
        })
        .catch((err) => {
            clearTimeout(timeout)
            openDialog('注册错误!')
            delayClose(3000)
        })
}

const dialogData = ref({
    display: false,
    type: 'warn-card',
    style: {
    },
    desc: '测试'
})

function openDialog(desc) {
    dialogData.value.display = true
    dialogData.value.desc = desc
}

function delayClose(delay, callback) {
    return setTimeout(() => {
        dialogData.value.display = false
        if (callback) {
            callback()
        }
    }, delay)
}
</script>

<template>
    <InfoDialog :show="dialogData.display" :dialogType="dialogData.type" :dialogStyle="dialogData.style">
        <div style="line-height: 120px; font-size: 40px;">
            <p>{{ dialogData.desc }}</p>
        </div>
    </InfoDialog>
    <div class="login-container">
        <div class="tabs">
            <span :class="{ active: currentTab === 'login' }" @click="currentTab = 'login'">
                登录
            </span>
            <span :class="{ active: currentTab === 'register' }" @click="currentTab = 'register'">
                注册
            </span>
        </div>

        <Transition name="fade" mode="out-in">
            <div v-if="currentTab === 'login'" key="login" class="form">
                <h2>登录</h2>
                <input type="text" placeholder="用户名" v-model="loginForm.username" />
                <input type="password" placeholder="密码" v-model="loginForm.password" />
                <button @click="sendLogin">登录</button>
            </div>
            <div v-else key="register" class="form">
                <h2>注册</h2>
                <input type="text" placeholder="用户名" v-model="registerForm.username" />
                <input type="text" placeholder="QQ" v-model="registerForm.userQQ" />
                <input type="password" placeholder="密码" v-model="registerForm.password" />
                <input type="password" placeholder="确认密码" v-model="registerForm.repassword" />
                <button @click="sendRegister">注册</button>
            </div>
        </Transition>
        <RouterLink to="/">返回主页</RouterLink>
    </div>
</template>

<style>
.login-container {
    width: 400px;
    margin: 8% auto 0;
    padding: 30px 40px;
    border: 1px solid #ccc;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    box-sizing: border-box;
    transition: height .3s ease-in-out;
}

.tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 60px;
    position: absolute;
    top: 0px;
    left: -1px;
    transform: translate(0, -100%);
    z-index: 2;
    background: white;
}

.tabs span {
    background: rgb(240, 240, 240);
    cursor: pointer;
    color: #333;
    font-size: 20px;
    width: 50%;
    line-height: 60px;
    text-align: center;
    border: 1px solid transparent;
    border-bottom: 1px solid #ccc;
    border-radius: 4px 4px 0 0;
}

.tabs span.active {
    background: white;
    border: 1px solid #ccc;
    border-bottom: 1px solid white;
}

.form {
    margin-top: 20px;
}

.form input {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Transition 动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>