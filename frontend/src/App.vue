<template>
  <header-section/>
  <welcome-section/>
  <offer-section/>
  <about-me-section/>
  <skills-section/>
  <portfolio-section/>
  <application-form-section/>
  <services-section/>
  <footer-section/>

  <search-slide/>
  <burger-menu/>
  <pop-up/>
</template>

<script>
import {mapActions} from "vuex";
import SearchSlide from "@/components/SearchSlide.vue";
import PopUp from "@/components/PopUp.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import ApplicationFormSection from "@/components/sections/ApplicationFormSection.vue";
import PortfolioSection from "@/components/sections/PortfolioSection.vue";
import HeaderSection from "@/components/sections/HeaderSection.vue";
import FooterSection from "@/components/sections/FooterSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import AboutMeSection from "@/components/sections/AboutMeSection.vue";
import OfferSection from "@/components/sections/OfferSection.vue";
import WelcomeSection from "@/components/sections/WelcomeSection.vue";

export default {
  components: {
    PopUp,
    BurgerMenu,
    ServicesSection,
    ApplicationFormSection,
    PortfolioSection,
    HeaderSection,
    FooterSection,
    SkillsSection,
    AboutMeSection,
    OfferSection,
    WelcomeSection,
    SearchSlide
  },
  data() {
    return {
      welcome_section: {},
      offer_section: {},
      about_me_section: {},
      skills_section: {},
      portfolio_section: {},
      application_form_section: {},
      services_section: {},
    }
  },
  methods: mapActions(['getPageData']),
  beforeMount() {
    this.getPageData();
  }
}
</script>