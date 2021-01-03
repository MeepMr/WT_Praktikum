class Room {

    constructor(iNummer, sBezeichnung, sGebaude, iKapazitat, arrAusstattung) {

        this.iNummer = iNummer;
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