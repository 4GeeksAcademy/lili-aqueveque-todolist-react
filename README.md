# Strategy

## How to start coding?

- Install the packages with `$ npm install`.
- Run the webpack server with `$ npm run start`

You can update the `styles/index.css` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## Pseudocode

```
Create a component called TodoList:

  Initialize state variables:
    - todoInput (to store the user input for new todos, initially empty)
    - todos (an array to store the list of todos, initially empty)

  Create an input field where users can type new todos.
  When the input field value changes:
    - Update the todoInput state variable with the new value.

 When a key is pressed in the input field:
    - If the pressed key is Enter:
      - Prevent the default behavior --> if not, it leads to a page reload
      - If the todoInput is not empty:
        - Add the todoInput to the todos array.
        - Clear the todoInput for the next input.

  Display the current todos as a list.
  For each todo in the todos array:
    - Display the todo as a list item.

End component TodoList.
```




### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
