<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import { skill } from '$lib/store';

	const click = (event: Event) => {
		return true;
	};
</script>

<form>
	<!-- <textarea bind:value={textareaContent}></textarea> -->
	<Cta href="/start/lang" label="Next" {click} />
</form>
