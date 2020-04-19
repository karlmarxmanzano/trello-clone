<template>
  <div class="board">
    <div class="board-container">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
      />

      <div class="board-container-input">
        <input
          type="text"
          placeholder="+ Add new list"
          v-model="newColumnName"
          @keyup.enter="createColumn"
        />
      </div>
    </div>

    <div class="task-bg" v-if="isTaskOpen">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn'
import closeTaskMixin from '@/mixins/closeTaskMixin'

export default {
  components: {
    BoardColumn
  },
  mixins: [closeTaskMixin],
  data() {
    return {
      newColumnName: ''
    }
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task'
    }
  },
  methods: {
    createColumn() {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    }
  }
}
</script>

<style lang="css">
.board {
  @apply p-4 h-full overflow-auto rounded;
}

.board-container {
  @apply flex flex-row items-start;
}

.task-bg {
  @apply inset-0 absolute;
  background: rgba(0, 0, 0, 0.5);
}

.board-container-input {
  @apply flex flex-col;
}

.board-container-input input {
  @apply p-2 mr-2 flex-grow rounded bg-gray-300 text-sm;
  min-width: 350px;
}
</style>
