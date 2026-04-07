import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap(animationFn, containerRef) {
  let ctx

  onMounted(() => {
    ctx = gsap.context(() => {
      animationFn(gsap, ScrollTrigger)
    }, containerRef?.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })

  return { gsap, ScrollTrigger }
}
