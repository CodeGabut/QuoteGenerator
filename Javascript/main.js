
import {kelolaData, Data,kelolaData2} from  './kelolaData.js' ; 
import {tambahElemen} from './TambahList.js' ; 
import {Generate_Quotes} from './GenerateQuotes.js'

let loading = document.createElement("div") ; 
let retry = document.createElement("button"); 
retry.textContent = "Retry"
loading.className  = "loading" ;
retry.className  = "retry" ;
document.body.appendChild(loading) ; 
document.body.appendChild(retry);
let kontainer_utama = document.querySelector(".kontainerUtama") ; 
kontainer_utama.style.display ="none";




async function procces() {
    async function tunggu() {
        return new Promise((terima,reject) =>{
            retry.addEventListener('click',()=>{
                terima("clicked")
            })
        })
    }
    loading.textContent = "Loading..." ; 
    retry.style.display = "none";
    let rawData2 = await kelolaData2();
    console.log(rawData2);
    
    if (rawData2[0] == undefined) {
        retry.style.display = "inline" ;
        loading.textContent = rawData2[1].message ;
        
        await tunggu() ; 
        return undefined
        //this function is still be executed, maybe need return and also if below
        
    }else{
        let data = await Data(rawData2) ;
        loading.style.display = "none" ;
        tambahElemen(data) ; 
        kontainer_utama.style.display ="flex"; 
        return rawData2
    }    
   
}

let hasil = undefined ;

while(hasil == undefined){
    hasil = await procces();
    console.log("saadsad");
}

export let complete = hasil

console.log(hasil);






