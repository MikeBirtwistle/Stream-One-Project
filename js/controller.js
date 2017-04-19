angular.module('RouteControllers', [])
    
	/* Home Controller */

    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To The World Of Drake"
    })

    /* Enquiries Controller */

    .controller('EnquiriesController', function($scope) {
 
        $scope.enquiryUser = {};
 
        $scope.submitForm = function() {
            if ($scope.enquiryForm.$valid) {
                $scope.enquiry.firstname = $scope.firstname;
                $scope.enquiry.lastname = $scope.lastname;
                $scope.enquiry.email = $scope.email;
                $scope.enquiry.eventtype = $scope.eventtype;
                $scope.enquiry.date = $scope.date;
            }

            alert("Thanks, we will get back to you as soon as possible!");
                
        }
    });