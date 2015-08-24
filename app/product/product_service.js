app.service('productService', function() {


    /** getData
     *  Get a data from a selected local storage
     *
     *  @param string - the name of the local storage
     *  @return object - the data from the local storage
     *
     */
    this.getData=function(localStorageName){
        var localData=localStorage.getItem(localStorageName);
        if(localData==null){
            localData=[];
        }
        else{
            localData= angular.fromJson(localData);
        }
        return localData;
    }


    /** mergeData
     *  Pushing new data to old local storage data
     *
     *  @param object,string, : object - the new data , string - the name the local storage
     *  @return void
     *
     */
    this.mergeData=function(newData,localStorageName){
        var localData=this.getData(localStorageName);
        localData.push(newData);
        this.updateData(localData,localStorageName);
    }



    /** updateData
     *  Update the local storge with the new merging data
     *
     *  @param object,string, : object - the new data , string - the name the local storage
     *  @return true
     *
     */
    this.updateData=function(localData,localStorageName){
        localStorage.setItem(localStorageName, angular.toJson(localData) );
        return true;
    }




    /** checkIfInWishlist
     * Check if a selected producted is already in the wishlist local storage data
     *
     *  @param int  - a selected prodect id
     *  @return bool
     */
    this.checkIfInWishlist=function(ParamsId){
        var localStorageName='MyWishList';
        var wishlist = 	this.getData(localStorageName);
        for (var key in wishlist) {
            if (wishlist[key].album_id == ParamsId) {
               return true;
            }
        }
        return false;
    }



});