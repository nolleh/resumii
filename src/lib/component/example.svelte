<div>
	<h1>example</h1>
	<p>
		This text is styled with some of the text formatting properties. The heading uses the
		text-align, text-transform, and color properties. The paragraph is indented, aligned, and the
		space between characters is specified. The underline is removed from this colored
		<a target="_blank" href="tryit.asp?filename=trycss_text">"Try it Yourself"</a> link.
	</p>
</div>

<style lang="scss">
	div {
    margin: 60px;
		border: 1px solid gray;
		padding: 8px;
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

	a {
		text-decoration: none;
		color: #008cba;
	}
</style>
