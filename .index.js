/*fetch('https://swapi.co/api/people/1/')
	.then(function(res) {
		console.log('Status: ', res.status);
		res.json().then(function(data) {
			console.log('Fetch result: ' + data)
		}).catch(function(err) {
			console.log('Fetch parsing error', err)
		});
});
*/


/*let cleanRoomPromise = new Promise(function(resolve, reject) {
	
	// cleaning the room

	let isClear = false;

	if(isClear) {
		resolve('clean');
	} else {
		reject('not clean');
	}

});

cleanRoomPromise.then(function(fromResolve) {
	console.log('the room is ' + fromResolve)
}).catch(function(fromReject) {
	console.log('the room is ' + fromReject)
});*/



/*let doHomework = function() {
	return new Promise(function(resolve, reject) {
		resolve('room is clean,');
	});
};

let uploadToDl = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + 'homework uploaded,');
	});
};

let watchPewds = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + 'satisfied by Pewds');
	});
};

doHomework()
	.then(function(result) {
		return uploadToDl(result);
	}).then(function(result) {
		return watchPewds(result);
	}).then(function(result) {
		console.log(result + '\ndone')
	});

Promise.race([doHomework(), uploadToDl(), watchPewds()]).then(function() {
	console.log('one is done');
})*/