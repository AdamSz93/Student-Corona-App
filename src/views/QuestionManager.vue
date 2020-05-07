

<template>


<div style="padding: 0px; margin: -15px">

<v-tabs
  color="blue"
  dark
  slider-color="blue"
  :centered=true
>
  <v-tab ripple>
    Meine Fragen
  </v-tab>
  <v-tab ripple>
    An mich gestellte Fragen
  </v-tab>
  <v-tab-item>
    <v-card flat>
      <v-card-text><v-subheader v-if="!container_visible">Du hast keine offen gebliebenen Fragen.</v-subheader>
 <v-card v-if="container_visible"
    max-width="1200"
    class="mx-auto"
    style="margin-top: 20px"
  >

  <v-snackbar
      v-model="snackbar"
      timeout=1000
    >
      {{ text }}
    </v-snackbar>

   

    <v-list two-line subheader>


      <v-list-item
        v-for="threads in threads"
        :key="threads.title"
      >

      
        <v-list-item-avatar>
            <v-img :src="threads.author_img"></v-img>
          </v-list-item-avatar>

        <v-list-item-content>

          <v-list-item-title style="font-weight: bold" v-text="threads.title"></v-list-item-title>

           <v-list-item-subtitle class="text--primary" v-text="threads.diff_date"></v-list-item-subtitle>
                <v-list-item-subtitle style="text-overflow: ellipsis" v-text="threads.last_reply"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon> 
          <v-icon @click="openQuestion(threads.id)" :color="threads.active ? 'blue darken-2' : 'grey'">mdi-message-text</v-icon> 
         
          <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
        <v-icon @click="newQuestion()">mdi-dots-vertical</v-icon>
      </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="del_thread(threads.id, container_visible); snackbar = true"
          
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
          
          
          
         
        </v-list-item-icon>
      </v-list-item>





     
  
    </v-list>
  </v-card>
</v-card-text>
    </v-card>
  </v-tab-item>
  
  <v-tab-item>
    <v-card flat>
      <v-card-text>
        <v-subheader v-if="!container_visible">Du hast keine offen gebliebenen Fragen.</v-subheader>
 <v-card v-if="container_visible"
    max-width="1200"
    class="mx-auto"
    style="margin-top: 20px"
  >

  <v-snackbar
      v-model="snackbar"
      timeout=1000
    >
      {{ text }}
    </v-snackbar>

   

    <v-list two-line subheader>


      <v-list-item
        v-for="my_threads in my_threads"
        :key="my_threads.title"
      >

      
        <v-list-item-avatar>
            <v-img :src="my_threads.author_img"></v-img>
          </v-list-item-avatar>

        <v-list-item-content>

          <v-list-item-title style="font-weight: bold" v-text="my_threads.title"></v-list-item-title>

           <v-list-item-subtitle class="text--primary" v-text="my_threads.diff_date"></v-list-item-subtitle>
                <v-list-item-subtitle style="text-overflow: ellipsis" v-text="my_threads.last_reply"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon> 
          <v-icon @click="openQuestion(my_threads.id)" :color="threads.active ? 'blue darken-2' : 'grey'">mdi-message-text</v-icon> 
         
          <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
        <v-icon @click="newQuestion()">mdi-dots-vertical</v-icon>
      </v-btn>
      </template>
      <v-list>
        <v-list-item
          @click="del_my_thread(my_threads.id, container_visible); snackbar = true"
          
        >
          <v-list-item-title>Irgendwas</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
          
          
          
         
        </v-list-item-icon>
      </v-list-item>





     
  
    </v-list>
  </v-card>

      </v-card-text>
    </v-card>
  </v-tab-item>  
</v-tabs>

    
  </div>
</template>

<script>

import moment from 'moment'; 

export default {
  name: "QuestionManager",
  components: {},
  data: () => {
    return {
      container_visible: true,
      snackbar: false,
      text: 'Die Frage wurde entfernt.',

      items: [
        { title: 'Frage beantwortet' },
        { title: 'Irgendwas' }

      ],

      

      threads: [
        {
          id: 1,
          author: "",
          author_img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Levene-Test",
          creation_date: moment("2020-05-03", "MM-DD-YYYY"),
          diff_date: "Gestellt vor " + moment.duration(moment().startOf('day').diff(moment("2020-05-03", "YYYY-MM-DD"))).asDays() + " Tagen",
          last_reply: "Ich habe dir ein paar Fotos angehängt.",
          active: true,
          solved: false
        },
        {
          id: 2,
          author: "",
          title: "Homogene Gruppen",
          creation_date: new Date("2020-05-01"),
          diff_date: "Gestellt vor " + moment.duration(moment().startOf('day').diff(moment("2020-05-01", "YYYY-MM-DD"))).asDays() + " Tagen",
          last_reply: "Du musst dafür den Levene-Test machen, um das herauszufinden. Das geht in SPSS. Dafür musst du in dem Reiter Analysen auf",
          author_img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          active: false,
          solved: false
        }
        
      ],

      my_threads: [
        {
          id: 3,
          author: "",
          author_img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Levene-Test",
          creation_date: moment("2020-05-03", "MM-DD-YYYY"),
          diff_date: "Gestellt vor " + moment.duration(moment().startOf('day').diff(moment("2020-05-03", "YYYY-MM-DD"))).asDays() + " Tagen",
          last_reply: "Ich habe dir ein paar Fotos angehängt.",
          active: true,
          solved: false
        },
        {
          id: 4,
          author: "",
          title: "Homogene Gruppen",
          creation_date: new Date("2020-05-01"),
          diff_date: "Gestellt vor " + moment.duration(moment().startOf('day').diff(moment("2020-05-01", "YYYY-MM-DD"))).asDays() + " Tagen",
          last_reply: "Du musst dafür den Levene-Test machen, um das herauszufinden. Das geht in SPSS. Dafür musst du in dem Reiter Analysen auf",
          author_img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          active: false,
          solved: false
        }
        
      ]

    };
  },
   methods: {

     openQuestion(id) {
       console.log(id);
     },

    newQuestion() {

    },

    moment: function () {
    return moment();
  },

    del_thread(id, container_visible) {
      this.threads = this.threads.filter(threads => threads.id !== id);
      
      if (this.threads.length < 1) {
        container_visible = false;
        console.log(container_visible);
      }
    },

  

  }
};
</script>

