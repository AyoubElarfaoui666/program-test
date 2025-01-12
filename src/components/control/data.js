export const data = [
  {
    "module": "HTML",
    "image": "html-1.webp",
    "questions": [
      {
        "question": "What is the purpose of the <!DOCTYPE html> declaration in an HTML document?",
        "choix": [
          { "reponse": "It defines the version of HTML being used.", "res": true },
          { "reponse": "It adds a background color to the page.", "res": false },
          { "reponse": "It defines the structure of the page.", "res": false }
        ]
      },
      {
        "question": "Which tag is used to create a hyperlink in HTML?",
        "choix": [
          { "reponse": "<a>", "res": true },
          { "reponse": "<link>", "res": false },
          { "reponse": "<href>", "res": false }
        ]
      },
      {
        "question": "What is the purpose of the <head> section in HTML?",
        "choix": [
          { "reponse": "It contains metadata about the page.", "res": true },
          { "reponse": "It contains the visible content of the page.", "res": false },
          { "reponse": "It holds the footer information.", "res": false }
        ]
      },
      {
        "question": "How do you embed an image in an HTML document?",
        "choix": [
          { "reponse": "<img src='image.jpg' alt='image'>", "res": true },
          { "reponse": "<image src='image.jpg'>", "res": false },
          { "reponse": "<img href='image.jpg'>", "res": false }
        ]
      },
      {
        "question": "What is the difference between the <div> and <span> tags in HTML?",
        "choix": [
          { "reponse": "<div> is inline, <span> is block-level.", "res": false },
          { "reponse": "<div> and <span> are both block-level elements.", "res": false },
          { "reponse": "<div> is a block-level element, <span> is inline.", "res": true }
        ]
      },
      {
        "question": "Which tag is used to create a list of items in HTML?",
        "choix": [
          { "reponse": "<li>", "res": false },
          { "reponse": "<ol>", "res": true },
          { "reponse": "<ul>", "res": true }
        ]
      },
      {
        "question": "What is the role of the <meta> tag in an HTML document?",
        "choix": [
          { "reponse": "It provides metadata such as the character set or description.", "res": true },
          { "reponse": "It defines the layout structure of the page.", "res": false },
          { "reponse": "It contains the visible content of the page.", "res": false }
        ]
      },
      {
        "question": "What tag is used to create a table in HTML?",
        "choix": [
          { "reponse": "<list>", "res": false },
          { "reponse": "<table>", "res": true },
          { "reponse": "<tr>", "res": false }
        ]
      },
      {
        "question": "How can you create an ordered list in HTML?",
        "choix": [
          { "reponse": "<ol><li>Item 1</li></ol>", "res": true },
          { "reponse": "<dl><li>Item 1</li></dl>", "res": false },
          { "reponse": "<ul><li>Item 1</li></ul>", "res": false }
        ]
      },
      {
        "question": "How do you create a form with input fields and a submit button in HTML?",
        "choix": [
          { "reponse": "<form><input type='submit'></form>", "res": false },
          { "reponse": "<form><button type='submit'></button></form>", "res": false },
          { "reponse": "<form><input type='text'><input type='submit'></form>", "res": true }
        ]
      }
    ],
    "correctAnswer": [0, 0, 0, 0, 2, 1, 0, 1, 0, 2]
  },
  {
    "module": "CSS",
    "image": "CSS3_logo.webp",
    "questions": [
      {
        "question": "What does the CSS property 'color' define?",
        "choix": [
          { "reponse": "It defines the text color.", "res": true },
          { "reponse": "It defines the background color.", "res": false },
          { "reponse": "It defines the border color.", "res": false }
        ]
      },
      {
        "question": "How do you select an element with a class name in CSS?",
        "choix": [
          { "reponse": ".classname", "res": true },
          { "reponse": "#classname", "res": false },
          { "reponse": "classname", "res": false }
        ]
      },
      {
        "question": "Which property is used to change the font size in CSS?",
        "choix": [
          { "reponse": "font-size", "res": true },
          { "reponse": "text-size", "res": false },
          { "reponse": "font-style", "res": false }
        ]
      },
      {
        "question": "How do you center an element horizontally in CSS?",
        "choix": [
          { "reponse": "padding: 50%;", "res": false },
          { "reponse": "text-align: center;", "res": false },
          { "reponse": "margin: auto;", "res": true }
        ]
      },
      {
        "question": "What is the default display value of a <div> element?",
        "choix": [
          { "reponse": "block", "res": true },
          { "reponse": "inline", "res": false },
          { "reponse": "flex", "res": false }
        ]
      },
      {
        "question": "Which property is used to change the background color in CSS?",
        "choix": [
          { "reponse": "background-color", "res": true },
          { "reponse": "bg-color", "res": false },
          { "reponse": "color-background", "res": false }
        ]
      },
      {
        "question": "How do you apply multiple classes to an element in CSS?",
        "choix": [
          { "reponse": "Separate class names with a space.", "res": true },
          { "reponse": "Separate with a semicolon.", "res": false },
          { "reponse": "Use a comma to separate class names.", "res": false }
        ]
      },
      {
        "question": "What does the 'box-sizing' property control in CSS?",
        "choix": [
          { "reponse": "It controls how padding and borders are included in the element's total width and height.", "res": true },
          { "reponse": "It controls the font size of the element.", "res": false },
          { "reponse": "It controls the color of the element’s border.", "res": false }
        ]
      },
      {
        "question": "How do you create a comment in CSS?",
        "choix": [
          { "reponse": "/* This is a comment */", "res": true },
          { "reponse": "// This is a comment", "res": false },
          { "reponse": "<!-- This is a comment -->", "res": false }
        ]
      },
      {
        "question": "Which property is used to set the space between lines of text in CSS?",
        "choix": [
          { "reponse": "letter-spacing", "res": false },
          { "reponse": "line-height", "res": true },
          { "reponse": "word-spacing", "res": false }
        ]
      }
    ],
    "correctAnswer": [0, 0, 0, 2, 0, 0, 0, 0, 0, 1]
  }
];
