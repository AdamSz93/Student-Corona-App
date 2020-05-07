<template>
<v-content>
   
    
   
    
     
     <v-container>
        <v-row class="mb-4">
            <v-column>
                <router-link to="/questionmanager">
                    <v-btn round color="primary" dark v-on:click="routing" v-if="seen">
                       Fragen
                    </v-btn>
                </router-link>
            </v-column>
        </v-row>
        
        <v-row class="mb-4">
            <v-column>
                <router-link to="/home">
                     <v-btn round color="primary" dark v-if="seen">
                        Gruppen
                    </v-btn>
                </router-link>
            </v-column>
        </v-row>

            
        <v-row class="mb-4">
            <v-column>
                <v-btn class="mx-2" fab dark color="primary" v-on:click="bubbels" >
                    <v-icon large dark>mdi-plus</v-icon>
                </v-btn>
            </v-column>
        </v-row>
     </v-container>

 
</v-content>
</template>


<script>
export default {
    name:'plusbutton',
     data: () => ({
         msg:String,
          seen:false
     }),
     methods:{
        bubbels: function () {
            this.seen=!this.seen
        },
       
}
}
</script>



<style scoped>
    
</style>