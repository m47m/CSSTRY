<template>
  <div class="bottom">
    <div class="right-button" @click="goPage('/')">
      <span> JOBTRY </span>
    </div>
    <div class="right-button" @click="goPage('/csstry')">
      <span> CSSTRY </span>
    </div>
    <div class="right-button" @click="goBlog()">
      <span> BLOGTRY </span>
    </div>
    <div class="right-button" @click="goPage('/csstry')">
      <span> LIFETRY </span>
    </div>
    <div class="right-button" @click="goPage('/csstry')">
      <span> SOMETRY </span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goPage = (path) => {
  router.push({
    path: path,
  });
};  
const goBlog =()=>{
  window.open('http://xier.xm130812.one/');
}
</script>

<style scoped>
.bottom {
  position: fixed;
  padding: 10px;
  right: 2%;
  bottom: 7%;
  /* background-color: blue; */
}
.right-button {
  cursor: pointer;
  margin-bottom: 12px;
  width: 120px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%);
  transition: 0.5s;
  border-radius: 3px;
  text-align: center;
  /* color: #4a4a4a; */
}
.right-button:hover {
  width: 200px;
}

.right-button > span {
  font: 600 18px "";
}
.right-button:hover > span {
  font-style: italic;
}
</style>