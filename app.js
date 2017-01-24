var app = angular.module("fancySelectExample", ['fancyselect']);

app.controller("MyController", function($scope) {
    $scope.sportsList = [{
        id : 0,
        name: "Volleyball",
        likes: 5
    }, {
        id: 1,
        name: "Tennis",
        likes:6

    }, {
        id:2,
        name: "Swim",
        likes:3
    },{
        id:4,
        name: "Volleyball",
        likes:10
    },{
        id:5,
        name:"Wrestle",
        likes:20
    }];

    $scope.selectedSport = {
    };

    $scope.sportSelected = function(selectedSport){
        $scope.selectedSport = selectedSport;
    }
});
