app.controller("mioController", function($scope){
        $scope.utente = {nome:""};
		$scope.mail = {email: ""}
		$scope.soggetto = {motivo:""}
		$scope.saluta = function(){
			return "Mi chiamo " + $scope.utente.nome + ", " 
			+ " vi contatto dalla mail: " + $scope.mail.email + 
			" in merito alla richiesta di " + $scope.soggetto.motivo;  };
	});

	

    app.controller("filtroPiattoCapodanno", function ($scope) {

        var piatti = [
            { nome: "Tartufini bianchi di ricotta", tipo: "Antipasti", costo:" 10.95"},
            { nome: "Flan di carciofi con fonduta di scamorza", tipo: "Primi", costo:" 8.50"},
            { nome: "Tegolino di cavolfiore violetto siciliano", tipo: "Primi", costo:" 7.95"},
            { nome: "Pappardelle con sugo rustico ai funghi porcini", tipo: "Primi", costo:" 12.50"},
            { nome: "Maccheroni di pasta fresca al ragu di vitellina", tipo: "Primi", costo:" 15.50"},
            { nome: "Filetto di maialino agli agrumi e insalata verde", tipo: "Secondi", costo:" 13.90"},
            { nome: "Semifreddo di zabaione con gelee di lamponi", tipo: "Dolce", costo:" 7.50"}, 
            { nome: "Crema di yogurt di soia ricoperta di scaglie di cioccolato", tipo: "Dolce", costo:" 7.50"},
    ]

        $scope.piatti = piatti;
    });

    app.controller("filtroPiattoNatale", function ($scope) {

        var piatti2 = [
            { nome: "Ratatouille di zucca gialla in agrodolce", tipo: "Antipasto", costo: "8.00" },
            { nome: "Panzarella di ceci al rosmarino e timo", tipo: "Antipasto", costo: "9.95" },
            { nome: "Vol-au-vent con insalata russa e foglie di menta", tipo: "Antipasto", costo: "4.95" },
            { nome: "Funghi porcini ripieni di melanzane", tipo: "Antipasto", costo: "9.95"  },
            { nome: "Risotto carnaroli con vellutata di zucca", tipo: "Primi", costo:" 14.50"},
            { nome: "Lasagne ai carciofi ripiene", tipo: "Primi", costo:" 14.50"},
            { nome: "Cuore di filetto di baccala' su purea di patate", tipo: "Secondi", costo:" 12.50"},
            { nome: "Spirale di ombrina con purea di patate", tipo: "Secondi", costo:" 15.50"},
            { nome: "Mousse di caffe' al cucchiaio ", tipo: "Dolce", costo:" 9.50"},
            { nome: "Crema di yogurt di soia ricoperta di scaglie di cioccolato", tipo: "Dolce", costo:" 7.50"},
    ]

        $scope.piatti2 = piatti2;
    });

    app.controller('miaScritta', function($scope, $timeout) {
        $scope.myHeader = "Desideri una cena romantica?";
        $timeout(function () {
            $scope.myHeader = "Oppure una cena fra amici?";
        }, 2000);
        $timeout(function () {
            $scope.myHeader = "O magari una reunion famigliare?";
        }, 5000);
        $timeout(function () {
            $scope.myHeader = "Melodie è il ristorante che fa per te!";
        }, 7000);
        $timeout(function () {
            $scope.myHeader = "Chiamaci o manda una mail nella pagina contatti!";
        }, 10000);
      });

      
        app.controller('mieiCuochi', function($scope) {
            $scope.showMe = false;
            $scope.vediCv = function() {
                $scope.showMe = !$scope.showMe;
            }
        });

       
