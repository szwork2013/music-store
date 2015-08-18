
app.controller( 'mainController', function($scope,$timeout,$location,$routeParams,mainFactory,$http) {


    $scope.search=function(word){
        $scope.hideSearch=false;
        if(word.length > 2 ) {
            mainFactory.search(word).
                success(function (response) {
                    if (response) {
                        console.log(response)
                        $scope.resuls = response;
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



    $scope.getWishlistData=function(){
        var myWishlist=localStorage.getItem("MyWishList");
        if(myWishlist==null){
            //empty message
        }
        else{
            myWishlist=angular.fromJson(myWishlist)
            $scope.numberCartItem=myWishlist.length;
            $scope.myWishlist=myWishlist;
        }
    }

    $scope.subtotal=function(){
        var total=0;
        for(var key in $scope.myWishlist){
            total=total + Number($scope.myWishlist[key].album_price);
        }
        return total;
    }


    $scope.getWishlistData();


}); //close formController



