<!DOCTYPE html>
<html>
    <head>
    <title>The Bloggers Den</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="./public/css/style.css" />
    </head>
<body>
<header>

<div class= "large-font">The Blogger's Den</div>
</header>

<nav class="header-nav">
        <a href="#Home">Home</a>
        <a href="#Dashboard">Dashboard</a>
        <a href="#Login">Login</a>
        <a href="#Logout">Logout</a>
</nav>

<main>



<div class="col-10 col-md-6 col-lg-5">

        <form class="bg-white my-4 p-4 rounded">
            <h3>Login</h3>

            <div class="form-group py-2">
                <label for="username">Username</label>
                <input type="text" id="username" class="form-control" placeholder="Username" required />
            </div>

            <div class="form-group py-2">
                <label for="password">Password</label>
                <input type="text" id="password" class="form-control" placeholder="Password" required />
            </div>

            <button class="btn btn-block btn-success w-100">Login</button>
            <a href="/views/signup.handlebars">☺ Sign Up Instead!</a>
        </form>

</div>

</main>
    <script src="public/js/homepage.js"></script>
</body>
</html>