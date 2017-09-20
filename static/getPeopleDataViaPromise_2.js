var userid = document.getElementById("PromiseUserid").value;

function getPeopleDataViaPromiseSyntax() {
    return parseLink('https://swapi.co/api/people/' + userid + '/')
        .then((userResponse) => userResponse.json())
        .then((userData) => {
            return parseLink(userData.homeworld)
                .then((worldResp) => worldResp.json())
                .then((worldData) => {
                    userData.homeworld = worldData;
                    return userData;
                    //console.log(userData);
                });

        })
        .then((userData) => {
            //console.log(userData);
            userData.films.forEach((film, index) => {
                parseLink(film)
                    .then((filmResponse) => filmResponse.json())
                    .then((filmData) => {
                        userData.films[index] = filmData;
                    });
            });
            console.log(userData);
            return userData;
        })
        .then((userData) => {
            //console.log(userData);
            userData.species.forEach((species, index) => {
                parseLink(species)
                    .then((speciesResponse) => speciesResponse.json())
                    .then((speciesData) => {
                        userData.species[index] = speciesData;
                    });
            });
            //console.log(userData);
            return userData;
        })
        .then((userData) => {
            //console.log(userData);
            userData.vehicles.forEach((vehicle, index) => {
                parseLink(vehicle)
                    .then((vehicleResponse) => vehicleResponse.json())
                    .then((vehicleData) => {
                        userData.vehicles[index] = vehicleData;
                    });
            });
            //console.log(userData);
            return userData;
        })
        .then((userData) => {
            //console.log(userData);
            userData.starships.forEach((starship, index) => {
                parseLink(starship)
                    .then((starshipResponse) => starshipResponse.json())
                    .then((starshipData) => {
                        userData.starships[index] = starshipData;
                    });
            });
            //console.log('==asyncDone==', userData);
            return userData;
        })
}

getPeopleDataViaPromiseSyntax();


function mergeTatoo() {
    parseLink('https://swapi.co/api/people/' + userid + '/')
        .then((personResp) => personResp.json())
        .then((person) => {
            //console.log(person);

        })
}

function parseLink(link) {
    return fetch(link);
}
/*
let expandUser = getUser(userid).then((userResponse) => {
	//console.log(userResponse.json());
	return userResponse.json();
})
.then((data) => {
	console.log(data);
	parseLink(data.homeworld)

})
*/