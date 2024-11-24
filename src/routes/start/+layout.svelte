<script lang="ts">
	import Progress from '$lib/component/progress.svelte';
	let { children } = $props();
</script>

<div class="layout">
	<h1>Resumii</h1>
	<Progress />

	<p>
		Press progress button to proceed that step. <br />
		You can press anytime the 'Result' button to see your intermediate Resume. If press 'Next' button
		each step, the written step data applied to 'Result' <br />
		Press 'Default' button in each step to set example data for that step. (If you want to erase that
		step's data)
	</p>
	{@render children()}
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: 2em;
		text-transform: uppercase;
		color: #00b3b4;
		text-shadow:
			3px 3px 0px #e7eef1,
			8px 8px 0px rgba(0, 0, 0, 0.1);
	}
</style>
