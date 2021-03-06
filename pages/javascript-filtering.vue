<template>
  <main id="main" tabindex="-1">
    <h1>Javascript sorting and filtering</h1>
    <p>Once we start building our web pages from data, we can then enable dynamic sorting and filtering of that data. If we crate functions to render an array of objects into HTML, all we need are some more functions to sort/filter that array, and re-render. Thankfully, JavaScript has us covered. JavaScript arrays support methods for sorting, filtering, iterating, mapping, and joining.</p>
    <h2 id="sec-sorting">Sorting</h2>
    <p>JavaScript arrays have a built-in
      <code>.sort()</code> method which will sort the array elements in-place. That is, it
      <em>modifies</em> the existing array, rearranging the elements so that they are in a sorted order.</p>
    <p>By default, this method will sort the array elements alphabetically. This works fine for arrays of strings. For example:</p>
    <pre><code class="javascript language-javascript">var names = ["Dave", "Ada", "JinHa", "Sean", "Harry"];
names.sort();
console.log(names); // ["Ada", "Dave", "Harry", "JinHa", "Sean"]</code></pre>
    <p>But sorting alphabetically is not so good if your array is full of numbers. For example:</p>
    <pre><code class="javascript language-javascript">var nums = [1,10,21,2];
nums.sort();
console.log(nums); // [1, 10, 2, 21] ...whoops!</code></pre>
    <p>If your array contains anything besides strings, then you must give the
      <code>.sort()</code> method some help. You need to tell it how to compare pairs of elements against each other. Given that, the sorting algorithm can do the rest.</p>
    <p>The way you do this is to pass a compare function to the
      <code>.sort()</code> method. This is similar to how you passed an event listener function to the
      <code>.addEventListener()</code> method of a DOM element. The sort algorithm will call your compare function multiple times, passing two elements at a time.</p>
    <p>Your compare function must accept two parameters. Both will be set to elements in the array, and your function needs to compare those two elements against each other. If the first element should come
      <em>before</em> the second element in the sorted order, then your function must return a negative number. If the first element should come
      <em>after</em> the second element in the sorted order, then your function must return a positive number. And if both elements are equal to each other, and therefore should be
      <em>next</em> to each other in the sorted order, your function must return a zero.</p>
    <p>For example, sorting that array of numbers could be done like so:</p>
    <pre><code class="javascript language-javascript">function compareNums(n1, n2) {
    return n1 - n2;
}

var nums = [1,10,21,2];
nums.sort(compareNums);
console.log(nums); // [1, 2, 10, 21] ...yay!</code></pre>
    <p>The
      <code>compareNums()</code> function will be called multiple times by the sorting algorithm, and each time it will be passed two of the array elements. Since the array elements are just numbers, the function simply returns the first minus the second. If the first number is less than the second, the result will be a negative number. If the first number is greater than the second, the result will be a positive number. And if the two numbers are equal, the result will be zero. That's exactly what the compare function is supposed to return!</p>
    <p>Just as with the event listeners, we can pass this compare function by referring to its name, or we can just pass the function as an in-line anonymous function value: </p>
    <pre><code class="javascript language-javascript">var nums = [1,10,21,2];
nums.sort(function(n1, n2) {
    return n1 - n2;
});
console.log(nums); // [1, 2, 10, 21] ...yay!</code></pre>
    <p>The results are exactly the same. The former approach allows you to define the function once and use it in multiple places, but the latter is more concise if you only end up using the function once.</p>
    <p>Sorting arrays of objects is done the exact same way, except that the two elements passed to your compare function will be objects instead of simple numbers. Your compare function can then decide which property of the objects to compare. For example, say we had an array of people objects and we wanted to sort them by age ascending. The code would look like so:</p>
    <pre><code class="javascript language-javascript">var people = [
    {
        name: "Fred",
        age: 29
    },
    {
        name: "Mary",
        age: 35
    },
    //...
];

//sort by the age property
people.sort(function(p1, p2) {
    return p1.age - p2.age;
});</code></pre>
    <p>The array contains a list of objects, each of which has the same properties:
      <code>name</code>, and
      <code>age</code>. The
      <code>.sort()</code> method can't know which of those properties we want to sort by, so our compare function specifically accesses the
      <code>.age</code> property. We use the same subtraction trick, but we subtract the
      <code>.age</code> property from each object. </p>
    <p>To sort by age descending, just reverse the subtraction order:</p>
    <pre><code class="javascript language-javascript">//sort by the age property descending
