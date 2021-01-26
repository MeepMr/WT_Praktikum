//Create Room Object
class Room {

    constructor(sNummer, sBezeichnung, sGebaude, iKapazitat, arrAusstattung) {

        this.sNummer = sNummer;
        this.sBezeichnung = sBezeichnung;
        this.sGebaude = sGebaude;
        this.iKapatitat = iKapazitat;
        this.arrAusstattung = arrAusstattung;
        this.arrBuchungen = [];
        return this;
    }

    addOrder(ordBuchung) {

        this.arrBuchungen.push(ordBuchung);
        this.arrBuchungen.sort(this.sortByStartTime);
    }


    sortByStartTime = function(ord1, ord2) {

        if(ord1.datStart === ord2.datStart) { return 0; }
        else if( ord1.datStart < ord2.datStart) { return -1; }
        else {return 1;}
    }
}

//Create Order-Object
class Order {

    constructor(sBezeichnung, datStart, datEnd, sBucher, iTeilnehmer, sBeschreibung) {

        this.sBezeichnung = sBezeichnung;
        this.datStart = datStart;
        this.datEnd = datEnd;
        this.sBucher = sBucher;
        this.iTeilnehmer = iTeilnehmer;
        this.sBeschreibung = sBeschreibung;
    }
}

//RaumTest

let rTest1 = new Room("A.E.01", "Test1", "t", 100, ["Beamer", "TestTest"]);
let rTest2 = new Room("A.E.02", "Test2", "t", 100, ["Beamer"]);

console.log(rTest1, rTest2);

rTest1.addOrder(new Order("Test1", new Date(2020,12,24,12,0), new Date(2020,12,24,13,0), "Test1", 11))
rTest1.addOrder(new Order("Test2", new Date(2020,12,24,14,0), new Date(2020,12,24,15,0), "Test2", 12))
rTest1.addOrder(new Order("Test3", new Date(2020,12,24,10,0), new Date(2020,12,24,11,0), "Test3", 13))

console.log(rTest1);

for(let element of rTest1.arrBuchungen) {

    console.log(element);
}

//Enrich Page
let tTable = document.getElementById("roomTable");
let lList = document.getElementById("roomlist")

fillTable(tTable, rTest1);
fillList(lList, rTest1);

//Fill Raum-Informationen
function fillList(list, room) {

    list.appendChild(createLi(`Nummer: ${room.sNummer}`));
    list.appendChild(createLi(`Bezeichnung: ${room.sBezeichnung}`));
    list.appendChild(createLi(`Gebäude: ${room.sGebaude}`));
    list.appendChild(createLi(`Kapazität: ${room.iKapatitat}`));

    let liMerkmale = createLi("Ausstattungsmerkmale");
    let ulMerkmale = document.createElement("ul");
    for(let sM of room.arrAusstattung) {

        ulMerkmale.appendChild(createLi(sM));
    }

    liMerkmale.appendChild(ulMerkmale);
    list.appendChild(liMerkmale);
}

//Fill Buchungen-Table
function fillTable(table, room) {

    for (let bBuchung of room.arrBuchungen) {

        let tr = document.createElement("tr");
        tr.append(createTd(`${bBuchung.datStart.getDate()}.${bBuchung.datStart.getMonth()}.${bBuchung.datStart.getFullYear()}`));
        tr.appendChild(createTd(`${bBuchung.datStart.getHours()}:${bBuchung.datStart.getMinutes()}`));
        tr.appendChild(createTd(`${bBuchung.datEnd.getHours()}:${bBuchung.datEnd.getMinutes()}`));
        tr.appendChild(createTd(bBuchung.sBezeichnung));
        table.appendChild(tr);
    }
}

//Create a new li-Element with the given Content
function createLi(sContent) {

    let li = document.createElement("li");
    li.textContent = sContent
    return li;
}

//Create a new td-Element with the given Content
function createTd(sContent) {

    let td = document.createElement("td");
    td.textContent = sContent;
    return td;
}

module.exports = Room;