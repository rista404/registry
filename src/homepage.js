const DATABASE = require("./database.json");

const LOGO_PATH = "https://raw.githubusercontent.com/denoland/deno/master/website/deno_logo.png";

const homepageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Deno packages</title>
	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	<style>
		body {
			color: #111;
			background: #f0f0f0;
			margin: 80px 0;
			font-family: Arial;
			font-size: 20px;
		}

		main {
			max-width: 800px;
			margin: 0px auto;
			padding: 0 10px;
		}
		svg {
			margin: 0px auto;
		}

		a {
			color: #333;
		}

		p {
			line-height: 1.5;
			font-size: 0.9em;
		}

		.packages li {
			font-size: 0.9em;
			margin-bottom: 20px;
		}

		.packages code {
			-webkit-user-select: all;
			-moz-user-select: all;
			-ms-user-select: all;
			user-select: all;
		}

		pre {
			background: #ddd;
			padding: 15px;
			word-wrap: normal;
			overflow-x: auto;
		}

		code {
			background: #ddd;
			padding: 4px 8px;
		}

		a:hover {
			background: #aee;
		}

		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		td, th {
			text-align: center;
			vertical-align: middle;
			border: 1px solid #aaa;
			padding: 6px;
		}

		@media only screen and (max-width: 480px) {
			body {
				margin: 10px 0;
			}
		}
	</style>
</head>
<body>
	<main>
		<img src="${LOGO_PATH}" width="150px" />
		<h1>Deno Packages</h1>
		<p>This is a URL redirection service for Deno scripts.</p>
		<p>
			The basic format is <code>https://deno.land/x/PACKAGE_NAME@BRANCH/SCRIPT.ts</code>. If you leave out the branch, it will default to master.
		</p>

		<h2 id="available-packages">Available Packages</h2>

		<ul class="packages">
			${
				Object.entries(DATABASE)
					.map(([name, { repo }]) =>
						`<li><code>https://deno.land/x/<b>${name}</b>/</code> — <a href="${repo}">Repo</a></li>`
					)
					.join('\n')
			}
		</ul>

		<br />
		<h2 id="contributing">Contributing</h2>

		<p>To add a package send a pull request to <a href="https://github.com/denoland/registry">https://github.com/denoland/registry</a> with changes in <code>src/database.json</code></p>
	</main>
</body>
</html>
`;

module.exports = homepageHTML;