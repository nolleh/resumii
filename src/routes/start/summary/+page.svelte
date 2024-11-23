<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import Example from '$lib/component/example.svelte';
	import { summary, defaultSummary } from '$lib/store';

	let textareaContent = 'Some text...';

	function saveContent(event: Event) {
		summary.set(textareaContent);
		return true;
	}
</script>

<h2>Summary</h2>

<p>describe yourself, introduction that will be shown first.</p>
<form>
	<textarea bind:value={textareaContent}></textarea>
	<Cta href="/start/work" label="Next" click={saveContent} />
</form>

<Example defaultData={defaultSummary}/>

<style>
	textarea {
		width: 100%;
		height: 150px;
		padding: 12px 20px;
		box-sizing: border-box;
		border: 2px solid #ccc;
		border-radius: 4px;
		background-color: #f8f8f8;
		font-size: 16px;
		resize: none;
	}
</style>
