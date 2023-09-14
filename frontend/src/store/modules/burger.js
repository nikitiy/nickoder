import store from "@/store";

export default {
    state: {
        burger_isShow: false,
    },
    getters: {
        getBurgerStatus(state) {
            return state.burger_isShow;
        }
    },
    mutations: {
        UpdateBurgerStatus(state, status) {
            state.burger_isShow = status;
        }
    },
    actions: {
        ChangeBurgerStatus(ctx, status) {
            store.dispatch('switchScroll', status).then();
            ctx.commit('UpdateBurgerStatus', status);
        }
    }
}
