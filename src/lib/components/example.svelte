<script lang="ts">
  export let title: string | null = null;
  export let defaultData: Record<string, any> | string;
</script>

<div>
  <h1>Example</h1>
  <p>You can use HTML tags to format your text. Here's an example using John Doe's information:</p>

  <hr class="rounded" />
  {#if title}
    <h2>{@html title}</h2>
  {/if}
  {#if defaultData}
    {#if 'string' === typeof defaultData}
      {@html defaultData}
    {:else}
      {#each Object.keys(defaultData) as key}
        <p>
          {key}:
          {@html defaultData[key]}
        </p>
      {/each}
    {/if}
  {/if}
</div>

<style lang="scss">
  @use '$styles/mixins' as *;
  @use '$styles/variables' as *;

  div {
    margin: 60px;
    border: 1px solid gray;
    padding: 8px;
  }

  @include media-query($md) {
    div {
      margin: 10px;
    }
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #4caf50;
  }

  p {
    text-indent: 50px;
    text-align: justify;
    letter-spacing: 3px;
  }
</style>
