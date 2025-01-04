<script lang="ts">
  import { Level } from '$lib/store';

  export let title: string | null = null;
  export let levels: Level[];

  function levelDesc(level: number): string {
    switch (level) {
      case 5:
        return 'Expert';
      case 4:
        return 'Very Good';
      case 3:
        return 'Good';
      case 2:
        return 'Average';
      case 1:
        return 'Novice';
    }
    return '';
  }
</script>

<section class="sc-history">
  {#if title}
    <h3>{title}</h3>
  {/if}

  <section class="history">
    <ul>
      {#each levels as level}
        <li>
          <div class="skill-item">
            <div class="title">{level.title}</div>
            <div class="score">
              <div>
                {#each Array(5)
                  .fill(0)
                  .map((_, i) => (i < level.level ? 'fluent' : 'dot')) as className}
                  <span class={className}> </span>
                {/each}
              </div>
              {levelDesc(level.level)}
            </div>
          </div>
          <!-- skill-item -->
        </li>
      {/each}
    </ul>
  </section>
</section>

<!-- <link rel="stylesheet" href="src/lib/styles/build.scss"/> -->
<style lang="scss">
  /* @use '$styles/build' as *; */
  section {
    margin-top: 13px;
  }
</style>
