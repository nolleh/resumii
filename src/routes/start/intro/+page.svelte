<script lang="ts">
  import Cta from '$lib/components/cta.svelte';
  import Example from '$lib/components/example.svelte';
  import { user, User, defaultUser, restored } from '$lib/store';

  let name: string,
    comment: string,
    email: string,
    city: string = '';

  $: if ($user !== defaultUser || $restored) {
    name = $user.name;
    comment = $user.professionalTitle;
    email = $user.email;
    city = $user.city;
  }

  function saveContent() {
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

<h2>Introduction</h2>
<p>Enter your basic information to begin</p>

<form id="basic" action="/start/summary">
  <fieldset>
    <label>Name: <input bind:value={name} /></label>
    <label>Professional Title: <input bind:value={comment} /></label>
    <label>Email: <input type="email" bind:value={email} /></label>
    <label>City: <input bind:value={city} /></label>
    <div>
      <Cta label="Next" click={saveContent} />
      <button class="default-btn" on:click={() => user.set(defaultUser)}>Reset to Default</button>
    </div>
  </fieldset>
</form>

<Example defaultData={defaultUser} />

<style>
  /* #basic { */
  /* 	display: flex; */
  /* 	justify-content: center; */
  /* } */

  #basic fieldset {
    max-width: 560px;
    /* margin: 0 auto; */
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  label {
    margin-top: 20px;
    max-width: 500px;
    color: #008cba;
    /* to allow width setting */
    display: block;
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
