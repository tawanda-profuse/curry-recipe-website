# <h1>Curry Recipe Website</h1>

<h2>An image of the UI</h2>

<img width="100%" height="500px" src="https://user-images.githubusercontent.com/25343696/112309595-9105a400-8cb4-11eb-9515-f8125ec85c23.png">
<p>This website displays several curry recipes for a registered user and does not allow a non-registered user to view the recipes available. This feature was implemented to ensure that users register to the platform using their email address.</p>

<p>Building this web site required HTML for the layout. Specifically, it was written with ejs for easier creation of templates. Using ejs also makes it easier to style web page elements with CSS. For handling client requests, JavaScript was used to develop application logic that querys the database using a the <code>GET HTTP</code> method. That populates the UI with recipes. The database is a NoSQL database known as MongoDB Atlas - A JSON based database that stores data as documents in collections. User authentication is managed by a handler called JWT - JSON Web Token which handles sign in like cookies on common websites. This makes it easier to log in for already registered users. Essentially, the database has two collections, users and recipes</p>

<h3>For more information about the following:</h6>
<ul>
  <li><a href="https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/" target="_blank">EJS</a></li>
  <li><a href="https://en.wikipedia.org/wiki/JSON" target="_blank">JSON</a></li>
  <li><a href="https://en.wikipedia.org/wiki/JSON_Web_Token" target="_blank">JSON Web Token</a></li>
  <li><a href="https://en.wikipedia.org/wiki/NoSQL" target="_blank">NoSQL</a></li>
  <li><a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a></li>
  <li><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a></li>
  <li><a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a></li>
</ul>

<h2>Installation Steps:</h2>

<p>After cloning and extracting the zip file, open the folder with your editor of choice. Type the following commands in your local terminal where the folder is located.</p>
<ol>
  <li><b>npm install</b></li>
  <li><b>npm run devStart</b></li>
  <li>Lastly, open your browser at the port specified in app.js (should be port 8080)</li>
</ol>




