<template>
  <div>
    <small>Written by: {{ author.firstname }} {{ author.lastname }}</small>
  </div>
</template>

<script>
  import { eventBus } from './main';

  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    },
    created() {
      eventBus.$on('articleShared', (data)=> {
        console.log(`Someone shared an article on ${ data.media }`);
      })
    }
  }
</script>
