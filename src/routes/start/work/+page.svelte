<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import { WorkHistory, workHistory, defaultWorkHistory } from '$lib/store';

	let company = 'Some Company..';
	let startedAt = new Date();
	let endedAt = new Date();
	let textareaContent = 'Some Text..';
	let histories: WorkHistory[] = [];

	const add = (_: Event) => {
		console.log('add', histories.length);
		histories = [
			...histories,
			new WorkHistory({
				company: company,
				start: startedAt,
				end: endedAt,
				description: textareaContent
			})
		];
	};

	const click = (_: Event) => {
		workHistory.set(histories);
		return true;
	};
</script>

<h2>Work History</h2>
<p>put your work history and press add button until your all career path are written.</p>

<div id="container">
	<form id="basic">
		<fieldset>
			<label> company: <input bind:value={company} /> </label>
			<label> started at: <input type="date" bind:value={startedAt} /> </label>
			<label> until at: <input type="date" bind:value={endedAt} /> </label>
			<textarea bind:value={textareaContent}></textarea>
			<button on:click={add}>add</button>
		</fieldset>
	</form>

	<div id="list">
		{#each histories as history}
			{history.company}
		{/each}
	</div>
</div>
<Cta href="/start/skill" label="Next" {click} />

<!-- <Example defaultData={defaultWorkHistory} /> -->

<style>
	#container {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	@media (max-width: 2000px) {
		#container {
			flex-direction: column;
		}
	}

	#basic {
		width: 760px;
		/* flex: 1; */
	}

	#basic fieldset {
		/* margin: 0 auto; */
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	#basic fieldset * {
		margin-top: 12px;
	}

	#list {
		border: solid 1px #ccc;
		border-radius: 4px;
		flex: 1;
		min-width: 200px;
	}

	label {
		width: 500px;
		color: #008cba;
		/* to allow width setting */
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		font-weight: bold;
	}

	textarea {
		width: 100%;
		height: 150px;
		padding: 12px 20px;
		box-sizing: border-box;
		border: 2px solid #ccc;
		border-radius: 4px;
		background-color: #f8f8f8;
		font-size: 16px;
		resize: none;
	}
</style>
