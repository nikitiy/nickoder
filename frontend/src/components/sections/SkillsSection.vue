<template>
  <div class="skills" id="skills">
    <div class="container">
      <h2 class="title">{{ skills_section_data.title }}</h2>
      <div class="skills__grid">
        <skill-item v-for="skill in skills_section_data.skill_items" :key="skill.id" :image="skill.image.meta.download_url" :name="skill.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import SkillItem from "@/components/SkillItem.vue";
import {mapGetters} from "vuex";

export default {
  components: {SkillItem},
  computed: mapGetters(['skills_section_data']),
}
</script>

<style lang="scss">
.skills {
  @extend %mt-120;

  .title {
    text-transform: uppercase;
  }
}
.skills__grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(13, 67px);
  grid-auto-rows: 70px;
  max-width: 872px;
  margin: 55px auto 0;
  padding: 30px 0;

  .skills__item {
    grid-column: span 2;
    margin: auto;
  }
}

@media screen and (min-width: 1001px) {
  .skills__grid .skills__item {
    &:nth-child(12n + 7) {grid-column: 2 / span 2;}
  }
}

@media screen and (max-width: 1000px) and (min-width: 841px){
  .skills__grid {grid-template-columns: repeat(11, 67px); max-width: 739px;padding: 15px 0;}
  .skills__grid .skills__item {
    &:nth-child(10n + 1) {grid-column: span 2;}
    &:nth-child(10n + 6) {grid-column: 2 / span 2;}
  }
}
@media screen and (max-width: 840px) and (min-width: 671px) {
  .skills__grid {grid-template-columns: repeat(9, 67px); max-width: 604px;padding: 15px 0;}
  .skills__grid .skills__item {
    &:nth-child(8n + 1) {grid-column: span 2;}
    &:nth-child(8n + 5) {grid-column: 2 / span 2;}
  }
}
@media screen and (max-width: 670px) and (min-width: 421px) {
  .skills__grid {grid-template-columns: repeat(11, 34px); max-width: 376px; grid-auto-rows: 34px;padding: 13px 0;}
  .skills__grid .skills__item {
    &:nth-child(10n + 1) {grid-column: span 2;}
    &:nth-child(10n + 6) {grid-column: 2 / span 2;}
  }
}
@media screen and (max-width: 420px) and (min-width: 351px) {
  .skills__grid {margin: 45px auto 0; grid-template-columns: repeat(9, 34px); max-width: 306px; grid-auto-rows: 34px;padding: 13px 0;}
  .skills__grid .skills__item {
    &:nth-child(8n + 1) {grid-column: span 2;}
    &:nth-child(8n + 5) {grid-column: 2 / span 2;}
  }
}
@media screen and (max-width: 350px) and (min-width: 0px) {
  .skills__grid {grid-template-columns: repeat(7, 34px); max-width: 240px; grid-auto-rows: 34px;padding: 13px 0;}
  .skills__grid .skills__item {
    &:nth-child(6n + 1) {grid-column: span 2;}
    &:nth-child(6n + 4) {grid-column: 2 / span 2;}
  }
}
</style>