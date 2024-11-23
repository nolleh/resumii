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

