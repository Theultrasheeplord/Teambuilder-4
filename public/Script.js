const defaultNames = [[{ "Name": "Eunry Echidnias", "Color": "#CFA39D", "IconXOffset": "0", "IconYOffset": "9" }, { "Name": "Hazelnut Highland Goats", "Color": "#D4893B", "IconXOffset": "1", "IconYOffset": "9" }, { "Name": "Jasmine Jelyfish", "Color": "#F8DE7E", "IconXOffset": "2", "IconYOffset": "9" }, { "Name": "Zuchini Zombies", "Color": "#274e13", "IconXOffset": "3", "IconYOffset": "9" }, { "Name": "Edgewater Eagles", "Color": "#C8E3D7", "IconXOffset": "4", "IconYOffset": "9" }, { "Name": "Astral Alpaccas", "Color": "#309ba2", "IconXOffset": "5", "IconYOffset": "9" }, { "Name": "Indigo Iguanas", "Color": "#4405a0", "IconXOffset": "6", "IconYOffset": "9" }, { "Name": "Fandango Flying Fish", "Color": "#B53389", "IconXOffset": "7", "IconYOffset": "9" }, { "Name": "Heavy Metal hummingbirds", "Color": "#282928", "IconXOffset": "8", "IconYOffset": "5" }, { "Name": "Dawn Dashounds", "Color": "#A6a29a", "IconXOffset": "8", "IconYOffset": "6" }, { "Name": "Quartz Kiwis", "Color": "#FFE4E1", "IconXOffset": "8", "IconYOffset": "7" }, { "Name": "Zircon Zebreas", "Color": "#DEE3E3", "IconXOffset": "8", "IconYOffset": "8" }, { "Name": "Walnut Wombats", "Color": "#773F1A", "IconXOffset": "9", "IconYOffset": "5" }, { "Name": "Khaki Kangaroo's", "Color": "#C3B091", "IconXOffset": "9", "IconYOffset": "6" }, { "Name": "Nero Narwhals", "Color": "#140600", "IconXOffset": "9", "IconYOffset": "7" }, { "Name": "Ivory Ibises", "Color": "#FFFFF0", "IconXOffset": "9", "IconYOffset": "8" }], [{ "Name": "Red Rabbits", "Color": "#FF0000", "IconXOffset": "0", "IconYOffset": "0" }, { "Name": "Orange Ocelots", "Color": "#ff9900", "IconXOffset": "1", "IconYOffset": "0" }, { "Name": "Yellow Yaks", "Color": "#ffff00", "IconXOffset": "2", "IconYOffset": "0" }, { "Name": "Lime Llamas", "Color": "#00ff00", "IconXOffset": "3", "IconYOffset": "0" }, { "Name": "Green Geckos", "Color": "#075307", "IconXOffset": "4", "IconYOffset": "0" }, { "Name": "Cyan Coyotes", "Color": "#5da1bb", "IconXOffset": "5", "IconYOffset": "0" }, { "Name": "Aqua Axolotols", "Color": "#00ffff", "IconXOffset": "6", "IconYOffset": "0" }, { "Name": "Blue Bats", "Color": "#0000ff", "IconXOffset": "7", "IconYOffset": "0" }, { "Name": "Purple Pandas", "Color": "#8124bb", "IconXOffset": "8", "IconYOffset": "0" }, { "Name": "Pink Parrots", "Color": "#ff78ff", "IconXOffset": "9", "IconYOffset": "0" }], [{ "Name": "Scarlet Sharks", "Color": "#eb403c", "IconXOffset": "0", "IconYOffset": "5" }, { "Name": "Orange Otters", "Color": "#ec8b33", "IconXOffset": "1", "IconYOffset": "5" }, { "Name": "Golden Gorilas", "Color": "#f2ba0c", "IconXOffset": "2", "IconYOffset": "5" }, { "Name": "Lime Lions", "Color": "#62dd0b", "IconXOffset": "3", "IconYOffset": "5" }, { "Name": "Teal Turtles", "Color": "#09abe9", "IconXOffset": "4", "IconYOffset": "5" }, { "Name": "Blue Bears", "Color": "#0057fa", "IconXOffset": "5", "IconYOffset": "5" }, { "Name": "Purple Pelicans", "Color": "#961dcf", "IconXOffset": "6", "IconYOffset": "5" }, { "Name": "Fuchsia Frogs", "Color": "#e627cf", "IconXOffset": "7", "IconYOffset": "5" }], [{ "Name": "Crimson Cylopes", "Color": "#ae2b24", "IconXOffset": "0", "IconYOffset": "6" }, { "Name": "Hazel Hydras", "Color": "#fa8a49", "IconXOffset": "1", "IconYOffset": "6" }, { "Name": "Golden Griffins", "Color": "#e4b525", "IconXOffset": "2", "IconYOffset": "6" }, { "Name": "Mint Mermaids", "Color": "#194a1d", "IconXOffset": "3", "IconYOffset": "6" }, { "Name": "Diamond Dragons", "Color": "#0d93db", "IconXOffset": "4", "IconYOffset": "6" }, { "Name": "Colbalt Centaurs", "Color": "#16216f", "IconXOffset": "5", "IconYOffset": "6" }, { "Name": "Purple Phoenixes", "Color": "#892bb4", "IconXOffset": "6", "IconYOffset": "6" }, { "Name": "Pink Pegasi", "Color": "#d124c8", "IconXOffset": "7", "IconYOffset": "6" },]];
var playerInputs = [];
var selectedPlayers = [];
var playerStatBox1 = [];
var playerStatBox2 = [];
var playerStatBox3 = [];
var teamStatBox1 = [];
var teamStatBox2 = [];
var teamStatBox3 = [];
var teamFormat = 10;
var playerFormat = 4;

