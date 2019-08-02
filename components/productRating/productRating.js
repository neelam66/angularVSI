angular.module("myApp")
.component("productRating",{

    bindings:{
    productDetails:"="
    },


    templateUrl:"components/productRating/productRating.html",
    controller:[productRatingcontroller],
    controllerAs:"productRatingCtrl"
    });

    function productRatingcontroller(){
        var self=this;
    
    }