
# Development

### Describe the goal of the application and value to a user
The goal of this website is to create a space for sneaker lovers. The website could be used as a platform to find sneakers that the user loves, and can calculate how much money they will spend to buy all the sneakers they like. They can also use this platform to compare price, and color of the sneakers.

### Link to your deployed web application running online
https://crazyhippo313.github.io/development/

### Note the usability principles considered for layout and hierarchy
1. Controllability: the filter feature allows the user to display multiple brands/colors at once.
2. Consistency: The terms and layout used is the same for the whole page
3. Design and layout: simple and minimal design. Color theme that has good contrast with the text.

### Organization of Components
1. Visualization: a wrapper that has other components in it. Also used to declare all the states.
2. Header: a navigation bar to sort and filter all the data. It also displays the aggregate price of all the selected sneakers.
3. Box: a card that displays each sneakers. It also has a button to select/deselect the user’s liked sneakers. 

### How Data is Passed Down Through Components

There are 3 types of state that I use.
1. A state that is currently displayed data. The type is an object that has fields like name, id, price, color, brand, and selected.
2. States that represent the current condition of filtering and sort features. The type is arrays of boolean. Each index of boolean tells if that filter(or sort) checkboxes are selected or not. 
3. States that are current aggregated values of the selected data.

### How the User Triggers State Changes

There are 2 ways to trigger state changes
1. Users can click the filter and sort checkboxes. This will change the array of boolean states and will also change the state that display data on the ui
2. Users can click to select each sneaker. This will change the state that displays current data(the ‘selected’ field will change). It will also alter the states that display current aggregated of the selected values.
