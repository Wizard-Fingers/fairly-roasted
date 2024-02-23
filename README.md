Submit a zip file of the src directory or a GitHub repo link here.

Implementation requirements:

You must include at least two components. I suggest you have a component for displaying an item on the store, and another for displaying the shopping list. Consider how you'll use callback functions within the item display component. Remember, state should be declared at the highest level its needed, so the basket and items will be declared in app.js for most of you.

You must model your data using classes, like you have done for other projects this week. Include two classes, one for modelling an item, and another for the basket list. The item class must have a function that returns its price in the format £XX, and the basket must have a function that returns the total price of all items in the basket. These functions must be documented and unit tested with atleast two tests. You may find it helpful to create UML class diagrams for these classes.

Extension exercises:

- Have the basket group items together. E.g. if the user adds two of the same item, rather than displaying two things in the basket, display that item once with a 2 next to it.
- Have the basket and item list on different pages. If your using the basic react template, you could achieve this with conditional rendering. If you are using NextJs, you could use routing.
- Include multiple categorys of items that the user can switch between. E.g. if your site is selling books, include tabs to filter between different generes. This could be achieved either with a more complex data structure, or by using arrays filter method.
