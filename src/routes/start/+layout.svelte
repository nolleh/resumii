<script lang="ts">
	import { goto } from '$app/navigation';
	import Progress from '$lib/component/progress.svelte';
	let { children } = $props();

</script>

<div class="layout">
	<button class="title-button" on:click={() => goto('/')}>Resumii</button>
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

	.title-button {
    position: relative;
		font-size: 2em;
		text-transform: uppercase;
		color: #00b3b4;
		text-shadow:
			3px 3px 0px #e7eef1,
			8px 8px 0px rgba(0, 0, 0, 0.1);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		display: inline-block;
		font-weight: bold;
		font-family: Times;
		width: auto; /* Ensure the button width is auto */
		max-width: max-content; /* Ensure the button does not expand beyond its content */
	}

	.title-button:hover {
		color: #00a0a1;
	}

  .title-button:active {
    color: #00a0a1;
    top: 3px;
    left: 3px;
		text-shadow:
			5px 5px 0px rgba(0, 0, 0, 0.1);
  }
</style>
