import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from '../default-board'
import { saveStatePlugin, uuid } from '@/helpers/utils'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask(state) {
      return id => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: '',
        comments: []
      })
    },
    CREATE_COLUMN(state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      })
    },
    UPDATE_COLUMN(state, { column, key, value }) {
      column[key] = value
    },
    DELETE_COLUMN(state, { key }) {
      const columnList = state.board.columns

      columnList.splice(key, 1)
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value
    },
    DELETE_TASK(state, { columnIndex, key }) {
      const taskList = state.board.columns[columnIndex].tasks
      taskList.splice(key, 1)
    },
    CREATE_COMMENT(state, { comments, comment }) {
      comments.push({
        comment,
        id: uuid()
      })
    },
    DELETE_COMMENT(state, { comments, key }) {
      comments.splice(key, 1)
    },
    MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    }
  }
})
