# Mental-Math Project

This Project is Build on learning purpose.

### The Instructions


```

### Instructions

You're given a starter template with dummy data.

**Task**: Create a game that shows an equation of the form X+Y+Z=P. Here,
X, Y, and Z should be random numbers, and P should be the proposed answer. The
user should be able to answer whether it is true that the sum of X, Y, and Z
equals the proposed answer P. The user gets a point for each question the user
answers correctly. The score is displayed in this format: [number of correct
answers]/[number of questions answered]. Every time the user answers a question,
a new question that uses randomly generated numbers is displayed.

Remember that a Component's constructor is the first thing that runs when the
object is created. The render method gets called automatically every time the state changes
inside of the component and anytime the value of the component's props changes.

This exercise will help you practice what you've learned in the course so far, including the trickiest part of React - managing state.


```
## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
