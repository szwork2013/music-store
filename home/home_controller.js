


app.controller( 'homeController', function($scope,$location,$routeParams,HomeFactory,$http) {


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
    	
    	 var baseUrl="php/search_view.php/search/";
		  $http.get(baseUrl+word).
		  success(function(response) {
			  $scope.res=response;
		  });
    }
    
    
    $scope.showAlbum=function(song){
   	 var baseUrl="php/search_view.php/getAlbum/";
		  $http.get(baseUrl+song).
		  success(function(response) {
			  $location.url('/product/'+response);
		  });
   }
   
    
    
    
    
    

}); //close formController



