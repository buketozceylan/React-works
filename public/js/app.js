"use strict";

var products = [{
    name: "IPhone 16",
    price: 100000,
    description: "Nice product awesome",
    colors: ["red", "white", "black", "purple"]
}, {
    name: "IPhone 20",
    price: 170000,
    description: "Nice product awesome",
    colors: ["red", "white", "black"]
}];

var product = {
    name: "IPhone 16",
    price: 100000,
    description: "Nice product awesome",
    colors: ["red", "white", "black", "purple"]
};

function formatPrice(product) {
    return product.price + " TL";
}

function printDescription(product) {
    if (product) {
        return product;
    } else {
        return "";
    }
}

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "header" },
        "Product list"
    ),
    products.map(function (product) {
        return React.createElement(
            "div",
            { className: "product-details" },
            React.createElement(
                "h2",
                null,
                product.name
            ),
            React.createElement(
                "p",
                null,
                formatPrice(product)
            ),
            React.createElement(
                "p",
                null,
                product.description && product.description
            ),
            product.colors.length > 0 ? React.createElement(
                "p",
                null,
                "renk seceneleri mevcut"
            ) : "",
            React.createElement(
                "ul",
                null,
                product.colors.map(function (color, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        color
                    );
                })
            )
        );
    })
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
