<script lang="ts">
	import StepList from '$lib/component/step-list.svelte';
	import { accomplishment, defaultAccoms } from '$lib/store';
</script>

<StepList
	stepTitle="Accomplishments"
	store={accomplishment}
	defaultStore={defaultAccoms}
	next="/build"
/>
