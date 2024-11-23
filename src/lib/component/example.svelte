<script lang="ts">
	export let defaultData: Record<string, any> | string;
</script>

<div>
	<h1>example</h1>
	<p>You can also put html tag to emphasize text. John Doe's example</p>

	<hr class="rounded" />
	{#if defaultData}
		{#if 'string' === typeof defaultData}
			{@html defaultData}
		{:else}
			{#each Object.keys(defaultData) as key}
				<p>
					{key}:
					{@html defaultData[key]}
				</p>
			{/each}
		{/if}
	{/if}
</div>

<style lang="scss">
	div {
		margin: 60px;
		border: 1px solid gray;
		padding: 8px;
	}

	h1 {
		text-align: center;
		text-transform: uppercase;
		color: #4caf50;
	}

	p {
		text-indent: 50px;
		text-align: justify;
		letter-spacing: 3px;
	}
</style>
