<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><router-link v-bind:to="item.route">{{ item.title }}</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <!--<v-btn>
        <router-link to="/profile">goto Profile</router-link>
      </v-btn>-->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>

     <plusbutton msg="ggg"/>   
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import plusbutton from "@/components/plusbutton.vue";


export default {
  name: "App",

  components: {
    plusbutton
  },
  methods: {},
  data: () => {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", route: "/home" },
        { title: "Registration", icon: "mdi-help-box", route: "/registration" },
        { title: "Profile", icon: "mdi-image", route: "/profile" },
        { title: "ShowHelpers", icon: "mdi-account-check", route: "/showhelpers" },
        { title: "QuestionManager", icon: "mdi-comment-question", route: "/questionmanager" },
        { title: "QuestionForm", icon: "mdi-comment-question", route: "/questionform" },
        
      ],
      right: null
    };
  }
};
</script>