function formatLayout(teams, players, mode) {
    teamFormat = teams;
    playerFormat = players;
    var mobileLayout = "";
    var tabletLayout = "";

    var teams = defaultNames[mode];

    teams = teams.concat(defaultNames[0].sort(function () { return 0.5 - Math.random() }));

    if (mode == 0) {
        teams[Math.round(Math.random() * 15)] = { "Name": "Scrhodingers Cats", "IconXOffset": "9", "IconYOffset": "9", "Color": "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0") };
    }

    for (i = 0; i < 16; i++) {

        if (i < teamFormat) {
            mobileLayout += "'" + mobileLayoutTemplate[(i * 9)].toString().replaceAll(",", " ") + "' \n";
            if (i % 2 == 0) { tabletLayout += "'" + tabletLayoutTemplate[(Math.floor(i / 2) * 9)].toString().replaceAll(",", " ") + "' \n"; }

            for (j = 1; j < playerFormat + 1; j++) {
                mobileLayout += "'" + mobileLayoutTemplate[(i * 9 + j)].toString().replaceAll(",", " ") + "'\n";
                if (i % 2 == 0) { tabletLayout += "'" + tabletLayoutTemplate[(Math.floor(i / 2) * 9 + j)].toString().replaceAll(",", " ") + "'\n"; }

            }

            document.styleSheets[0].cssRules[9 + i].style.removeProperty('display');

            document.getElementById("TeamIcon" + i).style.backgroundPositionX = "calc(-100%*" + teams[i].IconXOffset + ")";
            document.getElementById("TeamIcon" + i).style.backgroundPositionY = "calc(-100%*" + teams[i].IconYOffset + ")";
            document.getElementById("Box-TeamName-" + i).defaultValue = teams[i].Name;
            document.getElementById("TeamName-" + i).style.backgroundColor = teams[i].Color;
        }
        else {
            document.styleSheets[0].cssRules[9 + i].style.setProperty('display', 'none');
        }
    }
    for (j = 1; j < 9; j++) {
        if (j < playerFormat + 1) {
            document.styleSheets[0].cssRules[j].style.removeProperty('display');
        }
        else {
            document.styleSheets[0].cssRules[j].style.setProperty('display', 'none');
        }
    }
    document.styleSheets[2].cssRules[0].style.setProperty('grid-template-areas', tabletLayout);
    document.styleSheets[0].cssRules[0].style.setProperty('grid-template-areas', mobileLayout);
}
function autocomplete(inp, arr, bx) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
                b.style.backgroundImage = "url(" + playerIcon(arr[i].id) + ")";

                b.innerHTML += arr[i].name.substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i].id + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = dataset[parseInt(this.getElementsByTagName("input")[0].value, 16)].name;
                    selectedPlayers[bx] = this.getElementsByTagName("input")[0].value;
                    updatePlayerBox(bx);
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

formatLayout(10, 4, 1);
for (i = 0; i < 128; i++) {
    playerInputs.push(document.getElementById("Box-PlayerInput-" + i));
    playerStatBox1.push(document.getElementById("P-PlayerStat-" + i + "-1"));
    playerStatBox2.push(document.getElementById("P-PlayerStat-" + i + "-2"));
    playerStatBox3.push(document.getElementById("P-PlayerStat-" + i + "-3"));
    autocomplete(document.getElementById("Box-PlayerInput-" + i), dataset, i);
}

function updateStats(box) {
    //Update player stat box
    playerStatBox1[box].innerHTML = Math.round(dataset[parseInt(selectedPlayers[box], 16)].average);

    //Add colors

    //Calculate which team 

    //Get the new team score

    //Update the Team score

}

