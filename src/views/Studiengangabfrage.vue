<template>
  <v-card>
    <v-card-title class="headline font-weight-regular light-blue darken-4 white--text">Profileinrichtung</v-card-title>
    <v-card-text>
      <v-subheader class="pa-0">In welchem Studiengang bist du eingeschrieben?</v-subheader>
      <v-autocomplete
        v-model="model" :items="studiengänge" persistent-hint prepend-icon="mdi-school-outline">
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition mode="out-in" >
            <router-link to='/FächerAbfrage'>
            <v-btn class="blue white--text" max-width="200" min-width="100" v-on:click=next()> weiter </v-btn>
            </router-link>
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
      name: "Question",
        components: {},
        methods: {
            next: function(){
                this.$router.push('/profile');
            }
        },
    data () {
      return {
        model: null,
        studiengänge: [
          'Angewandte Kognitions- und Medienwissenschaften (Komedia)', 'Medizin', 'Angwandte Informatik (Bachelor)',
        'Bauingenieurwesen', 'Betriebswirtschaftslehre (BWL)', 'Sozialwissenschaften (SoWi)',
          'Politikwissenschaften (PoWi)', 'Chemie', 'Lehramt',
          'Linguistik', 'Fotografie', 
        ],
      }
    },
  }
</script>