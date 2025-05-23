<script lang="ts">
  import { goto } from '$app/navigation';
  import { type Writable } from 'svelte/store';
  import Cta from '$lib/components/cta.svelte';
  import { Summary, restored } from '$lib/store';

  export let stepTitle: string;
  export let store: Writable<any>;
  export let defaultStore: Summary[];
  export let next: string;

  let title: string = '';
  let content: string = '';
  let summaries: Summary[] = [];

  $: if ($store !== defaultStore || $restored) {
    summaries = $store;
  }

  const add = (_: Event) => {
    summaries = [
      ...summaries,
      new Summary({
        title: title,
        content: content
      })
    ];
  };

  const remove = (_: Event, idx: number) => {
    summaries.splice(idx, 1);
    summaries = summaries;
  };

  const click = (_: Event) => {
    store.set(summaries);
    return true;
  };
</script>

<h2>{stepTitle}</h2>
<p>
  Add your {stepTitle.toLowerCase()}. Click 'Add' for each entry, then click 'Next' when finished.
</p>
<div id="container">
  <form id="basic">
    <fieldset>
      <label>Title: <input bind:value={title} /></label>
      <label>Description: <input bind:value={content} /></label>
      <button id="add" on:click={add}>Add Entry</button>
    </fieldset>
  </form>
  <div id="list">
    <lu>
      {#each summaries as summary, idx}
        <li>
          <div class="item">
            {summary.title}
            <div class="details">
              {summary.content}
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
<Cta href={next} label="Next" {click} />
<button
  class="default-btn"
  on:click={() => {
    store.set(defaultStore);
    goto(next);
  }}>Reset to Default</button
>

<style lang="scss">
  @use '$styles/variables' as *;
  @use '$styles/mixins' as *;

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

  fieldset {
    max-width: 560px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  @media (min-width: 600px) {
    fieldset {
      width: 560px;
    }
  }

  #list {
    border-radius: 4px;
    flex: 1;
    min-width: 200px;
  }

  label {
    max-width: 500px;
    display: block;
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

  #add {
    margin-top: 10px;
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

  .details {
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
</style>
