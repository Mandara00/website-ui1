addEventListener("load", (event) => init());

function init() {
    const urlParams = new URLSearchParams(window.location.search);

    const product = urlParams.get("product");
    const amount = urlParams.get("amount");
    const strap = urlParams.get("materiaal-horlogeband");
    const dial = urlParams.get("kleur-wijzerplaat");
    const customColor = urlParams.get("custom-color");
    const gravure = urlParams.get("gravure");
    const notes = urlParams.get("message");
    const firstName = urlParams.get("f-name");
    const lastName = urlParams.get("l-name");
    const email = urlParams.get("email");
    const adres = urlParams.get("adres");
    const woonplaats = urlParams.get("woonplaats");
    const postcode = urlParams.get("postcode");

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
    ovDial.innerHTML = dial;
    ovNotes.innerHTML = notes;
    ovName.innerHTML = firstName + " " + lastName;
    ovEmail.innerHTML = email;
    ovAdres.innerHTML = adres + " - " + woonplaats + " " + postcode;

    if (dial === "Custom") {
        ovDial.style.backgroundColor = customColor;
        if (wc_hex_is_light(customColor)) {
            ovDial.style.color = "black";
        } else {
            ovDial.style.color = "white";
        }
    }
}

function wc_hex_is_light(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}