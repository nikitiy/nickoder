import axios from "axios";

export default {
  state: {
    welcome_section: {
        subtitle: ""
    },
    offer_section: {
        phone_mockup: {
            url: "",
            alt: ""
        },
        laptop_mockup: {
            url: "",
            alt: ""
        },
        offer_items: [
            {
                title: "",
                offer_1: "",
                offer_2: "",
            },
        ]
    },
    about_me_section: {
        subtitle: "",
        photo: {
            url: "",
            alt: ""
        }
    },
    skills_section: {
        title: "",
        skill_items: [
            {
                image: {
                    meta: {
                        download_url: ""
                    }
                }
            }
        ]
    },
    portfolio_section: {
        title: "",
        portfolio_items: [
            {
                description: "",
                url: "",
                logo: {
                    title: "",
                    meta: {
                        download_url: ""
                    }
                },
                preview: {
                    title: "",
                    meta: {
                        download_url: ""
                    }
                },
                full_image: {
                    title: "",
                    meta: {
                        download_url: ""
                    }
                }
            }
        ]
    },
    application_form_section: {
        title: "",
        subtitle: ""
    },
    services_section: {
        title: "",
        services_items: [
            {
                title: "",
                price: "",
                simple_text: [
                    {
                        text: ""
                    }
                ]
            }
        ]
    },
    contacts: {
        phone_number: "",
        email: "",
        location: ""
    },
    links: [
        {
            image: {
                meta: {
                    download_url: ""
                }
            },
            title: "",
            url: ""
        }
    ],
    header_link: {
        title: "",
        url: "",
        image: {
            url: "",
            alt: ""
        }
    },
    isReadyPageData: false,
  },
  getters: {
    welcome_section_data(state) {return state.welcome_section;},
    offer_section_data(state) {return state.offer_section;},
    about_me_section_data(state) {return state.about_me_section;},
    skills_section_data(state) {return state.skills_section;},
    portfolio_section_data(state) {return state.portfolio_section;},
    application_form_section_data(state) {return state.application_form_section;},
    services_section_data(state) {return state.services_section;},
    contacts_data(state) {return state.contacts;},
    links(state) {return state.links;},
    header_link(state) {return state.header_link;},
    page_data_status(state) {return state.isReadyPageData},
  },
  mutations: {
    UpdatePageData(state, values) {
        state.welcome_section = {
            "subtitle": values.subtitle,
        };
        state.offer_section = {
            "phone_mockup": {
                url: values.phone_mockup.meta.download_url,
                alt: values.phone_mockup.title,
            },
            "laptop_mockup": {
                url: values.laptop_mockup.meta.download_url,
                alt: values.laptop_mockup.title,
            },
            "offer_items": values.offer_items
        };
        state.about_me_section = {
          "subtitle": values.subtitle_about_me,
          "photo": {
              url: values.photo_about_me.meta.download_url,
              alt: values.photo_about_me.title,
          },
        };
        state.skills_section = {
            "title": values.title_skills,
            "skill_items": values.skill_items
        };
        state.portfolio_section = {
            "title": values.title_portfolio,
            "portfolio_items": values.portfolio_items
        };
        state.application_form_section = {
          "title": values.title_form,
          "subtitle": values.subtitle_form,
        };
        state.services_section = {
            "title": values.title_services,
            "services_items": values.services_items
        };
        state.contacts = {
            phone_number: values.phone_number,
            email: values.email,
            location: values.location
        };
        state.links = values.links;
        state.header_link = {
            title: values.header_link_title,
            url: values.header_link_url,
            image: {
                url: values.header_link_image.meta.download_url,
                alt: values.header_link_image.title
            }
        };
        state.isReadyPageData = true;
    }
  },
  actions: {
    async getPageData(ctx) {
        await axios
          .get('/api/v1/pages/?type=home.HomePage&fields=*')
          .then(response => ctx.commit('UpdatePageData', response.data.items[0]));
    }
  }
}
