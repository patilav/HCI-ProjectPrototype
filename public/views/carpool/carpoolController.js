/*
    Author : Team 7 -HCI
    File   : carpoolController.js
    Details: carpool Controller for application.
    Email  : hci.cs5340@gmail.com
*/
app.controller('carpoolCtrl', function ($scope, $rootScope, $location,$mdToast) {

  $scope.isCommentEmpty =false;
  $scope.carpoolData = [
      {
      	eventName:'Woman Empowerment 2',
        from: 'Northeastern',
        to: 'Roxbury tobin center',
        startDate: 'Dec 23 2015',
        startTime: '11:30 am' ,
        by: 'Alex Corner',
        comments: [   
                                {  by : "John",  
                                  comment  : "I am In",
                                  date       : 'Nov/23/2015'
                                   },

                                { by : "Alex",  
                                  comment  : "Awesome message me your number",
                                  date       : 'Nov/23/2015'
                                }
                              ]
      },
      {
      	eventName:'Voting Rights',
        from: 'UCB office',
        to: '281 South Station',
        startDate: 'Dec 11 2015',
        startTime: '11:30 am' ,
        by: 'Bruno Mars',
        comments: [   
                                {  by : "Doe",  
                                  comment  : "Can I join you",
                                  date       : 'Aug/23/2015'
                                   },

                                { by : "Bruno",  
                                  comment  : "Sure",
                                  date       : 'Nov/23/2015' 
                                } ,
                                { by : "Doe",  
                                  comment  : "Great see you then, Check your Inbox",
                                  date       : 'Nov/23/2015'
                                }
                              ]
      },
      {
      	eventName:'Education Importance',
        from: 'Northeastern',
        to: '281 South Station',
        startDate: 'Jan 14 2016',
        startTime: '11:30 am' ,
        by: 'Janice'
      },
      {
      	eventName:'Children Health Issues',
        from: 'UCB office',
        to: 'Northeastern',
        startDate: 'Dec 25 2015',
        startTime: '11:30 am' ,
        by: 'Robert'
      },
      {        
      	eventName:'Happy Neighbourhood',
        from: 'Downtown Station',
        to: 'Northeastern Library',
        startDate: 'Jan 4 2016',
        startTime: '09:30 am' ,
        by: 'Maria'
      }
    ];

    $scope.goToCreateCarpool = function() {
      $location.url('/createCarpool');
    }

    $scope.goToPage = function(page) {
        $location.url(page);
    }

    $scope.gotoCarpoolInfo = function(index) {            
      $location.url("/carpoolInfoPage?index=" + index);
    }


    $scope.submitCarpool = function() {
      if($scope.carpoolCreate.eventName != null && $scope.carpoolCreate.fromPlace != null && $scope.carpoolCreate.toPlace != null && $scope.carpoolCreate.dateTime != null) {
        $scope.carpoolCreate = {
          eventName: ' ',
          fromPlace: ' ',
          toPlace: ' ',
          dateTime: ' '
        };
      showToastMessage('Created Carpool Successfully');
      } 
    }

    $scope.getCarpoolInfoDetails = function(index) {
       var search = $location.search();        
        var index = search.index;
       $scope.index =index; 
      $scope.carpoolDetailInfo = $scope.carpoolData[index];
    }

    $scope.comment = function(query) {            
      $scope.isCommentEmpty =false;
      console.log(query);
      if(query == null || query == '' || query === "undefined") {  

          $scope.isCommentEmpty =true;

       } else {
        showToastMessage('Commented Successfully');
          var newItem =  { by : "Janice",  
                           comment  : query,
                           date       : 'Dec/8/2015'}; 
          console.log($scope.carpoolData[$scope.index]);
          $scope.carpoolData[$scope.index].comments.push(newItem); 
                         
      }



    }  
  
    function showToastMessage(message) {
    $mdToast.show(
      $mdToast.simple()
        .content(message)
        .position('top right')
        .hideDelay(3000)
    );
  };

});