<template lang="html">
  <li class="has-children">
    <span><a href="#">{{ label }}</a><span v-if="child.length > 0" class="sub-menu-toggle" /></span>

    <ul v-if="child.length > 0" class="offcanvas-submenu">
      <li class="back-btn">
        <a href="#">Back</a>
      </li>
      <MenuDeepTree
        v-for="(sub, index) in child"
        :key="index"
        :label="sub.label"
        :child="sub.child"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuDeepTree',
  props: {
    label: {
      type: String,
      default: () => []
    },
    child: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style lang="css" scoped>
</style>
