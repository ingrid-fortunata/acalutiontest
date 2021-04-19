This is a project for Acalution - Wine Delivery. It consist a wine lists page and if you click on one of the card, you will be directed to the details page of a wine.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Some functions:

On the wine lists page:

1. Showing wine lists with infinite scroll until the bottom of the page (footer)
2. Able to click on "add to cart" and show a popup message
3. If quantity of the wine is zero (0), then unable to "add to cart" -- the button in grey color
4. Able to click on "bookmark" icon and show a popup message
5. If quantity of the wine is 5 or below, then will show "quantity left" bubble on golden color
6. If vintage year is 0, don't show vintage year
7. Able to search on specific name in the search bar
8. Directing to the wine details page if you click on one of the card

On the wine details page:

1. Showing wine details
2. Image can be enlarge on hover
3. If vintage year is 0, show as "Non Vintage"
4. Able to click on "add to cart" and show a popup message
5. If quantity of the wine is zero (0), then unable to "add to cart" -- the button in grey color
6. Able to click on "bookmark" icon and show a popup message
7. If quantity of the wine is 5 or below, then will show "quantity left" bubble on golden color
8. Able to go back to the wine list page (homepage) if you click on the "left arrow button" on the navigation or click "wine delivery image logo" or click "home" on breadcrumbs.

### Other features:

1. Responsive
2. Deployed to heroku https://winedelivery01.herokuapp.com/
