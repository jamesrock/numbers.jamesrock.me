(function() {

	var
	base = 2,
	multiplier = 1,
	multiply = function() {
		return base*multiplier;
	},
	sum = function() {
		return [base, multiplier].join(' x ');
	},
	replacer = function(string, replacers) {
		var out = string;
		for(var replacer in replacers) {
			out = out.replace('{' + replacer + '}', replacers[replacer]);
		};
		return out;
	},
	render = function() {
		target.innerHTML = replacer(template, {
			question: sum(),
			answer: multiply()
		});
		document.body.setAttribute('data-colour', colours[colour]);
	},
	target = document.getElementById('app'),
	template = '<div id="question">{question}</div><div id="answer">{answer}</div>',
	colours = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'indigo',
		'violet'
	],
	colour = 0;

	document.body.addEventListener('mousedown', function(e) {

		e.preventDefault();

	});

	document.body.addEventListener('click', function(e) {

		if(e.target.id==='question') {

			base ++;
			multiplier = 1;
			colour = 0;

		}
		else {

			multiplier ++;

			if(colour===colours.length-1) {
				colour = 0;
			}
			else {
				colour ++;
			};

		};

		render();

	});

	render();

})();
