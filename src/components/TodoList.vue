<template>
  <div class="todo-list">
    <TodoListItem 
    v-for="todo in todos"
     :key="todo.id" 
     :todo-item="todo"
     @change-state="todo.completed = $event.target.checked">
    </TodoListItem>
  </div>
</template>


<script setup>

import {Todo} from '../composables/iTodo'
import TodoListItem from './TodoListItem.vue';
const props = defineProps({
		todos:Array
});
</script>
<style scoped>
.todo-list{
  display: grid;
  row-gap: 14px;
}


</style>