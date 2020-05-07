<template>
  <v-container>
    <v-row>
      <v-col></v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4"></v-col>
      <h2>Stelle deine Frage</h2>
    </v-row>

    <v-row>
      <v-col cols="6" sm="2">
        <p>Veranstaltung:</p>
      </v-col>
      <v-col cols="6" sm="2">
        <p>Psychologie</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" sm="2">
        <p>Thema:</p>
      </v-col>
      <v-col cols="6" sm="2">
        <p>Kognition</p>
      </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="1">
            <p>Fragentitel:</p>
        </v-col>
        <v-col >
            <v-textarea filled height="10" value="Was ist das dichotische Hören?" single-line> </v-textarea>
        </v-col>
        <v-col></v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="1">
            <p>Erläuertung der Frage:</p>
        </v-col>
        <v-col>
            <v-textarea filled height="300" value="Ich verstehe nich was es mit dem dichotischen Hören (Cherry, 1953) auf sich hat. Was bedeutet shadowing in diesem Zusammenhang?" > </v-textarea>
        </v-col>
        <v-col></v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">

      </v-col>
              <router-link to='/home'>
        <v-btn lable="Test">Absenden!</v-btn>
        </router-link>
    </v-row>

  </v-container>
</template>