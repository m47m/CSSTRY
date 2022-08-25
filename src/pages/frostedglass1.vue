<template>
  <div class="a" @click="gohome()">
    <div class="b">
      <span>TEST</span>
      <P>2022/8/25</P>
    </div>
    <div class="c"></div>
    <div class="d"></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
onBeforeMount(() => {
  //document.body.setAttribute("style", "background: #000000");
  document.body.setAttribute(
    "style",
    "background: linear-gradient(to left,rgb(228, 148, 148),rgb(154, 127, 250))"
  );
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});

const router = useRouter();
const gohome = ()=>{
   router.go(-1)
   console.log("返回上一页")
}
</script>
<style scoped>
.a {
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 250px;
  top: 100px;
}
.b {
  position: absolute;
  width: 400px;
  height: 250px;
  border-radius: 20px;
  /*渐变 */
  background: linear-gradient(
    to right bottom,
    rgba(246, 132, 132, 0.6),
    rgba(134, 245, 213, 0.3),
    rgba(64, 134, 239, 0.2)
  );
  /*元素背景模糊化*/
  backdrop-filter: blur(11px);
  /*上高光和左高光 */
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
}
.b span {
  font: 900 50px "";
  position: absolute;
  /**距下和右各20px */
  bottom: 20px;
  right: 20px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 3px;
}
.b p {
  font: 900 25px "";
  position: absolute;
  top: 10px;
  left: 20px;
  color: rgba(0, 0, 0, 0.5);
  /* 设置文字阴影 */
  /* text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.7); */
}

.c {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: rgb(224 186 111);
  position: absolute;
  top: 140px;
  left: -40px;
  z-index: -99;
}
</style>