<template>
  <div>
    <TheHeader />
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
