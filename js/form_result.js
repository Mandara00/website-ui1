addEventListener("load", init);

function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const product = urlParams.get('product');
    const amount = urlParams.get('amount');
    const strap = urlParams.get('materiaal-horlogeband');
    const dial = urlParams.get('kleur-wijzerplaat');
    const customColor = urlParams.get('custom-color');
    const gravure = urlParams.get('gravure');
    const notes = urlParams.get('message');
    const firstName = urlParams.get('f-name');
    const lastName = urlParams.get('l-name');
    const email = urlParams.get('email');
    const adres = urlParams.get('adres');
    const woonplaats = urlParams.get('woonplaats');
    const postcode = urlParams.get('postcode');

    let ovProduct = document.getElementById("ov-product");
    let ovAmount = document.getElementById("ov-amount");
    let ovStrap = document.getElementById("ov-strap");
    let ovDial = document.getElementById("ov-dial");
    let ovGravure = document.getElementById("ov-gravure");
    let ovNotes = document.getElementById("ov-notes");
    let ovName = document.getElementById("ov-name");
    let ovEmail = document.getElementById("ov-email");
    let ovAdres = document.getElementById("ov-adres");

    ovProduct.innerHTML = product;
    ovAmount.innerHTML = amount;
    ovStrap.innerHTML = strap;
    ovGravure.innerHTML = gravure;
    ovNotes.innerHTML = notes;
    ovName.innerHTML = firstName + " " + lastName;
    ovEmail.innerHTML = email;
    ovAdres.innerHTML = adres + " - " + woonplaats + " " + postcode;

    if (dial === "Custom") {
        ovDial.innerHTML = dial;
        ovDial.style.backgroundColor = customColor;
    } else {
        ovDial.innerHTML = dial;
    }
}