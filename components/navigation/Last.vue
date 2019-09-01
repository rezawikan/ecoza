<template lang="html">
  <div>
    <!-- Back To Top Button-->
    <a v-scroll-to="scrollto" class="scroll-to-top-btn" href="#">
      <fa :icon="['fas', 'arrow-up']" />
    </a>
    <!-- Backdrop-->
    <div class="site-backdrop" />
  </div>
</template>

<script>
export default {
  computed: {
    scrollto() {
      return {
        el: 'html',
        container: 'body',
        duration: 500,
        easing: 'ease',
        x: false,
        y: true
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
