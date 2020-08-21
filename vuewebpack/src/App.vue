<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">Card title</h1>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {//匯出到 
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    // this.$http.get('https://randomuser.me/api/')
    //   .then((response)=>{
    //     console.log(response)
    //   })
    // this.axios.get('https://randomuser.me/api/')
    //   .then((response)=>{
    //     console.log(response.data)
    //   })
    Vue.axios.get('https://randomuser.me/api/')
      .then((response)=>{
        console.log(response.data)
      })
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
/*
  $color:pink;
  body{
    background-color:$color;
  }
*/
</style>
