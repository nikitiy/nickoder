<template>
  <div class="offer">
    <div class="container">
      <div class="offer__content">
        <div class="offer__examples">
          <div class="offer__stars">
            <star-figure class="star-ui_blue"/>
            <star-figure class="star-ui_blue"/>
            <star-figure class="star-ui_grey"/>
            <star-figure class="star-ui_grey"/>
          </div>
          <div class="offer__mockups">
            <img class="offer__phone-mockup" :src="offer_section_data.phone_mockup.url"
                 :alt="offer_section_data.phone_mockup.alt">
            <img class="offer__laptop-mockup" :src="offer_section_data.laptop_mockup.url"
                 :alt="offer_section_data.laptop_mockup.alt">
          </div>
        </div>
        <div class="offer__suggestation-block">
          <div class="offer__suggestations">

            <div class="offer__suggestations-item" v-for="offer in offer_section_data.offer_items" :key="offer.id">
              <h2>{{ offer.title }}</h2>
              <p>{{ offer.offer_1 }}</p>
              <p>{{ offer.offer_2 }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: mapGetters(['offer_section_data']),
}
</script>

<style lang="scss">
.offer {
  @extend %mt-120;
}

.offer__content {
  display: flex;
  align-items: center;
  position: relative;
}

.offer__examples {
  width: calc(100% - 300px);
  padding-top: calc((100% - 300px) * .52);
  background-color: #28282B;
  position: relative;
  z-index: 2;
  border-radius: 74px;
}

.offer__mockups {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 55%;
  overflow: hidden;
  border-radius: 74px;
}

.offer__phone-mockup {
  position: absolute;
  top: 3.4%;
  left: 13%;
  width: 35%;
  transform: rotate(-11.76deg);
  z-index: 2;
}

.offer__laptop-mockup {
  position: absolute;
  top: 20%;
  right: 3%;
  width: 71%;
  transform: rotate(-26.2deg);
  z-index: 1;
}

.offer__stars {
  position: absolute;
  overflow: hidden;
  top: 0;
  width: 100%;
  padding-top: 52%;
  border-radius: 74px;

  .star-ui {
    position: absolute;
  }

  .star-ui_blue {
    top: 0;

    path {
      fill: $color_blue;
    }

    &:nth-child(1) {
      width: 16%;
    }

    &:nth-child(2) {
      width: 24%;
      right: 3%;
    }
  }

  .star-ui_grey {
    width: 53%;

    path {
      fill: rgba($color: $color_white, $alpha: .04);
    }

    &:nth-child(3) {
      bottom: -60%;
      left: -19%;
    }

    &:nth-child(4) {
      bottom: -25%;
      right: -26%;
    }
  }
}

.offer__suggestation-block {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  right: 0;
  width: 418px;
  padding-top: calc((100% - 300px) * .45);
  background-color: rgba($color: $color_white, $alpha: .07);
  border-radius: 74px;
}

.offer__suggestations {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 50%;
  right: -12px;
  transform: translate(0, -50%);
}

.offer__suggestations-item {
  padding: 20px;
  border: 1px solid $color_blue;
  border-radius: 20px;

  h2 {
    font-size: 20px;
    color: $color_blue;
  }

  p {
    color: rgba($color: $color_white, $alpha: .8);
    margin-top: 6px;

    &:nth-child(2) {
      margin-top: 10px;
    }
  }
}

@media screen and (max-width: 1100px) {
  .offer__examples, .offer__stars, .offer__mockups {
    border-radius: 50px
  }
  .offer__suggestation-block {
    border-radius: 50px
  }
  .offer__suggestations {
    right: -15px
  }
  .offer__suggestations-item {
    padding: 15px 25px 15px 15px;
  }
}

@media screen and (max-width: 1000px) {
  .offer__content {
    flex-direction: column;
  }
  .offer__examples {
    width: 100%;
    padding-top: 52%;
  }
  .offer__suggestation-block {
    width: 80%;
    max-width: 450px;
    position: relative;
    top: -1px;
    border-radius: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 41px 0 40px;
  }
  .offer__suggestations {
    position: relative;
    top: auto;
    right: auto;
    transform: translate(0, 0);
  }
  .offer__suggestations-item {
    border: 0;
    border-top: 1px solid $color_blue;
    border-bottom: 1px solid $color_blue;
    border-radius: 0;
    padding: 20px;
    text-align: center;
  }

}

@media screen and (max-width: 480px) {
  .offer__examples, .offer__stars, .offer__mockups {
    border-radius: 30px;
  }
  .offer__suggestations-item h2 {
    font-size: 16px;
  }
  .offer__suggestations-item p {
    font-size: 13px;
  }
}
</style>