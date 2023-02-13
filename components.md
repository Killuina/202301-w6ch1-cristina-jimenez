# Data

## Data layer

- Task :
- Id: number
- name: string
- isDone: boolean

## Data modifications

- Delete a task
- Add a task
- Toggle task isDone value

## Components

## List

- Shows a list of tasks
- Receives tasks data from store
- Sends task name and isDone status to task component

- Dispatches the action of deleting task

## Task

- Receives task name
- Shows task's name and isDone status

## Form

- Receives task name
- Sends a post request to the api (?)

## Button

- Dispatches the action of toggling isDone status
