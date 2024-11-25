


export async  function kelolaData() {
    let kumpul = [] ; 
    let promise = []
for (let index = 1; index <= 107; index++) {
    try{
        let api = await fetch(`https://api.quotable.io/quotes?page=${index}`) ;
        let data= await api.json()
        console.log(data);
        data.results.forEach(element => {
            kumpul.push(element)
        });
        if (!api.ok) {
            throw new Error(api.statusText) ;

        }
    }
    catch(error){
        console.log(error);
        return [undefined,error]
        
    }
} 

return kumpul
}

export async  function kelolaData2() {
    let kumpul = []
    let promise = []
for (let index = 1; index <= 107; index++) {
   
        let api = fetch(`https://api.quotable.io/quotes?page=${index}`).then(data=>  {
            if (!data.ok) {
                console.log(data);
                
                throw new Error(data.statusText) ;
            }
            return data.json()
        }).then(data => {data.results.forEach(element => {
            kumpul.push(element)
        })}).catch(err => {
            console.log(err);
            kumpul =[undefined,err]
            index = 107})
            promise.push(api)
} 
await Promise.all(promise) ; 
return kumpul
}


export async function Data(data) {
    if (data) {
        return [...new Set((await data).flatMap(e => e.tags))]
    }
    
} 


