<template lang="html">
  <div class="page-title">
    <div class="container">
      <div class="column">
        <h1 class="text-capitalize">
          {{ breadcrumbs[breadcrumbs.length-1].label }}
        </h1>
      </div>
      <div class="column">
        <ul class="breadcrumbs">
          <li
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
          >
            <a :href="localePath(breadcrumb.link)" class="text-capitalize">{{ breadcrumb.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      breadcrumbs: 'breadcrumbs/breadcrumbs'
    })
  },

  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
