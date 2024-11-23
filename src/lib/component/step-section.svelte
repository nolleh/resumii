<script lang="ts">
	export let title: string | null = null;
	export let content: string;
</script>

<link rel="stylesheet" href="src/routes/build/build.scss" />
<section>
	{#if title}
		<h3>{title}</h3>
	{/if}
	{@html content}
</section>

<style lang="scss">
	section {
		margin-top: 13px;
	}
</style>
