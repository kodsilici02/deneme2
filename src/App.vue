<template>
  <div class="">
    <Banner></Banner>
    <!--SideBar-->
    <SideBar @sidebar="opacity()"></SideBar>
    <div class="space-box" ref="box"></div>
    <div class="background" :style="{ opacity: boxOpacity }"></div>
    <div class="transition1" ref="opacity">
      <div class="container-fluid g-0 p-0 m-0">
        <!--TopBar-->

        <div class="grid sm:grid-cols-12">
          <!--Routers-->
          <div class="w-full sm:col-span-2 sticky">
            <keep-alive v-motion-slide-visible-bottom>
              <SideNav> </SideNav>
            </keep-alive>
          </div>
          <!--Router View-->
          <div class="w-full sm:col-span-10" style="z-index: 1">
            <router-view class="router-view" v-slot="{ Component }">
              <Transition name="page-opacity" mode="out-in">
                <component :is="Component" />
              </Transition>
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner.vue'
import TopBar from './components/TopBar.vue'
import SideNav from './components/SideNav.vue'
import SideBar from './components/SideBar.vue'
export default {
  name: 'App',
  components: {
    Banner,
    TopBar,
    SideNav,
    SideBar,
  },
  data() {
    return {
      boxOpacity: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateOpacity)
  },
  beforeUnmounted() {
    window.removeEventListener('scroll', this.updateOpacity)
  },
  methods: {
    updateOpacity() {
      const { top } = this.$refs.box.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const boxOpacity = 0.7 - Math.max(0, top) / (windowHeight + 0)
      this.boxOpacity = boxOpacity
    },
    opacity() {
      const element = this.$refs.opacity
      element.classList.toggle('opacity1')
    },
  },
}
</script>
<style scoped>
.transition1 {
  transition: all 0.5s cubic-bezier(0.72, 0.03, 0.48, 0.53);
}
.opacity1 {
  opacity: 0.3;
}
.space-box {
  width: 100%;
  height: 30vh;
}
.background {
  background-color: #343a40;
  transition: opacity 0.5s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.background {
  background-color: black;
}
#app {
  align-items: center;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 0.5s ease;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
  transform: translatey(100px);
}
</style>
<style>
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(0, 0, 0);
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b4b1b1;
}
</style>
