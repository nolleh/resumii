<script lang="ts">
	import { user, intro, summary, education, certification, accomplishment } from '$lib/store';
	import StepSection from '$lib/component/step-section.svelte';
</script>

<link rel="stylesheet" href="src/routes/build/build.scss" />
<div class="content">
	<div class="left"></div>
	<div class="right">
		<h1>{$user.name}</h1>
		<h2>{$user.headComment}</h2>
		<div id="to">
			<!-- <img src="place"/>  -->
			{$user.city} <br />
			<!-- <img src="mail"/>  -->
			{$user.email}
		</div>
		<StepSection title="Introduction" content={$intro}></StepSection>
		<StepSection title="Summary" content={$summary}></StepSection>
		<!-- <StepSection content={$workHistory}></StepSection> -->
		<!-- <StepSection content={$skill}></StepSection> -->
		<!-- <StepSection id="language"></StepSection> -->
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
