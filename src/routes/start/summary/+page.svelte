<script lang="ts">
  import Cta from '$lib/components/cta.svelte';
  import Example from '$lib/components/example.svelte';
  import { Summary, summary, defaultSummary, restored } from '$lib/store';

  let title = 'Software Developer';
  let textareaContent = '';

  $: if ($summary !== defaultSummary || $restored) {
    title = $summary.title;
    textareaContent = $summary.content;
  }

  function saveContent(_: Event) {
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
