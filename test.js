import test from 'ava';
import pRange from './';

test('single predicate', async t => {
	const start = 0;
	const end = 10;
	const output = await pRange({start, end}, [x => x * x]);
	for (let i = 0; i < end - start; i++) {
		const item = i + start;
		t.is(output[i], item * item);
	}
});

test('multiple predicates', async t => {
	const start = 1;
	const end = 10;
	const output = await pRange({start, end}, [x => x * x, y => y * y * y]);
	for (let i = 0; i < end - start; i++) {
		const item = i + start;
		t.is(output[i].indexOf(item * item), 0);
		t.is(output[i].lastIndexOf(item * item * item), 1);
	}
});
