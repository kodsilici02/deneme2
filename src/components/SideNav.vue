<template>
  <div class="kutu text-center sm:block hidden sticky">
    <div class="bos hidden sm:flex"></div>
    <div class="sidenav">
      <router-link
        class="transition text-2xl sm:text-2xl md:text-3xl font-bold routerhref"
        to="/"
        >Home
      </router-link>
    </div>
    <div class="sidenav-margin">
      <router-link
        class="transition text-2xl sm:text-2xl md:text-3xl font-bold routerhref"
        :to="{ name: 'About' }"
        >About</router-link
      >
    </div>
    <div class="sidenav-margin">
      <router-link
        class="transition text-2xl sm:text-2xl md:text-3xl font-bold routerhref"
        :to="{ name: 'Default' }"
        >Contents
      </router-link>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
export default {
  name: 'SideNav',
}
</script>
<style scoped>
.sidenav-margin {
  margin-top: 10px;
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
h1 {
  text-align: center;
}
.bos {
  width: 100%;
  height: 60px;
}
.kutu {
  position: sticky;
  top: 0;
  left: 0;
  height: auto;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 1;
}
a {
  text-align: center;
}

a.router-link-exact-active {
  color: #42b983;
}
a.router-link-active {
  color: #42b983;
}
</style>
