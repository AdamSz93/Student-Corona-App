<template>
  <div>
    <h1>Show helpers</h1>
    <v-card>
      <v-card-title>
        Helfer
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="helpers" :search="search">
            <template v-slot:item.sendMessage="{item}">
                <v-icon small class="mr-2" @click="update(item)">
                    mdi-send
                </v-icon>
            </template>
      </v-data-table>
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
        search: '',
        headers: [
          {
            text: 'Helfer', align: 'start', sortable: false, value: 'name',
          },
          { text: 'Wissensstand', value: 'wissensstand' },
          { text: 'Freundlichkeit', value: 'freundlichkeit' },
          { text: ' durchschnittliche Antwortzeit', value: 'antwortzeit' },
          { text: '', value: 'sendMessage', sortable: false},
        ],
        helpers: [
          {
            name: 'Mathilda',
            wissensstand: 3.5,
            freundlichkeit: 4.0,
            antwortzeit: 2.5, 
          },
          {
            name: 'Leon',
            wissensstand: 4.0,
            freundlichkeit: 2.0,
            antwortzeit: 2.0,
          },
                    {
            name: 'Simone',
            wissensstand: 5.0,
            freundlichkeit: 3.0,
            antwortzeit: 4.0,
          },
        ],
      }
    },
  }
</script>
