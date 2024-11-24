<script lang="ts">
	import Cta from '$lib/component/cta.svelte';
	import { skill } from '$lib/store';

	const click = (event: Event) => {
		return true;
	};
</script>

<form>
	<fieldset>
		<label> title <input /> </label>
		<label> description <input /> </label>
		<Cta href="/start/lang" label="Next" {click} />
	</fieldset>
</form>

<style>
	fieldset {
		width: 560px;
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	label {
		width: 500px;
		display: inline-block;
		color: #008cba;
		margin-top: 20px;
		/* margin-left: auto; */
		/* margin-right: auto; */
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
