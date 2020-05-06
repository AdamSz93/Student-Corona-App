<template>
    <div>
        <h1> Profil</h1>

        <v-container class="grey lighten-5">
            <v-row>
                <v-col>

                    <v-card >
                       <v-container cols="12" md="6">
                           <v-column>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar>
                                            <v-img src="('../assets/logo.png')"></v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-list-item>
                                        <h3>Universität</h3>
                                       
                                    </v-list-item>

                                    <v-list-item>
                                        <p>Duisburg</p>
                                       
                                    </v-list-item>

                                    <v-divider class="grey"/>


                                    <v-list-item>
                                        <h3>Angestrebter Abschluss </h3>
                                    </v-list-item>

                                    <v-list-item>
                                        <p>Master of Science</p>
                                       
                                    </v-list-item>

                                    <v-divider class="grey"/>

                                    <v-list-item>
                                        <h3>Studiengang </h3>
                                    
                                    </v-list-item>

                                     <v-list-item>
                                        <p>Angewandte Kognitions- und Medienwissenschaften</p>
                                       
                                    </v-list-item>

                                    <v-divider class="grey"/>


                                    <v-list-item>
                                        <h3>Veranstaltungen </h3>
                                    </v-list-item>

                                    <v-list-item>
                                       <ul>
                                           <li>Statistik 1 </li>
                                           <li>GPT </li>
                                           <li>Info N </li>
                                       </ul>
                                       
                                    </v-list-item>

                                    
                                 <v-divider class="grey"/>

                                    <v-list-item>
                                        <h3>Kompetenzen und Wissensstand </h3>
                                    </v-list-item>

                                    <v-list-item>
                                        <ul>
                                           <li>Vue.js</li>
                                           <li>Vuetify </li>
                                           <li>Visual Studio Code </li>
                                           <li>Git </li>
                                       </ul>
                                    </v-list-item>
                                </v-list>
                           </v-column>
               
              
                       </v-container>
                    </v-card>
                </v-col>             
            </v-row>


            <v-row>
                
                
            </v-row>
        


        </v-container>


    </div>
</template>


<script>

export default {
   name:'Profile',
   props:{
     data:{
         return:{
            university:'Duisburg-Essen'
         }

    
    }
   }
  
}
</script>


<style scoped>

 
</style>