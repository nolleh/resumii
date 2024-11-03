<script lang="ts">
  export let title: string;
  export let content: string;
</script>
<link rel="stylesheet" href="src/routes/build/build.scss" />
<section>
  <h2> {title} </h2>
  {content}
</section>

<style lang='scss'>
  section {
    /* margin-top: 10px; */
  }
</style>

