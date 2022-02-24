let africaDom = document.querySelector(".africa-holder");
let europaDom = document.querySelector(".europa-holder");
let asiaDom = document.querySelector(".asia-holder");
let australiaDom = document.querySelector(".australia-holder");
let northAmericaDom = document.querySelector(".northAmerica-holder");
let southAmericaDom = document.querySelector(".southAmerica-holder");


let africa = JSON.parse(localStorage.getItem('africa'));
let europe = JSON.parse(localStorage.getItem('europe'));
let asia = JSON.parse(localStorage.getItem('asia'));
let australia = JSON.parse(localStorage.getItem('australia'));
let northAmerica = JSON.parse(localStorage.getItem('northAmerica'));
let southAmerica = JSON.parse(localStorage.getItem('southAmerica'));




function displayCountry (a,b) {
    let countryUI = a.map((item) => {
        return `
        <div class="col-md-4 col-sm-12 mb-4 ">
            <div class="card" style="width: 100%;">
                <img src="${item.imgUrl}" class="card-img-top" alt="sporty" height="200px">
                <div class="card-body">
                    <h2 class="card-title mb-1 small">${item.name} (${item.region})</h2>
                    <p class="card-text mb-1 small">${item.capital} (currency: ${item.currency})</p>
                    <button class="btn btn-primary" onclick="selectedCountry(${item.id}, ${item.region})">Select</button>
                </div>
            </div>
        </div>
        `;
    });
    b.innerHTML = countryUI.join("");
}
displayCountry(africa,africaDom);
displayCountry(europe,europaDom);
displayCountry(asia,asiaDom);
displayCountry(australia,australiaDom);
displayCountry(northAmerica,northAmericaDom);
displayCountry(southAmerica,southAmericaDom);

function selectedCountry(id, region){
    let selectedCountryDom = document.querySelector(".selected-country-holder");
    
    let selectedCountry = region.find((item) => item.id ===id);
    selectedCountryDom.innerHTML=`
    <h1>Country Name: <span class="text-success">${selectedCountry.name}</span></h1>
    <h2>Capital: <span class="text-success">${selectedCountry.capital}</span></h2>
    <h2>Region: <span class="text-success">${selectedCountry.region}</span></h2>
    <h2>Currency: <span class="text-success">${selectedCountry.currency}</span></h2>
    <p><span class="text-success">${selectedCountry.name}</span> is the most beautiful country in the world, its in the region of <span class="text-success">${selectedCountry.region}</span> and its currency <span class="text-success">${selectedCountry.currency}</span> can be changed with the USD very easly.<br> Hope to see you in  <span class="text-success">${selectedCountry.name}</span> soon.</p>
    `;
}

(function selectRegion () {
    let s1 = document.getElementById("select1");
    regions.forEach(item => {
        s1.innerHTML+= `<option value="${item}">${item}</option>`
    })
}());



function selectCountry (regionString) {
    let s2 = document.getElementById("select2");
    let region = JSON.parse(localStorage.getItem(regionString));
    s2.innerHTML="";
    region.forEach(item => {
        s2.innerHTML += `<option value="${item.name}">${item.name}</option>`
    })
}

function userDetails (){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let s2 = document.getElementById("select2").value;
    let s1 = document.getElementById("select1").value;
    let age = yourAge();
    
    return alert("hello: " + firstName + " " + lastName + "\n" + "Your email is: " + email + "\n" + "You are from: " + s2 + " (" +s1 + ")" + "\n" +
    "Your age is: " + age)
}

function yourAge(){
    let birthYear = parseInt(document.getElementById("yearOfBirth").value);
    let ageDom = document.getElementById("age");
    

    let now = new Date();

    if (birthYear <= now.getFullYear() && birthYear >= 1900) {
    ageDom.innerText = `your are ${now.getFullYear() - parseInt(birthYear)} years old`;
    return now.getFullYear() - parseInt(birthYear);
    } else {
        ageDom.innerText = "please select your birth year";
    }
}