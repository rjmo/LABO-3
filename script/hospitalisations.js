var tabPatients = [
    { "dossier": "1", "nom": "Léger", "prenom": "Émilie", "naissance": "26 mars 1917", "sexe": "M" },
    { "dossier": "2", "nom": "Bernand", "prenom": "Marie", "naissance": "3 février 1946", "sexe": "F" },
    { "dossier": "3", "nom": "Chartrand", "prenom": "Guy", "naissance": "5 avril 1959", "sexe": "M" },
    { "dossier": "4", "nom": "Côté", "prenom": "André", "naissance": "2 septembre 1978", "sexe": "M" },
    { "dossier": "5", "nom": "Lavoie", "prenom": "Carole", "naissance": "4 novembre 1973", "sexe": "F" },
    { "dossier": "6", "nom": "Martin", "prenom": "Diana", "naissance": "2 décembre 1965", "sexe": "F" },
    { "dossier": "7", "nom": "LaCroix", "prenom": "Pauline", "naissance": "25 janvier 1956", "sexe": "F" },
    { "dossier": "8", "nom": "St-Jean", "prenom": "Arthur", "naissance": "7 octobre 1912", "sexe": "M" },
    { "dossier": "9", "nom": "Béchard", "prenom": "Marc", "naissance": "8 août 1980", "sexe": "M" },
    { "dossier": "10", "nom": "Chartrand", "prenom": "Mario", "naissance": "23 juillet 1947", "sexe": "M" }
]

var tabEtablissement = [
    { "etablissement": "1234", "nom": "Centre hospitalier Sud", "adresse": "1234 boul. Sud, Montréal, QC", "code_postal": "H2M 3Y6", "telephone": "(514) 123-1234" },
    { "etablissement": "2346", "nom": "Hôpital Nord", "adresse": "7562 rue du Souvenir, Nordville, QC", "code_postal": "J4R 2Z5", "telephone": "(450) 222-3333" },
    { "etablissement": "3980", "nom": "Hôpital Centre", "adresse": "4637 boul. de Église, Montréal, QC", "code_postal": "H3J 4K8", "telephone": "(514) 123-5678" },
    { "etablissement": "4177", "nom": "Centre hospitalier Est", "adresse": "12 rue Bernard, Repentigny, QC", "code_postal": "J8R 3K5", "telephone": "(450) 589-2345" },
    { "etablissement": "7306", "nom": "Hôpital de salut", "adresse": "11 rue de la Rédemption, St-Basile, QC", "code_postal": "J8H 2D4", "telephone": "(450) 345-6789" },
    { "etablissement": "8495", "nom": "Dernier recours", "adresse": "999 rue St-Pierre, Longueuil, QC", "code_postal": "J7B 3J6", "telephone": "(450) 555-6741" },
]

var tabHospitalisations = [
    { "code_etablissement": "1234", "no_dossier_patient": "5", "date_admission": "14-août-00", "date_sortie": "14-août-01", "specialite": "médicine" },
    { "code_etablissement": "1234", "no_dossier_patient": "10", "date_admission": "12-déc.-92", "date_sortie": "12-déc.-92", "specialite": "chirurgie" },
    { "code_etablissement": "2346", "no_dossier_patient": "8", "date_admission": "03-mars-03", "date_sortie": "05-mars-03", "specialite": "médicine" },
    { "code_etablissement": "2346", "no_dossier_patient": "1", "date_admission": "11-nov.-97", "date_sortie": "12-nov.-97", "specialite": "orthopédie" },
    { "code_etablissement": "2346", "no_dossier_patient": "3", "date_admission": "12-avr.-95", "date_sortie": "30-avr.-95", "specialite": "médicine" },
    { "code_etablissement": "3980", "no_dossier_patient": "5", "date_admission": "14-févr.-00", "date_sortie": "14-mars.-00", "specialite": "médicine" },
    { "code_etablissement": "3980", "no_dossier_patient": "5", "date_admission": "01-janv.-01", "date_sortie": "01-févr.-01", "specialite": "médicine" },
    { "code_etablissement": "3980", "no_dossier_patient": "9", "date_admission": "03-avr.-95", "date_sortie": "08-avr.-95", "specialite": "orthopédie" },
    { "code_etablissement": "3980", "no_dossier_patient": "7", "date_admission": "27-nov.-99", "date_sortie": "04-déc.-99", "specialite": "chirurgie" },
    { "code_etablissement": "3980", "no_dossier_patient": "10", "date_admission": "28-avr.-97", "date_sortie": "05-mai-97", "specialite": "chirurgie" },
    { "code_etablissement": "4177", "no_dossier_patient": "3", "date_admission": "03-août-01", "date_sortie": "05-déc.-01", "specialite": "médicine" },
    { "code_etablissement": "4177", "no_dossier_patient": "3", "date_admission": "02-févr.-02", "date_sortie": "23-févr.-02", "specialite": "orthopédie" },
    { "code_etablissement": "7306", "no_dossier_patient": "2", "date_admission": "23-mai-98", "date_sortie": "27-mai-98", "specialite": "orthopédie" },
]

