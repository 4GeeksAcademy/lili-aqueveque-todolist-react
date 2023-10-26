# Strategy

## How to start coding?

- Install the packages with `$ npm install`.
- Run the webpack server with `$ npm run start`

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

