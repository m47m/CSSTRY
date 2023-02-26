<template>
  <!-- <div>
    <div class="bottom">
      <div class="right-button" @click="goPage('/csstry')">
        <span> CSSTRY </span>
      </div>
    </div>
  </div> -->
  <div class="body">
    <div class="map-context-bar" >
    </div>  
    <div class="map-context-card">
      <div class="card">
      <div class="card-context">
        <v-md-preview :text="myresume"></v-md-preview>
      </div>
    </div>
    </div>
    <div class="map-context-bar" >
    </div>    
  </div>
</template> 

<script setup >
// import myresume from "/assets/markdown/resume.md";
import { onBeforeMount, onBeforeUnmount ,onMounted,ref} from "vue";
import { useRouter } from "vue-router";
import { getResume } from "../api/test";
const router = useRouter();
//渲染页面body的背景色
onBeforeMount(() => {
  document.body.setAttribute("style", "background: rgb(247, 247, 247)");
});
onBeforeUnmount(() => {
  document.body.removeAttribute("style");
});

const myresume  = ref("# nihao");
onMounted(() => {
  //获得所有页面列表
  getResume().then((res) => {
   myresume.value = res;
  });

});

// const goPage = (path) => {
//   router.push({
//     path: path,
//   });
// };
</script>

<style scoped>
  .body{
    display: flex;
  }
  .map-context-bar{
    flex: 1;
    height: auto;
    /* background-color:aqua; */
  }
  .map-context-card{
    flex: 3;
  }
.card {
  width: 90%;
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
}

</style>