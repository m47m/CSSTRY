<!--翻转卡片 Login-->
<template>
  <div class="shell">
    <div class="top">
      <span class="off" :style="{ opacity: off_opac }">SIGN IN</span>
      <div @click="tran" class="button">
        <div class="ball" :style="{ left: ball_pos + '%  ' }"></div>
      </div>
      <span class="on" :style="{ opacity: on_opac }">SIGN UP</span>
    </div>

    <div class="bottom" :style="{ transform: tranY }">
      <div class="signIn">
        <h2>Sign in</h2>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button @click="gohome()">GO</button>
      </div>
      <div class="signUp">
        <h2>Sign up</h2>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm password" />
        <button @click="gohome()">GO</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
onBeforeMount(() => {
   document.body.setAttribute("style", "background: #000000");
  //document.body.setAttribute("style", "background: linear-gradient(to left,rgb(228, 148, 148),rgb(154, 127, 250))");
  
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});
const index = ref(0);
const ball_pos = ref(0);
const on_opac = ref(0.5);
const off_opac = ref(1);
const tranY = ref("rotateY(0deg)");
const tran = () => {
  if (index.value == 0) {
    index.value = 1;
    ball_pos.value = 61;
    on_opac.value = 1;
    off_opac.value = 0.5;
    tranY.value = "rotateY(180deg)";
  } else {
    index.value = 0;
    ball_pos.value = 0;
    on_opac.value = 0.5;
    off_opac.value = 1;
    tranY.value = "rotateY(0deg)";
  }
  console.log(index.value);
};
const router = useRouter();
const gohome = ()=>{
   router.go(-1)
   console.log("返回上一页")
}
</script>

<style scoped>
.shell {
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  perspective: 1000px;
  /* 给最外层加上一个透视，否则接下去的翻转会没有3d的效果 */
}

.top {
  width: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-radius: 8px;
  /* background-color: rgb(42, 43, 57); */
  display: flex;
  cursor: pointer;
  justify-content: space-evenly;
}

.off,
.on {
  color: #fff;
  transition: 0.5s;
  font: 300 20px "";
}
/* .on {
  opacity: 0.5;
} */
.button {
  width: 60px;
  height: 25px;
  background-color: rgb(255, 235, 167);
  border-radius: 20px;
  position: relative;
}
.ball {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: rgb(42, 43, 57);
  border-radius: 50%;
  transition: 0.5s;
  box-shadow: 0 0 10px rgb(25, 25, 31);
  transform: translate(-1px);
}

.bottom {
  width: 350px;
  height: 300px;
  background-image: url(../assets/img/login1_background.png) ;
  background-size: 100% 100%;
  transform-style: preserve-3d;
  /* 使元素呈现出3D效果 */
  position: relative;
  transition: 0.7s;
  border-radius: 5px;
}

.bottom > div {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.bottom > div h2 {
  color: white;
}
.bottom > div input {
  width: 220px;
  height: 35px;
  padding: 0 10px;
  margin-bottom: 20px;
  background-color: rgb(31, 32, 41);
  color: #fff;
}

.bottom > div button {
  width: 80px;
  height: 30px;
  color: #333;
  font-size: 15px;
  background-color: rgb(255, 235, 167);
  border-radius: 4px;
  transition: 0.3s;
  /* margin-bottom: 10px; */
  cursor: pointer;
  box-shadow: 0 0 10px rgb(212, 193, 128);
}
/* .bottom > div button:hover {
} */
.signIn {
  transform: translateZ(70px);
  /* 在这里我们将卡片里面内容和卡片有一个距离，这样子会更有立体感 */
}

.signUp {
  position: absolute;
  top: 0;
  transform: translateZ(-70px) rotateY(180deg);
  /* 我们给反面加上距离的时候，前往不要忘记给反面的内容也翻转一下，否则就会出现这种卡片转过来了，里面的内容也反了 */
}
</style>