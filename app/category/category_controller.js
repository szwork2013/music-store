


app.controller( 'categoryController', function($scope,$rootScope,$route,$location,$routeParams,categoryFactory,productService) {

	
    $scope.init=function() {
        $scope.category_id;
        $scope.albumCategory = $routeParams.categoryName;
        $scope.category_id = $routeParams.category_id
        $scope.categoryInfo();
    }


    /** goToProductPage
     *  routing to the 'product' page
     *
     *  @param void
     *  @return the 'product' page
     *
     */
    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }



    /** categoryInfo
     *  Ajax http query for the selected category
     *
     *  @param the category id
     *  @return object - the category information
     *
     */
    $scope.categoryInfo=function(){
        categoryFactory.categoryInfo($scope.category_id).
            success(function (data) {
                $scope.category=data;
                $scope.quantity=data.length;
            });
    }


    /** addToCart
     * Calling the addToCart main function to add new product to the cart
     *
     *  @param int - the index of selected album in the selected catefory
     *  @return void
     *
     */
    $scope.addToCart=function(index) {
        var album=$scope.category[index];
        album['qty']=1;
        $rootScope.addToCart(album.album_id , album);
    }




    $scope.init();


}); //close categoryController



