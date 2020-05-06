<template>
  <div id="app">
    <div>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/MatchingHelper">MatchingHelper</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
import router from './router';

export default {
  name: 'App',

  components: {

  },
  methods: {
    goToProfile: function(){
        router.push('profile')
    }
  },
  data: () => ({
    //
  }),
};
</script>
