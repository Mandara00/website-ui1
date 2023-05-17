init();

function init() {
    let selectElement = document.querySelector("#product");
    let categories = getCategories();

    for (let i = 0; i < categories.length; i++) {
        let optgroup = document.createElement("optgroup");
        optgroup.setAttribute("label", categories[i]);
        optgroup.setAttribute("id", categories[i].toLowerCase().replace(/\s/g, '-') + "-group");
        selectElement.appendChild(optgroup);
    }

    for (const p of producten) {
        let element = document.querySelector(`#${p.name.substring(0, p.name.indexOf("-") - 1).toLowerCase().replace(/\s/g, '-') + "-group"}`);
        let html = `<option value="${p.name}">${p.name.substring(p.name.indexOf("-") + 2)}</option>`;

        element.insertAdjacentHTML('beforeend', html);
    }
}

function getCategories() {
    let categories = [];
    for (const p of producten) {
        categories[categories.length] = p.name.substring(0, p.name.indexOf("-") - 1);
    }
    return [...new Set(categories)];
}