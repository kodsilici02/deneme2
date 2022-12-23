<template>
  <TopBar @topbarbutton="topbarbutton()"></TopBar>
  <div
    class="sidebar sm:sidebarsm fixed transition bg-dark sidebar_close"
    ref="sidebar"
    style="z-index: 10"
  >
    <div class="sidebar-row d-flex justify-content-end bg-dark">
      <div class="button mr-3" @click="sidebar()">
        <i class="fa-solid fa-xmark fa-3x"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { sidebarstate } from '@/componentsjs/store.js'
import TopBar from '@/components/ChildComponents/TopBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
export default {
  name: 'SideBar',
  components: {
    TopBar,
  },
  data() {
    return {
      sidebarstate,
    }
  },
  methods: {
    topbarbutton() {
      this.$emit('sidebar')
      this.sidebarstate.state = 1
      this.$refs.sidebar.classList.toggle('sidebar_close')
    },
    sidebar() {
      this.$emit('sidebar')
      this.sidebarstate.state = 0
      this.$refs.sidebar.classList.toggle('sidebar_close')
    },
  },
}
</script>
<style scoped>
.fa-xmark {
  transform: rotate(0deg);
  transition: 0.5s cubic-bezier(0.64, 0.33, 0, 1.09);
  color: aliceblue;
}
.fa-xmark:hover {
  transform: rotate(180deg);
  transition: 0.5s;
}
.sidebar {
  width: 300px;
  height: 100vh;
  overflow: hidden;
}

.sidebar-row {
  width: 100%;
  height: 40px;
  background-color: azure;
  display: block;
}
.top-bar {
  width: 2%;
  height: 60px;
}
.transition {
  transition: all 0.5s cubic-bezier(0.72, 0.03, 0.48, 0.53);
}
.button {
  width: auto;
  height: auto;
  cursor: pointer;
  align-self: flex-end;
}
.sidebar_close {
  transform: translateX(100%);
  transition: all 0.5s cubic-bezier(0.72, 0.03, 0.48, 0.53);
}
.fixed {
  position: fixed;
  top: 0;
  right: 0;
}
.fixed1 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
