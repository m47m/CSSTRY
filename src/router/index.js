import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Login1 from "../pages/login1.vue"
import FrostedGlass1 from "../pages/frostedglass1.vue"
import Resume from "../pages/resume.vue"
import CssTry from "../pages/csstry.vue"
import CssLearn from "../pages/csslearn.vue"
import ToDoList from "../csslearn/todolist1.vue"
import TodoList2 from "../csslearn/todoList2.vue"

const routes = [ 
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },    
  {
    path: "/csstry",
    name: "CssTry",
    component: CssTry,
  },
  {  
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login1",
    name: "Login1",
    component: Login1,
  },
  {
    path: "/frostedglass1",
    name: "FrostedGlass1",
    component: FrostedGlass1,
  },
  {
    path: "/csslearn",
    name: "CssLearn",
    component: CssLearn,
  },
  // {
  //   path: "/todolist1",
  //   name: "TodoList",
  //   component: ToDoList,
  // },
  {
    path: "/todolist",
    name: "TodoList2",
    component: TodoList2,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;