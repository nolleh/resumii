<script lang="ts">
	import { WorkHistory } from '$lib/store';
	import StepSection from './step-section.svelte';

	export let title: string | null = null;
	export let histories: WorkHistory[];
</script>

<link rel="stylesheet" href="src/routes/build/build.scss" />
<section>
	{#if title}
		<h3>{title}</h3>
	{/if}

	<div class="company">
		{#each histories as history}
			<div class="company-mark">
				<span class="dot"> </span>
				{@html history.company}
			</div>
			<div>
				<span class="dot"> </span>
				{@html history.company}
			</div>
			{@html history.description}
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 13px;
	}
</style>
