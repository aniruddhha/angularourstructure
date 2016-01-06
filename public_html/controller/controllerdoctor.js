/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ControllerDoctor($scope, factoryDoctor){
    
    var registeredDoctors = factoryDoctor.getAllRegisteredIndividuals().then(function(response){
        
        $scope.registeredIndividualDoctors = response;
        
        console.log(""+response[0].idComman);
    });
}
