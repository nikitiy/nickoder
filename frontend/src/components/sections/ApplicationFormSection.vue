<template>
  <div class="application" id="application">
    <div class="container">
      <div class="application__content">
        <div class="application__mockup">
          <img :src="offer_section_data.laptop_mockup.url" :alt="offer_section_data.laptop_mockup.alt">
        </div>
        <div class="application__form">
          <h2 class="title title_start">{{ application_form_section_data.title }}</h2>
          <p>{{ application_form_section_data.subtitle }}</p>
          <form id="application-form" @submit.prevent="submitForm">
            <input-type-1 :class="{'input-type-1_error': errors.name}" type="text" placeholder="Имя" v-model="form_data.form_name"/>
            <input-type-1 :class="{'input-type-1_error': errors.email}" type="text" placeholder="Почта" v-model="form_data.form_mail"/>
            <textarea-type-1 placeholder="Сообщение" v-model="form_data.form_message"/>
          </form>
        </div>
        <div class="application__button">
          <img src="images/form-button-vector.svg" alt="">
          <button-type-1 form="application-form" type="submit">Отправить</button-type-1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  computed: mapGetters(['application_form_section_data', 'offer_section_data']),
  data() {
    return {
      form_data: {
        form_name: "",
        form_mail: "",
        form_message: ""
      },
      errors: {
        name: false,
        email: false
      },
    }
  },
  methods: {
    ...mapActions(['SendForm', 'ChangePopUpStatus', 'ChangePopUpType']),
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    validateEmail(value) {
      return /^[^@]+@\w+(\.\w+)+\w$/.test(value)
    },
    async submitForm() {
      this.errors.name = this.form_data.form_name.replaceAll(" ", "") === "";
      this.errors.email = ! this.validateEmail(this.form_data.form_mail);

      if (! (this.errors.name || this.errors.email)) {
        const newApplication = {
          name: this.form_data.form_name,
          mail: this.form_data.form_mail,
          message: this.form_data.form_message,
        };
        await this.SendForm(newApplication);
        this.form_data = {
          form_name: "",
          form_mail: "",
          form_message: ""
        }
        this.ChangePopUpStatus(true);
        this.ChangePopUpType('message')
      }
      await this.sleep(2200);
      this.errors = {
        name: false,
        email: false
      };
    }
  }
}
</script>

<style lang="scss">
.application {
  @extend %mt-120;
}

.application__content {
  height: 377px;
  background-color: $color_blue;
  border-radius: 37px;
  overflow: hidden;
  display: flex;
  gap: 13px;
}

.application__mockup {
  width: 40%;
  height: 100%;
  position: relative;

  img {
    width: 129%;
    position: absolute;
    top: -10%;
    right: 0;
  }
}

.application__form {
  width: calc(31% + 32px);
  height: 100%;
  padding: 30px 0 30px 32px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 14px;

  & > p {
    color: rgba($color: $color_white, $alpha: .8);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  textarea {
    flex: 1 0 auto;
  }
}
.application__button {
  width: calc(29% - 32px);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  img {
    min-width: 270px;
    position: absolute;
    bottom: 40px;
    right: -1px;
  }

  button {
    width: 258px;
    min-width: 258px;
    position: relative;
    bottom: 69px;
    right: 0;
  }
}

@media screen and (max-width: 1175px) {
  .application__button img {
    min-width: auto;
    max-width: 225px;
    bottom: 40px;
  }
  .application__button button {
    width: 210px;
    min-width: auto;
    bottom: 62px;
    right: 0;
  }
}

@media screen and (max-width: 1000px) {
  .application__content {
    flex-direction: column;
    height: auto;
    padding: 20px 0 20px 20px;
    border-radius: 20px;
  }
  .application__mockup {
    display: none
  }
  .application__form, .application__button {
    width: 100%;
  }
  .application__form {
    padding: 0 20px 0 0;
    gap: 16px;
  }
  .application__form textarea {
    height: 123px;
  }
  .application__button {
    padding-top: 60px;
  }
  .application__button button {
    bottom: 20px;
  }
  .application__button img {
    bottom: 0
  }
}

@media screen and (max-width: 560px) {
  .application__content {
    padding: 20px;
    gap: 6px;
  }
  .application__form {
    padding: 0;
  }
  .application__button {
    padding-top: 0;
    margin-top: 15px;
  }
  .application__button img {
    display: none;
  }
  .application__button button {
    width: 100%;
    bottom: auto;
  }
}

@media screen and (max-width: 480px) {
  .application__form > p {
    font-size: 14px;
  }
}
</style>