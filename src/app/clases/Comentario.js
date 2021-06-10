//const axios = require('axios');
import axios from 'axios'
import {fetch as fetchPolyfill} from 'whatwg-fetch' 
export default class Comentario{
    
    async obtenerusuario(id){
        try{
            const {data} = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(data)
        }catch(e){
            console.log("Se preseento un error", e)
        }
    }
    
    obtenerUsuarios(){
        axios.get('https://reqres.in/api/users')
        .then(response => console.log(response.data))
    }
    
    obtenerCategorias1(){
        fetch('https://reqres.in/api/users', {
            method: 'POST', 
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                "name": "Oscar Mesa",
                "job": "Instructor"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .finally(() => {
            console.log("Finalizo la creación del usuario!!!")
        })
    }
    
    obtenerCategorias(){
        let promesa1 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let promesa2 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let promesa3 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let promesa4 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let promesa5 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let promesa6 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let promesa7 = fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        let i = 1
        Promise.all([promesa1,promesa2,promesa3,promesa4,promesa5,promesa6,promesa7]).then(respuesta => {
            /*response.json().then(data => {
                    console.log(data)
                })
            })*/
            
            let respuestamap = respuesta.map(prom => prom.json())
                
            Promise.all(respuestamap).then(data => console.log(data))
            
        })
        
    }
    
    obtenerDomicilio(){
        let pedido = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(2 < 1){
                    resolve("El pedido se realizo exitosamente")
                }else{
                    reject("El peido no se realizo exitosamente")
                }
            }, 1000)
        })
        
        return pedido
    }
}