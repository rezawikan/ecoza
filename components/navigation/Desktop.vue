<template lang="html">
  <div id="shop-categories" class="offcanvas-container">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title">
        Shop Categories
      </h3>
    </div>
    <nav class="offcanvas-menu">
      <ul class="menu">
        <MenuTree
          v-for="(category, index) in categories"
          :key="index"
          :label="category.label"
          :child="category.child"
        />
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
          child: []
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
