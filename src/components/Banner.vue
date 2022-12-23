<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner" v-on:scroll="scroll()">
    <img
      src="@/assets/AbandonedNecessaryCapeghostfrog-mobile.gif"
      class="object-cover w-full h-full"
    />
  </div>
  <div class="bos"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
}
</script>

<style scoped>
.banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.bos {
  width: 100%;
  height: 100vh;
}
</style>
