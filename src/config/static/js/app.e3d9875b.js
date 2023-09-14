(function(){"use strict";var t={2698:function(t,e,o){var a=o(9242),i=o(3396);function s(t,e,o,a,s,r){const n=(0,i.up)("header-section"),l=(0,i.up)("welcome-section"),c=(0,i.up)("offer-section"),_=(0,i.up)("about-me-section"),u=(0,i.up)("skills-section"),p=(0,i.up)("portfolio-section"),m=(0,i.up)("application-form-section"),d=(0,i.up)("services-section"),g=(0,i.up)("footer-section"),f=(0,i.up)("search-slide"),h=(0,i.up)("burger-menu"),v=(0,i.up)("pop-up");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),(0,i.Wm)(l),(0,i.Wm)(c),(0,i.Wm)(_),(0,i.Wm)(u),(0,i.Wm)(p),(0,i.Wm)(m),(0,i.Wm)(d),(0,i.Wm)(g),(0,i.Wm)(f),(0,i.Wm)(h),(0,i.Wm)(v)],64)}var r=o(65),n=o(7139);function l(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["search-slide",{"search-slide_hide":t.isHide}])},[(0,i._)("div",{class:(0,n.C_)(["search-slide__input-block",{"search-slide__input-block_ready":t.isReady}])},[(0,i._)("p",{class:(0,n.C_)(["search-slide__input",{"search-slide__input_ready":t.isReady}])},(0,n.zw)(t.search_input),3)],2)],2)}var c=(0,i.aZ)({name:"SearchSlide",data(){return{search_input:"",type_index:0,speed:120,fixed_text:"Привет, я ",addition_text_1:"Ник",addition_text_2:"Full-Stack developer",typing_act:1,isReady:!1,isHide:!1}},methods:{...(0,r.nv)(["switchScroll"]),sleep(t){return new Promise((e=>setTimeout(e,t)))},async typeText(){1===this.typing_act?(this.typing_act=2,this.typingText(this.fixed_text,"add")):2===this.typing_act?(this.typing_act=3,this.typingText(this.addition_text_1,"add")):3===this.typing_act?(await this.sleep(1500),this.typing_act=4,this.typingText(this.addition_text_1,"del")):4===this.typing_act&&(this.typing_act=0,this.typingText(this.addition_text_2,"add"))},typingText(t,e){this.type_index<t.length?("add"===e?this.search_input+=t.charAt(this.type_index):"del"===e&&(this.search_input=this.search_input.slice(0,-1)),this.type_index++,setTimeout((()=>this.typingText(t,e)),this.speed)):(this.type_index=0,this.typeText())}},watch:{async search_input(){this.search_input===this.fixed_text+this.addition_text_2&&(await this.sleep(500),this.isReady=!0,await this.sleep(700),this.isHide=!0,await this.switchScroll(!1))}},mounted(){this.switchScroll(!0),this.typeText()}}),_=o(89);const u=(0,_.Z)(c,[["render",l]]);var p=u;const m={class:"container"},d=(0,i._)("span",null,null,-1),g=(0,i._)("span",null,null,-1),f=[d,g],h=["src","alt"],v=(0,i._)("span",null,null,-1),b=(0,i._)("span",null,null,-1),k=[v,b],w=(0,i._)("div",{class:"check-mark-circle1"},[(0,i._)("div",{class:"check-mark-circle2"},[(0,i._)("img",{class:"check-mark",src:"images/icons/check-mark.svg",alt:""})])],-1),y=(0,i._)("div",{class:"pop-up__message__text"},[(0,i._)("p",null,[(0,i._)("span",null,"Спасибо!")]),(0,i._)("p",null,"C Вами свяжутся в ближайшее время.")],-1);function U(t,e,o,s,r,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["pop-up",{"pop-up_active":t.getPopUpStatus,"pop-up_closing":r.popUpStatusClose}]),onClick:e[4]||(e[4]=(0,a.iM)(((...t)=>l.closePopUp&&l.closePopUp(...t)),["stop"]))},[(0,i._)("div",m,[(0,i._)("div",{class:(0,n.C_)(["pop-up__content",{"pop-up__content_active":t.getPopUpStatus,"pop-up__content_closing":r.popUpStatusClose}])},["portfolio"===t.getPopUpType?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"pop-up__portfolio",onClick:e[1]||(e[1]=(0,a.iM)((()=>{}),["stop"]))},[(0,i._)("div",{class:"cross",onClick:e[0]||(e[0]=(...t)=>l.closePopUp&&l.closePopUp(...t))},f),(0,i._)("img",{src:t.getPopUpImage.meta.download_url,alt:t.getPopUpImage.title},null,8,h)])):(0,i.kq)("",!0),"message"===t.getPopUpType?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"pop-up__message",onClick:e[3]||(e[3]=(0,a.iM)((()=>{}),["stop"]))},[(0,i._)("div",{class:"cross",onClick:e[2]||(e[2]=(...t)=>l.closePopUp&&l.closePopUp(...t))},k),w,y])):(0,i.kq)("",!0)],2)])],2)}var P={data(){return{popUpStatusClose:!1}},computed:{...(0,r.Se)(["getPopUpStatus","getPopUpType","getPopUpMessage","getPopUpImage"])},methods:{...(0,r.nv)(["ChangePopUpStatus","ChangePopUpType"]),closePopUp(){this.popUpStatusClose=!0,this.ChangePopUpType(""),setTimeout((()=>{this.ChangePopUpStatus(!1),this.popUpStatusClose=!1}),200)}}};const C=(0,_.Z)(P,[["render",U]]);var S=C;const x={class:"burger__content"},T={class:"burger__navigation"},D={class:"burger__contacts"},N={class:"burger__links"},W=["src","alt"],Z={class:"burger__contacts-items"},M=["href"],I=(0,i._)("img",{src:"images/icons/phone-icon.svg",alt:""},null,-1),B=["href"],z=(0,i._)("img",{src:"images/icons/mail-icon.svg",alt:""},null,-1);function H(t,e,o,s,r,l){const c=(0,i.up)("icon-link");return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["burger",{burger_active:t.getBurgerStatus,burger_closing:r.burgerStatusClose}]),onClick:e[7]||(e[7]=(0,a.iM)(((...t)=>l.closeBurger&&l.closeBurger(...t)),["stop"]))},[(0,i._)("div",{class:(0,n.C_)(["burger__block",{burger__block_active:t.getBurgerStatus,burger__block_closing:r.burgerStatusClose}]),onClick:e[6]||(e[6]=(0,a.iM)((()=>{}),["stop"]))},[(0,i._)("div",x,[(0,i._)("nav",T,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("button",{class:"burger__navigation-item_active",name:"header",onClick:e[0]||(e[0]=(...t)=>l.Navigate&&l.Navigate(...t))},"Начало")]),(0,i._)("li",null,[(0,i._)("button",{class:"burger__navigation-item",name:"about-me",onClick:e[1]||(e[1]=(...t)=>l.Navigate&&l.Navigate(...t))},"Обо мне")]),(0,i._)("li",null,[(0,i._)("button",{class:"burger__navigation-item",name:"skills",onClick:e[2]||(e[2]=(...t)=>l.Navigate&&l.Navigate(...t))},"Скиллы")]),(0,i._)("li",null,[(0,i._)("button",{class:"burger__navigation-item",name:"portfolio",onClick:e[3]||(e[3]=(...t)=>l.Navigate&&l.Navigate(...t))},"Портфолио")]),(0,i._)("li",null,[(0,i._)("button",{class:"burger__navigation-item",name:"services",onClick:e[4]||(e[4]=(...t)=>l.Navigate&&l.Navigate(...t))},"Тарифы")]),(0,i._)("li",null,[(0,i._)("button",{class:"burger__navigation-item",name:"footer",onClick:e[5]||(e[5]=(...t)=>l.Navigate&&l.Navigate(...t))},"Контакты")])])]),(0,i._)("div",D,[(0,i._)("div",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.links,(t=>((0,i.wg)(),(0,i.j4)(c,{key:t.id,href:t.url,target:"_blank"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:t.image.meta.download_url,alt:t.image.title},null,8,W)])),_:2},1032,["href"])))),128))]),(0,i._)("div",Z,[(0,i._)("a",{href:"tel:"+l.formatPhoneNumber,class:"burger__contacts-item"},[I,(0,i._)("p",null,(0,n.zw)(t.contacts_data.phone_number),1)],8,M),(0,i._)("a",{href:"mailto:"+t.contacts_data.email,class:"burger__contacts-item"},[z,(0,i._)("p",null,(0,n.zw)(t.contacts_data.email),1)],8,B)])])])],2)],2)}const V={class:"icon-link"};function K(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("a",V,[(0,i.WI)(t.$slots,"default")])}var Y={name:"icon-link"};const F=(0,_.Z)(Y,[["render",K]]);var O=F,j={components:{IconLink:O},data(){return{burgerStatusClose:!1}},computed:{...(0,r.Se)(["getBurgerStatus","contacts_data","links"]),formatPhoneNumber(){return this.contacts_data.phone_number.replaceAll(" ","").replace("-","").replace("(","").replace(")","")}},methods:{...(0,r.nv)(["ChangeBurgerStatus","Navigation"]),closeBurger(){this.burgerStatusClose=!0,setTimeout((()=>{this.ChangeBurgerStatus(!1),this.burgerStatusClose=!1}),200)},Navigate(t){this.burgerStatusClose=!0,this.ChangeBurgerStatus(!1),this.Navigation(t),this.burgerStatusClose=!1}}};const E=(0,_.Z)(j,[["render",H]]);var L=E;const R={class:"services",id:"services"},$={class:"container"},A={class:"title title_start"},X={class:"services__categories"};function q(t,e,o,a,s,r){const l=(0,i.up)("services-item");return(0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("div",$,[(0,i._)("h2",A,(0,n.zw)(t.services_section_data.title),1),(0,i._)("div",X,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.services_section_data.services_items,(t=>((0,i.wg)(),(0,i.j4)(l,{key:t.id,service:t},null,8,["service"])))),128))])])])}const G={class:"services__category"},J={class:"title title_start"},Q={class:"services__info"},tt={class:"services__price"};function et(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("h3",J,(0,n.zw)(o.service.title),1),(0,i._)("div",Q,[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.service.simple_text,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id},(0,n.zw)(t.text),1)))),128))])]),(0,i._)("div",tt,[(0,i._)("p",null,[(0,i.Uk)("от "),(0,i._)("span",null,(0,n.zw)(o.service.price),1)]),(0,i._)("button",{name:"application",onClick:e[0]||(e[0]=(...e)=>t.Navigation&&t.Navigation(...e))},"заказать")])])}var ot={methods:(0,r.nv)(["Navigation"]),props:["service"]};const at=(0,_.Z)(ot,[["render",et]]);var it=at,st={components:{ServicesItem:it},computed:(0,r.Se)(["services_section_data"])};const rt=(0,_.Z)(st,[["render",q]]);var nt=rt;const lt={class:"application",id:"application"},ct={class:"container"},_t={class:"application__content"},ut={class:"application__mockup"},pt=["src","alt"],mt={class:"application__form"},dt={class:"title title_start"},gt={class:"application__button"},ft=(0,i._)("img",{src:"images/form-button-vector.svg",alt:""},null,-1);function ht(t,e,o,s,r,l){const c=(0,i.up)("input-type-1"),_=(0,i.up)("textarea-type-1"),u=(0,i.up)("button-type-1");return(0,i.wg)(),(0,i.iD)("div",lt,[(0,i._)("div",ct,[(0,i._)("div",_t,[(0,i._)("div",ut,[(0,i._)("img",{src:t.offer_section_data.laptop_mockup.url,alt:t.offer_section_data.laptop_mockup.alt},null,8,pt)]),(0,i._)("div",mt,[(0,i._)("h2",dt,(0,n.zw)(t.application_form_section_data.title),1),(0,i._)("p",null,(0,n.zw)(t.application_form_section_data.subtitle),1),(0,i._)("form",{id:"application-form",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>l.submitForm&&l.submitForm(...t)),["prevent"]))},[(0,i.Wm)(c,{class:(0,n.C_)({"input-type-1_error":r.errors.name}),type:"text",placeholder:"Имя",modelValue:r.form_data.form_name,"onUpdate:modelValue":e[0]||(e[0]=t=>r.form_data.form_name=t)},null,8,["class","modelValue"]),(0,i.Wm)(c,{class:(0,n.C_)({"input-type-1_error":r.errors.email}),type:"text",placeholder:"Почта",modelValue:r.form_data.form_mail,"onUpdate:modelValue":e[1]||(e[1]=t=>r.form_data.form_mail=t)},null,8,["class","modelValue"]),(0,i.Wm)(_,{placeholder:"Сообщение",modelValue:r.form_data.form_message,"onUpdate:modelValue":e[2]||(e[2]=t=>r.form_data.form_message=t)},null,8,["modelValue"])],32)]),(0,i._)("div",gt,[ft,(0,i.Wm)(u,{form:"application-form",type:"submit"},{default:(0,i.w5)((()=>[(0,i.Uk)("Отправить")])),_:1})])])])])}var vt={computed:(0,r.Se)(["application_form_section_data","offer_section_data"]),data(){return{form_data:{form_name:"",form_mail:"",form_message:""},errors:{name:!1,email:!1}}},methods:{...(0,r.nv)(["SendForm","ChangePopUpStatus","ChangePopUpType"]),sleep(t){return new Promise((e=>setTimeout(e,t)))},validateEmail(t){return/^[^@]+@\w+(\.\w+)+\w$/.test(t)},async submitForm(){if(this.errors.name=""===this.form_data.form_name.replaceAll(" ",""),this.errors.email=!this.validateEmail(this.form_data.form_mail),!this.errors.name&&!this.errors.email){const t={name:this.form_data.form_name,mail:this.form_data.form_mail,message:this.form_data.form_message};await this.SendForm(t),this.form_data={form_name:"",form_mail:"",form_message:""},this.ChangePopUpStatus(!0),this.ChangePopUpType("message")}await this.sleep(2200),this.errors={name:!1,email:!1}}}};const bt=(0,_.Z)(vt,[["render",ht]]);var kt=bt;const wt={class:"portfolio",id:"portfolio"},yt={class:"container"},Ut={class:"title"},Pt={class:"portfolio__grid"};function Ct(t,e,o,a,s,r){const l=(0,i.up)("portfolio-item");return(0,i.wg)(),(0,i.iD)("div",wt,[(0,i._)("div",yt,[(0,i._)("h2",Ut,(0,n.zw)(t.portfolio_section_data.title),1),(0,i._)("div",Pt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.portfolio_section_data.portfolio_items,(t=>((0,i.wg)(),(0,i.j4)(l,{key:t.id,portfolio:t},null,8,["portfolio"])))),128))])])])}const St={class:"portfolio__image"},xt=["src","alt"],Tt={class:"portfolio__info"},Dt={class:"portfolio__top-row"},Nt={class:"portfolio__logo"},Wt=["src","alt"],Zt={class:"portfolio__buttons"},Mt=(0,i._)("div",{class:"portfolio__background-figure"},[(0,i._)("img",{src:"images/2-rectangles.png",alt:""})],-1);function It(t,e,o,s,r,l){const c=(0,i.up)("button-type-1"),_=(0,i.up)("button-a");return(0,i.wg)(),(0,i.iD)("div",{onClick:e[1]||(e[1]=(...t)=>l.openPopUp&&l.openPopUp(...t)),class:"portfolio__item"},[(0,i._)("div",St,[(0,i._)("img",{src:o.portfolio.preview.meta.download_url,alt:o.portfolio.preview.title},null,8,xt)]),(0,i._)("div",Tt,[(0,i._)("div",Dt,[(0,i._)("div",Nt,[(0,i._)("img",{src:o.portfolio.logo.meta.download_url,alt:o.portfolio.logo.title},null,8,Wt)]),(0,i._)("div",Zt,[(0,i.Wm)(c,{onClick:(0,a.iM)(l.openPopUp,["stop"])},{default:(0,i.w5)((()=>[(0,i.Uk)("Посмотреть")])),_:1},8,["onClick"]),o.portfolio.url?((0,i.wg)(),(0,i.j4)(_,{key:0,href:o.portfolio.url,target:"_blank",onClick:e[0]||(e[0]=(0,a.iM)((()=>{}),["stop"]))},{default:(0,i.w5)((()=>[(0,i.Uk)("Перейти")])),_:1},8,["href"])):(0,i.kq)("",!0)])]),(0,i._)("p",null,(0,n.zw)(o.portfolio.description),1),Mt])])}var Bt={props:["portfolio"],methods:{...(0,r.nv)(["ChangePopUpStatus","ChangePopUpType","ChangePopUpImage"]),openPopUp(){this.ChangePopUpStatus(!0),this.ChangePopUpType("portfolio"),this.ChangePopUpImage(this.portfolio.full_image)}}};const zt=(0,_.Z)(Bt,[["render",It]]);var Ht=zt,Vt={components:{PortfolioItem:Ht},computed:(0,r.Se)(["portfolio_section_data"])};const Kt=(0,_.Z)(Vt,[["render",Ct]]);var Yt=Kt;const Ft={class:"header",id:"header"},Ot={class:"container"},jt={class:"header__content"},Et=(0,i._)("div",{class:"header__logo"},[(0,i._)("img",{src:"images/icons/logo.svg",alt:""})],-1),Lt={class:"header__navigation"},Rt={class:"header__contacts"},$t=["src","alt"];function At(t,e,o,a,s,r){const n=(0,i.up)("keyboard-key"),l=(0,i.up)("icon-link");return(0,i.wg)(),(0,i.iD)("header",Ft,[(0,i._)("div",Ot,[(0,i._)("div",jt,[(0,i._)("div",{class:"header__burger-icon",onClick:e[0]||(e[0]=(...t)=>r.openBurger&&r.openBurger(...t))},[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Uk)("</>")])),_:1})]),Et,(0,i._)("nav",Lt,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("button",{name:"about-me",onClick:e[1]||(e[1]=(...e)=>t.Navigation&&t.Navigation(...e))},"Обо мне")]),(0,i._)("li",null,[(0,i._)("button",{name:"skills",onClick:e[2]||(e[2]=(...e)=>t.Navigation&&t.Navigation(...e))},"Скиллы")]),(0,i._)("li",null,[(0,i._)("button",{name:"portfolio",onClick:e[3]||(e[3]=(...e)=>t.Navigation&&t.Navigation(...e))},"Портфолио")]),(0,i._)("li",null,[(0,i._)("button",{name:"services",onClick:e[4]||(e[4]=(...e)=>t.Navigation&&t.Navigation(...e))},"Тарифы")])])]),(0,i._)("div",Rt,[(0,i._)("button",{class:"header__contacts__nav",name:"footer",onClick:e[5]||(e[5]=(...e)=>t.Navigation&&t.Navigation(...e))},"Контакты"),(0,i.Wm)(l,{class:"header__icon-link",href:t.header_link.url,target:"_blank"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:t.header_link.image.url,alt:t.header_link.image.alt},null,8,$t)])),_:1},8,["href"])])])])])}var Xt={methods:{...(0,r.nv)(["ChangeBurgerStatus","Navigation"]),openBurger(){this.ChangeBurgerStatus(!0)}},computed:{...(0,r.Se)(["header_link"])}};const qt=(0,_.Z)(Xt,[["render",At]]);var Gt=qt;const Jt={class:"footer",id:"footer"},Qt={class:"container"},te={class:"footer__content"},ee={class:"footer__group footer__logo-links"},oe=(0,i._)("div",{class:"footer__logo"},[(0,i._)("img",{src:"images/icons/logo-full.svg",alt:""})],-1),ae={class:"footer__social-media-links"},ie=["src","alt"],se={class:"footer__group footer__group-list"},re=(0,i._)("h3",{class:"footer__group-title"},"Информация",-1),ne={class:"footer__group-list-items"},le={class:"footer__group footer__group-list"},ce=(0,i._)("h3",{class:"footer__group-title"},"Контакты",-1),_e={class:"footer__group-list-items"},ue=["href"],pe=(0,i._)("img",{src:"images/icons/phone-icon.svg",alt:""},null,-1),me=["href"],de=(0,i._)("img",{src:"images/icons/mail-icon.svg",alt:""},null,-1),ge={class:"footer__group-list-item"},fe=(0,i._)("img",{src:"images/icons/location-icon.svg",alt:""},null,-1),he=(0,i._)("div",{class:"footer__info"},null,-1);function ve(t,e,o,a,s,r){const l=(0,i.up)("icon-link");return(0,i.wg)(),(0,i.iD)("footer",Jt,[(0,i._)("div",Qt,[(0,i._)("div",te,[(0,i._)("div",ee,[oe,(0,i._)("div",ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.links,(t=>((0,i.wg)(),(0,i.j4)(l,{key:t.id,href:t.url,target:"_blank"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:t.image.meta.download_url,alt:t.image.title},null,8,ie)])),_:2},1032,["href"])))),128))])]),(0,i._)("div",se,[re,(0,i._)("div",ne,[(0,i._)("button",{class:"footer__group-list-item",name:"about-me",onClick:e[0]||(e[0]=(...e)=>t.Navigation&&t.Navigation(...e))},"Обо мне"),(0,i._)("button",{class:"footer__group-list-item",name:"skills",onClick:e[1]||(e[1]=(...e)=>t.Navigation&&t.Navigation(...e))},"Скиллы"),(0,i._)("button",{class:"footer__group-list-item",name:"portfolio",onClick:e[2]||(e[2]=(...e)=>t.Navigation&&t.Navigation(...e))},"Портфолио"),(0,i._)("button",{class:"footer__group-list-item",name:"services",onClick:e[3]||(e[3]=(...e)=>t.Navigation&&t.Navigation(...e))},"Тарифы")])]),(0,i._)("div",le,[ce,(0,i._)("div",_e,[(0,i._)("a",{href:"tel:"+r.formatPhoneNumber,class:"footer__group-list-item"},[pe,(0,i.Uk)(" "+(0,n.zw)(t.contacts_data.phone_number),1)],8,ue),(0,i._)("a",{href:"mailto:"+t.contacts_data.email,class:"footer__group-list-item"},[de,(0,i.Uk)(" "+(0,n.zw)(t.contacts_data.email),1)],8,me),(0,i._)("a",ge,[fe,(0,i.Uk)(" "+(0,n.zw)(t.contacts_data.location),1)])])])]),he])])}var be={methods:(0,r.nv)(["Navigation"]),computed:{...(0,r.Se)(["contacts_data","links"]),formatPhoneNumber(){return this.contacts_data.phone_number.replaceAll(" ","").replace("-","").replace("(","").replace(")","")}}};const ke=(0,_.Z)(be,[["render",ve]]);var we=ke;const ye={class:"skills",id:"skills"},Ue={class:"container"},Pe={class:"title"},Ce={class:"skills__grid"};function Se(t,e,o,a,s,r){const l=(0,i.up)("skill-item");return(0,i.wg)(),(0,i.iD)("div",ye,[(0,i._)("div",Ue,[(0,i._)("h2",Pe,(0,n.zw)(t.skills_section_data.title),1),(0,i._)("div",Ce,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.skills_section_data.skill_items,(t=>((0,i.wg)(),(0,i.j4)(l,{key:t.id,image:t.image.meta.download_url,name:t.name},null,8,["image","name"])))),128))])])])}const xe={class:"skills__item"},Te=["src","alt"];function De(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("div",xe,[(0,i._)("img",{src:o.image,alt:o.name},null,8,Te)])}var Ne={props:["image","name"]};const We=(0,_.Z)(Ne,[["render",De]]);var Ze=We,Me={components:{SkillItem:Ze},computed:(0,r.Se)(["skills_section_data"])};const Ie=(0,_.Z)(Me,[["render",Se]]);var Be=Ie;const ze={class:"about-me",id:"about-me"},He={class:"container"},Ve={class:"about-me__content"},Ke=(0,i._)("h3",{class:"about-me__title"},[(0,i._)("span",{class:"span_background"},"ПРИВЕТ"),(0,i.Uk)(" МЕНЯ ЗОВУТ НИК"),(0,i._)("br"),(0,i.Uk)(" Я FULL-STACK "),(0,i._)("span",{class:"span_blue"},"DEVELoPER")],-1),Ye={class:"about-me__photo-block"},Fe=(0,i._)("div",{class:"blue-circle"},null,-1),Oe=["src","alt"],je=["innerHTML"];function Ee(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("div",ze,[(0,i._)("div",He,[(0,i._)("div",Ve,[Ke,(0,i._)("div",Ye,[Fe,(0,i._)("img",{src:t.about_me_section_data.photo.url,alt:t.about_me_section_data.photo.alt},null,8,Oe)]),(0,i._)("p",{class:"about-me__description",innerHTML:t.$filters.linebreaksbr(t.about_me_section_data.subtitle)},null,8,je)])])])}var Le={computed:(0,r.Se)(["about_me_section_data"])};const Re=(0,_.Z)(Le,[["render",Ee]]);var $e=Re;const Ae={class:"offer"},Xe={class:"container"},qe={class:"offer__content"},Ge={class:"offer__examples"},Je={class:"offer__stars"},Qe={class:"offer__mockups"},to=["src","alt"],eo=["src","alt"],oo={class:"offer__suggestation-block"},ao={class:"offer__suggestations"};function io(t,e,o,a,s,r){const l=(0,i.up)("star-figure");return(0,i.wg)(),(0,i.iD)("div",Ae,[(0,i._)("div",Xe,[(0,i._)("div",qe,[(0,i._)("div",Ge,[(0,i._)("div",Je,[(0,i.Wm)(l,{class:"star-ui_blue"}),(0,i.Wm)(l,{class:"star-ui_blue"}),(0,i.Wm)(l,{class:"star-ui_grey"}),(0,i.Wm)(l,{class:"star-ui_grey"})]),(0,i._)("div",Qe,[(0,i._)("img",{class:"offer__phone-mockup",src:t.offer_section_data.phone_mockup.url,alt:t.offer_section_data.phone_mockup.alt},null,8,to),(0,i._)("img",{class:"offer__laptop-mockup",src:t.offer_section_data.laptop_mockup.url,alt:t.offer_section_data.laptop_mockup.alt},null,8,eo)])]),(0,i._)("div",oo,[(0,i._)("div",ao,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.offer_section_data.offer_items,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"offer__suggestations-item",key:t.id},[(0,i._)("h2",null,(0,n.zw)(t.title),1),(0,i._)("p",null,(0,n.zw)(t.offer_1),1),(0,i._)("p",null,(0,n.zw)(t.offer_2),1)])))),128))])])])])])}var so={computed:(0,r.Se)(["offer_section_data"])};const ro=(0,_.Z)(so,[["render",io]]);var no=ro;const lo={class:"welcome"},co={class:"container"},_o={class:"welcome__title"},uo=["innerHTML"];function po(t,e,o,a,s,r){const n=(0,i.up)("keyboard-key"),l=(0,i.up)("keyboard-keys");return(0,i.wg)(),(0,i.iD)("div",lo,[(0,i._)("div",co,[(0,i._)("h1",_o,[(0,i._)("span",null,[(0,i.Uk)("F"),(0,i.Wm)(n,{class:"keyboard-key_hover"},{default:(0,i.w5)((()=>[(0,i.Uk)("u")])),_:1}),(0,i.Uk)("LL - ST"),(0,i.Wm)(n,{class:"keyboard-key_hover"},{default:(0,i.w5)((()=>[(0,i.Uk)("A")])),_:1}),(0,i.Uk)("CK")]),(0,i._)("span",null,[(0,i.Uk)("WeB "),(0,i.Wm)(l,{letters:["⌘","C","V"]}),(0,i.Uk)(" DEVELOPER")])]),(0,i._)("p",{class:"welcome__addition-text",innerHTML:t.$filters.linebreaksbr(t.welcome_section_data.subtitle)},null,8,uo)])])}var mo={computed:(0,r.Se)(["welcome_section_data"])};const go=(0,_.Z)(mo,[["render",po]]);var fo=go,ho={components:{PopUp:S,BurgerMenu:L,ServicesSection:nt,ApplicationFormSection:kt,PortfolioSection:Yt,HeaderSection:Gt,FooterSection:we,SkillsSection:Be,AboutMeSection:$e,OfferSection:no,WelcomeSection:fo,SearchSlide:p},data(){return{welcome_section:{},offer_section:{},about_me_section:{},skills_section:{},portfolio_section:{},application_form_section:{},services_section:{}}},methods:(0,r.nv)(["getPageData"]),beforeMount(){this.getPageData()}};const vo=(0,_.Z)(ho,[["render",s]]);var bo=vo,ko={state:{burger_isShow:!1},getters:{getBurgerStatus(t){return t.burger_isShow}},mutations:{UpdateBurgerStatus(t,e){t.burger_isShow=e}},actions:{ChangeBurgerStatus(t,e){So.dispatch("switchScroll",e).then(),t.commit("UpdateBurgerStatus",e)}}},wo={state:{popUp_isShow:!1,type:"",message:"",image:{title:"",meta:{download_url:""}},scrollPosition:0},getters:{getPopUpStatus(t){return t.popUp_isShow},getPopUpType(t){return t.type},getPopUpMessage(t){return t.message},getPopUpImage(t){return t.image}},mutations:{UpdatePopUpStatus(t,e){t.popUp_isShow=e},UpdatePopUpType(t,e){t.type=e},UpdatePopUpMessage(t,e){t.message=e},UpdatePopUpImage(t,e){t.image=e}},actions:{ChangePopUpStatus(t,e){So.dispatch("switchScroll",e).then(),t.commit("UpdatePopUpStatus",e)},ChangePopUpType(t,e){t.commit("UpdatePopUpType",e)},ChangePopUpMessage(t,e){t.commit("UpdatePopUpMessage",e)},ChangePopUpImage(t,e){t.commit("UpdatePopUpImage",e)}}},yo=o(4161),Uo={state:{welcome_section:{subtitle:""},offer_section:{phone_mockup:{url:"",alt:""},laptop_mockup:{url:"",alt:""},offer_items:[{title:"",offer_1:"",offer_2:""}]},about_me_section:{subtitle:"",photo:{url:"",alt:""}},skills_section:{title:"",skill_items:[{image:{meta:{download_url:""}}}]},portfolio_section:{title:"",portfolio_items:[{description:"",url:"",logo:{title:"",meta:{download_url:""}},preview:{title:"",meta:{download_url:""}},full_image:{title:"",meta:{download_url:""}}}]},application_form_section:{title:"",subtitle:""},services_section:{title:"",services_items:[{title:"",price:"",simple_text:[{text:""}]}]},contacts:{phone_number:"",email:"",location:""},links:[{image:{meta:{download_url:""}},title:"",url:""}],header_link:{title:"",url:"",image:{url:"",alt:""}},isReadyPageData:!1},getters:{welcome_section_data(t){return t.welcome_section},offer_section_data(t){return t.offer_section},about_me_section_data(t){return t.about_me_section},skills_section_data(t){return t.skills_section},portfolio_section_data(t){return t.portfolio_section},application_form_section_data(t){return t.application_form_section},services_section_data(t){return t.services_section},contacts_data(t){return t.contacts},links(t){return t.links},header_link(t){return t.header_link},page_data_status(t){return t.isReadyPageData}},mutations:{UpdatePageData(t,e){t.welcome_section={subtitle:e.subtitle},t.offer_section={phone_mockup:{url:e.phone_mockup.meta.download_url,alt:e.phone_mockup.title},laptop_mockup:{url:e.laptop_mockup.meta.download_url,alt:e.laptop_mockup.title},offer_items:e.offer_items},t.about_me_section={subtitle:e.subtitle_about_me,photo:{url:e.photo_about_me.meta.download_url,alt:e.photo_about_me.title}},t.skills_section={title:e.title_skills,skill_items:e.skill_items},t.portfolio_section={title:e.title_portfolio,portfolio_items:e.portfolio_items},t.application_form_section={title:e.title_form,subtitle:e.subtitle_form},t.services_section={title:e.title_services,services_items:e.services_items},t.contacts={phone_number:e.phone_number,email:e.email,location:e.location},t.links=e.links,t.header_link={title:e.header_link_title,url:e.header_link_url,image:{url:e.header_link_image.meta.download_url,alt:e.header_link_image.title}},t.isReadyPageData=!0}},actions:{async getPageData(t){await yo.Z.get("/api/v1/pages/?type=home.HomePage&fields=*").then((e=>t.commit("UpdatePageData",e.data.items[0])))}}};yo.Z.defaults.xsrfHeaderName="X-CSRFToken",yo.Z.defaults.xsrfCookieName="csrftoken",yo.Z.defaults.withCredentials=!0;var Po={state:{},getters:{},mutations:{},actions:{async SendForm(t,e){await yo.Z.post("/api/v1/application-form/",{name:e.name,mail:e.mail,message:e.message},{headers:{"Content-Type":"multipart/form-data"}}).then()}}},Co={state:{scrollPosition:0},getters:{getScrollPosition(t){return t.scrollPosition}},mutations:{UpdateScrollMode(t,e){e?(t.scrollPosition=window.scrollY,document.body.style.cssText=`\n                    overflow: hidden;\n                    position: fixed;\n                    top: -${t.scrollPosition}px;\n                    left: 0;\n                    height: 100vh;\n                    width: 100vw;\n                `):(document.body.style.cssText="",window.scroll({top:t.scrollPosition}),t.scrollPosition=0)}},actions:{switchScroll(t,e){t.commit("UpdateScrollMode",e)}}},So=(0,r.MT)({state:{},getters:{},mutations:{},actions:{Navigation(t,e){document.body.style.cssText="";const o=document.getElementById(e.target.name);window.scrollBy({top:o.getBoundingClientRect().top-40,behavior:"smooth"})}},modules:{burger:ko,page_data:Uo,application_form:Po,popUp:wo,scrollController:Co}});const xo={class:"button-type-1"};function To(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("button",xo,[(0,i.WI)(t.$slots,"default")])}var Do={name:"button-type-1"};const No=(0,_.Z)(Do,[["render",To]]);var Wo=No;const Zo={class:"button-type-1"};function Mo(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("a",Zo,[(0,i.WI)(t.$slots,"default")])}var Io={name:"button-a"};const Bo=(0,_.Z)(Io,[["render",Mo]]);var zo=Bo;const Ho=["value"];function Vo(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("input",{class:"input-type-1",value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t))},null,40,Ho)}var Ko={name:"input-type-1",props:["modelValue"],methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const Yo=(0,_.Z)(Ko,[["render",Vo]]);var Fo=Yo;const Oo=["value"];function jo(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("textarea",{class:"textarea-type-1",value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t))},null,40,Oo)}var Eo={name:"textarea-type-1",props:["modelValue"],methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const Lo=(0,_.Z)(Eo,[["render",jo]]);var Ro=Lo;const $o={class:"keyboard-key"},Ao={class:"keyboard-key__border"},Xo={class:"keyboard-key__content"};function qo(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("div",$o,[(0,i._)("div",Ao,[(0,i._)("div",Xo,[(0,i.WI)(t.$slots,"default")])])])}var Go={name:"keyboard-key"};const Jo=(0,_.Z)(Go,[["render",qo]]);var Qo=Jo;function ta(t,e,o,a,s,r){const l=(0,i.up)("keyboard-key");return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.C_)(["keyboard-keys",{"keyboard-keys_pressed":s.isKeyboardPressed}]),onMouseover:e[0]||(e[0]=t=>s.animation=!0),onMouseleave:e[1]||(e[1]=t=>s.animation=!1)},[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(s.first_letter),1)])),_:1}),(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(s.second_letter),1)])),_:1})],34)}var ea={name:"keyboard-keys",props:["letters"],data(){return{first_letter:this.letters[0],second_letter:this.letters[1],animation:!1,isKeyboardPressed:!1}},methods:{sleep(t){return new Promise((e=>setTimeout(e,t)))}},watch:{async animation(){!0===this.animation&&(this.isKeyboardPressed=!0,await this.sleep(400),this.isKeyboardPressed=!1,this.second_letter=this.letters[2],await this.sleep(400),this.isKeyboardPressed=!0,await this.sleep(400),this.isKeyboardPressed=!1,this.second_letter=this.letters[1])}}};const oa=(0,_.Z)(ea,[["render",ta]]);var aa=oa;const ia={class:"star-ui",viewBox:"0 0 205 205",fill:"none",xmlns:"http://www.w3.org/2000/svg"},sa=(0,i._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M102.5 205C102.295 148.46 56.4831 102.69 4.37347e-08 102.69C56.6091 102.69 102.5 56.7135 102.5 -4.36538e-08C102.704 56.5396 148.517 102.31 205 102.31C148.39 102.31 102.5 148.286 102.5 205Z"},null,-1),ra=[sa];function na(t,e,o,a,s,r){return(0,i.wg)(),(0,i.iD)("svg",ia,ra)}var la={name:"star-figure"};const ca=(0,_.Z)(la,[["render",na]]);var _a=ca,ua=[Wo,zo,Fo,Ro,O,Qo,aa,_a],pa=o(1980),ma=o(5073);pa.p8.registerPlugin(ma.i);let da=So.getters.page_data_status;function ga(t){return new Promise((e=>setTimeout(e,t)))}async function fa(){while(!1===da)da=So.getters.page_data_status,await ga(100);return 0}fa().then((()=>{let t=pa.p8.matchMedia();t.add("(min-width: 1001px)",(()=>{pa.p8.from(".offer__suggestation-block",{translateX:"-100%",duration:.5,scrollTrigger:{trigger:".offer__suggestation-block",start:"bottom bottom"}}),pa.p8.from(".offer__suggestations",{translateX:"100%",duration:.5,delay:.5,scrollTrigger:{trigger:".offer__suggestation-block",start:"bottom bottom"}})})),t.add("(min-width: 761px)",(()=>{pa.p8.from(".about-me__title",{translateX:"-100%",duration:.7,opacity:0,scrollTrigger:{trigger:".about-me__content",start:"bottom bottom"}}),pa.p8.from(".about-me__description",{translateX:"-100%",duration:.7,opacity:0,scrollTrigger:{trigger:".about-me__content",start:"bottom bottom"}}),pa.p8.from(".about-me__photo-block",{translateX:"100%",duration:.7,opacity:0,scrollTrigger:{trigger:".about-me__content",start:"bottom bottom"}})})),t.add("(max-width: 1000px)",(()=>{pa.p8.from(".offer__suggestation-block",{translateY:"-100%",opacity:0,duration:.5,scrollTrigger:{trigger:".offer__suggestation-block",start:"bottom+=250px bottom"}})})),t.add("(max-width: 760px)",(()=>{pa.p8.from(".about-me__content",{translateY:"30%",duration:.7,opacity:0,scrollTrigger:{trigger:".about-me",start:"top+=250px bottom"}})})),pa.p8.from(".skills .title",{translateY:"50%",duration:.5,opacity:0,scrollTrigger:{trigger:".skills",start:"center bottom"}}),pa.p8.from(".skills__grid",{translateY:"50%",duration:.5,opacity:0,scrollTrigger:{trigger:".skills",start:"center bottom"}}),pa.p8.from(".portfolio .title",{translateY:"100%",duration:.8,opacity:0,scrollTrigger:{trigger:".portfolio",start:"top+=200px bottom"}}),pa.p8.from(".portfolio__item",{translateY:"100%",duration:.8,opacity:0,stagger:.3,scrollTrigger:{trigger:".portfolio",start:"top+=200px bottom"}})}));const ha=(0,a.ri)(bo);ua.forEach((t=>{ha.component(t.name,t)})),ha.config.globalProperties.$filters={linebreaksbr(t){return t.replace(/\n/g,"<br/>")}},ha.use(So).mount("#wrapper")}},e={};function o(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,a,i,s){if(!a){var r=1/0;for(_=0;_<t.length;_++){a=t[_][0],i=t[_][1],s=t[_][2];for(var n=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(n=!1,s<r&&(r=s));if(n){t.splice(_--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var _=t.length;_>0&&t[_-1][2]>s;_--)t[_]=t[_-1];t[_]=[a,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,r=a[0],n=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in n)o.o(n,i)&&(o.m[i]=n[i]);if(l)var _=l(o)}for(e&&e(a);c<r.length;c++)s=r[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(_)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(2698)}));a=o.O(a)})();
//# sourceMappingURL=app.e3d9875b.js.map