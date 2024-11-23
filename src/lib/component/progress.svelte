<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
  $: currentPage = $page.url.pathname.slice($page.url.pathname.lastIndexOf('/') + 1);
	
  const steps = ['intro', 'summary', 'work', 'skill', 'lang', 'edu', 'view'];

	const activeClass = (page: string) => {
		const currentIndex = steps.indexOf(currentPage);
		const pageIndex = steps.indexOf(page);
		if (pageIndex < currentIndex) {
			return 'completed';
		} else if (pageIndex === currentIndex) {
			return 'active';
		}
		return '';
	};

</script>

<div class="progressBar-container col-centered">
	<ul class="progressbar">
		<!-- <li class="completed"> -->
		<button class={activeClass('intro')} on:click={(_) => goto('/start/intro')}>
			<div class="progress-text">Intro</div>
		</button>
		<button class={activeClass('summary')} on:click={(_) => goto('/start/summary')}>
			<div class="progress-text">Summary</div>
		</button>
		<button class={activeClass('work')} on:click={(_) => goto('/start/work')}>
			<div class="progress-text">Work</div>
		</button>
		<button class={activeClass('skill')} on:click= {(_) => goto('/start/skill')}>
			<div class="progress-text">Skill</div>
		</button>
		<button class={activeClass('lang')}>
			<div class="progress-text">Lang</div>
		</button>

		<button class={activeClass('edu')}>
			<div class="progress-text">Education</div>
		</button>

		<button class={activeClass('view')} on:click={(_) => goto('/build')}>
			<div class="progress-text">Result</div>
		</button>
	</ul>
</div>

<style lang="scss">
	$circleSize: 50px;
	$circleBorderWidth: 5px;
	$lineOffset: 10px;

	.progressBar-container {
		width: 100%;
		max-width: 70%;
		margin: auto;
		display: flex;
		justify-content: center;
	}

	.progressbar {
		counter-reset: step;
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0;
	}

	.progressbar button {
		list-style-type: none;
		/* width: 25%; */
		flex: 1;
		position: relative;
		/* float: left; */
		border: none;
		background: none;
	}

	.progressbar button:before {
		content: counter(step);
		counter-increment: step;
		color: black;
		width: $circleSize;
		height: $circleSize;

		line-height: $circleSize;
		border: 1px solid #a39f9a;
		text-align: center;
		display: block;
		border-radius: 50%;
		background-color: #ffff;
		margin: 0 auto;
	}

	.progressbar button:hover::before {
		background-color: #a3dffb;
	}

	.progressbar button.active:before {
		color: white;
		background: #0869bd;
		border: $circleBorderWidth solid #ffffff;

		width: $circleSize - $circleBorderWidth * 1.5 + 2;
		height: $circleSize - $circleBorderWidth * 1.5 + 2;
		line-height: $circleSize - $circleBorderWidth * 1.5 + 2;
		box-shadow: 0px 0px 0px 1px #0869bd;
		font-size: 12px;
	}

	.progressbar button.completed:before {
		content: counter(step);
		background: url('/assets/icons/check.svg') 0 3px no-repeat;
		background-repeat: no-repeat;
		background-position: center;
		background-color: #ebeae8;
		color: white;

		border: 1px solid white;
	}

	.progressbar button:after {
		content: '';
		position: absolute;
		width: calc(100% - #{($circleSize + $circleBorderWidth * 2 + $lineOffset * 2)});
		height: 2px;
		background-color: lightgray;
		top: calc($circleSize / 2);
		left: calc(-50% + #{(calc($circleSize / 2) + $circleBorderWidth + $lineOffset)});
		z-index: -1;
	}

	.progressbar button:first-child:after {
		content: none;
	}
</style>
