export default class Comentario{
    
    obtenerCategorias(){
        
    }
    
    obtenerDomicilio(){
        let pedido = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(2 < 1){
                    resolve("El pedido se realizo exitosamente")
                }else{
                    reject("El peido no se realizo exitosamente")
                }
            })
        })
        
        return pedido
    }
}