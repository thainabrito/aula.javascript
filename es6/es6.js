var obj = {
    showContext: function showContext() {
        var _that = this;
       
    
        setTimeout(function() {
                _that.log('after 100ms');
            }, 1000);
        },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();