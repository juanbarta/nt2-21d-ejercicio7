<template>

  <section class="src-components-main">
    <Square v-for="(color, index) in colors"
      :key="index"
      :id="index"
      :color="color"
    />
  </section>
</template>

<script lang="js">
import Square from './Square.vue'

  export default  {
    name: 'src-components-main',
    props: [],
    components:{
      Square
    },
    mounted(){
      this.init();
    },
    data () {
      return {
          ammount: null,
          colors: [],
      }
    },
    methods: {
      pickColor(){
        return Math.floor(Math.random() * this.ammount );
      },

      colorClicked(clickedColor){
        let hasWon= false;
        if (clickedColor === this.$store.state.winColor) {
          hasWon = true;
          this.setAllColorsTo();
        } else {
          this.colors.splice(this.colors.indexOf(clickedColor), 1, "#232323")
        }
        this.$store.dispatch('hasWon', hasWon);
      },
      createNewColors(){
        var arr = [];
        for (var i = 0; i < this.ammount; i++) {
          arr.push(this.createRandomStringColor());
        }
        return arr;
      },

      setAllColorsTo(){
        for (var i = 0; i < this.ammount; i++) {
          this.colors.splice(i, 1, this.colors[this.pickedColor]);
        }
      },
    
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },

      randomInt(){
        return Math.floor(Math.random() * 256);
      },

      init(){
        this.ammount = this.$store.state.difficultyAmmount;
        this.colors = this.createNewColors();
        this.pickedColor = this.pickColor();
        this.$store.dispatch('winColorSelected', this.colors[this.pickedColor]);
      }
    },
    computed:{
      getClickedColor(){
        return this.$store.state.clickedColor;
      },
      reset(){
        return this.$store.state.winColor == null;
      }
    },
    watch:{
      reset(){
        if (this.reset){
          this.init();
        }
      },
      getClickedColor(){
        let color = this.getClickedColor;
        if (color != null){
          this.colorClicked(color);
        }
      },
    }
}


</script>

<style scoped lang="css">
  .src-components-main {
  margin: 20px auto;
	max-width: 600px;
  }
</style>
