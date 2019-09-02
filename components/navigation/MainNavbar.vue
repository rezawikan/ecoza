<template lang="html">
  <header class="navbar navbar-sticky">
    <form class="site-search" method="get">
      <input v-model="search" type="text" placeholder="Type to search...">
      <div class="search-tools">
        <span class="clear-search">Clear</span>
        <span class="close-search">
          <fa :icon="['fas', 'times']" />
        </span>
      </div>
    </form>
    <div class="site-branding">
      <div class="inner">
        <!-- Off-Canvas Toggle (#shop-categories)-->
        <a class="offcanvas-toggle cats-toggle" href="#shop-categories" data-toggle="offcanvas" @click.prevent="offcanvasOpen">
          <fa :icon="['fas', 'bars']" />
        </a>
        <!-- Off-Canvas Toggle (#mobile-menu)-->
        <a class="offcanvas-toggle menu-toggle" href="#mobile-menu" data-toggle="offcanvas" @click.prevent="offcanvasOpen">
          <fa :icon="['fas', 'bars']" />
        </a>
        <!-- Site Logo-->
        <a class="site-logo" href="index.html"><img src="~/assets/img/logo/logo.png" alt="Unishop">&nbsp;</a>
      </div>
    </div>

    <!-- Main Navigation-->
    <nav class="site-menu">
      <ul>
        <li class="active">
          <a href="blog-rs.html">
            <span>Home</span>
          </a>
        </li>
        <li class="has-megamenu">
          <a href="#">
            <span>SHOP</span>
          </a>
          <ul class="mega-menu">
            <li>
              <span class="mega-menu-title">Top Categories</span>
              <ul class="sub-menu">
                <li v-for="(category, index) in selected.categories" :key="index">
                  <a href="#">{{ category }}</a>
                </li>
              </ul>
            </li>
            <li>
              <span class="mega-menu-title">Top Brands</span>
              <ul class="sub-menu">
                <li v-for="(brand, index) in selected.brands" :key="index">
                  <a href="#">{{ brand }}</a>
                </li>
              </ul>
            </li>
            <li>
              <section class="promo-box" style="background-image: url(~assets/img/banners/02.jpg);">
                <span class="overlay-dark" style="opacity: .4;">&nbsp;</span>
                <div class="promo-box-content text-center padding-top-2x padding-bottom-2x">
                  <h4 class="text-light text-thin text-shadow">
                    New Collection of
                  </h4>
                  <h3 class="text-bold text-light text-shadow">
                    Sunglasses
                  </h3>
                  <a class="btn btn-sm btn-primary" href="#">Shop Now</a>
                </div>
              </section>
            </li>
            <li>
              <section class="promo-box" style="background-image: url(~/assets/img/banners/03.jpg);">
                <!-- Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.-->
                <span class="overlay-dark" style="opacity: .45;">&nbsp;</span>
                <div class="promo-box-content text-center padding-top-2x padding-bottom-2x">
                  <h3 class="text-bold text-light text-shadow">
                    Limited Offer
                  </h3>
                  <h4 class="text-light text-thin text-shadow">
                    save up to 50%!
                  </h4>
                  <a class="btn btn-sm btn-primary" href="#">Learn More</a>
                </div>
              </section>
            </li>
          </ul>
        </li>
        <li>
          <a href="blog-rs.html">
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="blog-rs.html">
            <span>Big Deals</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- Toolbar-->
    <div class="toolbar">
      <div class="inner">
        <div class="tools">
          <div class="search">
            <fa :icon="['fas', 'search']" />
          </div>
          <div class="account">
            <a href="account-orders.html">&nbsp;</a>
            <fa :icon="['fas', 'user']" />
            <ul class="toolbar-dropdown">
              <li class="sub-menu-user">
                <div class="user-ava">
                  <img src="~/assets/img/account/user-ava-sm.jpg" alt="Daniel Adams">
                </div>
                <div class="user-info">
                  <h6 class="user-name">
                    Daniel Adams
                  </h6>
                  <span class="text-xs text-muted">290 Reward points</span>
                </div>
              </li>
              <li>
                <a href="account-profile.html">My Profile</a>
              </li>
              <li>
                <a href="account-orders.html">Orders List</a>
              </li>
              <li>
                <a href="account-wishlist.html">Wishlist</a>
              </li>
              <li class="sub-menu-separator">
                &nbsp;
              </li>
              <li>
                <a href="#">
                  <fa :icon="['fas', 'lock']" /> Logout
                </a>
              </li>
            </ul>
          </div>
          <div class="cart">
            <a href="cart.html" />
            <fa :icon="['fas', 'shopping-basket']" />
            <span class="count">3</span>
            <span class="subtotal">$289.68</span>
            <div class="toolbar-dropdown">
              <div class="dropdown-product-item">
                <span class="dropdown-product-remove">
                  <i class="icon-cross">&nbsp;</i>
                </span>
                <a class="dropdown-product-thumb" href="shop-single.html">
                  <img src="~assets/img/cart-dropdown/01.jpg" alt="Product">
                </a>
                <div class="dropdown-product-info">
                  <a class="dropdown-product-title" href="shop-single.html">Unionbay Park</a>
                  <span class="dropdown-product-details">1 x $43.90</span>
                </div>
              </div>
              <div class="dropdown-product-item">
                <span class="dropdown-product-remove">
                  <i class="icon-cross">&nbsp;</i>
                </span>
                <a class="dropdown-product-thumb" href="shop-single.html">
                  <img src="~/assets/img/cart-dropdown/02.jpg" alt="Product">
                </a>
                <div class="dropdown-product-info">
                  <a class="dropdown-product-title" href="shop-single.html">Daily Fabric Cap</a>
                  <span class="dropdown-product-details">2 x $24.89</span>
                </div>
              </div>
              <div class="dropdown-product-item">
                <span class="dropdown-product-remove">
                  <i class="icon-cross">&nbsp;</i>
                </span>
                <a class="dropdown-product-thumb" href="shop-single.html">
                  <img src="~/assets/img/cart-dropdown/03.jpg" alt="Product">
                </a>
                <div class="dropdown-product-info">
                  <a class="dropdown-product-title" href="shop-single.html">Haan Crossbody</a>
                  <span class="dropdown-product-details">1 x $200.00</span>
                </div>
              </div>
              <div class="toolbar-dropdown-group">
                <div class="column">
                  <span class="text-lg">Total:</span>
                </div>
                <div class="column text-right">
                  <span class="text-lg text-medium">$289.68&nbsp;</span>
                </div>
              </div>
              <div class="toolbar-dropdown-group">
                <div class="column">
                  <a class="btn btn-sm btn-block btn-secondary" href="cart.html">View Cart</a>
                </div>
                <div class="column">
                  <a class="btn btn-sm btn-block btn-success" href="checkout-address.html">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      openCanvas: false,
      isOverflow: '',
      search: '',
      selected: {
        categories: [
          "Men's Shoes",
          "Women's Shoes",
          'Shirts and Tops',
          'Swimwear',
          'Shorts and Pants',
          'Accessories'
        ],
        brands: [
          'Adidas',
          'Nike',
          'Puma',
          'New Balance'
        ]
      }
    }
  },

  mounted() {
    addEventListener('click', () => {
      if (this.hasScrollbar()) {
        document.body.classList.add('hasScrollbar')
      }
    })

    addEventListener('scroll', () => {
      this.handleSticky()
      this.showScroll()
    })

    addEventListener('load', this.handleSticky)

    this.handleSubCategory()
    this.handleBackdrop()
    this.handleSearch()
  },

  methods: {
    handleSticky() {
      const BODY = document.body
      const STICKY = document.querySelector('.navbar-sticky')
      const TOPBAR = document.querySelector('.topbar')
      if (window.scrollY > TOPBAR.clientHeight) {
        STICKY.classList.add('navbar-stuck')
        if (!STICKY.classList.contains('navbar-ghost')) {
          BODY.style.paddingTop = STICKY.clientHeight
        }
      } else {
        STICKY.classList.remove('navbar-stuck')
        BODY.style.paddingTop = 0
      }
    },
    showScroll() {
      const SCROLL = document.querySelector('.scroll-to-top-btn')
      console.log(window.scrollY)
      if (window.scrollY > 600) {
        SCROLL.classList.add('visible')
      } else {
        SCROLL.classList.remove('visible')
      }
    },
    offcanvasOpen(e) {
      const BODY = document.body
      const ID = e.currentTarget.getAttribute('href')
      this.isActive = !document.querySelector(ID).classList.contains('active')
      this.isActive ? document.querySelector(ID).classList.add('active') : document.querySelector(ID).classList.remove('active')
      this.isOverflow = BODY.style.overflow === 'hidden' ? 'visible' : 'hidden'
      BODY.style.overflow = this.isOverflow
      this.openCanvas = !BODY.classList.contains('offcanvas-open')
      this.openCanvas ? BODY.classList.add('offcanvas-open') : BODY.classList.remove('offcanvas-open')
    },
    offcanvasClose(e) {
      const BODY = document.body
      BODY.classList.remove('offcanvas-open')
      setTimeout(() => {
        BODY.style.overflow = 'visible'
        const CONTAINER = document.querySelectorAll('.offcanvas-container')
        CONTAINER.forEach((r) => {
          r.classList.remove('active')
        })
      }, 100)
    },
    hasScrollbar() {
      // The Modern solution
      if (typeof window.innerWidth === 'number') {
        return window.innerWidth > document.documentElement.clientWidth
      }
      // rootElem for quirksmode
      const rootElem = document.documentElement || document.body
      // Check overflow style property on body for fauxscrollbars
      let overflowStyle
      if (typeof rootElem.currentStyle !== 'undefined') {
        overflowStyle = rootElem.currentStyle.overflow
      }
      overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow
      // Also need to check the Y axis overflow
      let overflowYStyle
      if (typeof rootElem.currentStyle !== 'undefined') {
        overflowYStyle = rootElem.currentStyle.overflowY
      }
      overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY
      const contentOverflows = rootElem.scrollHeight > rootElem.clientHeight
      const overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle)
      const alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll'
      return (contentOverflows && overflowShown) || (alwaysShowScroll)
    },
    handleSubCategory() {
      const CHILD = document.querySelectorAll('.has-children .sub-menu-toggle')
      const BACK = document.querySelectorAll('.back-btn')

      CHILD.forEach((a) => {
        a.addEventListener('click', (e) => {
          const PARENT = e.target.parentNode.parentNode.parentNode
          PARENT.classList.add('off-view')
          const MENU = e.target.parentNode.nextElementSibling
          MENU.classList.add('in-view')
        })
      })

      BACK.forEach((b) => {
        b.addEventListener('click', (e) => {
          const SUBMENU = e.target.parentNode.parentNode
          SUBMENU.classList.remove('in-view')
          const PARENTMENU = e.target.parentNode.parentNode.parentNode.parentNode
          PARENTMENU.classList.remove('off-view')
        })
      })
    },
    handleSearch() {
      const SEARCH = document.querySelector('.tools .search')
      const VISIBLE = document.querySelector('.site-search')
      const CLOSE = document.querySelector('.close-search')
      const CLEAR = document.querySelector('.clear-search')
      SEARCH.addEventListener('click', () => {
        VISIBLE.classList.add('search-visible')
      })
      CLOSE.addEventListener('click', () => {
        VISIBLE.classList.remove('search-visible')
      })
      CLEAR.addEventListener('click', () => {
        this.search = ''
      })
    },
    handleBackdrop() {
      const BACKDROP = document.querySelector('.site-backdrop')
      const ELEMENT = document.querySelectorAll('.offcanvas-toggle')
      BACKDROP.addEventListener('click', () => {
        ELEMENT.forEach((e) => {
          this.offcanvasClose()
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