var headersList = ["Code établissement", "No. de dossier", "Date admission", "Date sortie", "Spécialité"]
var headersListPatient = ["Dossier", "Nom", "Prénom", "Naissance", "Sexe"]
var headersListEtablis = ["Établissement", "Nom", "Adresse", "Code postal", "Téléphone"]


function cacher(index) {
    var idtab = document.getElementsByClassName("divTable")[index]
    var dis = idtab.style.display
    if (dis === "flex") {
        idtab.style.display = "none"
    }
    if (index === 3) {
        var divchoix = document.getElementById("selectParPatient")
        divchoix.style.display = "flex"
    }
    if (index === 4) {
        var divchoix = document.getElementById("selectParEtabliSpecia")
        divchoix.style.display = "flex"
    }
}

function montrer(tab) {
    // change tous les display pour "flex". 

    var idShow_flex = document.getElementById(tab)
    idShow_flex.style.display = "flex";
    console.log(idShow_flex);

    // prends tous les ids

    var listeId = []
    var idDiv = document.getElementsByClassName("divTable")
    for (let i = 0; i < idDiv.length; i++) {
        var ids = idDiv[i].id
        if (idDiv[i].id != tab) {
            listeId.push(ids)
        }
    }

    // Change tous les autres <<display>> pour <<none>>, seulement les éléments associés au bouton choisi seront affichés.
    for (let x = 0; x < listeId.length; x++) {
        var idtab = document.getElementById(listeId[x])
        var elementDisplay = idtab.style.display
        if (elementDisplay === "flex") {
            idtab.style.display = "none";
            var idtabNewflex = document.getElementById(tab)
            idtabNewflex.style.display = "flex";
        }
    }

    var idDivSel = document.getElementById("selectParPatient")
    idDivSel.style.display = "flex"

    var idDivSelEtabli = document.getElementById("selectParEtabliSpecia")
    idDivSelEtabli.style.display = "inline-block"

    var table = document.getElementById("tbetabhospParPatient")
    table.style.display = "none"

    var tableEatbli = document.getElementById("tbetabhospParEtabliSpecialit")
    tableEatbli.style.display = "none"

    var fermer = document.getElementById("fermer")
    fermer.style.display = "none"

    var fermerEtabli = document.getElementById("fermerEtabli")
    fermerEtabli.style.display = "none"

    var messages = document.getElementById("message")
    messages.innerHTML = "Les messages d'erreur ou de confirmation apparaîtront ici."

}

function afficherPatient() {

    var table = document.getElementById("tbliste")
    var tr = document.createElement("tr")
    table.appendChild(tr)

    for (let i = 0; i < headersListPatient.length; i++) {
        var headers = document.createElement("th")
        headers.innerText = headersListPatient[i]
        tr.appendChild(headers)
    }

    for (var patient of tabPatients) {

        var tr = document.createElement("tr")
        var td = document.createElement("td")
        table.appendChild(tr)
        tr.appendChild(td)
        td.innerHTML = patient.dossier;

        var tdF = document.createElement("td")
        tr.appendChild(tdF)
        tdF.innerHTML = patient.nom;

        var tdC = document.createElement("td")
        tr.appendChild(tdC)
        tdC.innerHTML = patient.prenom;

        var tdR = document.createElement("td")
        tr.appendChild(tdR)
        tdR.innerHTML = patient.naissance;

        var tdRC = document.createElement("td")
        tr.appendChild(tdRC)
        tdRC.innerHTML = patient.sexe;
    }
}

