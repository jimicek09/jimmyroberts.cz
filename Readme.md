# Jimmy Roberts Personal Portfolio Website

This is a personal portfolio website for Jimmy Roberts. It is a static site hand-coded with HTML, CSS and Javascript
and hosted on Netlify on the URL https://jimmyroberts.cz.

## Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/69db7686-f196-4e4a-9a0a-d93366c21968/deploy-status)](https://app.netlify.com/sites/jimmyroberts/deploys)

## How to add text to the site
1. Locate the HTML file for the page you want to edit
2. Add, edit or remove the text as required
3. If the text needs to be translated, add a `data-tk` attribute to the element containing the text and set the value to the 
   translation key. e.g. `data-tk="TEXT_ABOUT_ME"`. (Translation keys are in uppercase with underscores between words)
4. Edit the app.js file to add the translation key and both the translation texts for each language.
5. Commit and push the changes to the `main` branch of the repository. The site will be automatically rebuilt and deployed 
   to the public URL by Netlify.
