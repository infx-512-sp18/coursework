<template>
  <main id="main" tabindex="-1">
    <h1>Javascript AJAX</h1>

    <p>Now that you know how to create page content from data stored in a local variable, the next logical step is to learn how to fetch those data dynamically from a web service. This allows you to get up-to-date data each time your page loads, and even automatically refresh those data while the user remains on the page. JavaScript allow us to make requests to other web services, and process the results, without navigating or refreshing the page.</p>
    <h2 id="sec-ajax">AJAX</h2>
    <p>Back in the early days of the web (early 1990s), all data fetching and template merging happened on the server. Web browsers received fully-merged static HTML pages, and if you wanted fresher data, you had to refresh the page. If you wanted to send data back to the server, you filled out a form and let the browser submit the form to the server, where the data were processed and a new response page was generated. At that time, browsers were more like the "dumb terminals" of the mini-computer era, and all the real work happened on the server-side.</p>
    <p>JavaScript was added to web browsers starting in 1995, which made it possible to execute code on the client-side. But that code couldn't do very much until 1997, when both Netscape Navigator and Internet Explorer added the Document Object Model (DOM). Now one could conceivably build page content from data, but the data still had to be included in the initial set of files downloaded for the page. Refreshing the data still required a full page refresh.</p>
    <p>In the late 1990s, Microsoft started building a web-based version of their email and calendaring application Outlook, and they wanted a way to check for new mail and send new messages without triggering a full page refresh. Initially they toyed around with using a hidden
      <code>&lt;iframe&gt;</code> element, but the technique was clumsy and full of potential security issues. So they eventually proposed a new programming interface that would let JavaScript make an asynchronous HTTP request back to the web server from which the page came, and process the results once they returned. In response, the Internet Explorer team added a new global object named
      <code>XMLHttpRequest</code>, which could do just that.</p>
    <p>The name of the object began with
      <code>XML</code> because at that time XML was all the rage, and the Outlook Web Access team figured they would encode data transmitted from the server to the client in XML. The
      <code>XMLHttpRequest</code> object would let them make an HTTP request to their server, and would automatically parse the returned data as XML so that they could work with it in their JavaScript. Since HTML was a variant of XML, they could use the same DOM interface when working with the returned data.</p>
    <p>When I first saw this in action, my jaw hit the floor. Up until that point, the web was a pretty mediocre application platform, barely better than what we had in the 1980s with mini-computers and dumb terminals. Now with the
      <code>XMLHttpRequest</code> object, we could build rich, interactive graphical client-side applications, like we had been building on desktop GUI operating systems like Windows, but with no installation step required. A user could simply navigate to a web site, and start using the downloaded application.</p>
    <p>This technique quickly became popular, and was given a name:
      <strong>AJAX</strong>, which was an acronym for
      <strong>A</strong>synchronous
      <strong>J</strong>avaScript
      <strong>A</strong>nd
      <strong>X</strong>ML. The "Asynchronous" part came from the fact that HTTP requests needed to be done asynchronously so that they didn't block the rest of your JavaScript. Since JavaScript is single-threaded, they couldn't just pause all of your script while waiting for the server to respond (which could take a while on a slow network). If the user clicked something in the meantime and your click event listener function didn't run, the user would think that the application was broken. So the HTTP request is done asynchronously, and your code provides a callback function, which is invoked once the server responds.</p>
    <p>By the mid-2000s, all major web sites were adding AJAX-based functionality, and new web applications were architected entirely around AJAX. These new application architectures were more reminiscent of the client-server era, where servers exposed Application Programming Interfaces (APIs) that returned and accepted
      <em>raw data</em>, encoded in some sort of easily interchanged format. Transforming that data into something a user could see was the job of the client application, and one could build many types of client applications against the same server. Since only data flowed back and forth over the network and not a presentation language like HTML, one could build both a web client and a native desktop client that spoke to the same server. As soon as smart mobile devices came along, they became just one more type of client application, interacting with the same server APIs.</p>
    <h2 id="sec-json">JSON</h2>
    <p>In a client-server architecture, the client and server applications are commonly implemented in different programming languages, so the data that is sent between them must be encoded into a format that is easy to generate and parse by all languages. In the late-1990s and early-2000s, the encoding format of choice was XML, but JavaScript developers became frustrated with how difficult it was to work with XML data in the web browser. In contrast, JavaScript arrays and objects were very easy to work with, and there was already a simple text-based format for declaring those that any language could consume, so why not use that instead?</p>
    <p>The result was the
      <strong>JSON</strong> encoding scheme, which stands for
      <strong>J</strong>ava
      <strong>S</strong>cript
      <strong>O</strong>bject
      <strong>N</strong>otation. The format is much simpler and more compact than XML, and it can be parsed directly into native JavaScript arrays and objects. It also supports a wider set of value literals&mdash;all attributes and element content in XML must be encoded as a string so extra meta-data is required to indicate the actual data type (number, boolean, etc). JSON defines a syntax for literal strings, numbers, booleans, and nulls. </p>
    <p>JSON was also very familiar to JavaScript developers, as it looks almost identical to the way one declares arrays and objects in code. For example, here is a JSON-encoded object:</p>
    <pre><code class="json language-json">{
    "id": 42,
    "fname": "John",
    "lname": "Doe",
    "active": true,
    "description": null
}</code></pre>
    <p>The only real difference between JSON and a JavaScript object declaration is that the property names
      <strong>must</strong> be wrapped in quotes, even if they are legal JavaScript identifiers. In a JavaScript object declaration, we can omit the quotes around property names that are legal identifiers, but it also doesn't hurt to include the quotes.</p>
    <p>Note that the value for the
      <code>"id"</code> property is a literal number, so it's included without quotes. This tells any program parsing this data that the value is numeric and should be parsed as such. Similarly, the value for
      <code>"active"</code> is a boolean literal
      <code>true</code>, which will be parsed into a boolean value (as opposed to a string or a number). And the value for
      <code>"description"</code> is a literal
      <code>null</code>, which will be parsed into a null data type.</p>
    <p>JavaScript has built-in support for generating and parsing JSON. To parse the JSON above, you can use
      <code>JSON.parse()</code>:</p>
    <pre><code class="javascript language-javascript">var json = "..."; //JSON-encoded string from above

