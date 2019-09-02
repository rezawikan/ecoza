<template lang="html">
  <div>
    <Mobile />
    <Desktop />
    <TopNavbar />
    <MainNavbar />
    <div class="offcanvas-wrapper">
      <nuxt />
      <MainFooter />
    </div>
    <Last />
  </div>
</template>

<script>
import Mobile from '@/components/navigation/Mobile'
import Desktop from '@/components/navigation/Desktop'
import TopNavbar from '@/components/navigation/TopNavbar'
import MainNavbar from '@/components/navigation/MainNavbar'
import MainFooter from '@/components/footer/MainFooter'
import Last from '@/components/navigation/Last'
export default {

  components: {
    Mobile,
    Desktop,
    TopNavbar,
    MainNavbar,
    MainFooter,
    Last
  }
}
</script>

<style lang="css" scoped>
</style>
