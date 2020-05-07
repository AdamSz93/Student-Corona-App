<template>
  <v-form>
      <h1>Phillip hilft dir!</h1>
    <v-container>
        <v-row>
            <v-col>
              <v-card min-height="400" min-width="600">
                <v-cotainer>
                    <v-col>
                        <v-card min-height="60" raised>
                            <v-card-text>Hey ich stelle hier meine Frage an dich. So sage mir bitte, was ist der Sinn des Lebens?</v-card-text>
                        </v-card>                       
                    </v-col>
                    <v-row>
                        <v-col>
                        </v-col>
                        <v-col>
                            <v-card min-height="60" raised>
                                <v-card-text>Ich habe gehört du brauchst Hilfe?</v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-col>
                        <v-card min-height="60" v-for="m in messages" v-bind:key="m.id"  raised>
                            <v-card-text>{{m.content}}</v-card-text>
                        </v-card>
                    </v-col>
                </v-cotainer>
              </v-card>
            </v-col>
        </v-row>
      <v-row>


        <v-col cols="12" sm="8"  >
          <v-text-field   label="Schreib was nettes..." v-model="message" v-on:keydown.enter = "enter" ></v-text-field>
        </v-col>



       
      </v-row>
    </v-container>
  </v-form>
</template>



<script>
export default {
  name: "Messenger",
  components: {},
  methods: { enter: function(){
      console.log("YayWS")
      var arr = {id: "newId", content: this.message};
      this.messages.push(arr);
      this.message = ""


  }

  },
  data: () => {
    return {
        message: "",
        messageToSend: "",
        messages: [
            
        ]
    };
  }
};
</script>