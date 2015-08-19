
app.controller( 'mainController', function($scope,$rootScope,$timeout,$location,$routeParams,mainFactory,productService) {


    $scope.numberCartItem=0;

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

    $scope.goHome=function(){
        $location.url('/');
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

    $scope.checkLogin=function(){
        mainFactory.checkLogin().
            success(function(bool) {
                if(bool){
                    $scope.myAccountLi=false;
                    $scope.loginLi=true;
                    $scope.logoutLi=false;
                }
                else{
                    $scope.myAccountLi=true;
                    $scope.loginLi=false;
                    $scope.logoutLi=true;
                }
            });
    }


    $scope.logout=function(){
        var r=confirm("Are you sure you want to log out ?");
        if(r) {
            mainFactory.logout().
                success(function(response) {
                    $scope.checkLogin();
                });
        }
    }



    $rootScope.getMyCartData=function(){
        var myCart=localStorage.getItem("MyCart");
        if(myCart==null){
            //empty message
        }
        else{
            myCart=angular.fromJson(myCart)
            $scope.numberCartItem=myCart.length;
            $scope.myCart=myCart;
        }
    }


    $rootScope.checkIfAlbumInCart=function(albumid){
        var myCart=angular.fromJson(localStorage.getItem("MyCart"));
        for(var key in myCart){
            if( myCart[key].album_id==albumid ){
                return true;
            }
        }
        return false;
    }


    $rootScope.addToCart=function(albumId,album) {
        checkIfAlbumInCart=$rootScope.checkIfAlbumInCart(albumId);
        if(!checkIfAlbumInCart) {
            productService.mergeData(album, 'MyCart');
            alert("New album added to your cart");
            $rootScope.getMyCartData();
        }
        else{
            alert("This album already in your cart")
        }
    }


    $scope.subtotal=function(){
        var total=0;
        for(var key in $scope.myCart){
            total=total + Number($scope.myCart[key].album_price);
        }
        return total;
    }

    $scope.checkLogin();
    $scope.getCategories();
    $rootScope.getMyCartData();


}); //close formController