function afficherEtablis() {

    var table = document.getElementById("tbetablis")
    var tr = document.createElement("tr")
    table.appendChild(tr)

    for (let i = 0; i < headersListEtablis.length; i++) {
        var headers = document.createElement("th")
        headers.innerText = headersListEtablis[i]
        tr.appendChild(headers)
    }


    for (var etablis of tabEtablissement) {


        var tr = document.createElement("tr")
        var td = document.createElement("td")
        table.appendChild(tr)
        tr.appendChild(td)
        td.innerHTML = etablis.etablissement;

        var tdF = document.createElement("td")
        tr.appendChild(tdF)
        tdF.innerHTML = etablis.nom;

        var tdC = document.createElement("td")
        tr.appendChild(tdC)
        tdC.innerHTML = etablis.adresse;

        var tdR = document.createElement("td")
        tr.appendChild(tdR)
        tdR.innerHTML = etablis.code_postal;

        var tdRC = document.createElement("td")
        tr.appendChild(tdRC)
        tdRC.innerHTML = etablis.telephone;
    }

}

function afficherListehospi() {

    var table = document.getElementById("tbetabhosp")
    var tr = document.createElement("tr")
    table.appendChild(tr)

    for (let i = 0; i < headersList.length; i++) {
        var headers = document.createElement("th")
        headers.innerText = headersList[i]
        tr.appendChild(headers)
    }

    for (var hosp of tabHospitalisations) {

        var tr = document.createElement("tr")
        var td = document.createElement("td")
        table.appendChild(tr)
        tr.appendChild(td)
        td.innerHTML = hosp.code_etablissement;

        var tdF = document.createElement("td")
        tr.appendChild(tdF)
        tdF.innerHTML = hosp.no_dossier_patient;

        var tdC = document.createElement("td")
        tr.appendChild(tdC)
        tdC.innerHTML = hosp.date_admission;

        var tdR = document.createElement("td")
        tr.appendChild(tdR)
        tdR.innerHTML = hosp.date_sortie;

        var tdRC = document.createElement("td")
        tr.appendChild(tdRC)
        tdRC.innerHTML = hosp.specialite;
    }

}

function chargerDossier() {
    var idDossier = document.getElementById("dossiers")
    var option = document.createElement("option")
    option.text = "Choisir..."
    option.setAttribute("selected", "")
    idDossier.add(option, 0)

    for (var dossier_patient of tabPatients) {
        idDossier.options[idDossier.options.length] = new Option(dossier_patient.dossier);
    }
    var idDivSel = document.getElementById("selectParPatient")
    idDivSel.style.display = "flex"
}

function chargeretablisem() {
    var idEtablis = document.getElementById("etablises")
    
    var option = document.createElement("option")
    option.text = "Choisir..."
    option.setAttribute("selected", "")
    idEtablis.add(option, 0)

    for (var num_etablis of tabEtablissement) {
        var options = new Option(num_etablis.etablissement + " (" +  num_etablis.nom + ")");
        idEtablis.options[idEtablis.options.length] = options
        options.setAttribute("value", num_etablis.etablissement)
    }
    var idDivSel = document.getElementById("selectParEtabliSpecia")
    idDivSel.style.display = "inline-block"
}

function afficherHospitaParPatient() {

    var table = document.getElementById("tbetabhospParPatient")
    var tr = document.createElement("tr")
    table.appendChild(tr)

    for (let i = 0; i < headersList.length; i++) {
        var headers = document.createElement("th")
        headers.innerText = headersList[i]
        tr.appendChild(headers)
    }

    for (var hosp of tabHospitalisations) {

        var tr = document.createElement("tr")
        var td = document.createElement("td")

        table.appendChild(tr)
        tr.appendChild(td)
        td.innerHTML = hosp.code_etablissement;

        var tdF = document.createElement("td")
        tr.appendChild(tdF)
        tdF.innerHTML = hosp.no_dossier_patient;

        var tdC = document.createElement("td")
        tr.appendChild(tdC)
        tdC.innerHTML = hosp.date_admission;

        var tdR = document.createElement("td")
        tr.appendChild(tdR)
        tdR.innerHTML = hosp.date_sortie;

        var tdRC = document.createElement("td")
        tr.appendChild(tdRC)
        tdRC.innerHTML = hosp.specialite;

    }
}

