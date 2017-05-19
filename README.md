# quilk-js-error-reporting

A simple lightweight js error reporting tool that will post the error details to the default url of `/js-error-reporting`.

What you do with the results POST'd to your server is up to you. Store then in a NoSQL db, email the details, send to your install of jira...

## How to use

Install `npm install quilk-js-error-reporting --save` (save to auto include in your package.json file)


Then simply include the script tag in your website. You can override the default url, see the example below for how.
```
<script src="<path to node modules>/dist/quilk-js-error-reporting.js" id="quilk-js-error-reporting" data-url="/errors"></script>
```

## Example data captured and sent:
```
{
  "url": "http:\/\/localhost:63342\/quilk-js-error-reporting\/examples\/index.html?_ijt=nssrlj3c29ih1oek0cslnlmask",
  "messageOrEvent": "Uncaught SyntaxError: Invalid regular expression: missing \/",
  "source": "http:\/\/localhost:63342\/quilk-js-error-reporting\/examples\/example.js",
  "lineno": 2,
  "colno": 9,
  "trace": [
    {
      "fileName": "SyntaxError: Invalid regular expression: missing \/",
      "source": "SyntaxError: Invalid regular expression: missing \/"
    }
  ],
  "browser": {
    "source": "Mozilla\/5.0 (X11; Linux x86_64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/58.0.3029.81 Safari\/537.36 OPR\/45.0.2552.635",
    "browser": {
      "family": "Opera",
      "major": 45,
      "minor": 0,
      "patch": 2552,
      "name": "Opera 45",
      "version": "45"
    },
    "os": {
      "family": "Linux",
      "major": null,
      "minor": null,
      "patch": null,
      "name": "Linux",
      "version": ""
    },
    "device": {
      "family": "Other",
      "type": "Desktop",
      "manufacturer": null
    }
  },
  "browser_history": {
    
  }
}
```


## Dependencies and thanks..
This package was made possible with detect.js and stacktrace.js.