<template>
    <div>        
        <h1> Stelle deine Frage </h1>
        <v-container>
            <v-layout row>
                <v-flex></v-flex>
                <v-flex>
                    <v-card outlined>    
                        <v-form>
                            <v-text-field v-model="Betreff" label="Betreff"   hide-details ></v-text-field>
                            <v-textarea v-model="Nachricht" label="Nachricht"  counter maxlength="420" ></v-textarea>
                            <v-divider></v-divider>
                            <v-file-input show-size counter multiple label="Füge deiner Frage ein Bild oder eine Datei hinzu"></v-file-input>
                            <v-btn class="blue" max-width="200" v-on:click=sendMessage()> Nachricht senden </v-btn>
                        </v-form>
                    </v-card>
                </v-flex>
                <v-flex></v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Question",
        components: {},
        methods: {
            sendMessage: function(){
                this.message[0].Betreff = this.Betreff;
                this.message[0].Nachricht = this.Nachricht;
                this.$router.push('/profile');
            }
        },
        data: () => {
            return {
                Betreff: "",
                Nachricht:"",
                message: [{Betreff: "leer", Nachricht: "leer"}]
            }
        }
    }
</script>