<script setup lang="ts">
const { show, dialogType, dialogStyle } = defineProps({
  show: Boolean,
  dialogType: String,
  dialogStyle: Object,
});
</script>

<template>
  <Teleport to="body">
    <div class="dialog" :class="[dialogType, { 'dialog-show': show, 'dialog-close': !show }]" :style="dialogStyle">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.dialog {
  width: 600px;
  height: 120px;
  display: block;
  position: fixed;
  image-rendering: pixelated;
  font-family: 'mc-font';
  font-size: 23px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 5px;
  z-index: 100;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  transition:
    opacity 0.3s ease-in-out,
    bottom 0.3s ease-in-out;
}
.dialog-show {
  bottom: 150px;
  opacity: 1;
  visibility: visible;
}
.dialog-close {
  bottom: 120px;
  opacity: 0;
  visibility: hidden;
}

/* 别删，会出问题，我也不知道为什么！ */
.warn-card {
  color: #cbcbcb;
  background-image: url(../assets/images/rainbow_pixel_gui/system_info.png);
}
/* 别删，会出问题，我也不知道为什么！ */
.info-card {
  color: #313131;
  background-image: url(../assets/images/vanilla_gui/demo_background.png);
}
.book-card {
  color: #313131;
  background-image: url(../assets/images/vanilla_gui/book.png);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: min(800px, 95%);
}
@media (max-width: 800px) {
  .dialog {
    width: 95%;
  }
}
</style>
