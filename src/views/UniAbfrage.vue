<template>
  <v-card>
    <v-card-title class="headline font-weight-regular light-blue darken-4 white--text">Profileinrichtung</v-card-title>
    <v-card-text>
      <v-subheader class="pa-0">An welcher Hochschule studierst du?</v-subheader>
      <v-autocomplete
        v-model="model" :items="hochschulen" persistent-hint prepend-icon="mdi-city">
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition mode="out-in" >
            <v-btn class="blue white--text" max-width="200" v-on:click=next()> weiter </v-btn>
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
                this.$router.push('/Studiengangabfrage');
            }
        },
    data () {
      return {
        model: null,
        hochschulen: [
          'RWTH Aachen', 'FH Aachen', 'Universität Augsburg', 'Universität Bayreuth',
          'Freie Universität Berlin', 'Mediadesign Hochschule', 'Fachhochschule Bielefeld', 'Universität Bielefeld',
          'Ruhr-Universität Bochum', 'Rheinische Friedrich-Wilhelms-Universität Bonn', 'Hochschule Bremen',
          'Universität Duisburg-Essen', 'Heinrich-Heine-Universität Düsseldorf', 
        ],
      }
    },
  }
</script>