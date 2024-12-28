<script lang="ts">
  import StepList from '$lib/components/step-list.svelte';
  import { education, defaultEdus } from '$lib/store';
</script>

<StepList stepTitle="Educations" store={education} defaultStore={defaultEdus} next="/start/cert" />
