<script lang="ts">
  export let href: string | null = null;
  export let label: string;
  export let click;
</script>

<div class="cta-container">
  {#if href}
    <a {href} class="cta" on:click={click}><span>{label}</span></a>
  {:else}
    <button type="submit" class="cta" on:click={click}>
      <span>{label}</span>
    </button>
  {/if}
</div>

<style lang="scss">
  .cta-container {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .cta {
    border-radius: 4px;
    /* background-color: #04aa6d; */
    border: none;
    color: #008cba;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    border: 1px solid #008cba;
    box-shadow: 0 15px 40px -11px rgba(131, 166, 210, 0.5);
    background: none;
  }

  .cta span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .cta span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .cta:hover span {
    padding-right: 25px;
  }

  .cta:hover span:after {
    opacity: 1;
    right: 0;
  }

  .cta:hover span {
    padding-right: 25px;
  }
</style>
