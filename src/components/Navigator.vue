<template>

  <section class="src-components-navigator">
    <button id="reset" @click="reset()"> {{buttonMessage}}</button>
		<span id="message" :style="{ color: textColor }"> {{textMessage}} </span>
		<button :id="easyAmmount" :class="{selected: isEasy}" @click="changeDifficulty($event)">easy</button>
		<button :id="hardAmmount" :class="{selected: !isEasy}" @click="changeDifficulty($event)">hard</button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navigator',
    props: [],
    mounted () {

      
    },
    data () {
      return {
        textColor : "#ffffff",
        textMessage: "Try Again!",
        buttonMessage:"new colors!",
        hardAmmount: 6,
        easyAmmount: 3,
      }
    },
    methods: {
      changeDifficulty(e){
        let ammount = this.$store.state.difficultyAmmount;
        if (e.target.id != ammount){
          this.$store.dispatch('changeDifficulty', e.target.id);
          this.reset();
        } 
      },
      reset(){
        this.$store.dispatch('newGame');
      },
    },
    watch: {
      hasWon(){
        this.buttonMessage = this.hasWon? "play again!" : "new colors!"
        this.textMessage =  this.hasWon? "You Picked Right!" : "Try Again!";
        this.textColor = this.hasWon != null ? "#000000" : "#ffffff"
      }
    },
    computed: {
      isEasy(){
        return this.$store.state.difficultyAmmount == 3 ? true : false;
      },
      hasWon(){
        return this.$store.state.hasWon; 
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;

  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }

  button:hover {
    color: white;
    background-color: steelblue;
  }

  .selected {
    background-color: steelblue;
    color: white;
  }
  #message {
    color: #000000;
    display: inline-block;
    width: 20%;
  }
</style>
