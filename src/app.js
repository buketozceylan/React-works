var products = [
    {
    name:"IPhone 16",
    price: 100000,
    description:"Nice product awesome",
    colors:["red","white","black","purple"]
    },
    {
    name:"IPhone 20",
    price: 170000,
    description:"Nice product awesome",
    colors:["red","white","black"]
    }
]

var product = {
    name:"IPhone 16",
    price: 100000,
    description:"Nice product awesome",
    colors:["red","white","black","purple"]
}

function formatPrice(product){
    return product.price + " TL";
}

function printDescription(product) {
    if (product) {
        return product;
    } else{
        return "";
    }
}

var template = 
    <div>
        <h1 id="header">Product list</h1>
        {
            products.map(product => (
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <p>{formatPrice(product)}</p>
                    <p>
                        {product.description && product.description}
                    </p>
                    
                        {product.colors.length > 0 ? <p>renk seceneleri mevcut</p>:""}
                        
                    

                    <ul>
                        {
                            product.colors.map((color,index) => <li key={index}>{color}</li>)
                        }
                    </ul>
                </div>
            ))
        }
    </div>; 


var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);