<template>
  <div>
   <br> <h1>Hier findest du Antwort auf deine Frage</h1> <br> <br>
    <v-card>
      <v-card-title>
        <h4>Welche*r deiner Kommiliton*innen soll dir helfen? </h4>
        <!--<v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>-->
      </v-card-title>

     <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Status</th>
            <th class="text-left">Helfer</th>
            <th class="text-left">Wissensstand</th>
            <th class="text-left">Freundlichkeit</th>
            <th class="text-left">Durchschnittliche Antwortzeit</th>
            <th class="text-left">Auswahl</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in helfer" :key="item.name">
            <td><v-icon color="green">{{ item.onlineicon }}</v-icon> </td>
            <td>{{ item.helfer }}</td>
            <td>
              <v-icon color="yellow">{{ item.knowicon }}</v-icon>
              <v-icon color="yellow">{{ item.knowicon2 }}</v-icon>
              <v-icon color="yellow">{{ item.knowicon3 }}</v-icon>
              <v-icon color="yellow">{{ item.knowicon4 }}</v-icon>
              <v-icon color="yellow">{{ item.knowicon5 }}</v-icon>
            </td>
            <td>
              <v-icon color="pink">{{ item.hearticon }}</v-icon>
              <v-icon color="pink">{{ item.hearticon2 }}</v-icon>
              <v-icon color="pink">{{ item.hearticon3 }}</v-icon>
              <v-icon color="pink">{{ item.hearticon4 }}</v-icon>
              <v-icon color="pink">{{ item.hearticon5 }}</v-icon>
          
            </td>
            <td>{{ item.antwortzeit }}</td>
            <td>  <v-checkbox v-model="disabled" class="mx-2" ></v-checkbox> </td>
          </tr>
        </tbody>
      </template>
  </v-simple-table>
    </v-card>

  </div> 
</template>

<script>
export default {
  name: "ShowHelpers",

  components: {},
  methods: {
      update:function(i){ 
          console.log("es funzt!" + i)
  }
  },
  data: () => {
    return {
      helfer: [
          {
            onlineicon:"mdi-circle",
            helfer: 'Mathilda',
            knowicon: "mdi-star",
            knowicon2: "mdi-star",
            knowicon3:"mdi-star",
            knowicon4:"mdi-star-outline",
            knowicon5:"mdi-star-outline",

            hearticon: "mdi-heart",
            hearticon2: "mdi-heart",
            hearticon3:"mdi-heart",
            hearticon4:"mdi-heart-outline",
            hearticon5:"mdi-heart-outline",
            antwortzeit:'40 Minuten',

          },
          {
            onlineicon:"mdi-circle-outline",
            helfer: 'Leon',
            knowicon: "mdi-star",
            knowicon2: "mdi-star",
            knowicon3:"mdi-star-outline",
            knowicon4:"mdi-star-outline",
            knowicon5:"mdi-star-outline",

            hearticon: "mdi-heart",
            hearticon2: "mdi-heart",
            hearticon3:"mdi-heart-outline",
            hearticon4:"mdi-heart-outline",
            hearticon5:"mdi-heart-outline",
            antwortzeit:'4 Stunden',
          },
          {
            onlineicon:"mdi-circle-outline",
            helfer: 'Simone',
            knowicon: "mdi-star",
            knowicon2: "mdi-star",
            knowicon3:"mdi-star",
            knowicon4:"mdi-star",
            knowicon5:"mdi-star",

            hearticon: "mdi-heart",
            hearticon2: "mdi-heart",
            hearticon3:"mdi-heart",
            hearticon4:"mdi-heart",
            hearticon5:"mdi-heart-outline",
            antwortzeit:'25 Minuten',
          },
           {
            onlineicon:"mdi-circle",
            helfer: 'Timo',
            knowicon: "mdi-star",
            knowicon2:"mdi-star",
            knowicon3:"mdi-star",
            knowicon4:"mdi-star-outline",
            knowicon5:"mdi-star-outline",

            hearticon: "mdi-heart",
            hearticon2: "mdi-heart",
            hearticon3:"mdi-heart",
            hearticon4:"mdi-heart",
            hearticon5:"mdi-heart",
            antwortzeit:'2 Stunden',
          },
          
        ]
      }
    },
  }
</script>


<style scoped>
h1{
  color:grey;
  text-align: center;
}

h4{
  color:grey;
 
}
</style>