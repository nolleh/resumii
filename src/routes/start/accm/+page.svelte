<script lang="ts">
	import StepList from '$lib/component/step-list.svelte';
	import { accomplishment, defaultAccoms } from '$lib/store';
</script>

<StepList store={accomplishment} defaultStore={defaultAccoms} next="/build" />
