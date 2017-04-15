angular.module('RouteControllers', [])
    
	/* Home Controller */

    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To The World Of Drake"
    })

    .controller('EnquiriesController', function($scope) {
 
        $scope.enquiryUser = {};
 
        $scope.submitForm = function() {
            if ($scope.enquiryForm.$valid) {
                $scope.enquiryUser.firstname = $scope.user.firstname;
                $scope.enquiryUser.lastname = $scope.user.lastname;
                $scope.enquiryUser.email = $scope.user.email;
                $scope.enquiryUser.eventtype = $scope.user.eventtype;
                $scope.enquiryUser.date = $scope.user.date;
            }

            alert("Thanks, we will get back to you as soon as possible");
                
        }
    });