<script lang="ts">
  import Cta from '$lib/components/cta.svelte';
</script>

<header class="header">
  <p class="header__text--thin">Resumii</p>
  <p class="header__text--bold">Generate Your Resume For Free</p>
  <p class="header__description">
    Create your professional resume step by step with our easy-to-use tool.
    <br />
    <a href="https://github.com/nolleh/resumii">View on GitHub</a>
  </p>
</header>

<section class="cards">
  <div class="card card--aqua">
    <h2 class="card__title">No Signup Required</h2>
    <p class="card__description">
      Start creating your resume instantly. Your information stays private and is never saved on our
      servers.
    </p>
    <!-- <img src="images/icon-supervisor.svg" alt="icon supervisor" class="card__icon" /> -->
  </div>
  <div class="double-card">
    <div class="card card--red">
      <h2 class="card__title">Completely Free</h2>
      <p class="card__description">Create, edit, and download your resume at no cost.</p>
      <!-- <img src="images/icon-team-builder.svg" alt="icon team-builder" class="card__icon" /> -->
    </div>
    <div class="card card--orange">
      <h2 class="card__title">Simple & Fast</h2>
      <p class="card__description">
        Follow our step-by-step guide to create your resume in minutes.
      </p>
      <!-- <img src="images/icon-karma.svg" alt="icon karma" class="card__icon" /> -->
    </div>
  </div>
  <div class="card card--blue">
    <h2 class="card__title">Open Source</h2>
    <p class="card__description">
      Resumii is open source and transparent. Review the code, contribute, and verify that your data
      remains private.
      <a href="https://github.com/nolleh/resumii">View on GitHub</a>
    </p>
    <!-- <img src="images/icon-calculator.svg" alt="icon Calculator" class="card__icon" /> -->
  </div>
</section>

<Cta href="/start/intro" label="Start" click="()" />

<style lang="scss">
  @use '$styles/variables' as *;
  @use '$styles/mixins' as *;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: $font-family;
    background-color: $bg-color;
    @include flex(column, 0, center);
    height: 100vh;
  }

  .header {
    max-width: 540px;
    margin-top: 80px;
    text-align: center;
    margin: auto;

    &__text--thin {
      @include font-settings(275, 36px, #4d4f62);
    }

    &__text--bold {
      @include font-settings(600, 36px, #4d4f62);
    }

    &__description {
      @include font-settings(400, 15px, #4d4f62);
      line-height: 167%;
      text-align: center;
      opacity: 0.5;
    }
  }

  .cards {
    margin-top: 64px;
    @include flex(row, center, center);
    gap: 30px;
  }

  .double-card {
    @include flex(column, center, 0);
    gap: 30px;
  }

  .card {
    width: 350px;
    height: 250px;
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0 15px 30px -11px rgba(131, 166, 210, 0.5);
    background: #fff;

    &--orange {
      @include top-border($border-orange);
    }

    &--red {
      @include top-border($border-red);
    }

    &--aqua {
      @include top-border($border-aqua);
    }

    &--blue {
      @include top-border($border-blue);
    }

    &__title {
      @include font-settings(600, 20px, #4d4f62);
    }

    &__description {
      @include font-settings(400, 13px, #4d4f62);
      line-height: 177%;
      opacity: 0.5;
    }

    &__icon {
      width: 64px;
      height: 64px;
      display: block;
      margin-top: 33px;
      float: right;
    }
  }

  @include media-query($md) {
    .cards {
      flex-direction: column;
    }
  }

  @include media-query($sm) {
    .header {
      padding: 0 32px;
      max-width: 311px;
    }
  }
</style>
