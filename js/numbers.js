(function() {

	window.numbers = function(operation) {

		var
		base = 1,
		multiplier = 1,
		step = 1,
		calculate = function() {
			return operations[operation].calculate(base, multiplier);
		},
		sum = function() {
			return [base, multiplier].join(' ' + operations[operation].value + ' ');
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
				answer: calculate()
			});
			document.body.setAttribute('data-colour', colours[colour]);
		},
		incrementColour = function() {

			if(colour===colours.length-1) {
				colour = 0;
			}
			else {
				colour ++;
			};

		},
		target = document.getElementById('app'),
		template = '<div id="question">{question}</div><div id="answer">{answer}</div><div id="base-up"></div><div id="base-down"></div><div id="multiplier-up"></div><div id="multiplier-down"></div>',
		colours = [
			'red',
			'orange',
			'yellow',
			'green',
			'blue',
			'indigo',
			'violet'
		],
		colour = 0,
		operations = {
			multiply: {
				label: 'multiply',
				value: 'x',
				calculate: function(a, b) {
					return a*b;
				}
			},
			divide: {
				label: 'divide',
				value: '/',
				calculate: function(a, b) {
					return a/b;
				}
			},
			add: {
				label: 'add',
				value: '+',
				calculate: function(a, b) {
					return a+b;
				}
			},
			subtract: {
				label: 'subtract',
				value: '-',
				calculate: function(a, b) {
					return a-b;
				}
			}
		};

		target.addEventListener('mousedown', function(e) {

			e.preventDefault();

		});

		target.addEventListener('click', function(e) {

			switch(e.target.id) {
				case 'multiplier-up':

					multiplier += step;

				break;
				case 'multiplier-down':

					multiplier -= step;

				break;
				case 'base-up':

					base += step;

				break;
				case 'base-down':

					base -= step;

				break;
			}

			incrementColour();

			render();

		});

		render();

	};

})();
