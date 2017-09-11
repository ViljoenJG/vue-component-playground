<template>
  <div class="alert alert-info">
    <p v-if="announcement">{{ announcement }}</p>
    <p v-else>No announcements</p>
  </div>
</template>

<script>
  import { eventBus } from './main';

  export default {
    data() {
      return {
        announcement: null,
      }
    },
    created() {
      eventBus.$on('articleShared', (data) => {
        this.announcement = `${ data.article.title } was shared on ${ data.media }`
      })
    }
  }
</script>
