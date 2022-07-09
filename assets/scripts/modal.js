let modalItems = [ ...document.getElementsByClassName("modal")];
let modalOpener = [ ...document.getElementsByClassName("modal-open")];
let modalCloser = [ ...document.getElementsByClassName("close")];

modalOpener.forEach(element => {
    element.onclick = function (){
        document.getElementById(this.getAttribute("data-target")).style.display = 'block';
    }
})

modalItems.forEach(element => {
    element.onclick = function (){
        this.style.display = 'none';
    }
})