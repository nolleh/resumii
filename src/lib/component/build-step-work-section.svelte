<script lang="ts">
	import { WorkHistory } from '$lib/store';
	import { getYm } from '$lib/util';

	export let title: string | null = null;
	export let histories: WorkHistory[];
</script>

<section>
	{#if title}
		<h3>{title}</h3>
	{/if}

	<section class="history">
		{#each histories as history}
			<div class="company">
				<div class="company-mark">
					<span class="dot"> </span>
					<b class="company">{@html history.company}</b>
				</div>
				<div>
					<span class="dot"> </span>
					<b
						>{@html history.company}
						[{getYm(history.start)} ~ {getYm(history.end)}]
					</b>
				</div>
				<div class="title">
					{@html history.title}
				</div>
				<div class="desc">
					{@html history.description}
				</div>
			</div>
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
