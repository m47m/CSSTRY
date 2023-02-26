
<template >
  
  <Introduce20231/>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view/>
</template>


<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, onBeforeUnmount, onMounted, ref, useAttrs } from "vue";
import Introduce20231 from "../components/introduce2023_1.vue"

const router = useRouter();

const arr = ref([[]]);
//渲染页面body的背景色
onBeforeMount(() => {
  document.body.setAttribute("style", "background: rgb(255, 255, 255)");
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});

onMounted(() => {});

//跳转到响应页面
const say = (path) => {
  router.push({
    path: path,
  });
};
</script>

<style scoped>
</style>