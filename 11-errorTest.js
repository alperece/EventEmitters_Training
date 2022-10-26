var old_request = http.request;

http.request = function(options, callback){
    var rule = match_rule(options);
    if(rule){
        var res = new events.EventEmitter(),
            req = new events.EventEmitter();
        res.headers = rule.headers || {'Content-Type': 'text/html'};
        req.end = function(){ 
            if(callback) callback(res);
            res.emit('data', rule.body || '');
            res.emit('end'); 
        };
        return req;
    } else {
        return old_request.call(http, options, callback);
    }
};

/* old_request.on('error', function (err) {
    err.success = false;
    settings.complete(err);
}); */