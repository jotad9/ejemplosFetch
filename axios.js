const { default: axios } = require("axios");

let datos={
    title: "Hello World",
    body: "This is a body"

}
// axios.post("https://jsonplaceholder.typicode.com/posts",datos)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));
let token= "myToken";


let pedido1=axios.get("https://jsonplaceholder.typicode.com/posts/1");
let pedido2=axios.get("https://jsonplaceholder.typicode.com/posts/2");
let pedido3=axios.get("https://jsonplaceholder.typicode.com/posts/3");

Promise.all([pedido1,pedido2,pedido3])
.then((respuesta1,respuesta2,respuesta3)=>{
    console.log(respuesta1.data);
    console.log(respuesta2.data);
    console.log(respuesta3.data);
})
.catch(error => console.log(error));