function afficherHospitaParEtabliSpeciali() {

    var table = document.getElementById("tbetabhospParEtabliSpecialit")
    var tr = document.createElement("tr")
    table.appendChild(tr)

    for (let i = 0; i < headersList.length; i++) {
        var headers = document.createElement("th")
        headers.innerText = headersList[i]
        tr.appendChild(headers)
    }

    for (var hosp of tabHospitalisations) {

        var tr = document.createElement("tr")
        var td = document.createElement("td")
        table.appendChild(tr)
        tr.appendChild(td)
        td.innerHTML = hosp.code_etablissement;

        var tdF = document.createElement("td")
        tr.appendChild(tdF)
        tdF.innerHTML = hosp.no_dossier_patient;

        var tdC = document.createElement("td")
        tr.appendChild(tdC)
        tdC.innerHTML = hosp.date_admission;

        var tdR = document.createElement("td")
        tr.appendChild(tdR)
        tdR.innerHTML = hosp.date_sortie;

        var tdRC = document.createElement("td")
        tr.appendChild(tdRC)
        tdRC.innerHTML = hosp.specialite;
    }

}

function tri() {
    var table = document.getElementById("tbetabhospParPatient")
    var sel = document.getElementById("dossiers");
    var selText = sel.options[sel.selectedIndex].text;
    
    var messages = document.getElementById("message")
    var counter = 0
    var lignetr = table.getElementsByTagName("tr");
    for (var x = 1; x < lignetr.length; x++) {
        var celuletd = lignetr[x].getElementsByTagName("td")[1];
        if (celuletd.textContent === selText) {
            lignetr[x].style.display = "";
            counter ++
            messages.innerHTML = counter + " résultat(s)."
        } else {
            lignetr[x].style.display = "none";
        }
        if (counter === 0) {
            messages.innerHTML = counter + " résultat(s)."
        }
    }
    table.style.display = ""
    var divchoixDossier = document.getElementById("selectParPatient")
    divchoixDossier.style.display = "none"

    var fermer = document.getElementById("fermer")
    fermer.style.display = "flex"
}

function triEtabli() {
 
    var selectSpecialite = document.getElementById("specialite")
    var taille = selectSpecialite.options.length
    for (let i = taille-1; i >= 0 ; i--) {
        selectSpecialite.remove(i)
    }

    var sel = document.getElementById("etablises");
    var selText = sel.options[sel.selectedIndex].value;
    var speci = []
    for ( var specialite of tabHospitalisations) {
        if (selText === specialite.code_etablissement) {
            var options = new Option(specialite.specialite);
            if (speci.indexOf(options.text) == -1) {
                speci.push(options.text)
            }
        }
    }

    var option = document.createElement("option")
    option.text = "Choisir..."
    option.setAttribute("selected", "")
    selectSpecialite.add(option, 0)

    for (var choix of speci) {
        var choixspecialite = new Option(choix)
        selectSpecialite.options[selectSpecialite.options.length] = choixspecialite
    }    
}

function trispecia() {
    var table = document.getElementById("tbetabhospParEtabliSpecialit")
    var selSpecialite = document.getElementById("specialite");
    var selEtablis = document.getElementById("etablises");
    var selTextSpecialite = selSpecialite.options[selSpecialite.selectedIndex].text;
    var selValueEtablis = selEtablis.options[selEtablis.selectedIndex].value;
    
    var lignetr = table.getElementsByTagName("tr");
    var messages = document.getElementById("message")
    var counter = 0
    for (var x = 1; x < lignetr.length; x++) {
        var celuleCode = lignetr[x].getElementsByTagName("td")[0];
        var celuleSpecialite = lignetr[x].getElementsByTagName("td")[4];
        if (celuleCode.textContent === selValueEtablis && celuleSpecialite.textContent === selTextSpecialite) {
            lignetr[x].style.display = "";
            counter ++
            messages.innerHTML = counter + " résultat(s)."
        } else {
            lignetr[x].style.display = "none";
        }
        if (counter === 0) {
            messages.innerHTML = counter + " résultat(s)."
        }
    }
    table.style.display = ""
    var divchoixEtabliSpecialite = document.getElementById("selectParEtabliSpecia")
    divchoixEtabliSpecialite.style.display = "none"

    var fermer = document.getElementById("fermerEtabli")
    fermer.style.display = "flex"
  
}
