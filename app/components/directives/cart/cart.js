/** myCart
 *  Custom directive
 *
 *  @param void
 *  @return a html element
 *
 */
app.directive('myCart', function() {
    return {
        restrict: 'E',
        scope:true,
        templateUrl: 'app/components/directives/cart/cart.html',
        controller:function($scope,$rootScope,productService){


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



        }//close controller
    };
});
