<template>
	<div class="content">
		<h1>前质</h1>
		<p>这里是动回，或者说是47。我一直想要写这种东西，但是不知如何下手。如今我马上就要离开学校了，该是写一个了。我不想套用模板，想要写出自己的风格。只是可惜我实力有限，又很久没有写过代码了。一步步更新吧，何尝不是一种记录。</p>
		<p>这里并不是工作简历，也不是生平介绍，更像是一个索引。指向每一个我在互联网上留下的痕迹。</p>
		
		<p>
				我的简历：
				<router-link to="/resume" class="link_a">
					(*￣rǒ￣)
			</router-link>
			（尽管我还没有什么东西可以写）
		</p>
		<p>我的学习笔记：<a href="https://logseq.xm130812.one/" target="_blank" class="link_a">(ノへ￣、)</a>（目前还只有我找工作学的面经）</p>

		<p>我的迷思：<a href="https://signal.xm130812.one/" target="_blank" class="link_a" >(～￣(OO)￣)ブ</a>（人的情绪总是无处表达）</p>

		<p>以后可能是我的作品集，但现在只是个练手用的： 
			<router-link to="/csslearn" class="link_a">
				(#`O′)
			</router-link>
		</p>


		<p>互联网是不是要走下坡路了，我也不一定会一直写代码。希望这里能存在的时间长一些吧。</p>
		<p>等我找到工作稳定下来，应该会吧这里变得好看一些。0.o</p>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";

</script>

<style scoped>
.content{
	width: 42%;
	margin: auto;
	padding-top: 3rem;
}
.link_a:visited{
	color: #000;
}
.link_a:hover{
	color: gray;
}
</style>