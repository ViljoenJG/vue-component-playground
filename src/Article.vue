<template>
  <div class="article">
    <h1>{{ title }}</h1>
    <small>{{ published | customDate }}</small>
    <p>Shares: {{ shares }}</p>
    <p class="lead">{{ content }}</p>

    <app-author :author="author"></app-author>
    <br><br>

    <app-social-sharing @articleShared="articleShared('shared', $event)" :article='$data'></app-social-sharing>
  </div>
</template>

<script>
  import moment from 'moment';
  import Author from './Author.vue';
  import Social from './Social.vue';
  import { eventBus } from './main';

  export default {
    data: () => ({
      title: 'A nice random article',
      published: new Date(),
      content,
      author: {
        firstname: 'Kobus',
        lastname: 'Viljoen'
      },
      shares: 0
    }),
    methods: {
      articleShared(message, event) {
        this.shares++
      }
    },
    created() {
      eventBus.$on('articleShared', (data) => {
        this.shares++
      })
    },
    components: {
      appAuthor: Author,
      appSocialSharing: Social
    },
    filters: {
      customDate: value => moment(value).format('MMMM Do')
    }
  }

  var content = `Compellingly fabricate technically sound information before stand-alone expertise. Globally extend state of the art action items and highly efficient benefits. Enthusiastically deliver front-end total linkage whereas cross-unit schemas. Holisticly cultivate intermandated human capital and functional niche markets. Intrinsicly transition reliable e-markets vis-a-vis end-to-end leadership. Dynamically conceptualize e-business processes without cost effective vortals. Intrinsicly`
</script>
