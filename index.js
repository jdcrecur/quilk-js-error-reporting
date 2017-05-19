(function( url ) {
    var script = document.getElementById('quilk-js-error-reporting'),
        inner = script.getAttribute('data-extra-json'),
        extra = {},
        a;
    url = script.getAttribute('data-url') || url;
    if( inner !== false ){
        try{
            a = JSON.parse( inner );
            extra = a;
        } catch( e ) {
            console.log( 'Could not JSON.parse');
        }
    }

    window.onerror = function(messageOrEvent, source, lineno, colno, error) {
        try {
            StackTrace.fromError(error).then(function (trace) {
                var data = ({
                    extra_data: extra,
                    url: window.location.href,
                    messageOrEvent: messageOrEvent,
                    source: source,
                    lineno: lineno,
                    colno: colno,
                    trace: trace,
                    browser: detect.parse(navigator.userAgent),
                    browser_history: window.history
                });
                try{
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.open("POST", url);
                    xmlhttp.setRequestHeader("Content-Type", "application/json");
                    xmlhttp.send(JSON.stringify( data ));
                } catch ( e ) {
                    console.error( e );
                }
            });
        } catch ( e ) {
            console.error( e );
        }
    };
})( '/js-error-reporting' );