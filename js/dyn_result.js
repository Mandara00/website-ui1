init();

function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = getProduct(urlParams.get("product"));


    const img = "../media/products/product_images" + product.img;
    const name = product.name.replace(' - ', ' ');
    const price = "€ " + product.price.toLocaleString('nl');
    const description = product.description;
    const size = product.size + " mm";
    const reference = product.reference;

    let productLink;
    if (product.index <= 3) {
        productLink = "/mandara.kudaliyanagedonperera/html/producten/" + product.id.replace + ".html";
    } else {
        productLink = "#";
    }

    let element = document.querySelector('#overzicht');
    let html =
        `<section class="productfiche">
        <h2>Productfiche</h2>
        <div>
            <img src="${img}" alt="${name}">
                <a href="${productLink}"><h3 class="show">${name}</h3></a>
                <p>${price}</p>
        </div>
        <div>
            <p>${description}</p>
            <dl>
                <div>
                    <dt>grootte</dt>
                    <dd>${size}</dd>
                </div>

                <div>
                    <dt>referentie</dt>
                    <dd>${reference}</dd>
                </div>
            </dl>
        </div>
    </section>`;
    element.insertAdjacentHTML("afterend", html);
}

function getProduct(productName) {
    let product;
    for (const p of producten) {
        if (p.name === productName) {
            product = p;
            break;
        }
    }
    return product;
}