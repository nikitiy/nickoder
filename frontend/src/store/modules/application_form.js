import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async SendForm(ctx, data) {
            await axios
                .post('/api/v1/application-form/',
                    {
                        "name": data.name,
                        "mail": data.mail,
                        "message": data.message,
                    },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                .then();
        }
    }
}