<template>
  <v-card>
    <v-card-title class="headline font-weight-regular light-blue darken-4 white--text">Profileinrichtung</v-card-title>
    <v-card-text>
      <v-subheader class="pa-0">Welche Fächer hast du bereits bestanden?</v-subheader>
      
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-combobox
                        v-model="select"
                        :items="items"
                        label="Studienfächer"
                        multiple
                        outlined
                        dense
        ></v-combobox>
        <v-slide-x-reverse-transition mode="out-in" >
            <v-btn class="blue white--text" max-width="200" v-on:click=next()> weiter </v-btn>
          </v-slide-x-reverse-transition>
      </v-col>
      
    </v-row>
  </v-container>

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
        select: [],
        items: [
          'GPT',
          'MCI',
          'Statistik 1',
          'Statsitik 2',
          'Fotografie 1',
          'BWL',
          'Allgemeine Psychologie A',
          'Allgemeine Psychologie B',
        ],
      }
    },
  }
</script>