// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

var template = 
    <div>
        <h1 id="header">My first react application</h1>
        <div>Lorem ipsum dolor sit amet.</div>
        <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi quaerat temporibus debitis reiciendis magni officia alias ipsam nobis odio suscipit, voluptate eos cum voluptates numquam rerum ullam autem eligendi!</li>
        </ul>
    </div>; 


var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);