# WayfairClone

used <title> tag to set name to "Waifair".
used <link rel="icon" href="data:image/png;base64..."> for setting the favicon of the webpage.

External CSS:used an external CSS file using <link rel="stylesheet" href="style.css" />.

Navigation Bar: Described the <nav> element and its class "navbar".which contain Signin and cart functionality

Logo: Included a logo inside the navigation bar using an <img> tag wrapped in an anchor <a> tag.

Link to Sign-In Page: Used anchor <a> tag linking to a sign-in page (./signIn/signIn.html).

created a div with class home-contfoloowerd by home-cont-slider for body content

used 4 images wrapped in <ul> and added <a>to first image to link page of rugs

use 2 btn to slide those images to next or prvious

created a div with iD video-cotainer which is used to run a video on loop using javascript

Created 2 divs with ID delasoftheday and a class all outdoor to show the card of products

used <Footer> to create footer of our page

used <script src="script.js"></script> to add JS file

<!-- script.js -->

created a function with name change slide to change the image on clicking next or prev btn

created another function named createProductCard to create card dynamically which shows Deals of day on home page

<!-- rugs.html -->

added navbar here also
crated 2 buttons ti filete accordding to price with ids lowToHigh and highToLow
after that created a div with id Container
added footer here also same as Index.html
added <script src="rugs.js"></script> to add JAVASCRIPT file to this file

<!-- rugs.js -->

Created a function with name createProductCard() to create product card

created 2 function to sort products according to price sortProductslowToHigh() and sortProductsHighToLow()

created sortAndDisplayProducts() to display sorted product according to input given
created addSortEventListner() to pass the argument to sortAndDisplayProducts() to display sorted Cards

<!-- signIn.html -->

ceated a simple singin form using only 2 input which are username or passwords
used <button> to sign in

<!-- signIn.js -->

after filing usernme and password if an user click on sign in button it will be directed to home page

<!-- stool.html -->

when we click on image present on home page which have stools in it it will direct you to this page
added navbar here also
after that created a div with id Container
added footer here also same as Index.html
added <script src="stool.js"></script> to add JAVASCRIPT file to this file

<!-- stool.js -->

Created a function with name createProductCard() to create product card

created a function addProductCards(productsToShow).This function takes an array of productsToShow as input and adds product cards for each product in that array to the HTML container with the id "container". It first clears the existing content of the container and then iterates over each product to create and append product cards to the container.

window.onload this is an event listener that triggers when the webpage finishes loading.

Inside this event listener the code initializes variables saleMode and priceMode creates buttons for toggling sale mode and price mode and adds event listeners to these buttons Additionally, it adds product cards for all products when the page loads initially.

<!-- wals.html -->

when we click on image present on home page which have stools in it it will direct you to this page
added navbar here also
after that created a div with id Container
added footer here also same as Index.html
added <script src="wall.js"></script> to add JAVASCRIPT file to this file

<!-- wall.js -->

Created a function with name createProductCard() to create product card

created a function addProductCards(productsToShow).This function takes an array of productsToShow as input and adds product cards for each product in that array to the HTML container with the id "container". It first clears the existing content of the container and then iterates over each product to create and append product cards to the container.

window.onload this is an event listener that triggers when the webpage finishes loading.

Inside this event listener the code initializes variables saleMode and priceMode creates buttons for toggling sale mode and price mode and adds event listeners to these buttons Additionally, it adds product cards for all products when the page loads initially.
