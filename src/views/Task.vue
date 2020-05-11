<template>
  <div class="task-view">
    <div class="flex-col flex-grow items-start justify-between px-4">
      <div class="flex">
        <input
          type="text"
          class="p-2 w-full mr-2 block text-xl font-bold"
          :value="task.name"
          @change="updateTaskProperty($event, 'name')"
          @keyup.enter="updateTaskProperty($event, 'name')"
        />

        <button @click="close" class="items-end">
          <unicon name="times"></unicon>
        </button>
      </div>

      <button class="flex items-center">
        <unicon name="trash-alt"></unicon>
        <p class="text-sm">Delete this task</p>
      </button>

      <textarea
        class="relative w-full bg-transparent px-2 border mt-2 h-64 border-none text-sm leading-normal"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
      />

      <input placeholder="Write a comment" class="w-full p-2 text-sm " />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import closeTaskMixin from '@/mixins/closeTaskMixin'

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
    }
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white inset-0 mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
