<script lang="ts">
  import StepList from '$lib/components/step-list.svelte';
  import { certification, defaultCerts } from '$lib/store';
</script>

<StepList
  stepTitle="Certifications"
  store={certification}
  defaultStore={defaultCerts}
  next="/start/accm"
/>
