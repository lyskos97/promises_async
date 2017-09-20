var luke = 'https://swapi.co/api/people/1/';

async function getPeopleDataViaAsyncSyntax () {
	const personResponse = await parseLink(luke);
	let person = await personResponse.json();
	console.log(person);
	const worldResponse = await parseLink(person.homeworld);
	console.log('worldResponse==>', worldResponse.json());
	//person.homeworld = 

	await person.films.forEach( function(film, index) {
		let filmResponse = await fetch(film);
		let filmData = filmResponse.json();
		console.log(filmData);
	});

	//const filmsResponse = await fetch(person.films);
	//console.log(worldResponse.json());
	//const vehiclesResponse = await fetch(person.vehicles);
	//console.log(worldResponse.json());
	return person;
}

function parseLink(url) {
	return fetch(url);
}

