<script lang="ts">
	export let defaultData: Record<string, any>;
</script>

<div>
	<h1>example</h1>

	{#if defaultData}
		{#each Object.keys(defaultData) as key}
			<p>
				{key}
				{defaultData[key]}
			</p>
		{/each}
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

	a {
		text-decoration: none;
		color: #008cba;
	}
</style>
