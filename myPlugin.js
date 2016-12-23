(function($){
    var methods = {
        replace: function(){
            return "this is not the end";
        },
        reverse: function(){
            console.log(this);
            return this.text().split("").reverse().join("");
        }
    }
    $.fn.godzilla = function(method){
        if(methods[method]){
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else{
            $.error("method "+method+" does not exist");
        }
    }

    $.fn.increaseShade = function(){
        if(!this.data('level')){
            console.log("data element does not exist so creating one...");
            this.data('level', '0');
        }
        var currentLevel = parseInt(this.data('level'));
        ++currentLevel;
        this.data('level', currentLevel);
        console.log(currentLevel);
        if (currentLevel === 1 ){
            return this.css('background-color', '#354246');
        }
        else if(currentLevel === 2){
            return this.css('background-color', '#44676F');
        }
        else if(currentLevel === 3){
            return this.css('background-color', '#3A8B9D');
        }
        else if(currentLevel === 4){
            return this.css('background-color', '#28A5C2');
        }
        else{
            this.data("level", 0);
            this.data("currentColor", '#03CEFC');
            console.log(this.data("currentColor"));
            return this.css('background-color', '#03CEFC');
        }
    }
})(jQuery);