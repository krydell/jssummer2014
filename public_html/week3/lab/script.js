/* 
 * 
 * Karley Vasile, 8/5/2014
 * 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
    hint: str + '...'
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */

// 
var ads = []; // a blank array named ads is created
             
                         
ads.push({ // adds this to the new array
    "title": 'Ad title 1', // this is stored in ads.title
    "desc" : 'Here is the description for ad #1'  // and this is stored in
    //ads.desc
}); // do this for all the rest of the ads...
ads.push({ 
    "title": 'Ad title 2', 
    "desc" : 'Here is the description for ad #2' 
});
ads.push({ 
    "title": 'Ad title 3', 
    "desc" : 'Here is the description for ad #3' 
});
ads.push({ 
    "title": 'Ad title 4', 
    "desc" : 'Here is the description for ad #4' 
});

ads.push({ 
    "title": 'Ad title 5', 
    "desc" : 'Here is the description for ad #5' 
});


rotatead(); // calls the rotatead function 

function rotatead() // the function to pick which ad to display

{
    var adnumber = Math.floor((Math.random() * ads.length) + 0); // to pick the
    //ad, get a random whole number within the ad's length
    
    document.title = ads[adnumber].title + "..."; // change the doc title to the
    // ad's title, plus elipses
    
    document.getElementById('ad').innerHTML = ads[adnumber].desc; // change the
    // ad text in the html file to the chosen random ad
}
