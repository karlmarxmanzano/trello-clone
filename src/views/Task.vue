<template>
  <div class="task-view">
    <div class="flex-col flex-grow items-start justify-between px-4">
      <div class="flex">
        <input
          type="text"
          class="p-2 w-full mr-2 block text-xl font-bold bg-transparent"
          :value="task.name"
          @change="updateTaskProperty($event, 'name')"
          @keyup.enter="updateTaskProperty($event, 'name')"
        />

        <button @click="close" class="items-end">
          <unicon name="times"></unicon>
        </button>
      </div>

      <textarea
        class="relative w-full bg-transparent px-2 border mt-2 h-64 border-none text-sm leading-normal"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
      />

      <p class="text-sm">Comments:</p>
      <p class="text-sm">{{ task.index }}</p>

      <TaskComment
        v-for="(comment, $commentIndex) of task.comments"
        :key="$commentIndex"
        :commentIndex="$commentIndex"
        :comment="comment"
        :comments="task.comments"
      />

      <input 
        placeholder="Write a comment" 
        class="w-full p-2 text-sm" 
        @keyup.enter="createComment($event, task.comments)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import closeTaskMixin from '@/mixins/closeTaskMixin'
import TaskComment from '@/components/TaskComment'

export default {
  mixins: [closeTaskMixin],
  data() {
    return {
      comment: ''
    }
  },
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id)
    }
  },
  methods: {
    updateTaskProperty(e, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value
      })
    },
    createComment(e, comments) {
      this.$store.commit('CREATE_COMMENT', {
        comments,
        comment: e.target.value
      })
      e.target.value = ''
    }
  },
  components: {
    TaskComment
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-gray-300 inset-0 mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
