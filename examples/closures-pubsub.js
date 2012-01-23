var hub = (function(){
    var subscriptions = {};
    return {
        subscribe : function(event, handler){
            (subscriptions[event] = subscriptions[event] || [])
            .push(handler);
        },
        publish : function(event, data){
            (subscriptions[event] || [])
            .forEach(function(subscriber){
                subscriber(data);
            });
        }
    };
}());

hub.subscribe('person-added', function(p){ console.log(p); } );
hub.publish('person-added', {name: 'Mick Jagger'});



