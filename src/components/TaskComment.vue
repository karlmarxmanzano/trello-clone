<template>
  <div>
    <div class="items-center flex-wrap text-sm p-4 bg-white text-gray-900 no-underline cursor-pointer rounded">
      <p class="break-words w-full  text-sm font-medium-desc">{{ comment.comment }}</p>
    </div>

    <button @click="deleteComment">
      <p class="text-xs mt-0 pl-2 text-gray-600 hover:text-gray-700">Remove</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskComment',
  props: {
    comment: {
      type: Object,
      required: true
    },
    commentIndex: {
      type: Number,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteComment(key) {
      this.$store.commit('DELETE_COMMENT', {
        comments: this.comments,
        key: this.commentIndex
      })
    }
  }
}
</script>

<style scoped>
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