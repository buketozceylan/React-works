// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "header" },
        "My first react application"
    ),
    React.createElement(
        "div",
        null,
        "Lorem ipsum dolor sit amet."
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Lorem, ipsum."
        ),
        React.createElement(
            "li",
            null,
            "Lorem, ipsum."
        ),
        React.createElement(
            "li",
            null,
            "Lorem, ipsum."
        ),
        React.createElement(
            "li",
            null,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi quaerat temporibus debitis reiciendis magni officia alias ipsam nobis odio suscipit, voluptate eos cum voluptates numquam rerum ullam autem eligendi!"
        )
    )
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
