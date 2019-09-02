<template lang="html">
  <div id="mobile-menu" class="offcanvas-container">
    <a class="account-link" href="account-orders.html">
      <div class="user-ava">
        <img src="~/assets/img/account/user-ava-md.jpg" alt="Daniel Adams">
      </div>
      <div class="user-info">
        <h6 class="user-name">
          Daniel Adams
        </h6>
        <span class="text-sm text-white opacity-60">290 Reward points</span>
      </div>
    </a>
    <nav class="offcanvas-menu">
      <ul class="menu">
        <li class="has-children active">
          <span>
            <a href="index.html">
              <span>Home</span>
            </a>
            <span class="sub-menu-toggle" /></span>
          <ul class="offcanvas-submenu">
            <li class="back-btn">
              <a href="#">Back</a>
            </li>
            <li class="active">
              <a href="index.html">Featured Products Slider</a>
            </li>
            <li><a href="home-featured-categories.html">Featured Categories</a></li>
            <li><a href="home-collection-showcase.html">Products Collection Showcase</a></li>
            <li><a href="home-dark-header.html">Dark Header</a></li>
          </ul>
        </li>
        <li class="has-children">
          <span>
            <a href="shop-grid-ls.html">
              <span>Shop</span>
            </a>
            <span class="sub-menu-toggle" /></span>
          </span>
          <ul class="offcanvas-submenu">
            <li class="back-btn">
              <a href="#">Back</a>
            </li>
            <MenuTree
              v-for="(category, index) in categories"
              :key="index"
              :label="category.label"
              :child="category.child"
            />
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import MenuTree from '@/components/navigation/tree/MenuTree'
export default {
  components: {
    MenuTree
  },

  data() {
    return {
      categories: [
        {
          label: 'shoes',
          child: [
            {
              label: 'adidas'
            },
            {
              label: 'nike',
              child: [
                {
                  label: 'kecil'
                },
                {
                  label: 'besar'
                }
              ]
            }
          ]
        },
        {
          label: 'wear',
          child: [
            {
              label: 'adidas'
            },
            {
              label: 'nike',
              child: [
                {
                  label: 'kecil'
                },
                {
                  label: 'besar'
                }
              ]
            }
          ]
        },
        {
          label: 'clothes',
          child: []
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
