'use strict';

module.exports = (range, predicates) => {
	const output = [];
	const step = range.step || 1;
	if (predicates.length === 1) {
		for (let i = 0; i < range.end - range.start; i += step) {
			output[i] = predicates[0](i + range.start);
		}
	} else if (predicates.length > 1) {
		for (let i = 0; i <= range.end - range.start; i += step) {
			output[i] = predicates.map(p => p(i + range.start));
		}
	} else {
		throw new Error('predicates need to contain something');
	}
	return output;
};
