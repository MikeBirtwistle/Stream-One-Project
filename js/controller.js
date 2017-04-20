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
        
        /* Only display error messages when the user attempts to sumbit an invalid form */
        
        $scope.noNameEntered = false; 
        $scope.noEmailEntered = false;
        $scope.noEnquiryEntered =false;
      

       
        /* On submitting the form, this function is called */

        $scope.submitForm = function() {

            /* Validate the input, and show binded error messages if it's invalid */
            
            $scope.noNameEntered = !($scope.enquiryForm.name.$valid);
            $scope.noEmailEntered = !($scope.enquiryForm.email.$valid);
            $scope.noEnquiryEntered =!($scope.enquiryForm.enquiries.$valid);
            
            /* Check to see if the form is valid */

            if ($scope.enquiryForm.$valid) {
                
                /* If the form is valid, raise an alert with a message */

                alert("Thank you, we aim to get back to you as soon as possible!");
                
                /* Clear fields after user has submitted their enquiry */

                $scope.name = "";
                $scope.email="";
                $scope.enquiries="";
            }       
        }
    });