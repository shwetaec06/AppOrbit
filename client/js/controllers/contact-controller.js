app.controller('contactController', ['$scope','$http','$location', function ($scope,$http,$location) {
  $scope.currentPage = 1;
  $scope.itemsPerPage = 3;
  $scope.contact={};
  
  $scope.master={}
  $scope.master.emails=[{ emailType: "", emailAdd: "" }
               ];
  $scope.master.phoneNos=[ { phoneType: "", phoneNo: "" }];
  $scope.contact.emails = [
               { emailType: "", emailAdd: "" }
               ];
  $scope.contact.phoneNos = [
               { phoneType: "", phoneNo: "" }
               ];
  
  $scope.addMoreEmail = function () {
                var contactEmail = {};
                contactEmail.emailType = $scope.emailType;
                contactEmail.emailAdd = $scope.emailAdd;
                $scope.contact.emails.push(contactEmail);

                //Clear the TextBoxes.
                $scope.emailType = "";
                $scope.emailAdd = "";
            };
  $scope.removeEmail = function (index) {
                    $scope.contact.emails.splice(index, 1);
                }

  $scope.addMorePhn = function () {
                var contactPhn = {};
                contactPhn.phoneType = $scope.phoneType;
                contactPhn.phoneNo = $scope.phoneNo;
                $scope.contact.phoneNos.push(contactPhn);

                //Clear the TextBoxes.
                $scope.emailType = "";
                $scope.emailAdd = "";
            };
  $scope.removePhn = function (index) {
                    $scope.contact.phoneNos.splice(index, 1);
                }

  $scope.saveContact = function(){
      $http({
            url: 'http://localhost:3000/api/contacts',
            method: "POST",
            data: $scope.contact
        })
        .then(function(response) {
            console.log(response);
            alert("Form submitted successfully");
            $location.path('/contact-list');
        }, 
        function(response) { 
          alert("something went wrong");
        });
  }

  $scope.reset = function(form){
    console.log(form);
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.contact=angular.copy($scope.master);
  //$scope.contact=Object.assign($scope.contact,{});
  }

  $scope.getContacts = function(){
    $http({
            url: 'http://localhost:3000/api/contacts',
            method: "GET"
         })
        .then(function(response) {
            $scope.contactList = response.data;
            $scope.totalItems = response.data.length;
        }, 
        function(response) { 
          alert("something went wrong");
        });
  }
       
}]);