//parse the JSON string into a JavaScript object
//`obj` will be a native JavaScript object with
//the same properties as you see in the JSON
var obj = JSON.parse(json);</code></pre>
    <p>And to generate JSON, you can use
      <code>JSON.stringify()</code>:</p>
    <pre><code class="javascript language-javascript">//create a JavaScript object
var obj = {id: 43, fname: "Jane", lname: "Lee"};

//convert to JSON-encoded string
var json = JSON.stringify(obj);</code></pre>
    <p>JSON quickly displaced XML as the data-encoding format of choice for web applications, and
      <a href="http://www.json.org/">parsers were developed for all major programming languages</a>. We still refer to the general technique as "AJAX", but it's rare to find a web application these days that uses XML as the primary data-encoding format.</p>
    <h2 id="sec-thefetchfunction">The
      <code>fetch()</code> Function</h2>
    <p>The
      <code>XMLHttpRequest</code> object allows JavaScript developers to request JSON or XML-encoded data from the server, but the programming interface it exposed is quite complex to use. For example, here is the code necessary to make a simple request for some data:</p>
    <pre><code class="javascript language-javascript">//create a new XMLHttpRequest object
var request = new XMLHttpRequest();

//configure it to do an asynchronous GET request for some URL
request.open("GET", "/my/data/url", true);

//add a listener for the "load" event, which
//will happen when the data returns
request.addEventListener("load", function() {
    if (request.status &gt;= 200 &amp;&amp; request.status &lt; 400) {
        // Success!
        var data = JSON.parse(request.responseText);
    } else {
        // We reached our target server, but it returned an error
        //handle error...
    }
});

//add a listener for the "error" event, which
//will happen if there was a network error
request.addEventListener("error", function() {
    //handle error...
})

//finally, send the request to the server
request.send();</code></pre>
    <p>That's quite a lot of code for a rather simple operation. Understandably, developers quickly built libraries to simplify the common case. The most used was the
      <a href="http://api.jquery.com/jQuery.getJSON/">
        <code>.getJSON()</code>
      </a> method that was added to the popular
      <a href="https://jquery.com/">jQuery library</a>. It replaced the code above with this:</p>
    <pre><code class="javascript language-javascript">//assuming that the jQuery library has been added to the page...
