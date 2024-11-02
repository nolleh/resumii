<script lang='ts'>
	import Cta from '$lib/component/cta.svelte';
  import { intro, summary } from '$lib/store';
  console.log($intro);

	let textareaContent = 'Some text...';
  const click = (event: Event) => {
		summary.set(textareaContent);
    return true;
  };

</script>

<Cta href='./start/work-history' label='Next' {click} />

