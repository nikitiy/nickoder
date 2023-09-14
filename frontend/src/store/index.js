import {createStore} from 'vuex'
import burger from "@/store/modules/burger";
import popUp from "@/store/modules/pop-up";
import page_data from "@/store/modules/page_data";
import application_form from "@/store/modules/application_form";
import scrollController from "@/store/modules/scrollController";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    Navigation(ctx, event) {
      document.body.style.cssText = '';
      const block_id = document.getElementById(event.target.name);
      window.scrollBy({
        top: block_id.getBoundingClientRect().top - 40,
        behavior: "smooth"
      });
    }
  },
  modules: {
    burger,
    page_data,
    application_form,
    popUp,
    scrollController
  }
})
