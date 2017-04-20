angular.module('RouteControllers', [])
    
	/* Home Controller */

    .controller('HomeController', function($scope) {
        
        /* Set the title of the home page */

        $scope.title = "Welcome To The World Of Drake"


    })

    /* Enquiries Controller */

    .controller('EnquiriesController', function($scope) {
 
        /* Ensure the input fields have empty start values */
        
        $scope.name = "";
        $scope.email="";
        $scope.enquiries="";
        
        // make sure that error messages are not displayed until the user actually submits an invalid form:
        
        $scope.noNameEntered = false; 
        $scope.noEmailEntered = false;
        $scope.noEnquiryEntered =false;
      

       
        // function called when form is submitted: 

        $scope.submitForm = function() {
            /* use Angular's native form valudation to check if each individual input is OK.
            (These are used to display specific error messages via ng-show directives in the template.) */
            $scope.noNameEntered = !($scope.enquiryForm.name.$valid);
            $scope.noEmailEntered = !($scope.enquiryForm.email.$valid);
            $scope.noEnquiryEntered =!($scope.enquiryForm.enquiries.$valid);
            
            
            if ($scope.enquiryForm.$valid) {
                // if form is valid, display simple confirmation message, and clear form:
                alert("Thank you, we aim to get back to you as soon as possible!");
                
                $scope.name = "";
                $scope.email="";
                $scope.enquiries="";
            }       
        }
    });