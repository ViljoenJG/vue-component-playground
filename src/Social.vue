<template>
  <div>
    <h1>Share {{ article.title }}</h1>
    <button class="btn btn-primary"
            @click="share('Facebook')">
        Share on Facebook
    </button>
    <button class="btn btn-primary"
            @click="share('Twitter')">
        Share on Twitter
    </button>
  </div>
</template>

<script>
import { eventBus } from './main'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    share(media) {
      eventBus.$emit('articleShared', {
        article: this.article,
        media
      });
    }
  }
}
</script>
