<template>
  <div class="bg bg-dark w-full sm:w-10/12">
    <h1 class="text-3xl font-bold text-white text-center">Contents</h1>
    <div class="w-full grid grid-cols-5 stickbar text-center">
      <router-link
        class="text-2xl font-bold routerhref"
        :to="{ name: 'ContentOne' }"
        >Content One</router-link
      >
      <router-link
        class="text-2xl font-bold routerhref"
        :to="{ name: 'ContentTwo' }"
        >Content Two</router-link
      >
    </div>
    <router-view class="router-view" v-slot="{ Component }">
      <Transition name="page-opacity2" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    <div class="kutu"></div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contents',
}
</script>

<style scoped>
.stickbar {
  position: sticky;
  top: 45px;
  left: 0px;
  background-color: rgb(46, 49, 51);
}
.routerhref {
  text-decoration: none;
  color: rgb(227, 227, 227);
  transition: 0.5s linear;
}
.routerhref:hover {
  color: rgb(34, 209, 200);
  transition: 0.5s linear;
}

a.router-link-exact-active {
  color: #42b983;
}
a.router-link-active {
  color: #42b983;
}
.kutu {
  width: 100%;
  height: 100vh;
}
.page-opacity2-enter-active,
.page-opacity2-leave-active {
  transition: 0.5s ease;
}
.page-opacity2-enter-from,
.page-opacity2-leave-to {
  opacity: 0;
  transform: translatex(300px);
}
</style>
