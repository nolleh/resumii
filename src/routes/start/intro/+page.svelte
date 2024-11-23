<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import Example from '$lib/component/example.svelte';
	import { user, User, defaultUser } from '$lib/store';

	let name: string,
		comment: string,
		email: string,
		city: string = '';

	function saveContent(event: Event) {
		user.set(
			new User({
				name: name,
				professionalTitle: comment,
				city: city,
				email: email
			})
		);
		return true;
	}
</script>

<h2>Intro</h2>
<p>put your basic information</p>

<form id="basic">
	<fieldset>
		<label>name: <input bind:value={name} /></label>
		<label>professional title: <input bind:value={comment} /></label>
		<label>email: <input bind:value={email} /></label>
		<label>city: <input bind:value={city} /></label>
		<p>
			<Cta href="/start/summary" label="Next" click={saveContent} />
		</p>
	</fieldset>
</form>

<Example defaultData={defaultUser} />

<style>
	/* #basic { */
	/* 	display: flex; */
	/* 	justify-content: center; */
	/* } */

	#basic fieldset {
		width: 560px;
		/* margin: 0 auto; */
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	#basic p {
		margin-top: 20px;
	}

	label {
		margin-top: 20px;
		width: 500px;
		color: #008cba;
    /* to allow width setting */
		display: inline-block; 
		margin-left: auto;
		margin-right: auto;
		text-align: right;
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
</style>
