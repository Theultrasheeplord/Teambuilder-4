function Player(id, username, imageURL, code, ign, UUID, alias, avg, indivpl, sAVG, le, nc, w10, rpr, wins, tp, gTrnd, sdev, sdevW10, grpr, gWins, dba, dbr, kdr, wlr, games) {
    this.id = id;
    this.name = username;
    this.imageURL = imageURL;
    this.statusCode = code;
    this.ign = ign;
    this.average = avg;
    this.seasonAverage = sAVG;
    this.scottsMethod = w10;
    this.nonCanonAverage = nc;
    this.rpr = rpr;
    this.lastEvent = le;
    this.wins = wins;
    this.globalTrendScore = gTrnd;
    this.globalSdevScore = sdev;
    this.w10SdevScore = sdevW10;
    this.globalRPR = grpr;
    this.totalWins = gWins;
    this.games = games;
    this.UUID = UUID;
    this.alias = alias;
    this.indivPlacment = indivpl;
    this.teamPlacment = tp;
    this.dbAcuracy = dba;
    this.dbDodgerate = dbr;
    this.dbKDR = kdr;
    this.dbWLR = wlr;
}

//Make the standard grid
function makeUniversalGrid() {

    var output = "";
    var classes = "";
    var inputID = 0;
    var boxType = 0;
    var id = "";
    var content = "";
    var subOrder = 0;
    var rowOrder = 0;
    //var subid= 0;
    // Loop for generating boxes
    for (i = 0; i < 592; i++) {
        content = "";
        if (i % 37 == 0) { // Team name boxes
            classes = "TeamName";
            inputID = Math.floor(i / 37);
            boxType = "TeamName";
            id = "TeamName-" + Math.floor(i / 37);
            subOrder = 0;

            content = "<input  id=\"Box-" + id + "\" type=\"text\" name=\"TeamNameBox_" + inputID + "\" placeholder=\"Teamname\" class=\"TeamnameInput\">";
        }
        else if (i % 37 >= 1 && i % 37 <= 3) { // Team stat boxes
            classes = "TeamStat StatType-" + Math.abs((i % 37) % 4) + " TeamStat-" + Math.floor(i / 37);
            inputID = Math.floor(i / 37);
            boxType = "TeamStat";
            id = "TeamStatBox-" + Math.floor(i / 37) + "-" + Math.abs((i % 37 - 4) % 4);
            subOrder = 0;

            content = " <p id=\"P-" + id + "\" class=\"StatText TeamStatTexts TeamStatText-" + Math.abs((i % 37) % 4) + "\"></p>\n";
        }
        else if (i % 37 == 4) { //Team Icon boxes
            classes = "IconSquare";
            inputID = Math.floor(i / 37);
            boxType = "Icon";
            id = "IconSquare-" + Math.floor(i / 37);
            subOrder = 1;

            if (inputID < 9 && inputID != 4) {
                classes += " bdr-ba";
            }
            else if (inputID == 4) { classes += " bdr-bm"; }

            content = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\" id=\"TeamIcon" + inputID + "\" class=\"TeamIcons\">";
        }
        else if ((i % 37 - 5) % 4 == 0) { //Player input box
            classes = "PlayerInput Team-" + Math.floor(i / 37) + "-PlayerInput r" + (Math.floor((i % 37 - 5) / 4) + 1) + "thPlayer";
            inputID = Math.floor((i % 37 - 5) / 4) + Math.floor(i / 37) * 8;
            boxType = "PlayerInput";
            id = "PlayerInput-" + (inputID);
            subOrder = Math.floor((i % 37 - 5) / 4);

            content = "<input  id=\"Box-" + id + "\" type=\"text\" name=\"PlayerNameBox_" + inputID + "\" placeholder=\"Playername\" class=\"PlayernameInput\" >";


            //<div class=\"Iconbox\"> <img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\" class=\"Icon-9\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\" class=\"Icon-8\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\" class=\"Icon-7\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\" class=\"Icon-6\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\" class=\"Icon-5\"></div>

            if (i % 37 == 17 && Math.floor(i / 37) != 4 && Math.floor(i / 37) != 9) { classes += " bdr-ba"; }
            else if (Math.floor(i / 37) == 4 && i % 37 == 17) { classes += " bdr-bm"; }
        }
        else { // Player stats
            classes = "PlayerStat Team-" + Math.floor(i / 37) + "-PlayerStat StatType-" + (i % 37 - 1) % 4 + " r" + (Math.floor((i % 37 - 5) / 4) + 1) + "thPlayer";
            inputID = (Math.floor((i % 37 - 5) / 4) + Math.floor(i / 37) * 8);
            boxType = "Stat";
            id = "PlayerStat-" + inputID + "-" + (i % 37 - 1) % 4;
            subOrder = Math.floor((i % 37 - 5) / 4);

            content = " <p id=\"P-" + id + "\" class=\"StatText PlayerStatTexts PlayerStatText-" + (i % 37 - 1) % 4 + "\"> - </p>\n";

            if (i % 37 >= 18 && Math.floor(i / 37) != 4 && Math.floor(i / 37) != 9) { classes += " bdr-ba"; }
            else if (Math.floor(i / 37) == 4 && i % 37 >= 18) { classes += " bdr-bm"; }
        }

        //if (i >= 105) {
        //   classes += " SwapBox";
        //   rowOrder = 2*(Math.floor(i/21)*5+subOrder+1)-50;
        //   }
        // else {
        //  rowOrder = 2*(Math.floor(i/21)*5+subOrder+1)-1;
        //}

        classes += " GridBox "; //universal class for all grid boxes
        classes += "TeamBox-" + Math.floor(i / 37);


        output += "<div id=\"" + id + "\" class=\"" + classes + "\" style=\"grid-area: gr" + i + ";\">\n"; //Creates a new element in the grid

        output += content + "\n"; // Add the content

        output += "</div>\n"; // close the div


    }

    return output

}

document.write(makeUniversalGrid());