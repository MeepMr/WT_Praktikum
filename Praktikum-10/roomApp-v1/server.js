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

    /*addOrder(ordBuchung) {

        this.arrBuchungen.push(ordBuchung);
        this.arrBuchungen.sort(this.sortByStartTime);
    }


    sortByStartTime = function(ord1, ord2) {

        if(ord1.datStart === ord2.datStart) { return 0; }
        else if( ord1.datStart < ord2.datStart) { return -1; }
        else {return 1;}
    }*/
}

let rList = require("./public/js/roomList");

//Fake-Datenbank
let arrRoom = [];
arrRoom.push(new Room("A.E.01", "Test1", "t", 100, ["Beamer", "TestTest"]));
arrRoom.push(new Room("A.E.02", "Test2", "t", 100, ["Beamer"]));


// Server
let http = require("http");
let fs = require("fs");

http.createServer(function (request, response) {

    if(request.method === "GET") {

        let sUrl = request.url;
        console.log(sUrl);

        if(sUrl === '/') {

            writeHttp(response, './public/index.html');
        } else if(sUrl === '/roomList.html') {

            writeRoomList(response);
        } else{

            writeHttp(response, `./public/${sUrl}`);
        }
    }
}).listen(8020, "localhost");

function writeHttp(response, path) {

    fs.readFile(path, res);

    function res(error, data) {

        if(error == null) {

            response.writeHead(200);
            response.write(data);
            response.end();
        } else {

            response.writeHead(404);
            fs.readFile('./public/404.html', res);
            console.log(error);
        }
    }
}

//Fill raumListe
function writeRoomList(response) {

    response.writeHead(200);
    response.write(rList(arrRoom));
    response.end();
}

