<template>
	<div class="filters">
		 <span 
		 v-for="filter in filters"
		 :key="filter.value"
		 class="filter"
		 :class="{active: selected === filter.value}"
			@click="$emit('change-filter',filter.value)"
		 >{{filter.label}}
		 </span>
 </div>
 </template>


<style scoped>


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

	cursor: pointer;
}

.filters .filter.active{
  color: #6b729c;
  /**实现缩放效果 */
  transform: scale(1.2);
}


</style>

<script setup>

// const changeFilter = function(value){
// 	console.log(value)
// 	$emit('change-filter', value);
// }

const filters = [
  { label: "全部11", value: "all" },
  { label: "已完成", value: "done" },
  { label: "未完成", value: "todo" },
];

const props = defineProps({
  selected: String,
});
</script>