var myApp = angular.module('myApp', []);

myApp.controller('tdController', function($scope, $http) {

    // load coach
    $http.get("database/getInfo.php?id=coach").success(function(response) {
        $scope.coach = response;
        $scope.loadCoach($scope.coach);
    });

    //load player list
    $http.get("database/getInfo.php?id=player").success(function(response) {
        $scope.players = response;
    });

    //load first player to show
    $scope.loadCoach = function() {
        $scope.player_info = {
            name: $scope.coach.coach_fname + '\xa0' + $scope.coach.coach_lname,
            number: $scope.coach.coach_number,
            position: $scope.coach.coach_position,
            Nationality: $scope.coach.coach_nationality,
            Age: $scope.coach.coach_age,
            Day_Birth: $scope.coach.coach_birth,
            img: './img/' + $scope.coach.coach_img
        };
    }

    //click handler
    $scope.loadPerson = function($event) {
        //axaj call sending id
        var id = $event.target.dataset.id;
        $http.get("database/getInfo.php?id=" + id).success(function(response) {
            $scope.player_info = response;
            loadSelected($scope.player_info);
        });

        function loadSelected() {
            //set new player
            $scope.player_info = {
                id: $scope.player_info.player_id,
                name: $scope.player_info.player_fname + '\xa0' + $scope.player_info.player_lname,
                number: $scope.player_info.player_number,
                position: $scope.player_info.player_position,
                Nationality: $scope.player_info.player_nationality,
                Age: $scope.player_info.player_age,
                Day_Birth: $scope.player_info.player_birth,
                img: './img/' + $scope.player_info.player_img

            };
        }
    }

});
