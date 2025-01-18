<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="choice-method-page">
      <img class="logo" src="../assets/images/logo.png" />
      <div class="menu">
        <button class="minecraft-button choice-button" @click="page = 'guarantee'">
          <RouterLink to="/guarantee">熟人担保</RouterLink>
        </button>
        <button class="minecraft-button choice-button" @click="page = 'prepareForTheExam'">
          <RouterLink to="/prepareForTheExam">参加考试</RouterLink>
        </button>
        <div class="sub-menu">
          <button class="minecraft-button choice-button">
            <a href="http://www.fsp.ink">返回主页</a>
          </button>
          <button @click="page = 'viewResult'" class="minecraft-button choice-button">
            查询结果
          </button>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>