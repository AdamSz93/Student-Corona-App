<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list dense nav>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/11.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>@MonaLisa</v-list-item-title>
            <v-list-item-subtitle>Sommersemester 2020</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-comment-question</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/questionmanager">Fragen &amp; Antworten</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>Anfragen an mich:</v-list-item-content>
        </v-list-item>
        
        <v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Psychologie A</v-list-item-title>
          </template>

            <v-list-item>Präfrontalcortex bei Suchtverhalten?</v-list-item>
            <v-list-item>Amygdala für Impulskontrolle?</v-list-item>          
        </v-list-group>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>Meine offenen Fragen:</v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>Meine Gruppen:</v-list-item-content>
        </v-list-item>

        <v-list-item v-for="group in groups" :key="group.name" link>
          <v-list-item-icon>
            <v-icon>{{ group.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link v-bind:to="group.route">{{ group.title }}</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-tabs>
        <v-tab>
          <router-link to="/home">Home</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/profile">Profil</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/settings">xxxEinstellungen</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/help">xxxHilfe</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/logout">xxxLogout</router-link>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>

      <plusbutton msg="ggg" />
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
      groups: [
        //{ title: "Fragen & Antworten", icon: "mdi-account-check", route: "/showhelpers"},
        {
          title: "Schlaue Füchse",
          icon: "mdi-account-group",
          route: "/showgroup"
        },
        {
          title: "Fleißige Bienen",
          icon: "mdi-account-group",
          route: "/showgroup"
        }
      ],

      /*items: [
        { title: "Home", icon: "mdi-view-dashboard", route: "/home" },
        { title: "Registration", icon: "mdi-help-box", route: "/registration" },
        { title: "Profile", icon: "mdi-image", route: "/profile" },
        { title: "ShowHelpers", icon: "mdi-account-check", route: "/showhelpers" },
        { title: "QuestionManager", icon: "mdi-comment-question", route: "/questionmanager" },
        { title: "QuestionForm", icon: "mdi-comment-question", route: "/questionform" },
        { title: "Messenger", icon: "mdi-comment-question", route: "/Messenger" },
        
      ], */
      right: null
    };
  }
};
</script>
