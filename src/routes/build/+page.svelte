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
	import StepSection from '$lib/component/build-step-section.svelte';
	import StepLevel from '$lib/component/build-step-level.svelte';
	import StepWorkSection from '$lib/component/build-step-work-section.svelte';
	import StepDotSection from '$lib/component/build-step-dot-item.svelte';
</script>

<!-- <link rel="stylesheet" href="src/routes/build/build.scss" /> -->
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
		<StepDotSection title="Education" histories={$education}></StepDotSection>
		<StepDotSection title="Certification" histories={$certification}></StepDotSection>
		<StepDotSection title="Accomplishment" histories={$accomplishment}></StepDotSection>
	</div>
</div>

<style>
	#to {
		display: flex;
		flex-direction: column;
		align-items: left;
	}

	:root {
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;

		/* color-scheme: light dark; */
		/* color: rgba(255, 255, 255, 0.87); */
		/* background-color: #242424; */

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html,
	body {
		height: 100%;
		width: 100%;
		margin: 0;
		display: flex;
		min-width: 320px;
		min-height: 100vh;

		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	@media (max-width: 1000px) {
		h1 {
			font-size: 2.5em;
		}
	}

	.app {
		width: 100%;
		height: 100%;
	}

	.content {
		display: flex;
		overflow-y: auto;
	}

	.left {
		width: 20%;
		background: #135;
		overflow-y: auto;
		align-self: stretch;
	}

	@media (max-width: 1000px) {
		.left {
			width: 35%;
		}
	}

	@media print {
		.left {
			width: 50%;
			background: #135;
			overflow-y: auto;
			align-self: stretch;
		}
		.right {
			width: 100%;
		}
	}

	.right {
		padding-left: 1rem;
		padding-bottom: 2rem;
	}

	.skill-item {
		display: flex;
		padding: 5px;
	}

	.score {
		flex-direction: column;
		display: flex;
		flex: 1 1 auto;
		padding-right: 2rem;
		align-items: flex-end;
	}

	.dot {
		height: 15px;
		width: 15px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		margin-right: 3px;
	}

	.company {
		padding: 15px 0px;
	}

	.company-mark {
		position: absolute;
		left: 20px;
		color: #ddd;
	}

	.company .title {
		font-weight: bold;
	}

	.company .title,
	.desc {
		margin: 10px;
	}

	.fluent {
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #147;
		margin-right: 3px;
	}
</style>
