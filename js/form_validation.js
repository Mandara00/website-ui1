addEventListener("load", init);

function init() {
    let formulier = document.querySelector("form");
    formulier.addEventListener("submit", formSubmit);

    let voornaam = document.querySelector("#f-name");
    voornaam.addEventListener("blur", validatieVoornaam)

    let achternaam = document.querySelector("#l-name");
    achternaam.addEventListener("blur", validatieAchternaam)

    let email = document.querySelector("#email");
    email.addEventListener("change", validatieEmail)
}

function formSubmit(event) {
    resetErrormessage();
    if (!validatieVoornaam() || !validatieAchternaam() || !validatieEmail()) {
        setErrormessage();
        event.preventDefault();
    } else {

    }
}

function validatieVoornaam() {
    let errormsg = document.querySelector("#error-f-name");
    errormsg.innerHTML = "";

    let element = document.querySelector("#f-name");

    if (/^\s.*/.test(element.value) || /.*\s$/.test(element.value)) {
        errormsg.innerHTML = "let op spaties";
        return false;
    } else {
        element.classList.add('validinput');
        return true;
    }
}

function validatieAchternaam() {
    let errormsg = document.querySelector("#error-l-name");
    errormsg.innerHTML = "";

    let element = document.querySelector("#l-name");

    if (/^\s.*/.test(element.value) || /.*\s$/.test(element.value)) {
        errormsg.innerHTML = "let op spaties";
        return false;
    } else {
        element.classList.add('validinput');
        return true;
    }
}

function validatieEmail() {
    let errormsg = document.querySelector("#error-email");
    errormsg.innerHTML = "";

    let email = document.querySelector("#email").value.toLowerCase();
    let voornaam = document.querySelector("#f-name").value.toLowerCase();
    let achternaam = document.querySelector("#l-name").value.toLowerCase();

    voornaam = voornaam.replace(/\s/g, '');
    achternaam = achternaam.replace(/\s/g, '');

    let emailOption1 = voornaam + "." + achternaam + "@student.kdg.be";
    let emailOption2 = voornaam + "." + achternaam + "@kdg.be";

    if ((email === emailOption1) || (email === emailOption2)) {
        document.querySelector("#email").classList.add('validinput');
        return true;
    } else {
        errormsg.innerHTML = "gebruik een kdg email met jouw naam";
        return false;
    }
}

function setErrormessage() {
    let element = document.querySelector("#error");

    if ((!validatieVoornaam() || !validatieAchternaam()) && validatieEmail()) {
        element.innerHTML = "Je voor- en achternaam mogen niet beginnen of eindigen met een spatie.";
    } else if ((!validatieVoornaam() || !validatieAchternaam()) && !validatieEmail()) {
        element.innerHTML = "Je voor- en achternaam mogen niet beginnen of eindigen met een spatie. Je moet een KdG mailadres gebruiken en dezelfde naam gebruiken.";
    } else if ((validatieVoornaam() || validatieAchternaam()) && !validatieEmail()) {
        element.innerHTML = "Je moet een KdG mailadres gebruiken en dezelfde naam gebruiken.";
    }
}

function resetErrormessage() {
    let element = document.querySelector("#error");
    element.innerHTML = "";
}