<template>
  <div class="services" id="services">
    <div class="container">
      <h2 class="title title_start">{{ services_section_data.title }}</h2>
      <div class="services__categories">
        <services-item v-for="service in services_section_data.services_items" :key="service.id" :service="service"/>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesItem from "@/components/ServicesItem.vue";
import {mapGetters} from "vuex";

export default {
  components: {ServicesItem},
  computed: mapGetters(['services_section_data']),
}
</script>

<style lang="scss">
.services {
  @extend %mt-120;

  & .container > .title {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
  }
}
.services__categories {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media screen and (max-width: 1000px) {
  .services__categories {}
}
@media screen and (max-width: 720px) {

}
@media screen and (max-width: 670px) {

}
@media screen and (max-width: 480px) {

}
@media screen and (max-width: 350px) {

}
</style>