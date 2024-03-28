# Jimmy Roberts Personal Portfolio Website

Hi again this is my portfolio if you are seeing this you dug deep. This static website is made mainly in HTML, CSS and there is a bit of JS 
and hosted on Netlify on the URL https://jimmyroberts.cz.

## Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/69db7686-f196-4e4a-9a0a-d93366c21968/deploy-status)](https://app.netlify.com/sites/jimmyroberts/deploys)

## How to add text to the site
1. Find the HTML file for the page you want to edit
2. Add, edit or remove the text
3. If you need to translate the text, add a `data-tk`(a translate key) attribute to the text element and set a value for the 
   translation key. e.g. `data-tk="TEXT_ABOUT_ME"`. (The translation key is in uppercase with underscores between words)
4. if you want to edit the app.js file and add a translation key add both the translation texts for each language.
5. Commit and push the changes to the `main` branch of the repository. The site will automatically appear 
   on the public URL by Netlify.
