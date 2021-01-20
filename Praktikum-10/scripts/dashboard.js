//Create a new Box-Element
function createBox(sContent, link = null) {

    let dDiv = document.createElement("div");
    let dInnerDiv = document.createElement("div");
    let aLink = document.createElement("a");

    dDiv.setAttribute("class", "dash_quad");
    dInnerDiv.setAttribute("class", "aligned");

    if(link != null) {

        aLink.setAttribute("href", link);
    }

    aLink.textContent = sContent;

    dInnerDiv.appendChild(aLink);
    dDiv.appendChild(dInnerDiv);

    return dDiv;
}
let dMain = document.getElementById("dash_main");
let dAddButton = createBox("+");

dAddButton.onclick = function () {

    let input = prompt("Bezeichnung?: ");
    if(input != null && input !== "") {
        let link = prompt("Link? [Nur Domain.Endung]: ")
        if(link != null && link !== "") {
            dMain.prepend(createBox(input, `https://www.${link}`));
        }
    }

};

dMain.appendChild(dAddButton);