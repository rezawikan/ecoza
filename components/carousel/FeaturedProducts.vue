<template lang="html">
  <section class="container padding-top-3x padding-bottom-3x">
    <h3 class="text-center mb-30">
      Featured Products
    </h3>
    <client-only>
      <carousel
        :items="items"
        :dots="dots"
        :nav="nav"
        :autoplay="autoplay"
        :autoplay-timeout="autoplayTimeout"
        :margin="margin"
      >
        <div class="grid-item">
          <div class="product-card">
            <div class="product-badge text-danger">
              22% Off
            </div>
            <a class="product-thumb" href="shop-single.html">
              <img src="~/assets/img/shop/products/09.jpg" alt="Product">
            </a>
            <h3 class="product-title">
              <a href="shop-single.html">Rocket Dog</a>
            </h3>
            <h4 class="product-price">
              <del>$44.95</del>$34.99
            </h4>
            <div class="product-buttons">
              <button class="btn btn-outline-secondary btn-sm btn-wishlist" data-toggle="tooltip" title="Whishlist">
                <fa :icon="['fas', 'heart']" />
              </button>
              <button
                class="btn btn-outline-primary btn-sm"
              >
                View Detail
              </button>
            </div>
          </div>
        </div>
        <!-- Product-->
        <div class="grid-item">
          <div class="product-card">
            <div class="rating-stars">
              <i class="icon-star filled" />
              <i class="icon-star filled" />
              <i class="icon-star filled" />
              <i class="icon-star filled" />
              <i class="icon-star" />
            </div>
            <a class="product-thumb" href="shop-single.html">
              <img src="~/assets/img/shop/products/03.jpg" alt="Product">
            </a>
            <h3 class="product-title">
              <a href="shop-single.html">Oakley Kickback</a>
            </h3>
            <h4 class="product-price">
              $155.00
            </h4>
            <div class="product-buttons">
              <button class="btn btn-outline-secondary btn-sm btn-wishlist">
                <fa :icon="['fas', 'heart']" />
              </button>
              <button class="btn btn-outline-primary btn-sm">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <!-- Product-->
        <div class="grid-item">
          <div class="product-card">
            <a class="product-thumb" href="shop-single.html">
              <img src="~/assets/img/shop/products/12.jpg" alt="Product">
            </a>
            <h3 class="product-title">
              <a href="shop-single.html">Vented Straw Fedora</a>
            </h3>
            <h4 class="product-price">
              $49.50
            </h4>
            <div class="product-buttons">
              <button class="btn btn-outline-secondary btn-sm btn-wishlist">
                <fa :icon="['fas', 'heart']" />
              </button>
              <button class="btn btn-outline-primary btn-sm">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <!-- Product-->
        <div class="grid-item">
          <div class="product-card">
            <div class="rating-stars">
              <i class="icon-star filled" />
              <i class="icon-star filled" />
              <i class="icon-star filled" />
              <i class="icon-star filled" />
              <i class="icon-star filled" />
            </div>
            <a class="product-thumb" href="shop-single.html">
              <img src="~/assets/img/shop/products/11.jpg" alt="Product">
            </a>
            <h3 class="product-title">
              <a href="shop-single.html">Top-Sider Fathom</a>
            </h3>
            <h4 class="product-price">
              $90.00
            </h4>
            <div class="product-buttons">
              <button class="btn btn-outline-secondary btn-sm btn-wishlist">
                <fa :icon="['fas', 'heart']" />
              </button>
              <button class="btn btn-outline-primary btn-sm">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <!-- Product-->
        <div class="grid-item">
          <div class="product-card">
            <a class="product-thumb" href="shop-single.html">
              <img src="~/assets/img/shop/products/04.jpg" alt="Product">
            </a>
            <h3 class="product-title">
              <a href="shop-single.html">Waist Leather Belt</a>
            </h3>
            <h4 class="product-price">
              $47.00
            </h4>
            <div class="product-buttons">
              <button class="btn btn-outline-secondary btn-sm btn-wishlist">
                <fa :icon="['fas', 'heart']" />
              </button>
              <button class="btn btn-outline-primary btn-sm">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <!-- Product-->
        <div class="grid-item">
          <div class="product-card">
            <div class="product-badge text-danger">
              50% Off
            </div>
            <a class="product-thumb" href="shop-single.html">
              <img src="~/assets/img/shop/products/01.jpg" alt="Product">
            </a>
            <h3 class="product-title">
              <a href="shop-single.html">Unionbay Park</a>
            </h3>
            <h4 class="product-price">
              <del>$99.99</del>$49.99
            </h4>
            <div class="product-buttons">
              <button class="btn btn-outline-secondary btn-sm btn-wishlist">
                <fa :icon="['fas', 'heart']" />
              </button>
              <button class="btn btn-outline-primary btn-sm">
                View Detail
              </button>
            </div>
          </div>
        </div>
      </carousel>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isNuxtReady: false,
      items: 3,
      dots: true,
      url: true,
      nav: false,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 7000
    }
  }
}
</script>

<style lang="css" scoped>
</style>
