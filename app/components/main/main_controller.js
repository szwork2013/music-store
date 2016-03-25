
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
        $rootScope.getMyCartData();
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
            mainFactory.search(word,function(error,response){
                if (response) {
                    $scope.resuls = response;
                }
            })
        }
    }


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


    /** showAlbum
     *  http query for an album id by a song in that album, path this id to product page
     *
     *  @param int -id of selected album
     *  @return change path to the product page and send it the a prodect id
     *
     */
    $scope.showAlbum=function(album_id){
         $location.url('/product/'+album_id);
    }
    
    
    /** goCheckOut
     *  redirect to checkout page
     *
     *  @param void
     *  @return void
     *
     */
    $scope.goCheckOut=function(){
        $location.url('/checkout')
    }


    /** mouseLeave
     *  Hiding the search result menu when the mouse curso leave the menu
     *
     *  @param void
     *  @return voide
     *
     */
    $scope.mouseLeave=function(){
            $scope.hideSearch = true;
    }


    /** checkLogin
     *  Checking if the user is login or not.And show/hide a selected navigation item.
     *
     *  @param void
     *  @return void
     *
     */
    $scope.checkLogin=function(){
        mainFactory.checkLogin(function (bool) {
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
                console.log(response);
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
        if(myCart.length > 0 ){
            $scope.numberCartItem=$scope.myCart.length;
            $scope.cartShow=true;
            $scope.cartEmpty=false;
        }
        else{
            $scope.cartShow=false;
            $scope.cartEmpty=true;
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
            total=total + Number($scope.myCart[key].album_price)*Number($scope.myCart[key].qty);
        }
        return total;
    }


    $scope.init();

}); //close formController



