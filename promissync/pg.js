const baseDelei = 1000;
let counter = 0;
const testObj = {}; 
function promiseGen() {
	const innerCounter = ++counter, promiseDelei = Math.random() * baseDelei;
	return () => {
		return new Promise((resole, reject) => {
					setTimeout(() => resole(innerCounter + ' promise Number'), promiseDelei);
				})
	}
}

for (let i = 1; i < 100; i++) {
	testObj[i + ' index'] = promiseGen();
}

const promiseIterator = syncPromise(testObj);
resolvePromise(promiseIterator.next())

function* syncPromise(promiseContainer) {
	for (let key in promiseContainer) {
		yield promiseContainer[key]();
	}
}

function resolvePromise(pormiseIteration) {
	if (!pormiseIteration.done) {
		pormiseIteration.value.then((resp) => {
			console.log(resp);
			resolvePromise(promiseIterator.next());
		});
	}
}