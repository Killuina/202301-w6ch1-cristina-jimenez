# Data

## Data layer

- List of tasks:
- Id: number
- name: string
- isDone: boolean

## Data modifications

- Load task
- Delete a task
- Add a task
- Toggle task status

## Components

## Tasks List

- Receives a list of tasks
- Shows a task card component for every task in the list
- Sends a task to every task component

## Task Card

- Receives toggle status action
- Receives delete task action
- Receives task info

- Shows task's name and done status
- Shows button component to toggle
- Shows button component to delete

- Sends toggle status action to toggle button
- Sends delete task action to toggle button

## Form

- Receives the add student action
- Shows an input for the new task name with label "Task"
- Shows a button "Add Task"
- On submit executes the add student action

## Button

- Receives an action
- Receives an icon

- Shows the received icon
- On click executes the received action
