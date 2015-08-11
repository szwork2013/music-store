


app.controller( 'homeController', function($scope,$timeout,$location,$routeParams,HomeFactory,SearchFactory,$http) {


    $scope.album={};
    $scope.albums=[];
    $scope.login='Login'

    $scope.getAlbums=function(){
    HomeFactory.getAlbums().
        success(function (albums) {
            $scope.albums=albums;
        });
    }

    $scope.checkLogin=function(){
        HomeFactory.checkLogin().
            success(function (ifLogin) {
                if(ifLogin){
                    $scope.login='Logout'
                }
                else{
                    $scope.login='Login';
                }
            });
    }

    $scope.changeBigPic=function(index){
        $scope.i=index;
    }



    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }


    $scope.getCategories=function(){
        HomeFactory.getCategories().
            success(function (categories) {
                $scope.categories=categories;
            });
    }


    $scope.getWishlistData=function(){
        var myWishlist=localStorage.getItem("MyWishList");
        if(myWishlist==null){
            //empty message
        }
        else{
            $scope.myWishlist=angular.fromJson(myWishlist);
        }
    }


    $scope.checkLogin();
    $scope.getWishlistData();
    $scope.getCategories();

   
    
    $scope.search=function(word){
        $scope.hideSearch=false;
        if(word) {
            SearchFactory.search(word).
                success(function (response) {
                    if (response) {
                        $scope.res = response;
                    }
                });
        }
    }
    
    
    $scope.showAlbum=function(song){
    	  $scope.word=song;
        SearchFactory.showAlbum(song).
		  success(function(response) {
			  $location.url('/product/'+response);
			
		  });
   }

    $scope.mouseLeave=function(){
        $timeout(function () {
            $scope.hideSearch = true;
        }, 2000);
    }
    
    
    

}); //close formController



