<template>
  <div class="main">
    <div class="container">
      <h1>ToDo</h1>
      <div class="add-todo">
        <input type="text" name="todo" />
        <button>
          <i class="add-icon"></i>
        </button>
      </div>

      <div class="filters">
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未全部</span>
      </div>

      <div class="todo-list">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            写开发Todo List的文章
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            写开发Todo List的文章
            <span class="check-button"></span>

          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* 怪异盒子模型，将padding和border的值都放在content里面 */
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  font-family: Helvetrica,"PingFang SC", "Microsoft Yahei", sans-serif;
}

.main{
  /*视距 1/100*/
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(216, 243, 214);
}
.container{
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(26,25,25,0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color:rgb(229, 230, 235);

}
h1{
  margin: 24px 0;
  font-size: 28px;
  color: #384280;
}

.add-todo{
  position: relative;
  display: flex;
  align-items: center;
}

.add-todo input{
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;

}

.add-todo button{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: linear-gradient(#b6f1a2, #6df86d);
  border: none;
  outline: none;

  color: white;
  position: absolute;
  right: 0px;

  cursor: pointer;
}

.add-todo .add-icon{
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;

}

.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}


.filters .filter{
  margin-right: 14px;
  transition: 0.8s;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter.active{
  color: #6b729c;
  /**实现缩放效果 */
  transform: scale(1.2);
}

/* todo 列表 */
.todo-list {
  display: grid;
  row-gap: 14px;
}
 
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}
 
.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}
 
.todo-item label span.check-button {
  position: absolute;
  top: 0;
}
 
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
 
.todo-item label span.check-button::before {
  border: 1px solid #7ad86d;
}
 
.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #7ad86d;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}
 
.todo-item input {
  margin-right: 16px;
  opacity: 0;
}
 
.todo-item input:checked + span.check-button::after {
  opacity: 0.8;
}

</style>