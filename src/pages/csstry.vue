<script setup>
import { useRouter } from "vue-router";
import { getListAPI } from "../api/test";
import { onBeforeMount, onBeforeUnmount, onMounted, ref, useAttrs } from "vue";

const router = useRouter();

const arr = ref([[]]);
//渲染页面body的背景色
onBeforeMount(() => {
  document.body.setAttribute("style", "background: rgb(247, 247, 247)");
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});

//根据相对路径获取图片
function getImage(src) {
  return new URL(src, import.meta.url).href;
}

onMounted(() => {
  //获得所有页面列表
  getListAPI().then((res) => {
    console.log(res.msg);
    let msg = res.msg;
    var n = 5;
    var len = msg.length;
    var lineNum = len % n === 0 ? len / 4 : Math.floor(len / 4 + 1);
    for (var i = 0; i < lineNum; i++) {
      arr.value[i] = ref([]);
      arr.value[i] = msg.slice(i * n, i * n + n);
    }
  });
  console.log(arr.value[0]);
});

//跳转到响应页面
const say = (path) => {
  router.push({
    path: path,
  });
};
</script>

<template >
  <div class="body">
    <div class="map-context-bar">
      <div class="marked">
        <div> Some </div>
        <div> of </div>
        <div> the  </div>
        <div> things   </div>
        <div> I  </div>
        <div> copied </div>
      </div>
    </div>
    <div class="map-context-shell">
      <div class="shell" v-for="(usrArr, i) in arr" :key="i">
        <div
          class="box"
          v-for="(user, i) in usrArr"
          :key="i"
          @click="say(user.path)"
        >
          <img :src="getImage(user.img)" />
          <span>{{ user.name }}</span>
        </div>
      </div>
    </div>
    <div class="map-context-bar"></div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
}
.map-context-bar {
  flex: 1;
}
.map-context-shell {
  flex: 5;
}
.shell {
  margin: 0 auto;
  width: 90%;
  height: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}
.box {
  /* width: 250px; */
  cursor: pointer;
  flex: 1;
  height: 280px;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 15px;
  box-shadow: 10px 10px 15px rgba(138, 136, 136, 0.5);
  border-radius: 20px;
  border: 8px solid #fff;
  background-color: #fff;
}
.box > img {
  width: 100%;
  height: 90%;
  object-fit: cover;
  transition: 0.5s;
}
.box > span {
  font: 200 14px "宋体";
  text-align: center;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box:hover {
  flex-basis: 50%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
.marked{
  position:fixed;
  left: 3%;
  top: 10%;
  text-align: right;
}
.marked > div{
  font: 900 35px "";
  color: rgba(0, 0, 0, 0.5);
}
</style>