


app.controller( 'mainController', function($scope,$timeout,$location,$routeParams,mainFactory,$http) {


    $scope.search=function(word){
        $scope.hideSearch=false;
        if(word) {
            mainFactory.search(word).
                success(function (response) {
                    if (response) {
                        $scope.res = response;
                    }
                });
        }
    }


    $scope.showAlbum=function(song){
        mainFactory.showAlbum(song).
            success(function(response) {
                $location.url('/product/'+response);
                $scope.word=song;
            });
    }


    $scope.getCategories=function(){
        mainFactory.getCategories().
            success(function (categories) {
                $scope.categories=categories;
            });
    }

    $scope.mouseLeave=function(){
        $timeout(function () {
            $scope.hideSearch = true;
        }, 2000);
    }


    $scope.logout=function(){
        mainFactory.logout().
            success(function(response) {

            });
    }


}); //close formController



