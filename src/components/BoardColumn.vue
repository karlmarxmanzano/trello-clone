<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="column"
      :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="group flex items-center">
        <input
          type="text"
          class="column-name"
          :value="column.name"
          @change="updateColumn($event, 'name', column)"
          @keyup.enter="updateColumn($event, 'name', column)"
        />

        <button @click="deleteColumn" class="items-end text-gray-400 pl-2 group-hover:text-gray-600">
          <font-awesome-icon icon="trash-alt" />
        </button>
      </div>

      <ColumnTask
        v-for="(task, $taskIndex) of column.tasks"
        :key="$taskIndex"
        :task="task"
        :taskIndex="$taskIndex"
        :column="column"
        :columnIndex="columnIndex"
        :board="board"
      />

      <input
        type="text"
        class="column-input"
        placeholder="+ Add another card"
        @keyup.enter="createTask($event, column.tasks)"
      />
    </AppDrag>
  </AppDrop>
</template>

<script>
import ColumnTask from './ColumnTask'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'

export default {
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    pickupColumn(e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    updateColumn(e, key, column) {
      this.$store.commit('UPDATE_COLUMN', {
        column,
        key,
        value: e.target.value
      })
    },
    createTask(e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      e.target.value = ''
    },
    deleteColumn() {
      this.$store.commit('DELETE_COLUMN', {
        key: this.columnIndex
      })
    }
  }
}
</script>

<style lang="css">
.column {
  @apply bg-gray-300 p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
  max-width: 350px;
}

.column-name {
  @apply flex items-center mb-2 font-bold block p-2 w-full bg-transparent;
}

.column-input {
  @apply text-xs block p-2 w-full bg-transparent;
}
</style>
