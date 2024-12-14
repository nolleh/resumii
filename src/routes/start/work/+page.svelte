<script lang="ts">
	import { goto } from '$app/navigation';
	import Cta from '$lib/component/cta.svelte';
	import { WorkHistory, workHistory, defaultWorkHistory, restored } from '$lib/store';
	import { getYm } from '$lib/util';

	let company = '';
	let title = 'Tech Leading Backend Engineer';
	let startedAt = new Date();
	let endedAt = new Date();
	let textareaContent = '';
	let histories: WorkHistory[] = [];

	$: if ($workHistory !== defaultWorkHistory || $restored) {
		histories = $workHistory;
	}

	const add = (_: Event) => {
		histories = [
			...histories,
			new WorkHistory({
				company: company,
				title: title,
				start: startedAt,
				end: endedAt,
				description: textareaContent
			})
		];
	};

	const remove = (_: Event, idx: number) => {
		histories.splice(idx, 1);
		histories = histories;
	};

	const click = (_: Event) => {
		workHistory.set(histories);
		return true;
	};
</script>

<h2>Work History</h2>
<p>Put your work history and press add button until your all career path are written.</p>

<div id="container">
	<form id="basic">
		<fieldset>
			<label> company: <input bind:value={company} placeholder="Some Company.." /> </label>
			<label> started at: <input type="date" bind:value={startedAt} /> </label>
			<label> until at: <input type="date" bind:value={endedAt} /> </label>
			<textarea bind:value={textareaContent} placeholder="Your achievement during works"></textarea>
			<button id="add" on:click={add}>add</button>
		</fieldset>
	</form>

	<div id="list">
		<lu>
			{#each histories as history, idx}
				<li>
					<div class="history-item">
						<div class="history-details">
							{history.company}
							[{getYm(history.start)} ~ {getYm(history.end)}] <br />
							{history.title}
							<hr class="fancy-hr" />
							<span class="description">{history.description}</span>
						</div>
						<button
							class="remove-button"
							on:click={(e) => {
								remove(e, idx);
							}}>Remove</button
						>
					</div>
				</li>
			{/each}
		</lu>
	</div>
</div>
<Cta href="/start/lang" label="Next" {click} />

<button
	class="default-btn"
	on:click={() => {
		workHistory.set(defaultWorkHistory);
		goto('/start/lang');
	}}>default</button
>

<!-- <Example defaultData={defaultWorkHistory} /> -->

<style lang="scss">
	@use '$style/variables' as *;
	@use '$style/mixins' as *;

	#container {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	@include media-query($md) {
		#container {
			flex-direction: column;
		}
	}

	#basic {
		max-width: 760px;
		/* flex: 1; */
	}

	#basic fieldset {
		/* margin: 0 auto; */
		max-width: 560px;
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	@media (min-width: 600px) {
		fieldset {
			width: 560px;
		}
	}

	#basic fieldset * {
		margin-top: 12px;
	}

	#list {
		border-radius: 4px;
		flex: 1;
		min-width: 200px;
	}

	#add {
		border-radius: 4px;
		background-color: #008cba; /* Match the label color */
		color: white; /* White text */
		padding: 10px 20px;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	#add:hover {
		background-color: #007ba7; /* Slightly darker blue on hover */
	}

	#add:active {
		box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.2); /* Shadow in the right upper corner */
		transform: translate(1px, 1px); /* Slightly move the button to enhance the press effect */
	}

	label {
		max-width: 500px;
		color: #008cba;
		/* to allow width setting */
		display: block;
		margin-left: auto;
		margin-right: auto;
		font-weight: bold;
	}

	input {
		width: 300px;
		padding: 8px 10px;
		box-sizing: border-box;
		border: 2px solid #ccc;
		border-radius: 4px;
		background-color: #f8f8f8;
		resize: none;
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

	li {
		list-style-type: none; /* Remove default bullet */
		position: relative; /* Position for custom bullet */
		background-color: #f0f8ff; /* Light blue background */
		border: solid 1px #008cba; /* Match the label color */
		border-radius: 8px;
		padding: 10px; /* Adjust padding for better layout */
		margin-bottom: 10px;
		color: #333; /* Dark text for contrast */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s ease;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.history-details {
		flex-grow: 1;
	}

	.default-btn {
		width: fit-content;
	}

	.remove-button {
		border-radius: 4px;
		background-color: #800080; /* Purple color for remove action */
		color: white;
		padding: 8px 16px;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.remove-button:hover {
		background-color: #6a006a; /* Darker purple on hover */
	}

	.remove-button:active {
		box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.2);
		transform: translate(1px, 1px);
	}

	.fancy-hr {
		border: none;
		height: 1px;
		background: linear-gradient(to right, #008cba, transparent);
		margin: 10px 0;
	}

	.description {
		display: inline-block;
		max-width: 500px; /* Set a maximum width */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/**/
	/* li::before { */
	/* 	content: '•';  */
	/* 	color: #008cba;  */
	/* 	font-size: 20px;  */
	/* 	position: absolute; */
	/* 	left: 10px;  */
	/* 	top: 50%; */
	/* 	transform: translateY(-50%); */
	/* } */

	li:hover {
		background-color: #e0f0ff; /* Slightly darker on hover */
	}
</style>
