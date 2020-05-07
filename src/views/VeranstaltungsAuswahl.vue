<template>
  <div>
    <v-container>
        <v-row>
            <v-col cols="6" sm="2"></v-col>
      <h1>Hier findest du Antworten auf all deine Fragen</h1>
            <v-col></v-col>
      </v-row>
        
      <v-row>
                      <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="8">
                  <h2>Zu welcher Veranstaltung hast du eine Frage?</h2>
          <v-textarea
            class="mx-4"
            label="Um diese Funktion zu nutzen, vervollständige bitte deine Daten!"
            rows="1"
            prepend-icon="search"
            background-color="blue-grey lighten-5"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6"></v-col>

            <v-col cols="12" sm="4">
              <h3>Mein Dringlichkeitslevel</h3>
            </v-col>
          </v-row>
        </v-container>

        <v-card min-width="1000" background-color="blue-grey lighten-5">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-text>Psychologie</v-card-text>
            </v-col>
            <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
            <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
            <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
                        <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
                        <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row>
        <v-card min-width="1000" background-color="blue-grey lighten-5">

                    <v-row>
            <v-col cols="12" sm="6">

          <v-card-text>Medienpsychologie</v-card-text>
            </v-col>
            <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
            <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
            <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
                        <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
                        <v-col cols="12" sm="1">
              <v-radio></v-radio>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>