//second parameter is a function to be called when the request
//is complete and the data has been returned
$.getJSON("/my/data/url", function(data) {
    //`data` is the already-parsed JSON data returned from the server
});</code></pre>
    <p>This was a much easier programming interface, but it required the entire jQuery library to be included in the page, which added another
      <code>87KB</code> of script to your application. And since
      <a href="http://youmightnotneedjquery.com/">the need for the jQuery library has largely gone away</a>, developers started asking for something like the jQuery
      <code>.getJSON()</code> method to be built-in to the browser as a native API.</p>
    <p>The result was the
      <code>fetch()</code> API, which is
      <a href="http://caniuse.com/#feat=fetch">now supported in all major browsers except IE 11 and Safari 10</a>. For those browsers, we just have to add
      <a href="https://github.com/github/fetch">a small polyfill library</a> that implements the
      <code>fetch()</code> function using the existing
      <code>XMLHttpRequest</code> object.</p>
    <p>A
      <strong>polyfill</strong> library is one that adds a feature that is not yet supported natively by the browser by implementing that feature in JavaScript using existing functionality. The fetch polyfill implements the new
      <code>fetch()</code> function using the existing
      <code>XMLHttpRequest</code> interface. If the library detects the native implementation, it simply exits and does nothing.</p>
    <p>To add the
      <code>fetch()</code> polyfill library from
      <a href="https://cdnjs.com/libraries/fetch">its CDN</a>, simply include this
      <code>script</code> element in your HTML page,
      <em>before</em> any script where you use the
      <code>fetch()</code> function:</p>
    <pre><code class="html language-html">&lt;!-- fetch() polyfill, version 2.0.1 --&gt;
&lt;!-- for the most recent version, see https://cdnjs.com/libraries/fetch --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.1/fetch.min.js"&gt;&lt;/script&gt;

&lt;!-- your script --&gt;
&lt;script src="js/app.js"&gt;&lt;/script&gt;</code></pre>
    <h2 id="sec-asynchronousrequestsandpromises">Asynchronous Requests and Promises</h2>
    <p>Because HTTP requests are done asynchronously, the
      <code>fetch()</code> function returns an object known as a
      <strong>Promise</strong>. A Promise represents an asynchronous operation that will eventually complete successfully or fail. A Promise allows developers to add functions that should be called when either of those conditions occurs. These are just like event listeners, except there are only two events: success (aka resolve), and fail (aka reject). So the Promise object provides two different methods, one for registering a success listener (
      <code>.then()</code>), and one for registering a failure listener (
      <code>.catch()</code>).</p>
    <p>To fetch a URL, call the
      <code>fetch()</code> function passing the URL you want to fetch. It returns a Promise, which you can use to register a callback function that will be invoked when the server responds:</p>
    <pre><code class="javascript language-javascript">var promise = fetch("/my/data/url");

