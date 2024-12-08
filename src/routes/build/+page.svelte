<script lang="ts">
	import { get } from 'svelte/store';
	import {
		User,
		user,
		Summary,
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

	class Body {
		user: User | null = null;
		summary: Summary | null = null;

		constructor(payload: Partial<Body>) {
			Object.assign(this, payload);
		}
	}
	console.log(get<Summary>(summary));
	async function load(e: any) {
		const file = e.target.files[0];
		if (null == file) return;

		const text = await file.text();
		const body = Object.assign(new Body({}), JSON.parse(text));
		user.set(body.user);
		summary.set(body.summary);
	}

	async function saveResume(event: Event) {
		event.preventDefault();

		const body = new Body({
			user: get<User>(user),
			summary: get<Summary>(summary)
		});

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
			console.error('Failed to save resume');
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
		Press Ctrl + P to save your resume in PDF format. only resume part will be saved. (From this
		message, not saved). <br />
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
<link rel="stylesheet" href="src/lib/style/build.css" />

<style lang="scss">
	@use '$style/build' as *;
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
