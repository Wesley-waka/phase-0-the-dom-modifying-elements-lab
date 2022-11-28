// document.body.remove("#main");
// document.body.createElement('h1#victory');
// document.body.createElement('h1#victory');

function removeMain() {
    const main = document.getElementById("main");
    main.remove();
}

removeMain();
const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Wesley is the champion";