(function( url ) {
    url = document.getElementById('quilk-js-error-reporting').getAttribute('data-url') || url;

    console.log(document.getElementById('quilk-js-error-reporting').innerHTML );

    window.onerror = function(messageOrEvent, source, lineno, colno, error) {
        try {
            StackTrace.fromError(error).then(function (trace) {
                var data = ({
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