//add a function to be called when the request completes successfully
promise.then(function(response) {
    //parse response as JSON
    return response.json();
});</code></pre>
    <p>Declaring that intermediate variable
      <code>promise</code> is unnecessary in JavaScript, so we typically combine those two statements above into one:</p>
    <pre><code class="javascript language-javascript">fetch("/my/data/url").then(function(response) {
    //parse response as JSON
    return response.json();
});</code></pre>
    <p>And to make the code a bit more readable, we typically insert a line break after the call to
      <code>fetch()</code> and before the call to the Promise's
      <code>.then()</code> method:</p>
    <pre><code class="javascript language-javascript">fetch("/my/data/url")
    .then(function(response) {
        //this is called after the server responds to our request
        //parse response as JSON
        return response.json();
    });</code></pre>
    <p>The function we pass to the Promise's
      <code>.then()</code> method will be called once the server begins to respond. The
      <code>response</code> object passed to this function as the first parameter allows us to do several things, but most commonly, you will want to parse the response body as JSON-encoded data. To do that, simply
      <code>return response.json()</code>.</p>
    <p>The
      <code>response.json()</code> method is another asynchronous operation, so it actually returns a new Promise as well. But the neat thing about promises is that if you return a new Promise from a
      <code>.then()</code> callback function, the outer Promise will take on the state of the new returned Promise. That allows us to add another
      <code>.then()</code> callback function, which will be called once the JSON parsing has completed:</p>
    <pre><code class="javascript language-javascript">fetch("/my/data/url")
    .then(function(response) {
        //parse response as JSON
        return response.json();
    })
    .then(function(data) {
        //this is called after the JSON parsing is complete
        //`data` will be the parsed data (Object or Array)
        console.log(data)
    });</code></pre>
    <p>The return value of the first
      <code>.then()</code> method is the same Promise object, so syntactically we can keep chaining
      <code>.then()</code> methods, one after the other.</p>
    <p>All of this code so far assumes that the network request completes successfully, but when computer networks are involved, you should always assume that the request could fail. The client's WiFi connection might be down, or their connection to their ISP could be down, or the server could be down.</p>
    <p>To respond to a network failure, we can use the Promise's
      <code>.catch()</code> method to register a function that will be called if the request fails. Your function will be handed an
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error object</a> as the first parameter, which will contain details about the error.</p>
    <pre><code class="javascript language-javascript">fetch("/my/data/url")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        //write the full error object to the console
        console.error(err);

        //show the error message to the user
        //you could instead set the `.textContent` of some
        //DOM element you use to show errors
        alert(err.message);
    });</code></pre>
    <p>The really nice thing about Promises is that the function we pass to
      <code>.catch()</code> will be called if any error occurs either during the fetch, or in the JSON parsing. If any of the functions passed to
      <code>.then()</code> cause an error to occur, execution will automatically jump to your
      <code>.catch()</code> function, skipping any intermediary
      <code>.then()</code> functions. This allows you to centralize your error handling in one place, and avoid calling code that depends upon the previous code executing without errors.</p>
    <h2 id="sec-tryingitout">Trying it Out</h2>
    <p>There are
      <a href="https://www.programmableweb.com/">many, many sources of live data on the web</a>, but the one we will use for a quick demo, and for your challenge, is the
      <a href="https://data.seattle.gov">data.seattle.gov</a> site. This site hosts public data for the city of Seattle, and one interesting dataset is the
      <a href="https://data.seattle.gov/Transportation/Fremont-Bridge-Hourly-Bicycle-Counts-by-Month-Octo/65db-xm6k">hourly bicycle traffic counts across the Fremont bridge</a>.</p>
    <p>All of the datasets on the site can be returned in JSON format, and you can supply extra parameters on the URL to filter and sort the data. For example, this URL will return the most-recent 24 hours of data. Click on the URL to see the JSON data in your browser.</p>
    <blockquote>
      <p>
        <a href="https://data.seattle.gov/resource/4xy5-26gy.json?$order=date%20desc&amp;$limit=24">https://data.seattle.gov/resource/4xy5-26gy.json?$order=date%20desc&amp;$limit=24</a>;</p>
    </blockquote>
    <p>You can see that it returns an array of objects, one for each hour. The objects have three properties each:
      <code>date</code> (date and time of observation),
      <code>fremont_bridge_nb</code> (number of bikes traveling on the east sidewalk), and
      <code>fremont_bridge_sb</code> (number of bikes traveling on the west sidewalk).</p>
    <p>Once we fetch this data and parse it as JSON, we can render it to an HTML table, similar to how to rendered the
      <code>people</code> array in the previous tutorial, or the
      <code>MOVIES</code> array in the previous challenge. </p>
    <pre><code class="javascript language-javascript">//last 24-hours of data from Fremont Bridge bike traffic
var dataURL = "https://data.seattle.gov/resource/4xy5-26gy.json?$order=date%20desc&amp;$limit=24";

function parseAsJSON(response) {
    return response.json();
}

function handleError(err) {
    console.error(err);
    alert(err.message);
}

function renderRecord(record) {
    //create a &lt;tr&gt; and &lt;td&gt; elements for each property
    //...
}

function renderTable(data) {
    //`data` is an array of objects
    //loop over the array calling renderRecord()
    //for each record, and appending the returned
    //&lt;tr&gt; to the &lt;tbody&gt;
    //...
}

//fetch the data
fetch(dataURL)
    .then(parseAsJSON)
    .then(renderTable)
    .catch(handleError);</code></pre>
    <p>Because the parsing as JSON and handling of errors is something that will be similar for all
      <code>fetch()</code> requests, it makes sense to define these functions once and simply pass a reference to them to the
      <code>.then()</code> and
      <code>.catch()</code> methods. I also defined a function for the table rendering, similar to what we had done before. When passing just the function names (i.e., references), it makes the Promise chain read almost like English: "fetch this URL, then parse it as JSON, then render it to a table, and handle any errors that happen along the way."</p>
    <p>To see this in action, visit
      <a href="http://codepen.io/drstearns/pen/pRJxrP">my fetch example on CodePen</a>.</p>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Javascript AJAX'
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
