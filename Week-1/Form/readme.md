# Registration Form

This project is a simple registration form built using HTML and CSS. It includes fields for username, email, password, gender, city, and address. It also features submit and clear buttons.

## Features

- **Responsive Design**: The form is designed to be responsive and user-friendly on various devices.
- **Modern Styling**: Styled using CSS with a clean and modern design.
- **Google Fonts**: Utilizes the Montserrat font from Google Fonts.
- **Form Elements**: Includes various form elements such as text inputs, email input, password input, radio buttons, select dropdown, and textarea.

## Technologies Used

- **HTML**: For the structure of the form.
- **CSS**: For styling the form.
- **Google Fonts**: For custom fonts.

## Usage

To use this project, simply clone the repository and open the `index.html` file in your web browser.

```sh
git clone https://github.com/deerborg/React-Hub.git
cd registration-form
open index.html
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Form</title>
</head>
<body>
<header>
  <div class="nav-bar"></div>
  <nav>
    <ul>
      <li><a href="#">Main</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
    <div class="form">
        <form>
            <fieldset>
                <legend>Register Card</legend>
                <div class="register">
                    <label for="username">Username</label>
                    <input type="text" id="username">
                </div>

                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email@mail.com">
                </div>

                <div class="password">
                    <label for="password">Password</label>
                    <input type="password" id="password">
                </div>

                <div class="gender">
                    <label>Gender</label>
                    <input type="radio" name="gender">Male
                    <input type="radio" name="gender">Female
                </div>

                <div class="city">
                    <label>City</label>
                    <select>
                        <option>Select City</option>
                        <option>Istanbul</option>
                        <option>Ankara</option>
                        <option>Izmir</option>
                    </select>
                </div>

                <div class="Address">
                    <label for="address">Address</label>
                    <textarea id="address" cols="20" rows="8" placeholder="Enter Address"></textarea>
                </div>
                <button type="submit" style="color: black">Register</button>
                <button type="reset" style="color:black;">Clear</button>
            </fieldset>
        </form>
    </div>
</main>
<footer>
    <div class="footer">
        <pre>deerborg | Furkan Aydemir ---> <a href="https://github.com/deerborg">GitHub</a></pre>
    </div>
</footer>
</body>
</html>
```

```css
*{
    text-decoration: none;
}
body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #333;
    color: white;
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444;
    padding: 10px 0;
}

header .nav-bar {
    display: none;
}

nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    transition: background-color 0.3s;
}

nav ul li a:hover {
    background-color: #5a5a5a;
    color: #eee;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
}

.form {
    background-color: #444;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

fieldset {
    border: none;
}

legend {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.form div {
    margin-bottom: 15px;
}

.form label {
    display: block;
    margin-bottom: 5px;
}

.form input[type="text"],
.form input[type="email"],
.form input[type="password"],
.form select,
.form textarea {
    width: calc(100% - 10px);
    padding: 8px;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
}

.form input[type="radio"] {
    margin-right: 5px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #5a5a5a;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 10px;
}

button:hover {
    background-color: #4a4a4a;
}

footer {
    background-color: #444;
    text-align: center;
    padding: 20px 0;
}

footer pre {
    margin: 0;
}
a{
    color: #eeeeee;
}
a:hover{
    color: black;
}
```