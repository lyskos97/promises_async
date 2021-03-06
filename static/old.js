function getPeopleDataViaPromiseSyntax() {
    fetch('https://swapi.co/api/people/1/')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
           // console.log(data);
            link_processor(data);
            document.getElementById("promiseJson").innerHTML = JSON.stringify(data, undefined, 2);
            console.log(data);
        })
};

// document.getElementById("promiseJson").innerHTML = JSON.stringify(data, undefined, 2);

async function getPeopleDataViaAsyncSyntax() {

    document.getElementById("asyncJson").innerHTML = JSON.stringify(data, undefined, 2);
}

function link_processor(person) {
    for (var key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(key);
            getByUrl(person, key, person[key]);
        }
    }
}

function getByUrl(obj, key, val) {
    if (typeof(val) == 'string') {
        if (isUrl(val)) {
        	console.log(val)
            fetch(val)
                .then((res) => {
                    var jsonRes = res.json()
                    .then((data) => {
                        	console.log('--DATA-->',data);
                        	obj[key] = data;
                        	// console.log('==array==>',jsonRes);
                    });
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    } else if (typeof(val.push) == 'function') {
        val.forEach((el, i) => {

            if (isUrl(el)) {
            	console.log(el)
                fetch(el)
                    .then((res) => {
                        var jsonRes = res.json()
                        .then((data) => {
                        	console.log('--DATA-->',data);
                        	obj[key][i] = data;
                        	// console.log('==array==>',jsonRes);
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        });
    }
}

function isUrl(url) {
    return (url.substring(0, 4).toLowerCase() == 'http');
}


// Promise kek = fetch('https://swapi.co/api/people/1/')
// .then(function(res) {
// 	return res.json();
// })
// .then(function(data) {
// 	return data;
// });

/*
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.co/api/planets/1/",
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  "species": [
    "https://swapi.co/api/species/1/"
  ],
  "vehicles": [
    "https://swapi.co/api/vehicles/14/",
    "https://swapi.co/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.co/api/starships/12/",
    "https://swapi.co/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
*/