<template lang="html">
  <div class="topbar">
    <div class="topbar-column">
      <a class="hidden-md-down" href="mailto:support@unishop.com">
        <fa :icon="['fas', 'envelope']" />&nbsp; support@unishop.com
      </a>
      <a class="hidden-md-down" href="tel:00331697720">
        <fa :icon="['fas', 'phone']" />&nbsp; 00 33 169 7720
      </a>
      <a class="social-button sb-facebook shape-none sb-dark" href="#" target="_blank">
        <fa :icon="['fab', 'facebook-f']" />
      </a>
      <a class="social-button sb-twitter shape-none sb-dark" href="#" target="_blank">
        <fa :icon="['fab', 'twitter']" />
      </a>
      <a class="social-button sb-instagram shape-none sb-dark" href="#" target="_blank">
        <fa :icon="['fab', 'instagram']" />
      </a>
      <a class="social-button sb-pinterest shape-none sb-dark" href="#" target="_blank">
        <fa :icon="['fab', 'pinterest']" />
      </a>
    </div>
    <div class="topbar-column">
      <a class="hidden-md-down" href="#">
        <fa :icon="['fas', 'download']" />&nbsp; Get mobile app
      </a>
      <div class="lang-currency-switcher-wrap">
        <div class="lang-currency-switcher dropdown-toggle">
          <span class="language"><img alt="English" src="~assets/img/flags/GB.png"></span>
          <span class="currency">$ USD</span>
        </div>
        <div class="dropdown-menu">
          <div class="currency-select">
            <select class="form-control form-control-rounded form-control-sm">
              <option value="usd">
                $ USD
              </option>
              <option value="usd">
                € EUR
              </option>
              <option value="usd">
                £ UKP
              </option>
              <option value="usd">
                ¥ JPY
              </option>
            </select>
          </div>
          <a class="dropdown-item" href="#"><img src="~assets/img/flags/FR.png" alt="Français">Français</a>
          <a class="dropdown-item" href="#"><img src="~assets/img/flags/DE.png" alt="Deutsch">Deutsch</a>
          <a class="dropdown-item" href="#"><img src="~assets/img/flags/IT.png" alt="Italiano">Italiano</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
