/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function FactoryDoctor($http) {

    var responseListDoctors = null;

    var factoryDoctor = {
        getAllRegisteredIndividuals: function () {
            var promise = $http.get("").then(function (response) {
                return response.data;
            });
            return promise;
        },
        registerNewIndividualDoctor: function () {

            var studentNew = {
                id: "1234",
                name: " aabc",
                rno: "1234",
                gender: "male"
            };

            var httpRequest = {
                method: "POST",
                url: "",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": undefined // if you dont know what type of response is 
                },
                data: studentNew
            };
            $http(httpRequest).success(function (response) {
            }).error(function (error) {
            });
        }
    };

    return factoryDoctor;
}


