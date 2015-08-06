app.service('productService', function() {



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

    this.mergeData=function(newData,localStorageName){
        var localData=this.getData(localStorageName);
        localData.push(newData);
        this.updateData(localData,localStorageName);
    }

    this.updateData=function(localData,localStorageName){
        localStorage.setItem(localStorageName, angular.toJson(localData) );
        return true;
    }

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