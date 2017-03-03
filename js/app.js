var app = angular.module('myApp',[]);

app.controller('myValues', function($scope){
	var array = [];
	var form = {};

	$scope.myVar = false;

	function formatPhoneNumber(s) {
		  var s2 = (""+s).replace(/\D/g, '');
		  var m = s2.match(/^(\d{3})(\d{7})$/);
		  return (!m) ? null : "(" + m[1] + ") " + m[2];
	}
	
	console.log(form);
	$scope.update = function(form) {
        $scope.array = array.push(form);
        console.log(array);
        $scope.myVar = !$scope.myVar;
        var result = $scope.form.phone;
      	results = formatPhoneNumber(result);
       	form.phone = results;
        for (var x in form){
		    if (form[x] === true){
		    var continent = document.getElementById(x).value;
		    form.nationality = continent;
	    	};
		};
        $scope.greeting = form;
    };    
});



	