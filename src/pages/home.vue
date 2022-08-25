<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, onBeforeUnmount, onMounted, ref, useAttrs } from "vue";
onBeforeMount(() => {
  document.body.setAttribute("style", "background: rgb(243, 230, 241)");
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});
const router = useRouter();

const arr = ref([[]]);

onMounted(() => {
  var n = 5
  var len = msg.length
  var lineNum = len % n === 0 ? len / 4 : Math.floor(len / 4 + 1)
  for (var i = 0; i <lineNum; i++) {
    arr.value[i] = ref([])
    arr.value[i] = msg.slice(i * n, i * n + n)
  }

  console.log(arr.value[0])
});

const msg = [
  {
    id: 1,
    img: new URL("../assets/login1.jpg", import.meta.url).href,
    name: "翻转卡片Login",
    path: "/login1",
  },
  {
    id: 2,
    img: new URL("../assets/frostedglass1.jpg", import.meta.url).href,
    name: "毛玻璃",
    path: "/frostedglass1",
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
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
   {
    id: 6,
    img: new URL("../assets/img (5).jpg", import.meta.url).href,
    name: "Lyric",
    path: "/login1",
  },
];
const say = (path) => {
  
  router.push({
    path: path,
  });
};
</script>

<template >
  <div class="body">
    <div class="shell" v-for="(usrArr,i) in arr" :key="i">
      <div
        class="box"
        v-for="(user, i) in usrArr"
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
</style>