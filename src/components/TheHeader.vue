<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand><b-link to="/home">BACANCY</b-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item> <b-link to="/home">Home</b-link></b-nav-item>
          <b-nav-item><b-link to="/about">AboutUs</b-link></b-nav-item>
          <b-nav-item><b-link to="/contact">ContactUs</b-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar a {
  color: white !important;
}
</style>
