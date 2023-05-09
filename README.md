# The Blogger’s Den 
## (MVC Tech Blog)

<p>&nbsp;</p>

## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |
| Node.js | [https://nodejs.org/en](https://nodejs.org/en)      |
| Express.js | [https://expressjs.com/](https://expressjs.com/)   |
|Sequelize   | [https://sequelize.org/docs/v6/](https://sequelize.org/docs/v6/)      | 
|  SQL   |    [https://www.mysql.com/](https://www.mysql.com/)   |
|  Heroku  | [https://id.heroku.com/login](https://id.heroku.com/login)    |
|  Handlebars   | [https://handlebarsjs.com/installation/](https://handlebarsjs.com/installation/)    |

<p>&nbsp;</p>

## Description:
https://git.heroku.com/the-bloggers-den.git

Developers spend a considerable amount of time creating new applications and debugging existing codebases. They also devote some of their time to reading and writing about technical concepts, recent advancements, and new technologies. Writing about technology is equally crucial as building it. Technology blogs offer more than just the latest news about technology. They provide us with comprehensive analyses of the products that are available in the market today. As a result, we become more informed consumers who can make better choices. By reading product reviews, we can gain a thorough understanding of a particular product's pros and cons. It is important to seek out tech blogs that are impartial in their opinions and not focused on promoting or marketing specific products.

This application brings together many different kinds of software and associated packages to create a dynamic and user-friendly Tech Blog Website called “The Blogger’s Den”. The Blogger’s Den is an application which gives users an opportunity to create, read, update, and delete their personalized accounts that hold their own blog post as well as other users posts. In addition, users are able to click into another user's blog post, and leave reviews. 


Screenshot of Functioning Web Application:


![App In Use](/images/screenshot-of-app.png)

<p>&nbsp;</p>


## Table of Contents:
* Installation (JavaScript, Node.js, NPM Packages, Template Literals, Arrow Functions, Objects, and Functions,SQL, Sequelize, Dotenv, Express.js, Heroku, Handlebars,js)
* Usage
* Credits
* License

<p>&nbsp;</p>

### Installation:

To install this project, a knowledge of JavaScript, Node.js, and Express.js, SQL, Sequelize, Handlebars, and Heroku  were required. I installed the following dependencies with my npm install (bcrypt, dotenv, express-handlebars, mysql2, and sequelize). I had to first install Node.js to my computer and then install the Express and NPM packages. The Express package allowed me to use the express framework in Node.js. Softwares that were new to me were bcrypt, which I used for password hashing, and express-handlebars that uses a template and an input object to generate HTML. A handlebars expression is a {{, some contents, followed by a }}. When the template is executed, these expressions are replaced with values from an input object. In order to create this application, HTML, CSS, Server Side JavaScript, SQL, and Sequelize, and Handlebars all needed to be used in order to allow users to store their own personalized data onto the Sequelize models that I built. Methods used ranged from, Template Literals, Arrow Functions, Objects, and Functions, Variables, If/Else Statements, and the server side JavaScript. The web application is intended for the user to be able to create an account and login to the website. They are given the opportunity to create, read, update, or delete any of the Tech Blog content that they input to their Dashboard. Once they have created a post, it is automatically placed onto the user’s homepage. Here they will have the opportunity to see other users’ blog posts as well as leave comments . The code below makes this happen. 

```
const hbs = exphbs.create({ helpers });

const sess = {
 secret: 'Super secret secret',
 cookie: {},
 resave: false,
 saveUninitialized: true,
 store: new SequelizeStore({
   db: sequelize
 })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
```
(Above: The code sets up a Handlebars instance with custom helper functions and a session object for session management using the express-session middleware. It then adds the session middleware to the Express app and sets the template engine for Express to use as Handlebars, with the default file extension for views set to .handlebars.)

<p>&nbsp;</p>

```
 <nav>
       {{#if logged_in}}
       <a class="col-auto" href="/">Home</a>
       <a class="col-auto" href="/profile">Dashboard</a>
       <a class="col-auto" id="logout">Logout</a>
       {{else}}

         <a class="col-auto" href="/">Home</a>
         <a class="col-auto" href="/login">Login</a>

       {{/if}}
     </nav>
   </header>
   <main class="container container-fluid mt-5">

     {{{ body }}}
   </main>
```
(Above: The {{#if}} and {{else}} Handlebars template tags are used to conditionally render either the logged-in user navigation links or the login links based on the value of the logged_in variable. If the logged_in variable is true, the logged-in user navigation links (Home, Dashboard, Logout) are rendered in the <nav> element. Otherwise, the login links (Home, Login) are rendered.The {{{ body }}} Handlebars template tag is used to render the sub-layout which is passed in as a variable. The sub-layout is rendered in the <main> element and fills in the contents of the page.)

<p>&nbsp;</p>

```
class Post extends Model {}

Post.init(
 {
   id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true,
   },
   title: {
     type: DataTypes.STRING,
     allowNull: true,
   },
   content: {
     type: DataTypes.STRING,
   },
   comment: {
     type: DataTypes.STRING,
   },
   date_created: {
     type: DataTypes.DATE,
     allowNull: false,
     defaultValue: DataTypes.NOW,
   },
   user_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'user',
       key: 'id',
     },
   },
 },
 {
   sequelize,
   timestamps: false,
   freezeTableName: true,
   underscored: true,
   modelName: 'project',
 }
);
```
(Above: This code creates a Sequelize Model named "Post" with properties such as "id", "title", "content", "comment", "date_created", and "user_id". It uses the "Post.init()" method to initialize the Model and define their data types. The "id" property is an integer type with additional constraints, "title", "content", and "comment" are string types, and "date_created" is a date type with a default value of the current date and time. The "user_id" property is an integer type with a foreign key constraint that references the "id" column in the "user" table. Finally, various options are set for the Model, including disabling timestamps and setting the table name to "project".)

<p>&nbsp;</p>

```
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
 checkPassword(loginPw) {
   return bcrypt.compareSync(loginPw, this.password);
 }
}
```
(Above: The code imports necessary dependencies such as Model and DataTypes from Sequelize and bcrypt. It defines a User class that extends the Sequelize Model and contains a checkPassword method that compares the user's password with the provided password using bcrypt. This method can be used for user authentication. The sequelize instance is also required to establish a connection with the database.)


<p>&nbsp;</p>

```
router.get('/project/:id', async (req, res) => {
 try {
   const projectData = await Post.findByPk(req.params.id, {
     include: [
       {
         model: User,
         attributes: ['name'],
       },
     ],
   });


   const project = projectData.get({ plain: true });

   res.render('project', {
     ...project,
     logged_in: req.session.logged_in
   });
 } catch (err) {
   res.status(500).json(err);
 }
});
```
(Above: This code handles a GET request to fetch a specific project from the database with the given ID parameter. It includes the associated User data and renders the retrieved project data in a view using Handlebars template engine. If an error occurs, it sends a 500 error response with the error information in JSON format.)
<p>&nbsp;</p>


```
outer.post('/login', async (req, res) => {
 try {
   const userData = await User.findOne({ where: { email: req.body.email } });

   if (!userData) {
     res
       .status(400)
       .json({ message: 'Incorrect email or password, please try again' });
     return;
   }

   const validPassword = await userData.checkPassword(req.body.password);

   if (!validPassword) {
     res
       .status(400)
       .json({ message: 'Incorrect email or password, please try again' });
     return;
   }

   req.session.save(() => {
     req.session.user_id = userData.id;
     req.session.logged_in = true;
    
     res.json({ user: userData, message: 'You are now logged in!' });
   });


 } catch (err) {
   res.status(400).json(err);
 }
});
```
(Above: This code sets up a POST login route that retrieves user data based on the email provided in the request body using Sequelize's findOne method. If the email is incorrect or the password doesn't match the hashed password stored in the database, it sends a response with a 400 status code and an error message. If the email and password are correct, it sets the session properties "user_id" and "logged_in" and sends a response with a JSON object containing the user data and a success message. If an error occurs, it sends a response with a 400 status code and the error object.)

<p>&nbsp;</p>

### Usage: 

Technology blogs are a valuable tool for businesses looking to market their products and reach a wider audience. By advertising on technology blogs, companies can directly connect with their target market. Additionally, when a tech blog reviews a particular gadget or product, it attracts significant traffic and attention. This creates a mutually beneficial relationship between the site and the business, ultimately resulting in satisfied customers. Online tech blogs such as The Blogger’s Den, on the other hand, offer a space for developers as well as any random user to introduce new software, updates, and technologies they hear and research about. The Blogger's Den is a platform that empowers users to curate their own blog posts along with those of other users. The application enables users to enter the site after the “node server.js” command is entered into the CLI. The endpoint “http://localhost:3001/” will send the user to the homepage of the website. They then have an opportunity to either login if they are already a member, or signup and create an account. Once logged in, the user is given the ability to create, read, update, and delete their own Blog Posts, providing a personalized experience. Users can also view and engage with other users' posts by leaving reviews and comments on their posts as well. 

Overall, this application encourages community and collective knowledge sharing on a fun and easily navigable tech blog space. My application is intended to give space for blogs and websites to give us a glimpse of what is new in our world.

<p>&nbsp;</p>


## Credits

* Express Installation: https://expressjs.com/en/starter/installing.html
* Express API: https://expressjs.com/en/api.html
* GET & POST Requests: https://www.diffen.com/difference/GET-vs-POST-HTTP-Requests
* Error Help: https://stackoverflow.com/questions/14949118/node-js-error-cannot-find-module-express
* Express Routing Guide: https://expressjs.com/en/guide/routing.html
* Error in Sequelize: https://stackoverflow.com/questions/61515940/error-in-sequelize-name-sequelizeeagerloadingerror
* Eslint Installation: https://stackoverflow.com/questions/49227262/how-to-install-eslint-globally
* Express Middleware: https://expressjs.com/en/guide/using-middleware.html
* Connect Session: https://www.npmjs.com/package/connect-session-sequelize
* Express-Handlebars: https://www.npmjs.com/package/express-handlebars
* Built-in Handlebars Helpers: https://handlebarsjs.com/guide/builtin-helpers.html#unless
* Handlebars training: https://www.youtube.com/watch?v=zT_cGPnl-pw
* MYSQL2 NPM: https://www.npmjs.com/package/mysql2
* CSS Styling: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
* Bcrypt Password Hashing: https://www.geeksforgeeks.org/how-to-use-bcrypt-for-hashing-passwords-in-php/


<p>&nbsp;</p>

### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
