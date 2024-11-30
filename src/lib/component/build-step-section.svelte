<script lang="ts">
	export let title: string | null = null;
	export let content: string;
</script>

<section>
	{#if title}
		<h3>{title}</h3>
	{/if}
	{@html content}
</section>

<!-- <link rel="stylesheet" href="src/lib/styles/build.scss"/> -->
<style lang="scss">
  @use "$style/build" as *;
	section {
		margin-top: 13px;
	}
</style>
