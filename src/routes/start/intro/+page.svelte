<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import Example from '$lib/component/example.svelte';
	import { user, User, intro } from '$lib/store';

	let name: string,
		comment: string,
		email: string,
		city: string = '';

	const defaultUser: User = new User({
		name: 'kyeongmi kim',
		headComment: 'GameServer / Backend Programmer',
		city: 'Seongnam-si',
		email: 'nolleh7707@gmail.com'
	});
	user.set(defaultUser);

	function saveContent(event: Event) {
		user.set(
			new User({
				name: name,
				headComment: comment,
				city: city,
				email: email
			})
		);
		console.log('saved', $user);
		return true;
	}
</script>

<h2>Intro</h2>

<p>put your basic information</p>
<form id="basic">
	<fieldset>
		<label>name: <input bind:value={name} /></label>
		<label>email: <input bind:value={email} /></label>
		<label>comment: <input bind:value={comment} /></label>
		<label>city: <input bind:value={city} /></label>
		<p>
			<Cta href="/start/summary" label="Next" click={saveContent} />
		</p>
	</fieldset>
</form>

<Example defaultData = {defaultUser} />

<style>
	#basic {
		width: 500px;
		margin-left: 10px;
	}

	#basic p {
		margin-top: 20px;
	}

	label {
		margin-top: 20px;
		width: 400px;
		color: #008cba;
		display: inline-block; /* to allow width setting */
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
