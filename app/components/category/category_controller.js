


app.controller( 'categoryController', function($scope,$rootScope,$route,$location,$routeParams,categoryFactory) {

    /** init
     *  create variables and calls function on the page loading
     *
     *  @param voide
     *  @return voide
     *
     */
    $scope.init=function() {
        $scope.category_id;
        $scope.albumCategory = $routeParams.categoryName;
        $scope.category_id = $routeParams.category_id
        $scope.page=0;
        $scope.categoryInfo();
        $scope.category=[];
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
        var offset=$scope.page*3;
        categoryFactory.categoryInfo($scope.category_id,offset).
            success(function (data) {
                if(data) {
                    $scope.category = $scope.category.concat(data);
                    $scope.quantity = data.length;
                }
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

    $scope.getMore=function(){
        $scope.page++;
        $scope.categoryInfo();
    }


    $scope.init();


}); //close categoryController



