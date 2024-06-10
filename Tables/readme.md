# Class Table Webpage

This project is a simple HTML document that displays a table of students, their grades, and birthdates. The webpage is styled using inline CSS and utilizes the Montserrat font from Google Fonts.

## Features

- **Background Image**: The background image is set to cover the entire viewport, centered and non-repeating.
- **Font**: The Montserrat font is used for the entire document.
- **Table Styling**: The table has a dark theme with white text and a dark blue header.

## HTML Structure

- **Head Section**: Includes meta tags for character set, viewport settings, and compatibility, as well as a link to the favicon and the Google Fonts stylesheet.
- **Body Section**: Contains an `h1` tag for the title and a table for displaying student information.

## CSS Styling

The CSS styles are embedded within a `<style>` tag in the head section. Key styles include:

- `body`: Sets margins, padding, height, font, and background image.
- `h1`: Centers the heading and sets its color.
- `table`: Sets the width, border, text alignment, padding, and background color.
- `caption`: Styles the table caption with a background color and white text.
- `colgroup`: Defines a style for the columns.

## Table Content

The table consists of a header row with columns for:
- Student Number
- Student Name
- Student Surname
- Student Note
- Birth Date

Each row in the table represents a student with specific data.

## Favicon

The favicon is linked to an image hosted on an external site and is set to display in the browser tab.

## Background Image

The background image URL used is: `https://images2.alphacoders.com/747/747506.jpg`.

## Font

The font used in this document is Montserrat, which is imported from Google Fonts.

## Example

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="https://toren.com.tr/wp-content/uploads/2017/01/cropped-Favicon.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <title>Document</title>
    <style>
        body{
            margin: 100px;
            padding: 10px;
            height: 100vh;
            font-family: 'Montserrat', sans-serif;
            background-image: url("https://images2.alphacoders.com/747/747506.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        h1{
            color: darkblue;
            text-align: center;
        }
    </style>
</head>
<body>
<h1>Class Table</h1>
<table style="width: 100%; border: 1px solid black; text-align: center; padding: 10px; background-color: #333333">
    <caption style="background-color: darkblue; color: white">Students</caption>
    <colgroup>
        <col span="6" style="background-color: white">
    </colgroup>
    <thead>
    <tr>
        <th>Student Number</th>
        <th>Student Name</th>
        <th>Student Surname</th>
        <th>Student Note</th>
        <th>Birth Date</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>0001</td>
        <td>Jon</td>
        <td>Dee</td>
        <td>A+</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0002</td>
        <td>Car</td>
        <td>Lee</td>
        <td>B+</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0003</td>
        <td>Lucky</td>
        <td>Deer</td>
        <td>F</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0004</td>
        <td>Forest</td>
        <td>Hunt</td>
        <td>C-</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0005</td>
        <td>Micky</td>
        <td>Loose</td>
        <td>D</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0006</td>
        <td>Micky</td>
        <td>Loose</td>
        <td>D</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0007</td>
        <td>Tutti</td>
        <td>Frutti</td>
        <td>C</td>
        <td>21/01/1999</td>
    </tr>
    <tr>
        <td>0008</td>
        <td>Sampiyon</td>
        <td>Cimbom</td>
        <td>D</td>
        <td>21/01/1999</td>
    </tr>
    </tbody>
    <tfoot></tfoot>
</table>
</body>
</html>
