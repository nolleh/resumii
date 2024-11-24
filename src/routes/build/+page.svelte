<script lang="ts">
	import {
		user,
		summary,
		workHistory,
		skill,
		language,
		education,
		certification,
		accomplishment
	} from '$lib/store';
	import StepSection from '$lib/component/step-section.svelte';
  import StepLevel from '$lib/component/step-level.svelte';
	import StepWorkSection from '$lib/component/step-work-section.svelte';
</script>

<link rel="stylesheet" href="src/routes/build/build.scss" />
<div class="content">
	<div class="left"></div>
	<div class="right">
		<h1>{@html $user.name}</h1>
		<h2>{@html $user.professionalTitle}</h2>
		<div id="to">
			<!-- <img src="place"/>  -->
			{@html $user.city} <br />
			<!-- <img src="mail"/>  -->
			{@html $user.email}
		</div>
		<StepSection title={$summary.title} content={$summary.content}></StepSection>
		<StepLevel title="Skills" levels={$skill}></StepLevel>
		<StepWorkSection title="Work History" histories={$workHistory}></StepWorkSection>
		<StepLevel title="Languages" levels={$language}></StepLevel>
		<StepSection title="Education" content={$education}></StepSection>
		<StepSection title="Certification" content={$certification}></StepSection>
		<StepSection title="Accomplishment" content={$accomplishment}></StepSection>
	</div>
</div>

<style>
	#to {
		display: flex;
		flex-direction: column;
		align-items: left;
	}
</style>
