<template>
  <div class="add-todo">
    <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo"> 
      <i class="add-icon"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
	const todoContent = ref("");
	const props = defineProps({
		tid:Number
	});

	const emit = defineEmits(['add-todo']);

	const emitAddTodo = ()=>{
		const todo ={
			id:props.tid,
			content:todoContent.value,
			completed:false
		}

		emit('add-todo',todo);

		todoContent.value=''
	}
</script>

<style scoped>

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
</style>