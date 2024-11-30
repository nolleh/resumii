<script lang="ts">
	import { Summary } from '$lib/store';

	export let title: string | null = null;
	export let histories: Summary[];
</script>

<section>
	{#if title}
		<h3>{title}</h3>
	{/if}

	<section class="history">
		{#each histories as history}
			<div>
				<span class="dot"> </span>
				{#if history.content}
					<b>{@html history.title} </b>
				{:else}
					{@html history.title}
				{/if}
			</div>
			{@html history.content}
		{/each}
	</section>
</section>

<!-- <link rel="stylesheet" href="src/lib/styles/build.scss"/> -->
<style lang="scss">
	@use '$style/build' as *;
	section {
		margin-top: 13px;
	}
</style>
