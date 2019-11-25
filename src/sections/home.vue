<template>
  <div class="wrapper">
    <div class="home-page">
      <div class="circle">
        <span class="title">A VUE SHOP</span
        ><button class="button" @click="$router.push('shop')">Shop</button>
      </div>
      <div class="text">
        Life is hard enough already. Let us make it a little easier.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="css">
.wrapper {
  display: flex;
}
.home-page {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zYLbP5lDBSylTkAjG7Csu85EzUIyLArvww4cJ9v-ASWfqw9c&s);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-blend-mode: lighten;
  background-color: rgba(255, 255, 255, 0.3);
  height: 1000px;
  /* width: 100%; */
  padding: 0px;
  margin: -50px -279px;
  flex-grow: 5;
}
.circle {
  width: 300px;
  height: 300px;
  border: 2px solid white;
  border-radius: 50%;
  display: inline-block;
  /* top: 200px; */
  position: relative;
  animation: 2s ease-out 0s 1 forwards bottomtotop;
}
.title {
  position: relative;
  top: 100px;
  font-size: 30px;
  font-weight: 900;
  left: 50px;
  color: white;
}
.button {
  position: relative;
  top: 150px;
  right: 80px;
}
.text {
  position: relative;
  top: 250px;
  font-size: 30px;
  left: -2000px;
  color: white;
  animation: 1.5s ease-out 2s 1 forwards lefttoright;
}
@keyframes bottomtotop {
  0% {
    top: 2000px;
  }
  100% {
    top: 200px;
  }
}
@keyframes lefttoright {
  0% {
    left: -2000px;
  }
  100% {
    left: 0px;
  }
}
</style>
