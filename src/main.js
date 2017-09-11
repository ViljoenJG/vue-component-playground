import Vue from 'vue';
import App from './App.vue';
import Announcement from './Announcement.vue';
import Article from './Article.vue';
import ContactUs from './ContactUs.vue';

export const eventBus = new Vue();

Vue.component('announcement', Announcement);
Vue.component('my-article', Article);
Vue.component('contact-us', ContactUs);

new Vue({
  el: '#app',
  render: h => h(App)
});
