<script lang="ts">
	import Progress from '$lib/component/progress.svelte';
	let { children } = $props();
</script>

<div class="layout">
	<Progress />

	{@render children()}
</div>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
  }
</style>

<!-- <ul> -->
<!-- 	<li><a href="./start/intro" class={activeClass('intro')}>Intro</a></li> -->
<!-- 	<li><a href="./start/summary" class={activeClass('summary')}>Summary</a></li> -->
<!-- 	<li><a href="./start/work-history" class={activeClass('work')}>WorkHistory</a></li> -->
<!-- 	<li><a href="./start/skills" class={activeClass('skill')}>Skills</a></li> -->
<!-- 	<li><a href="./start/language" class={activeClass('lang')}>Language</a></li> -->
<!-- 	<li><a href="./start/education" class={activeClass('edu')}>Education</a></li> -->
<!---->
<!-- </ul> -->
<!---->
<!-- {@render children()} -->
<!---->
<!-- <style lang="scss"> -->
<!---->
<!-- ul { -->
<!--   list-style-type: none; -->
<!--   margin: 0; -->
<!--   padding: 0; -->
<!--   overflow: hidden; -->
<!--   background-color: #555 -->
<!-- } -->
<!---->
<!-- li { -->
<!--   float: left; -->
<!-- } -->
<!---->
<!-- li a { -->
<!--   display: block; -->
<!--   text-align: center; -->
<!--   padding: 14px 16px; -->
<!--   text-decoration: none; -->
<!--   color: white; -->
<!-- } -->
<!---->
<!-- li a:hover { -->
<!--   background-color: #333 -->
<!-- } -->
<!---->
<!-- .active { -->
<!--   background-color: #fff; -->
<!--   color: #aaa -->
<!-- } -->
<!-- </style> -->
