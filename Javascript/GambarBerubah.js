
function delay() {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve("fulfilled")},5000)
    })
    
}

export async function GambarBerubah() {
    let body = document.body ; 
    await delay();
    body.style.backgroundImage = "url(Arab.jpg)"
    await delay();
    body.style.backgroundImage = "url(Billgate.jpg)"
    await delay();
    body.style.backgroundImage = "url(Athens.jpg)"
    await delay();
}