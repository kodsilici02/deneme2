<template>
  <div ref="topbarbg" class="back-ground grid grid-cols-12"></div>
  <div class="topbar transition sm:flex">
    <div class="topbar transition sm:flex sm:justify-end" ref="topbar">
      <div class="h-full w-full grid grid-cols-12">
        <div class="grid grid-rows-2 col-span-11 sm:grid-rows-1">
          <div class="w-full" style="height: 30px">
            <div class="grid grid-cols-5">
              <div class="p-2">
                <div style="width: 36.75px" class="random">
                  <a href="https://discord.gg/jVM9KupUmU" class="icon-link"
                    ><i class="fa-brands fa-discord fa-2xl"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-1 sm:hidden" style="height: 30px">
            <div class="grid grid-cols-3 text-center sm:hidden">
              <div
                class="sidenav random"
                v-for="route in routes"
                :key="route.name"
              >
                <router-link
                  class="text-2xl sm:text-xl md:text-3xl font-bold routerhref"
                  :to="route"
                >
                  {{ route.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="button mr-2" @click="menubutton()">
            <i class="fa-solid fa-bars fa-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { watch } from 'vue'
import { sidebarstate } from '@/componentsjs/store.js'
export default {
  name: 'TopBar',
  data() {
    return {
      boxOpacity: 0,
      sidebarstate,
      routes: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contents', path: '/contents' },
      ],
    }
  },
  mounted() {
    watch(
      () => sidebarstate.state,
      newValue => {
        if (newValue === 1) {
          this.$refs.topbar.classList.add('topbar-x')
          var element = document.getElementsByClassName('random')
          Array.from(element).forEach(function (element) {
            element.classList.add('rotate')
            console.log(element.style)
          })
        } else if (newValue === 0) {
          this.$refs.topbar.classList.remove('topbar-x')
          var element2 = document.getElementsByClassName('random')
          Array.from(element2).forEach(function (element2) {
            element2.classList.remove('rotate')
            console.log(element2.style)
          })
        }
      }
    )
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY
      const threshold = 900 // Maximum scroll position at which the topbar's opacity should be 1
      let opacity
      if (scrollPos < threshold) {
        // Map scroll positions from 0 to 900px to an opacity value between 0 and 1
        opacity = scrollPos / threshold
      } else {
        // Map scroll positions from 900px and beyond to an opacity value of 1
        opacity = 1
      }
      // Update the opacity of the topbar element
      this.$refs.topbarbg.style.opacity = opacity
    })
  },
  methods: {
    menubutton() {
      this.$emit('topbarbutton')
    },
  },
}
</script>
<style scoped>
.random {
  transition: all 0.25s cubic-bezier(0.64, 0.33, 0.83, 0.21);
}
.random a {
  color: aliceblue;
}
.random:hover {
  transform: rotate(360deg);
  color: #42b983;
}
.rotate {
  transform: rotate(360deg);
}
.button {
  cursor: pointer;
}

.topbar-x {
  transform: translateX(100%);
}
.transition {
  transition: all 0.5s cubic-bezier(0.64, 0.33, 0.83, 0.21);
}
.fa-bars {
  transform: rotate(0deg);
  transition: 0.5s cubic-bezier(0.64, 0.33, 0, 1.09);
  color: aliceblue;
}
.fa-bars:hover {
  transform: rotate(180deg);
}
.back-ground {
  opacity: 0;
  background-color: rgb(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 10;
}
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  z-index: 10;
}
@media only screen and (max-width: 674px) {
  .back-ground {
    height: 75px;
  }
  .topbar {
    height: 75px;
  }
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
.routerhref {
  text-decoration: none;
  color: rgb(227, 227, 227);
  transition: 0.5s linear;
}
.routerhref:hover {
  color: rgb(34, 209, 200);
  transition: 0.5s linear;
}
</style>
