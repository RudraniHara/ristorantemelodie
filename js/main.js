
// FUNZIONI JS FATTE DA NOI



gsap.to("#home", {x: 30, opacity: 1, duration:1.2});

gsap.to("#indietro", {x: 20, opacity: 1, duration:1});



$(document).ready(function (){
  $("#bottone_invio_segnalazione").click(function(){
      let testo = document.getElementById("testo_segnalazione").value; 
      let nome = document.getElementById("nome_segnalazione").value;
      let cognome = document.getElementById("cognome_segnalazione").value;
      let mestiere = document.getElementById("scelta_mestiere").value;
  
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var hour = d.getHours();
      var minutes = d.getMinutes();
  
      let messaggioDaStampare = day + "/" + month + "/" + year + " - " + hour + ":"+ minutes + " " + mestiere + " " + nome + " " + cognome + " ha segnalato: \"" + testo + "\"";
  
      if (nome != "" && cognome != "" && testo != "") {
          
          let creazioneLista = document.createElement("li");
          let elementoDentroLista = document.createTextNode(messaggioDaStampare);
              creazioneLista.appendChild(elementoDentroLista);
              document.getElementById("lista_segnalazioni").appendChild(creazioneLista);
  
      }
      else{
          alert("Errore, tutti i campi devono essere compilati");
          
      }
  


  })
});


$(document).ready(function(){
  $("#bottone_cancella_ultimo_elemento").click(function(){

      var elementoLista = document.getElementById("lista_segnalazioni");
      elementoLista.removeChild(elementoLista.lastElementChild);
  

  })

  


  });
//FUNZIONI TUTTE LE PAGINE OK

$(document).ready(function(){
  $("#indietro").click(function(){

    window.history.back();

  })
})

// HOME PAGE --- Orario aggiornato OK


 setInterval(oraLocale, 1000);

  function oraLocale() {
    const date = new Date();
    document.getElementById("ora").innerHTML = date.toLocaleTimeString();
  } 


// HOME PAGE --- Prenotazioni OK

// document.getElementsByTagName("body").onload = function () { confirmBox() };




// CHI SIAMO
//MENU NATALE E CAPODANNO non funzionano più ma funzionavano senza problemi e non ho cambiato

$(document).ready(function () {
// Navbar FISSA EFFETTO DA CAPIRE E DA SPIEGARE
  $('.fixed-top').css('top', $('.top-bar').height());
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.fixed-top').addClass('bg-dark').css('top', 0);
    } else {
      $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
    }
  });

    //MESSAGGIO DI AVVENUTO INVIO

    $("#contattaci").click(function () {
      alert("Messaggio inviato con successo!");
    });

  $("#clicca").click(function () {
    $("#pannello").slideToggle("slow", function () {
      $("#pannello").animate({ opacity: '0.8' }, "slow", function () {
        $("#par").addClass("parcolor");

      });
    });
  });


  $("#mostra").click(function () {
    $(".damostrare").slideToggle(function () {
      $(".damostrare").animate({ height: '20px'});
    });

    

  });


//MENU NATALE E CAPODANNO
var clicked = false;


$(document).ready(function(){
  $("#yesVegan").click(function(){

    if (!clicked) {
      let link = document.createElement("a");
      let text = document.createTextNode("Crema di yogurt di soia ricoperta di scaglie di cioccolato e biscotti vegani");
      let text2 = document.createTextNode("yogurt di soia al mango, cioccolato, biscotti, farina integrale, zucchero di canna");
      link.appendChild(text);
      document.getElementById("divAppend").appendChild(link);
      document.getElementById("divAppend2").appendChild(text2);
      clicked = true;
    }

  })


})


$(document).ready(function(){
  $("#noVegan").click(function(){

    document.getElementById("divAppend").innerHTML = "";
    document.getElementById("divAppend2").innerHTML = "";
    clicked = false;

  })
});




// PRENOTAZIONI --- CONTROLLO FORM


$(document).ready(function(){
  $("#buttonPrenotazione").click(function(){


  if (document.getElementById("prenotazione").validity.valueMissing) {
    document.getElementById("demo").innerHTML = "Campo da compilare o non valido";
    document.getElementById("prenotazione").focus();
  } else if (document.getElementById("data").validity.valueMissing) {
    document.getElementById("demo1").innerHTML = "Devi selezionare un'opzione!";
    document.getElementById("data").focus();
  } else if (document.getElementById("tavoli").value == "") {
    document.getElementById("demo2").innerHTML = "Devi selezionare un'opzione!";
    document.getElementById("tavoli").focus();
  } else if (document.getElementById("check").checked == false) {
    alert("Non hai accettato il trattamento dati");
  }

  if (document.getElementById("prenotazione").validity.valueMissing == false &&
    document.getElementById("check").checked == true && document.getElementById("tavoli").value != "Seleziona") {
    alert("Prenotazione avvenuta con successo");
  }


  })

})







// FUNZIONI DEL CODICE BOOTSTRAP NON FATTE DA NOI ma che dobbiamo riuscire a spiegare

//Permette di vedere le animazioni quando l'utente fa scrolling, inserito wow vicino ad ogni effetto animazione 
// disponibile nella pagina animate.css (https://animate.style/)

new WOW().init();



/* .navbar.fixed-top {
    transition: .5s;
} */


$(document).ready(function (){
  $("#bottone_form_login").click(function (){

      let email = $("#form2Example17").val();
      let password = $("#form2Example27").val();
      
      if (email === "test@gmail.com" && password == 123) {
          location.href = "segnalazioni.html";
      }
  
      if(email != "test@gmail.com" ){
          $("#form-div1").text("Email non riconosciuta");
      }
      else{
          $("#form-label1").text("Email*");
      }

  })
});

$(document).ready(function (){
  $("#bottone_form_login").click(function (){

      let password = $("#form2Example27").val();

      if ( password != 123) {
          $("#form-div2").text("Password non corretta");
      }
      else{
          $("#form-label2").text("Password*");
      }
})
})

})

