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
        templateUrl: 'app/main/directives/newAlbums.html',
    };
});
