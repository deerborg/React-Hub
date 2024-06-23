# Registration Form

This project is a simple registration form designed with HTML and CSS. The form includes fields for the user's full name, email, age, gender, and additional options such as a radio button for how they heard about us, and checkboxes for terms of service and subscription.


## HTML Structure

The HTML file is structured as follows:

1. **Head Section**
    - Links to Google Fonts for the "Inter" font family.
    - Links the external CSS file (`style.css`).

2. **Body Section**
    - Contains a header (`<h1>`) with the title "Register Form".
    - Contains a form (`<form>`) with class `survey-form` which includes:
        - Text input fields for "Full Name" and "Email".
        - Number input field for "Age".
        - Select dropdown for "Gender".
        - Radio buttons for the question "Where did you hear about us?".
        - Checkboxes for "Terms Of Service" and "Subscribe For New".
        - Textarea for additional text input.
        - Submit button for form submission.
## Image
![img.png](img.png)

![img_1.png](img_1.png)


```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<h1 id="title">Register Form</h1>

<form class="survey-form">
    <fieldset>

        <input type="text" id="name-label" placeholder="Full Name">

        <input type="email" id="email-label" placeholder="Email">

        <input type="number" id="number-label" max="100" placeholder="Age">

        <select id="gender">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
        </select>
        <hr>

        <div class="radio">
            <label>Where did you hear about us?</label>
            <label><input type="radio" name="name[]">Facebook</label>
            <label><input type="radio" name="name[]">Linkedln</label>
        </div>

        <div class="check">
            <label><input type="checkbox">Terms Of Service</label>
            <label><input type="checkbox">Subscribe For New</label>
        </div>

        <textarea style="resize: none" placeholder="Text"></textarea>
        <button type="submit">Register</button>
    </fieldset>
</form>
</body>
</html>
````

3. **CSS Styling**
    - The style.css file contains the styling for the registration form:
        - General settings for box-sizing, font, and background color.
        - Styling for the form container, input fields, select dropdown, radio buttons, checkboxes, and the submit button.
        - Hover effects for the form container and submit button.

```css
* {
    box-sizing: border-box;
    box-shadow: none;
    border: none;
    font-size: 20px;
}

body {
    font-family: "Inter", sans-serif;
    background-color: #282828;
    color: whitesmoke;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    border: none;
}

.survey-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 20px;
    padding: 20px;
    opacity: 0.4;
}

.survey-form:hover {
    transform: scale(1.1);
    opacity: 1;
    transition: 1s;
    position: relative;
}

.survey-form fieldset {
    gap: 20px;
    width: 300px;
    border-radius: 10px;
    background-color: midnightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

input {
    gap: 10px;
    padding: 10px;
    background-color: midnightblue;
    height: 40px;
    border-radius: 5px;
    border: 1px solid white;
}

select {
    background-color: navy;
    color: white;
}

hr {
    border: 1px solid white;
    width: 300px;
    margin-top: -8px;
}

body h1 {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 10px;
    width: 332px;
    display: flex;
    justify-content: center;
}

.radio {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.radio label {
    display: flex;
    align-items: center;
}

.check {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
}

.check label {
    display: flex;
    align-items: center;
}

button {
    background-color: navy;
    color: white;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
}

button:hover {
    background-color: white;
    color: black;
}
````
## Features
- Responsive design with flexible alignment and scaling.
- Smooth hover effects for the form and submit button.
- User-friendly input fields with placeholders.
- The form uses a dark theme with contrasting colors for readability.