<script lang="ts">
  import Cta from '$lib/component/cta.svelte';
</script>

<header class="header">
	<p class="header__text--thin">Resumii</p>
	<p class="header__text--bold">Generate Your Resume For Free</p>
	<p class="header__description">
		Put your information to be shown in resume step by step, get generated resume.
    <br/>
    <a href="https://github.com/nolleh/resumii">github</a>
	</p>
</header>

<section class="cards">
	<div class="card card--aqua">
		<h2 class="card__title">No Signup</h2>
		<p class="card__description">No need to signup, login. We don't save your information.</p>
		<!-- <img src="images/icon-supervisor.svg" alt="icon supervisor" class="card__icon" /> -->
	</div>
	<div class="double-card">
		<div class="card card--red">
			<h2 class="card__title">For Free</h2>
			<p class="card__description">Resumii is provided for free.</p>
			<!-- <img src="images/icon-team-builder.svg" alt="icon team-builder" class="card__icon" /> -->
		</div>
		<div class="card card--orange">
			<h2 class="card__title">Blazing Easy</h2>
			<p class="card__description">Follow just few steps to make it.</p>
			<!-- <img src="images/icon-karma.svg" alt="icon karma" class="card__icon" /> -->
		</div>
	</div>
	<div class="card card--blue">
		<h2 class="card__title">Reliable</h2>
		<p class="card__description">
			The Resumii code is maintained as open source. you can read / contribute the code, and you
			can see that it doesn't save your information.
    <a href="https://github.com/nolleh/resumii">github</a>
		</p>
		<!-- <img src="images/icon-calculator.svg" alt="icon Calculator" class="card__icon" /> -->
	</div>
</section>

<Cta href='/start/intro' label='Start' click=()/>

<style lang="scss">
	@use '$lib/style/variables' as *;
	@use '$lib/style/mixins' as *;

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
