export async function fade(el,nama) {
    let opasity = 100
await new Promise((resolve,reject) => {let waktu =
setInterval(() => {
    opasity--
    el.style.opacity = opasity + "%"
if (opasity <=0) {
    clearInterval(waktu) ;
    el.textContent = nama
    resolve("selesai")
}
},);
    })
console.log("succes");

let fadeIn =setInterval(() => {
    opasity++ ;
    el.style.opacity = opasity + "%"
    if (opasity >=100) {
        clearInterval(fadeIn)
    }
},);



}
