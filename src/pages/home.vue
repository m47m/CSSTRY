<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
onBeforeMount(() => {
  document.body.setAttribute("style", "background: rgb(243, 230, 241)");
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});
const router = useRouter();

const msg = [
  {
    id: 1,
    img: new URL("../assets/login1.jpg", import.meta.url).href,
    name: "翻转卡片Login",
    path: "/login1",
  },
  {
    id: 2,
    img: new URL("../assets/img (2).jpg", import.meta.url).href,
    name: "Video",
    path: "/login1",
  },
  {
    id: 3,
    img: new URL("../assets/img (3).jpg", import.meta.url).href,
    name: "File",
    path: "/login1",
  },
  {
    id: 4,
    img: new URL("../assets/img (4).jpg", import.meta.url).href,
    name: "Music",
    path: "/login1",
  },
  {
    id: 5,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
  {
    id: 5,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
];
const say = (path) => {
  //函数也可以直接引用,而不用返回
  router.push({
    path: path,
  });
  console.log(data);
};
</script>

<template >
  <div class="body">
    <div class="shell">
      <div
        class="box"
        v-for="(user, i) in msg"
        :key="i"
        @click="say(user.path)"
      >
        <img :src="user.img" />
        <span>{{ user.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .body {
  display: flex;
  height: 100vh;
  margin-top: 80px; 
} */
.shell {
  margin: 0 auto;
  width: 70%;
  height: 300px;
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
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 10px solid #fff;
  background-color: #fff;
}
.box > img {
  width: 100%;
  height: 85%;
  object-fit: cover;
  transition: 0.5s;
}
.box > span {
  font: 200 15px "优设标题黑";
  text-align: center;
  height: 15%;
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
</style>