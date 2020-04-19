import { uuid } from './helpers/utils'

export default {
  name: 'trello-clone-default-board',
  columns: [
    {
      name: 'Tasks',
      tasks: [
        {
          description: '',
          name: 'Update TailwindCSS in trello-clone project',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Refactor UI design',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Implement Browser Draggable API',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'For Review',
      tasks: [
        {
          description: '',
          name: 'Add new task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Add new column',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: '',
          name: 'Deploy initial project',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
