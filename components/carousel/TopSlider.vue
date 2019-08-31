<template>
  <section class="hero-slider" :style="{ 'backgroundImage' : `url(${require('~/assets/img/hero-slider/main-bg.jpg')})`}">
    <carousel
      v-if="isNuxtReady"
      :items="items"
      :loop="loop"
      :dots="dots"
      :nav="nav"
      :autoplay="autoplay"
      :autoplay-timeout="autoplayTimeout"
      :nav-text="navtext"
      :loaded-class="`owl-carousel large-controls dots-inside owl-loaded`"
    >
      <div class="item">
        <div class="container padding-top-3x">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
              <div class="from-bottom">
                <img class="d-inline-block w-150 mb-4" src="~/assets/img/hero-slider/logo02.png" alt="Puma">
                <div class="h2 text-body text-normal mb-2 pt-1">
                  Puma Backpacks Collection
                </div>
                <div class="h2 text-body text-normal mb-4 pb-1">
                  starting at <span class="text-bold">$37.99</span>
                </div>
              </div>
              <a class="btn btn-primary scale-up delay-1" href="shop-grid-ls.html">View Offers</a>
            </div>
            <div class="col-md-6 padding-bottom-2x mb-3">
              <img class="d-block mx-auto" src="~/assets/img/hero-slider/02.png" alt="Puma Backpack">
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="container padding-top-3x">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
              <div class="from-bottom">
                <img class="d-inline-block w-200 mb-4" src="~/assets/img/hero-slider/logo01.png" alt="Converse">
                <div class="h2 text-body text-normal mb-2 pt-1">
                  Chuck Taylor All Star II
                </div>
                <div class="h2 text-body text-normal mb-4 pb-1">
                  for only <span class="text-bold">$59.99</span>
                </div>
              </div>
              <a class="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
            </div>
            <div class="col-md-6 padding-bottom-2x mb-3">
              <img class="d-block mx-auto" src="~/assets/img/hero-slider/01.png" alt="Chuck Taylor All Star II">
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="container padding-top-3x">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
              <div class="from-bottom">
                <img class="d-inline-block mb-4" src="~/assets/img/hero-slider/logo03.png" style="width: 125px;" alt="Motorola">
                <div class="h2 text-body text-normal mb-2 pt-1">
                  Smart Watch Moto 360 2nd
                </div>
                <div class="h2 text-body text-normal mb-4 pb-1">
                  for only <span class="text-bold">$299.99</span>
                </div>
              </div><a class="btn btn-primary scale-up delay-1" href="shop-single.html">Shop Now</a>
            </div>
            <div class="col-md-6 padding-bottom-2x mb-3">
              <img class="d-block mx-auto" src="~/assets/img/hero-slider/03.png" alt="Moto 360">
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </section>
</template>

<script>
const carousel = () => window && window !== undefined ? import('vue-owl-carousel') : null
export default {
  components: {
    carousel
  },

  data() {
    return {
      isNuxtReady: false,
      items: 1,
      loop: true,
      dots: true,
      url: true,
      nav: true,
      navtext: [],
      autoplay: true,
      autoplayTimeout: 7000
    }
  },

  mounted() {
    const vm = this
    if (process.browser) {
      window.onNuxtReady((app) => {
        console.log('Nuxt ready!')
        vm.isNuxtReady = true
      })
    }
  }
}
</script>