people.sort(function(p1, p2) {
    return p2.age - p1.age;
});</code></pre>
    <p>Now the function will return a positive number if the age of p1 is less than p2, zero if they are equal, and negative if the age of p1 is greater than p2. Thus the records with the larger values in their
      <code>.age</code> properties will appear first in the sorted order rather than last.</p>
    <h2 id="sec-filtering">Filtering</h2>
    <p>You can also filter any JavaScript array, selecting just a subset of array elements you want to keep. As opposed to sorting, the
      <code>.filter()</code> method returns a new array containing just the elements you wanted. It doesn't modify the existing array, which is good. That allows you to get back to the full list of elements, since the original array remains intact.</p>
    <p>Like the
      <code>.sort()</code> method, the
      <code>.filter()</code> method needs some help from you. It needs a function that will test each array element to determine whether it should be included in the new filtered array. This function takes one argument, which will be an array element, and it should return
      <code>true</code> if the element should be included in the filtered array, or
      <code>false</code> if it should not.</p>
    <p>For example, say we wanted to filter our
      <code>people</code> array for only those under 30. The code would look like so:</p>
    <pre><code class="javascript language-javascript">var underThirty = people.filter(function(p) {
    return (p.age &lt; 30);
});
console.log(underThirty); //only those with .age &lt; 30
console.log(people); //full set--remains unmodified</code></pre>
    <p>The filtering algorithm will call your test function once for each element in the array, passing that element as the first parameter. In this case, we simply return whether the
      <code>.age</code> property is less than
      <code>30</code>. If it is, the return value will be
      <code>true</code> and the element will be included. If it's not the return value will be
      <code>false</code> and it won't be included.</p>
    <p>The test can be as complex as you need it to be. You just need to return
      <code>true</code> or
      <code>false</code> at the end.</p>
    <h2 id="sec-iterating">Iterating</h2>
    <p>So far you've used the standard
      <code>for ()</code> loop to iterate arrays, but there's another way to iterate arrays in JavaScript: the
      <code>.forEach()</code> method. Like
      <code>.filter()</code> this method takes a function that will be called once for each element in the array, but unlike
      <code>.filter()</code> the
      <code>.forEach()</code> method doesn't care what you return from that function, and it doesn't construct and return a new array. It just calls your function once for each element in the array.</p>
    <p>For example, suppose you wanted to write the name of each person to the console. You could do that using a standard
      <code>for ()</code> loop, or you could use the
      <code>.forEach()</code> method.</p>
    <pre><code class="javascript language-javascript">//standard for loop technique
for (var idx = 0; idx &lt; people.length; idx++) {
    console.log(people[idx].name);
}

//.forEach() technique
people.forEach(function(p) {
    console.log(p.name);
});</code></pre>
    <p>The two techniques yield the exact same results, but the latter is a little more compact and less error-prone than the former. As you might expect, the
      <code>.forEach()</code> method is actually implemented using a standard
      <code>for ()</code> loop. Here is a rough version of how the
      <code>.forEach()</code> method is implemented:</p>
    <pre><code class="javascript language-javascript">//adding something to Array.prototype makes it available
//on every array you create
Array.prototype.forEach = function(callbackFunc) {
    //`this` refers to the current array
    for (var idx = 0; idx &lt; this.length; idx++) {
        callbackFunc(this[idx]);
    }
}</code></pre>
    <h2 id="sec-mapping">Mapping</h2>
    <p>Another handy method on every array is
      <code>.map()</code>. This method is used to
      <em>transform</em> the elements in an array, returning a new array with all of the transformed values. It accepts a mapping function that will be called once for each element in the array. Whatever that function returns will be put into the output array at the same index.</p>
    <p>For example, say I want to extract just the ages from my
      <code>people</code> array so that I get just an array of integers. I can do that using
      <code>.map()</code>:</p>
    <pre><code class="javascript language-javascript">var ages = people.map(function(p) {
    return p.age;
});
console.log(ages); //[29, 35, ...]</code></pre>
    <p>Our function is called once for each object in the array, and our function returns only the
      <code>.age</code> property. So the resulting output array will contain the same number of elements as
      <code>people</code>, but each element will be just the value of the
      <code>age</code> property.</p>
    <p>The mapping function can do whatever it wants to do, but whatever it returns will be in the output array at the same index as the input array element.</p>
    <h2 id="sec-joining">Joining</h2>
    <p>The last array method to mention is
      <code>.join()</code>. This will concatenate all of the array elements into one long string and return it. You can specify what you want in between each element by passing a single string parameter to
      <code>.join()</code>. For example, to get all of names from our
      <code>people</code> array in a comma-delimited list, you could combine
      <code>.map()</code> with
      <code>.join()</code>:</p>
    <pre><code class="javascript language-javascript">var names = people.map(function(p) {
    return p.name;
});
console.log(names.join(", ")); // "Fred, Mary, ..."</code></pre>
    <h2 id="sec-puttingitalltogether">Putting it all Together</h2>
    <p>Since all of these methods return a new array or a reference to the original array, you can combine these together into one function call chain. For example, say I wanted to get an alphabetically-sorted, comma-delimited list of names of those under 30. I could that with a few helper functions, and one function chain:</p>
    <pre><code class="javascript language-javascript">function underThirty(p) { return (p.age &lt; 30); }
function justName(p) {return p.name; }

var names = people.filter(underThirty)
                .map(justName)
                .sort()
                .join(",");

console.log(names);</code></pre>
    <p>The
      <code>people.filter()</code> method returns a new array containing only the person data objects that have an
      <code>.age</code> property less than 30. Since that is an array, it has a
      <code>.map()</code> method, and we call that to extract just the
      <code>.name</code> property from each object. That returns a new array with just strings for elements, and since that is an array, it has a
      <code>.sort()</code> method. Since the array just contains string, we can let it sort alphabetically, so there's no need to supply a compare function. And since the
      <code>.sort()</code> method conveniently returns a reference to the sorted array, you can call that array's
      <code>.join()</code> method to concatenate all of the elements into one string, separated by commas.</p>
    <p>This technique is known as
      <strong>functional programming</strong> and it's become all the rage in the JavaScript community. Functional programming can be quite complicated to learn at first, but once you figure it out, you can accomplish a lot with a small amount of code. Your code also become much more testable, which makes it more reliable in the long-run. Various libraries have been developed around this paradigm, the most popular being
      <a href="http://danieltao.com/lazy.js/docs/">Lazy.js</a>.</p>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Javascript sorting and filtering'
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
