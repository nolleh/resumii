<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import Example from '$lib/component/example.svelte';
	import { Summary, summary, defaultSummary } from '$lib/store';

	let title = 'Software Developer';
	let textareaContent = '';

	function saveContent(event: Event) {
		summary.set(
			new Summary({
				title: title,
				content: textareaContent
			})
		);
		return true;
	}
</script>

<h2>Summary</h2>
<p>Describe yourself, introduction that will be shown first.</p>

<form action="/start/skill">
	<textarea bind:value={textareaContent} placeholder="Text that well introduce yourself."
	></textarea>
	<Cta label="Next" click={saveContent} />
	<button class="default-btn" on:click={() => summary.set(defaultSummary)}>default</button>
</form>

<Example title={defaultSummary.title} defaultData={defaultSummary.content} />

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
