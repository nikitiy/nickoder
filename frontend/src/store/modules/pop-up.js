import store from "@/store";

export default {
    state: {
        popUp_isShow: false,
        type: "",
        message: "",
        image: {
            title: "",
            meta: {
                download_url: ""
            }
        },
        scrollPosition: 0
    },
    getters: {
        getPopUpStatus(state) {
            return state.popUp_isShow;
        },
        getPopUpType(state) {
            return state.type;
        },
        getPopUpMessage(state) {
            return state.message;
        },
        getPopUpImage(state) {
            return state.image;
        },
    },
    mutations: {
        UpdatePopUpStatus(state, status) {
            state.popUp_isShow = status;
        },
        UpdatePopUpType(state, type) {
            state.type = type;
        },
        UpdatePopUpMessage(state, message) {
            state.message = message;
        },
        UpdatePopUpImage(state, image) {
            state.image = image;
        },
    },
    actions: {
        ChangePopUpStatus(ctx, status) {
            store.dispatch('switchScroll', status).then();
            ctx.commit('UpdatePopUpStatus', status);
        },
        ChangePopUpType(ctx, type) {
            ctx.commit('UpdatePopUpType', type);
        },
        ChangePopUpMessage(ctx, message) {
            ctx.commit('UpdatePopUpMessage', message);
        },
        ChangePopUpImage(ctx, image) {
            ctx.commit('UpdatePopUpImage', image);
        },
    }
}
