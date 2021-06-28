<template>

  <section class="src-components-square" :style="{backgroundColor : color}" @click="colorClicked">
    <br>
</section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-square',
    props: ['id', 'color'],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      colorClicked(){
        this.$store.dispatch("colorClicked", this);
      },
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .src-components-square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }
</style>
