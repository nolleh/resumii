<script lang="ts">
	import { onMount } from 'svelte';
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
	import '$lib/style/build.scss';
	import { SaveBody } from '$lib/dto';

	onMount(() => {
		const buildClass = 'build-page';
		document.body.classList.add(buildClass);
		return () => {
			document.body.classList.remove(buildClass);
		};
	});

	async function load(e: any) {
		const file = e.target.files[0];
		if (null == file) return;

		const text = await file.text();
		SaveBody.restoreFromSavedTxt(text);
	}

	async function saveResume(event: Event) {
		event.preventDefault();
		const body = SaveBody.createFromStore();

		const response = await fetch('/build/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (response.ok) {
			const blob = await response.blob();
			const url = URL.createObjectURL(blob);

			// Extract filename from Content-Disposition header
			const contentDisposition = response.headers.get('Content-Disposition');
			const filename =
				contentDisposition?.split('filename=')[1]?.replace(/"/g, '') || 'download.json';

			const a = document.createElement('a');
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);

			console.log('Resume saved successfully');
		} else {
			alert('Failed to save resume');
		}
	}
</script>

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

<section class="hide-in-resume">
	<p>
		Press Ctrl (command) + P to save your resume in PDF format. only resume part will be saved.
		(From this message, not saved). <br />
		And, you can also save this resume by press below button, and then load whenever you need.
	</p>
	<form onsubmit={saveResume}>
		<button type="submit"> Save Current Resume </button>
	</form>
	<label
		>Load Saved Resume
		<input type="file" accept=".json" onchange={load} />
	</label>
</section>

<style lang="scss">
	#to {
		display: flex;
		flex-direction: column;
		align-items: left;
	}

	section {
		padding: 10px;
	}

	label {
		margin-top: 10px;
		display: block;
	}

	@media print {
		.hide-in-resume {
			display: none;
		}
	}
</style>
