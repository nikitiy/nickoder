export default {
    state: {
        scrollPosition: 0
    },
    getters: {
        getScrollPosition(state) {
            return state.scrollPosition
        }
    },
    mutations: {
        UpdateScrollMode(state, mode) {
            if (mode) {
                state.scrollPosition = window.scrollY;
                document.body.style.cssText = `
                    overflow: hidden;
                    position: fixed;
                    top: -${state.scrollPosition}px;
                    left: 0;
                    height: 100vh;
                    width: 100vw;
                `;
            } else {
                document.body.style.cssText = '';
                window.scroll({top: state.scrollPosition});
                state.scrollPosition = 0;
            }
        }
    },
    actions: {
        switchScroll(ctx, mode) {
            ctx.commit('UpdateScrollMode', mode);
        }
    }
}
