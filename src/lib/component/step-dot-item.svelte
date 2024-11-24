<script lang="ts">
	import { WorkHistory } from '$lib/store';

	export let title: string | null = null;
	export let histories: WorkHistory[];
</script>

<link rel="stylesheet" href="src/routes/build/build.scss" />
<section>
	{#if title}
		<h3>{title}</h3>
	{/if}

	<section class="history">
		{#each histories as history}
			<div>
				<span class="dot"> </span>
				<b>{@html history.title} </b>
			</div>
			{@html history.description}
		{/each}
	</section>
</section>

<style lang="scss">
	section {
		margin-top: 13px;
	}
</style>
