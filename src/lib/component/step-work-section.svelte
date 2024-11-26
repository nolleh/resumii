<script lang="ts">
	import { WorkHistory } from '$lib/store';
	import { getYm } from '$lib/util';

	export let title: string | null = null;
	export let histories: WorkHistory[];
</script>

<!-- <link rel="stylesheet" href="src/routes/build/build.scss" /> -->
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

<style lang="scss">
	section {
		margin-top: 13px;
	}
	:root {
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		/* color-scheme: light dark; */
		/* color: rgba(255, 255, 255, 0.87); */
		/* background-color: #242424; */

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html,
	body {
		height: 100%;
		width: 100%;
		margin: 0;
		display: flex;
		min-width: 320px;
		min-height: 100vh;

		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	.app {
		width: 100%;
		height: 100%;
	}

	.content {
		display: flex;
		overflow-y: auto;
	}

	.left {
		width: 20%;
		background: #135;
		overflow-y: auto;
		align-self: stretch;
	}

	@media print {
		.left {
			width: 50%;
			background: #135;
			overflow-y: auto;
			align-self: stretch;
		}
		.right {
			width: 100%;
		}
	}

	.right {
		padding-left: 1rem;
		padding-bottom: 2rem;
	}

	.skill-item {
		display: flex;
		padding: 5px;
	}

	.score {
		flex-direction: column;
		display: flex;
		flex: 1 1 auto;
		padding-right: 2rem;
		align-items: flex-end;
	}

	.dot {
		height: 15px;
		width: 15px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		margin-right: 3px;
	}

	.company {
		padding: 15px 0px;
	}

	.company-mark {
		position: absolute;
		left: 20px;
		color: #ddd;
	}

	@media (max-width: 1000px) {
		.company-mark b {
			display: none;
		}
	}

	.company .title {
		font-weight: bold;
	}

	.company .title,
	.desc {
		margin: 10px;
	}

	.fluent {
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #147;
		margin-right: 3px;
	}
</style>
