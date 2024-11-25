export async function tambahElemen(data) {
    let parent = document.getElementById("kontainer_toggle")
    data.forEach(tag => {
        let el = document.createElement("div"); 
        el.textContent = tag ;
        el.className = "anakToggle"  ;
        parent.appendChild(el) ;
    });
}