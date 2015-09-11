/** newAlbums
 *  Custom directive
 *
 *  @param void
 *  @return a html element
 *
 */
app.directive('newAlbums', function() {
    return {
        restrict: 'E',
        scope:true,
        templateUrl: 'app/main/directives/newAlbums.html',
        controller:function($scope,$rootScope,productService){






        }//close controller
    };
});
