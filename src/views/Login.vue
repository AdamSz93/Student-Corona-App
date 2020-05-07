<template>

<div>
  

  <span class="bg"></span>

        <v-card width="600" class="mx-auto mt-5" color="rgb(255, 255, 255, 0.8)">
          <v-img 
          :src="require('../assets/logo.png')"
          class="my-5"
          contain
          height="300"
          >
          </v-img>
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username"
          prepend-icon="mdi-account-circle"/>
          <v-text-field type="password"
          label="Password"
          prepend-icon="mdi-lock"
          />
  </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="info">Login</v-btn>
        <v-btn color="success">Register</v-btn>

      </v-card-actions>
    </v-card>
  </div>

 


 
</template>

<script>

export default {
  name: 'Login',
  components: {

  },
   data: () => {
    return { 
      logged_in: false
    }
    
}
}
</script>
<style scoped>
.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ),
        url( '../assets/start_screen.jpg') no-repeat center center;
    background-size: cover;
    transform: scale(1);
    z-index: 0;

  }
</style>
