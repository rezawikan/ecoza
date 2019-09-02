<template lang="html">
  <section class="bg-faded padding-top-3x padding-bottom-3x">
    <div class="container">
      <h3 class="text-center mb-30 pb-2">
        Popular Brands
      </h3>
      <client-only>
        <carousel
          :nav="nav"
          :dots="dots"
          :loop="loop"
          :autoplay="autoplay"
          :autoplay-timeout="autoplayTimeout"
          :responsive="responsive"
        >
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/01.png" alt="Adidas">
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/02.png" alt="Brooks">
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/03.png" alt="Valentino">
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/04.png" alt="Nike">
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/05.png" alt="Puma">
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/06.png" alt="New Balance">
          <img class="d-block w-110 opacity-75 m-auto" src="~/assets/img/brands/07.png" alt="Dior">
        </carousel>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 2
        },
        470: {
          items: 3
        },
        630: {
          items: 4
        },
        991: {
          items: 5
        },
        1200: {
          items: 6
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
