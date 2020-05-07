<template>
    <div >
        <h1>Registriere dich!</h1>
        <v-container>
            
            <v-layout row>
                <v-flex>
                    
                </v-flex>
                <v-flex>
                    <v-card outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                              <v-list-item-title class="headline md-4">Registriere Dich!</v-list-item-title>
                              <v-form > 
                                    <v-text-field label="Spitzname" v-model="nickname">                               
                                    </v-text-field >
                                </v-form> 
                                <v-form> 
                                    <v-text-field label="Email-Adresse" v-model="email">                               
                                    </v-text-field >
                                </v-form> 
                                <v-form> 
                                    <v-text-field label="Erstelle ein Passwort" v-model="password">                               
                                    </v-text-field >
                                </v-form>
                                <router-link to='/Studiengangabfrage'>
                                <v-btn class="blue" max-width="150" v-on:click=register()> Registrieren </v-btn> 
                                </router-link>
                                <v-card-text class="caption">Mit der Registrierung stimmst du unserer Datenschutzerklärung und den AGBs zu</v-card-text>
                            </v-list-item-content>

                        </v-list-item>




                    </v-card>
                </v-flex>
                <v-flex>

                </v-flex>

            </v-layout>

        </v-container>
    </div>
</template>

<script>
export default {
    name: "Registration",
    components: {},
    methods: {
        register: function(){
            this.new_user[0].nickname = this.nickname;
            this.new_user[0].email = this.email;
            this.new_user[0].password = this.password;
        }
    },
    data: () => {
        return {
            nickname: "",
            email: "",
            password: "",
            new_user: [
                {nickname: "leer",email: "leer", password:"leer"}               
            ]
        }
    }
}
</script>