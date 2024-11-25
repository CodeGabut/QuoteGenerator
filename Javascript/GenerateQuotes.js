export  function Generate_Quotes(data) {
    let dataQuotes = document.getElementById("huruf_toggle") ;
    let dataCocok = data.filter(e => e.tags.includes(dataQuotes.textContent));
    console.log(dataCocok);
    console.log("panjang data  :  " + dataCocok.length);
    console.log(dataCocok[Math.floor(Math.random()*(dataCocok.length + 1))]);
    return dataCocok[Math.floor(Math.random()*(dataCocok.length))]
}