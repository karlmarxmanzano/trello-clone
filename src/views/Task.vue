<template>
  <div class="task-view w-10/12 md:w-6/12">
    <div class="w-full flex-col flex-grow justify-between px-4">
      <div class="flex">
        <input
          type="text"
          class="w-full p-2 text-xl font-bold bg-transparent"
          :value="task.name"
          @change="updateTaskProperty($event, 'name')"
          @keyup.enter="updateTaskProperty($event, 'name')"
        />

        <button @click="close" class="px-2">
          <font-awesome-icon icon="times" />
        </button>
      </div>

      <textarea
        class="w-full bg-transparent px-2 border mt-2 h-64 border-none text-sm leading-normal"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
      />

      <p class="text-sm">Comments:</p>

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
  @apply mx-auto flex flex-row bg-gray-300 my-auto my-16 py-4 text-left rounded shadow;
}
</style>
