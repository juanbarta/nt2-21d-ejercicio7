<template>
  <div id="app">
    <div class="jumbotron">
      <Header />
      <Navigator />
      <Main />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Main
  },
  data () {
    return {
    }
  },
  methods:{
  }
}
</script>

<style>
#app {

}
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
</style>
