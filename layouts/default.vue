<template lang="html">
  <div>
    <Mobile />
    <Desktop />
    <TopNavbar />
    <MainNavbar />
    <nuxt />
    <Last />
  </div>
</template>

<script>
import Mobile from '@/components/navigation/Mobile'
import Desktop from '@/components/navigation/Desktop'
import TopNavbar from '@/components/navigation/TopNavbar'
import MainNavbar from '@/components/navigation/MainNavbar'
import Last from '@/components/navigation/Last'
export default {

  components: {
    Mobile,
    Desktop,
    TopNavbar,
    MainNavbar,
    Last
  }
}
</script>

<style lang="css" scoped>
</style>
