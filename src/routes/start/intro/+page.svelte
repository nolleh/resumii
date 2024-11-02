<script lang='ts'>
  import Cta from '$lib/component/cta.svelte';
</script>
<h2>Intro</h2>

<p><strong>Tip:</strong> Use the resize property to prevent textareas from being resized (disable the "grabber" in the bottom right corner):</p>

<form>
  <textarea>Some text...</textarea>
</form>

<Cta href='/start/summary' label='Next' />

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


