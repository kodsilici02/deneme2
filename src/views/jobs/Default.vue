<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="kutu">
    <div class="bg-blue-500 text-white p-4">Default</div>
    <div class="box" v-motion-slide-visible-left></div>
    <div class="box" v-motion-slide-visible-left></div>
    <div class="box" v-motion-slide-visible-left></div>
    <div class="box" v-motion-slide-visible-left></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
}
</script>

<style scoped>
.kutu {
  width: 100%;
  height: auto;
}
.box {
  width: 100px;
  height: 100px;
  margin-top: 600px;
  margin-left: 45%;
  background-color: aquamarine;
}
</style>
