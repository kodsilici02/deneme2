/*import { ref, onMounted } from 'vue'

const currentSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  })
  document.querySelectorAll('articl h2').forEach(section => {
    observer.observe(section)
  })
})*/
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.add('active')
    } else {
      // Remove 'active' class otherwise
      entry.target.classList.remove('active')
    }
  })
})

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll('article,h2')
boxElList.forEach(el => {
  io.observe(el)
})
