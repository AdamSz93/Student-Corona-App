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
                                        <h3>Universität</h3>
                                       
                                    </v-list-item>

                                    <v-list-item>
                                        <p>{{university}}</p>
                                       
                                    </v-list-item>

                                    <v-divider class="grey"/>


                                    <v-list-item>
                                        <h3>Angestrebter Abschluss </h3>
                                    </v-list-item>

                                    <v-list-item>
                                        <p>{{aspireddegree}}</p>
                                       
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
                                          <li v-for="event in events" :key="event.text">
                                                {{ event.text }}
                                            </li>
                                       </ul>
                                      
                                    </v-list-item>

                                    
                                 <v-divider class="grey"/>

                                    <v-list-item>
                                        <h3>Kompetenzen und Wissensstand </h3>
                                    </v-list-item>

                                    <v-list-item>
                                        <ul>
                                           <li v-for="knowledge in knowledges" :key="knowledge.text">
                                                {{ knowledge.text }}
                                            </li>
                                            
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
  
     data: () => {
        return {
        
            university:'Duisburg-Essen',
            aspireddegree:'Master of Science',
            events: [
                { text: 'Statistik 1'},
                { text: 'GPT' },
                { text: 'Info N' }
            ],
            knowledges:[
                {text:'Vue.js'},
                {text:'Vuetify'},
                {text:'Visual Studio Code'},
                {text:'Git'}
            ]
         } 
    
   }
  
}
</script>


<style scoped>
   
 
</style>