function updatePlayerBox(box) {
    //Does the name inputed match the slected player
    if (dataset[parseInt(selectedPlayers[box], 16)].name == playerInputs[box].value) {
        playerInputs[box].style.backgroundImage = "url(" + playerIcon(selectedPlayers[box]) + ")";
    }
    else if (playerInputs[box].value.substr(0, playerInputs[box].value.length) = "~" && selectedPlayers[box] != "") {
        playerInputs[box].style.backgroundImage = "url(" + playerIcon(selectedPlayers[box]) + ")";
        playerInputs[box].style.backgroundcolor = "lightblue";
    }
    updateStats(box);
}

function playerIcon(id) {
    if (dataset[parseInt(id, 16)].imageURL == 'Head') {
        return "https://crafthead.net/avatar/" + dataset[parseInt(id, 16)].UUID + "/24";
    } else if (dataset[parseInt(id, 16)].imageURL == "Fallback") {
        return "https://lh3.googleusercontent.com/fife/AKsag4NW34-aXf67_t1s8XxySs8N7cB5Sj5_9G9i-MV2cLFlXtBaHOJ8DzwbBqZEZaceqSYWgD2JFM1HcXxA-4aWcz_Wx0ZibDhBdyytQVTFi5-Ij6X9wYoPXF24KFrjx-H4SHvDbc-Rx9RF25ofByezlGujIm0KwnmFgptB7pRMgHbBhKkIdb-qLUnzQfT03RdSYBA9MBAQuKFiZxl3vd9kJuyADAdNCyKbCLLCF-qaOOCaWNBzfL0-BEbajNjOLo-_NHwuSJFgfkT92GiB4PSHNMGMlDomHtspHMVFgelvo5yNXs8GYGumqVl7dUq_ORsfjCqHNLw1GZq3_IPOgVM2peo-wTGY2Lc--Tr3GlJrf_tTrDKERjRqkpb5CuqFEYgD9qOkdtQDGxLL2ZivZoErIMN1xyB23ZJgm3Y7B6ED62Ftt71BJeyLmUv0hL9M2CWQTsgl213V3GqewRvukhNMrtPKX0bACZy_iPF5OYJXnwxiFb_TeDqvbVfX85YBGPdsGsMhLHP30cLSDNwqZq41eEaJ0Sn8LzSBRvOeIjF1tjIEEfHyH0_QbxMJ1GgwgSApTbt5jwFvnksTHMS9S75qwVnBAUru2pEXvOT7R1MzfHzTpERsJJOJA4MdFyH4x_GNpdJQNZr63_0IjYOIM7Ov1-xHIDNssN23xdmICJvrs-5XSD41tkjq3GyFnB8l8H3DVrFdOSNJoHwMVc4EXw1Gpr8RUhIT37zY9W0lNjoecahmcaKUN8rAt6ZlIGpfyLUX5Ef2ocduCZHO4Sx8WjkHJAjdjPWuRo3GA1z55Aq0RpZnQCWOmjrOH2dlpcx8E9bN01_vbrp5AYuh0eVnog0ZNO8T9wGlZ7stHPMAoKcr_duA2-fTg5-s8TPx8_yB1A1ffHmhhPrRCIs9Utq2Q_nvrC03p-gQkRNe-7Otwn845nnh9ZwYAN-pqsi3uQFRGoGEbMsjCEtUSg3I7IR0hUUF8KTxDA9fM6DZB75JxjiAMEu0lTbT_BXe5Us7lihTrCcKlIkbgkI12avMd_dOw6k883AaDpQqX0VWsyzKU3I4ZWsK_XM1_tkWgEXHcPC4HQbPScfPPjyx6xutYDNNh6OS1K622VTtPWMER00H9yMt2bJk4MhH07NY3thg7ulLt7SZmajSQGRkMCNPXh-mEHUIBb1uFX8N-3H3ZwRRwjS40qsANn_iuUEXhMP_bfqS248gWtaY3yXHLYJCE6T25pdwYZS6Xcu28hFhVlxsOpW3IR7TB-cDesyrDXkI4XE0loCXhofzpZ_nzpjcZVYWkUC5bImmm2FfCq93ArJ-PaBoILd3aBeod9sq3oTd51cASJB-wpfIT_dR2H7kRo4YyC7pVbG00AMl_x6aXA98azjpadmWXkCwMgbr3tvHXpsg1y7OW2oTY4L4haprHwDPB8qych2pwxm8i9bzYRF8nVnR4d1Ew819NeDaJ6uHq05Hyi4fRJbPaXm0qodl7xdcLey9CzYQLm0gOz7g8Y2ZhcO3ayFW-LW2KypmOWOZc1JNBj_LIsW4sHkPMoMB9i6sqw6kJtYU62WNNwZ29XtWHFBtKxbm0tc1JfE--Hd-f8oVpdK49plWc8t_rFtoeNk64UlyU9RvfqpKNHiVcr-Rh_MsA-iI1XzyN_tKskG2NtAXqNjbxXWBeGh4FTypR0WRzVGb=w1920-h931";
    }
    else { return dataset[parseInt(id, 16)].imageURL }

}