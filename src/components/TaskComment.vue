<template>
  <div class="comment">
    <span class="comment-desc">{{ comment.comment }}</span>
    <button @click="deleteComment(commentIndex)">Remove</button>
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
    deleteComment(taskIndex, key) {
      this.$store.commit('DELETE_COMMENT', {
        comments: this.comments,
        key
      })
    }
  }
}
</script>

<style scoped>
.comment {
  @apply flex justify-between items-center flex-wrap text-sm mb-2 p-4 bg-white text-gray-900 no-underline cursor-pointer rounded;
}

.comment-desc {
  @apply flex-grow text-sm font-medium;
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