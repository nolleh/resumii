<script lang="ts">
	import { user, summary, workHistory, skill, language, education, certification, accomplishment } from '$lib/store';
	import StepSection from '$lib/component/step-section.svelte';
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
		<StepSection content={$summary}></StepSection>
		<StepWorkSection title="Work History" histories={$workHistory}></StepWorkSection>
		<!-- <StepSection title="Skill" content={$skill}></StepSection> -->
		<!-- <StepSection id="Language" content={$language}></StepSection> -->
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
