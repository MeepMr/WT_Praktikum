function generateRoomList(arrRaum){

    let lListe = `<ul>`;

    for(let rRaum of arrRaum) {

        lListe += insertRoomInformation(rRaum);
    }

    lListe += `</ul>`;
    return insertList(lListe);
}

function insertRoomInformation(rRaum) {

     return `<li>
                <h4>${rRaum.sNummer}</h4>
                <ul>
                  <li>Rumnummer: <a href="room.html">${rRaum.sNummer}</a></li>
                  <li>Raumbezeichnung: ${rRaum.sBezeichnung}</li>
                  <li>Gebäudebezeichnung: ${rRaum.sGebaude}</li>
                </ul>
              </li>`
}

function insertList(lList) {

    return `<!DOCTYPE html>
                <html lang="de">
                  <head>
                    <title>Raum-App</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                    <link rel="shortcut icon" href="img/favicon.ico">
                
                    <link rel="stylesheet" href="css/style.css" />
                    <link rel="stylesheet" href="css/dashboard.css" />
                  </head>
                
                  <body>
                    <div class="main_flexbox">
                      <div class="header_box">
                        <a href="index.html"
                          ><img
                            src="img/Logo-Raumverwaltung-Small.png"
                            id="picture_logo"
                            alt="logo"
                        /></a>
                        <header>
                          <h1>Raumverwaltung Fh Dortmund</h1>
                        </header>
                      </div>
                      <nav>
                        <ul class="nav_bar">
                          <li><a href="roomList.html">Raumliste</a></li>
                          <li><a href="room.html">Raumdetails</a></li>
                          <li><a href="order.html">Buchungsdetails</a></li>
                          <li><a href="newRoomOrder.html">Neue Raumbuchung</a></li>
                        </ul>
                      </nav>
                      <div class="middle_flexbox">
                        <div class="maincontent_flexbox">
                          <main class="main_class">
                            <form
                              action="https://labs.inf.fh-dortmund.de/roomReservationService/testRoomSearch.php"
                              method="GET"
                            >
                              <label
                                ><span class="label_required">Raumnummer</span>:
                                <input
                                  name="roomno"
                                  type="text"
                                  placeholder="z.B. A.E.01"
                                  autofocus
                                  required
                                  pattern="[A-Z]\\.[E1-3]\\.[0-9]{2}"
                              /></label>
                              <button type="submit">Finden</button>
                            </form>
                              ${lList}
                          </main>
                        </div>
                        <aside class="aside_class">
                          <h2>Aktuelle Meldungen</h2>
                          <ul>
                            <li>12.10.2020: Meldung 1</li>
                            <li>11.10.2020: Meldung 2</li>
                          </ul>
                        </aside>
                      </div>
                      <footer>
                        <small>&copy; Clemens Kurzeya && Justin Klein</small>
                      </footer>
                    </div>
                  </body>
                </html>`;
}

module.exports = generateRoomList;