<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="group task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click.native="goToTask(task)"
      :key="task.index"
    >
      <span class="task-name">{{ task.name }}</span>

      <button @click.stop="deleteTask" class="items-end text-gray-400 group-hover:text-gray-600">
        <font-awesome-icon icon="trash-alt" />
      </button>

    </AppDrag>
  </AppDrop>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'

export default {
  components: { AppDrag, AppDrop },
  mixins: [movingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    },
    deleteTask(key) {
      this.$store.commit('DELETE_TASK', {
        columnIndex: this.columnIndex,
        key: this.taskIndex
      })
    }
  }
}
</script>
<style lang="css">
.task {
  @apply flex justify-between items-center flex-grow text-sm shadow mb-2 py-2 px-2 bg-white text-gray-900 no-underline cursor-pointer rounded;
}

.task-name {
  @apply flex-grow text-sm font-medium truncate;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
