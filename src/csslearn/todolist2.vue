<template>
  <div class="main">
    <div class="container">
      <h1>欢迎使用Todo List</h1>

      <TodoAdd :tid="todos.length" @add-todo="addTodo" />
      <TodoFilter :selected="filter" @change-filter="filter = $event" />
      <TodoList :todos="filteredTodos" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

import { Todo } from "../composables/iTodo.js";
import useTodo from "../composables/useTodo.js";


import TodoAdd from "../components/TodoAdd.vue";
import TodoFilter from "../components/TodoFilter.vue";
import TodoList from "../components/TodoList.vue";


const {todos,addTodo}  = useTodo();
// const todos = reactive([]);
// const addTodo = function (todo) {
// 	console.log(todo)
//   if (todo.content !== "") todos.push(todo);
// };


const filter = ref("all");
const filteredTodos = computed(() => {
  switch (filter.value) {
    case "done":
      return todos.filter((todo) => todo.completed);
    case "todo":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
});
</script>

<style scoped>
* {
  /* 怪异盒子模型，将padding和border的值都放在content里面 */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetrica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

.main {
  /*视距 1/100*/
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(216, 243, 214);
}
.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(26, 25, 25, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(229, 230, 235);
}
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #384280;
}
</style>