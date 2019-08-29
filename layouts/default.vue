<template lang="html">
  <div>
    <TopNavbar />
    <MainNavbar />
    <nuxt />
  </div>
</template>

<script>
import TopNavbar from '@/components/navigation/TopNavbar'
import MainNavbar from '@/components/navigation/MainNavbar'
export default {

  components: {
    TopNavbar,
    MainNavbar
  }
}
</script>

<style lang="css" scoped>
</style>
