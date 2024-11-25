import {Generate_Quotes} from './GenerateQuotes.js' ; 
import {kelolaData} from './kelolaData.js' ; 
import {fade} from './Animation.js'
import {complete} from './main.js' ; 

let dataRaw = complete;
let judul = document.getElementById("judul_");
let autor = document.querySelector(".author") ; 


autor.style.fontSize = "15px" ;
let kontainer = document.querySelector(".kontainerFitur") ; 
let kontainerToggle = document.getElementById("kontainer_toggle");
let buttonPanah = false ;
let huruf_toggle = document.getElementById("huruf_toggle") ;

kontainer.addEventListener('click',async (e) =>{
    if (e.target.id =="panah" && buttonPanah == false) {
        kontainerToggle.style.display = "flex"
        buttonPanah = true
    }
    else if (e.target.id =="panah" && buttonPanah == true) {
        kontainerToggle.style.display = "none" ; 
        buttonPanah = false

    }else if (e.target.classList == "anakToggle") {
        huruf_toggle.textContent = e.target.textContent
        kontainerToggle.style.display = "none"
        buttonPanah = false
    } 
    else if (e.target.classList == "shuffle") {
        
        let quote = Generate_Quotes(dataRaw) ;
        fade(autor,quote.author)
        await fade(judul,quote.content) ; 
        judul.style.fontSize ="24px"
        
        

    }
})



