<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import Example from '$lib/component/example.svelte';
	import { user, User, intro } from '$lib/store';

	let textareaContent = 'Some text...';

	user.set(
		new User({
			name: 'kyeongmi kim',
			headComment: 'GameServer / Backend Programmer',
			city: 'Seongnam-si',
			email: 'nolleh7707@gmail.com'
		})
	);

	function saveContent(event: Event) {
		intro.set(textareaContent);
		return true;
	}
</script>

<h2>Intro</h2>

<p>
	<strong>Tip:</strong> Use the resize property to prevent textareas from being resized (disable the
	"grabber" in the bottom right corner):
</p>
<p>put your introduction that will be shown first.</p>
<form>
	<textarea bind:value={textareaContent}></textarea>
	<Cta href="/start/work-history" label="Next" click={saveContent} />
</form>

<Example />

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
