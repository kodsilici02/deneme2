<template>
  <div class="w-100 top-bar"></div>
</template>

<script>
import '@/assets/tailwind.css'
export default {
  name: 'TopBar',
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: aliceblue;
}
.logo {
  width: 100%;
  height: 60px;
  background-image: url('@/assets/woolmarkimagelogo-1024x576.png');
  object-fit: cover;
  background-size: cover;
  background-repeat: none;
}
.top-bar {
  height: 60px;
  position: fixed;
  z-index: 1;
}
</style>
