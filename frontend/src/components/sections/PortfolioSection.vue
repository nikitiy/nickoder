<template>
  <div class="portfolio" id="portfolio">
    <div class="container">
      <h2 class="title">{{ portfolio_section_data.title }}</h2>
      <div class="portfolio__grid">

        <portfolio-item v-for="portfolio in portfolio_section_data.portfolio_items" :key="portfolio.id" :portfolio="portfolio"/>

      </div>
    </div>
  </div>
</template>

<script>
import PortfolioItem from "@/components/PortfolioItem.vue";
import {mapGetters} from "vuex";

export default {
  components: {PortfolioItem},
  computed: mapGetters(['portfolio_section_data']),
}
</script>

<style lang="scss">
.portfolio {
  @extend %mt-120;

  .title {
    text-transform: uppercase;
  }
}
.portfolio__grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media screen and (max-width: 1000px) {
  .portfolio__grid {grid-template-columns: repeat(2, 1fr);}
}
@media screen and (max-width: 720px) {

}
@media screen and (max-width: 570px) {
  .portfolio__grid {grid-template-columns: 1fr;}
}
@media screen and (max-width: 480px) {

}
@media screen and (max-width: 350px) {

}
</style>