import { async } from "@kangc/v-md-editor";
import { onMounted, reactive } from "vue"
import TodoListItemVue from "../components/TodoListItem.vue"
import { Todo } from "./iTodo"


export default function useTodo() {

	const todos = reactive([]);
	const addTodo = function (todo) {
		console.log(todo)
		if (todo.content !== "") todos.push(todo);
	};
	
	const fetchTodos =async()=>{
		todos.push({
			id:0,
			content:"完成毕设",
			completed:false
		})
	}

	onMounted(()=>{
		fetchTodos();
	})

	return{
		todos,
		addTodo
	}
}