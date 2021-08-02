# Project 4

This is a starting point for those who have trouble getting their projects off the ground.
I would advise you for your own self improvement to try to start from create-react-app.

## Starting from here

### App.js

#### The object

- title: the title of the todo item
- description: a brief description of what needs to be done
- id: a unique value to identify the item (a common option is list.size+1, but this causes problems with deleting elements so find nothing else unique)
- stillTodo: tells whether the item has been finished (this should default to true on new items)

#### handleAdd()

Takes 2 arguments, the title and the description of the object you will add.  See above for how to handle id and stillTodo.

#### still needs

- a way to toggle filtering out completed items
- the handleDelete function
- dynamic creation of todo components

### TodoItem.js

I have written the boilerplate, you implement the functionality

## Feel free to change anything or add more

This is made to be a starting point if you struggle to get off the ground
