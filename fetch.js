/*

********************POST********************
async function crearPost(){
    try{
        let respuesta= await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Hello World",
                body: "This is a body",
                userId: 1
            }),
    })
    let data = await respuesta.json();
    console.log(data);
    }catch(error){
        console.log(error);
    }
}
crearPost();
*/


/*

********************PUT********************
fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello World",
        body: "This is a body"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
*/



/*

//********************DELETE********************
fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "DELETE",
    
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
*/



/*

//********************PATCH********************
fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "PATCH",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello World"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
*/


//********************GET-"Authorization":"Basic"********************
/*
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET",
    /debe incluir credenciales a la página
    credentials:"include",
    headers:{
        /depende del sitio basic o bearer
        /basic: "username:password"
        /bearer: "token"
        "Authorization":"Basic"+btoa("usuario1"+":"+"admin") ,
        "Content-Type": "application/json"
    }
    
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
*/

/*

//********************GET-"Authorization":"Bearer"********************
let token="eltoken";
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET",
    /debe incluir credenciales a la página
    credentials:"include",
    headers:{
        /depende del sitio basic o bearer
        /basic: "username:password"
        /bearer: "token"
        "Authorization":"Bearer"+ token ,
        "Content-Type": "application/json"
    }
    
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
*/

//********************CACHE"********************/
/*
let token="eltoken";
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "GET",
    //debe incluir credenciales a la página
    credentials:"include",
    cache:"only-if-cached",
    redirect:"manual",
    headers:{
        "Authorization":"Bearer"+ token ,
        "Content-Type": "application/json"
    }
    
})
.then(response => {
    if(response.type==="opaqueredirect"){
        let nuevaUbicacion=respose.headers.get("location");
        console.log("redirigiendo: ", nuevaUbicacion);
    }else{
        return response.json();
    
        
    }
})
.then(data => console.log(data))
.catch(error => console.log(error));
*/
