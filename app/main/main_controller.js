
app.controller( 'mainController', function($scope,$rootScope,$route,$timeout,$location,$routeParams,mainFactory,productService) {



    /** init
     *  create variables and calls function on the page loading
     *
     *  @param voide
     *  @return voide
     *
     */
    $scope.init=function() {
        $scope.numberCartItem = 0;
        $scope.checkLogin();
        $scope.getCategories();
        $rootScope.getMyCartData();
        $scope.numberCartItem=$scope.myCart.length;
    }




    /** deleteFromCard
     *  Deleting a selected album from the cart.
     *
     *  @param int-the album index in cart
     *  @return voide
     *
     */
    $scope.deleteFromCard=function(index){
        var r = confirm("Are you sure you want to delete this album from your cart ?");
        if(r) {
            productService.deleteAlbum("MyCart", index);
            $rootScope.getMyCartData();
            $scope.numberCartItem=$scope.myCart.length;
        }
    }



    /** search
     *  ajax, http query.Searching a song name in data base
     *
     *  @param sting  - the word the user is looking for
     *  @return void - if the qury success return the seaching results
     *
     */
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



    /** goHome
    /** goHome
     *  path to the home page
     *
     *  @param void
     *  @return voide
     *
     */
    $scope.goHome=function(){
        $location.url('/');
    }




    /** goCategory
     *  Go to the category page (using route).
     *
     *  @param string,int,int - the category Name,the categoryId,the index of the category
     *  @return void
     *
     */
    $scope.goCategory=function(categoryName,categoryId,index){
        $scope.liActive=index;
        $location.url('/category/'+categoryName+'/'+categoryId);
    }




    /** showAlbum
     *  http query for an album id by a song in that album, path this id to product page
     *
     *  @param void
     *  @return change path to the product page and send it the a prodect id
     *
     */
    $scope.showAlbum=function(song){
        mainFactory.showAlbum(song).
            success(function(response) {
                $location.url('/product/'+response);
                $scope.word=song;
            });
    }


    $scope.goCheckOut=function(){
        $location.url('/checkout')
    }


    /** getCategories
     *  ajax, http query from the data base for all the categories
     *
     *  @param void
     *  @return voide
     *
     */
    $scope.getCategories=function(){
        mainFactory.getCategories().
            success(function (categories) {
                $scope.categories=categories;
            });
    }



    /** mouseLeave
     *  Hiding the search result menu after 2 sec the mouse curso leave the menu
     *
     *  @param void
     *  @return voide
     *
     */
    $scope.mouseLeave=function(){
        $timeout(function () {
            $scope.hideSearch = true;
        }, 2000);
    }


    /** checkLogin
     *  Checking if the user is login or not.And show/hide a selected navigation item.
     *
     *  @param void
     *  @return void
     *
     */
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



    /** logout
     *  Asking the user if he wants to logout, if he does it  delete the sessions.
     *
     *  @param void
     *  @return voide
     *
     */
    $scope.logout=function(){
        var r=confirm("Are you sure you want to log out ?");
        if(r) {
            mainFactory.logout().
                success(function(response) {
                    $scope.checkLogin();
                });
        }
    }


    /** getMyCartData
     *  Get the cart data from the local storage
     *
     *  @param void
     *  @return voide
     *
     */
    $rootScope.getMyCartData=function(){
        var myCart=productService.getData("MyCart");
        $scope.myCart=myCart;
    }


    /** checkIfAlbumInCart
     * Check if a selected album is aleady save in the local storge
     *
     *  @param int - the selected album id
     *  @return bool
     *
     */
    $rootScope.checkIfAlbumInCart=function(albumid){
        var myCart=angular.fromJson(localStorage.getItem("MyCart"));
        for(var key in myCart){
            if( myCart[key].album_id==albumid ){
                return true;
            }
        }
        return false;
    }



    /** addToCart main function
     *  Checking if the product is aleary saved,alert,and save the new produsct to local storage.
     *
     *  @param int,object - the album id, the album(product) information
     *  @return void
     *
     */
    $rootScope.addToCart=function(albumId,album) {
        if(album.qty <= 0){
            alert('The quantity of this album should be greater than 0.')
            return false;
        }
        var checkIfAlbumInCart=$rootScope.checkIfAlbumInCart(albumId);
        if(!checkIfAlbumInCart) {
            productService.mergeData(album, 'MyCart');
            alert("New album added to your cart");
            $rootScope.getMyCartData();
            $scope.numberCartItem=$scope.myCart.length;
        }
        else{
            alert("This album already in your cart")
        }
    }


    /** subtotal
     *  Subtotal the price of the products in the cart
     *
     *  @param void
     *  @return number, the total price
     *
     */
    $scope.subtotal=function(){
        var total=0;
        for(var key in $scope.myCart){
            total=total + Number($scope.myCart[key].album_price);
        }

        return total;
    }


    $scope.init();

}); //close formController



