<template>
  <div class="card">
    <div class="card-context">
      <span> 功能测试页面 </span>
    </div>
  </div>
  <div>
    <div class="bottom">
      <div class="right-button">
        <span> CSSTRY </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref, useAttrs } from "vue";
//渲染页面body的背景色
onBeforeMount(() => {
  document.body.setAttribute("style", "background: rgb(247, 247, 247)");
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});
</script>

<style scoped>
.card {
  width: 60%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%);
  color: #4a4a4a;
  position: relative;
  margin: 0 auto;
}
.card-context {
  background-color: transparent;
  padding: 10px;
  text-align: center;
}
.card-context span {
  font: 350 18px "";
}
.bottom {
  position: fixed;
  right: 10%;
  bottom: 50%;
}
.right-button {
  cursor: pointer;
  width: 100px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(138, 136, 136, 0.5);
  transition: 0.5s;
  border-radius: 3px;
  text-align: center;
  /* color: #4a4a4a; */
}
.right-button:hover {
  width: 150px;
}

.right-button > span {
  font: 600 18px "";
}
.right-button:hover > span {
  font-style: italic;
}
</style>