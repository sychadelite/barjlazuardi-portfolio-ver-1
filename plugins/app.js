import Vue from 'vue'

// import VueTypedJs from 'vue-typed-js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faTwitter, faGithub, faLinkedin, faInstagram, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import { faUserSecret, faFileArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default () => {
    // https://github.com/Orlandster/vue-typed-js
    // Vue.use(VueTypedJs)

    /* add icons to the library */
    library.add(faTwitter, faGithub, faLinkedin, faInstagram, faFacebook, faDiscord, faArrowAltCircleDown, faUserSecret, faFileArrowDown, faArrowUp)
    /* add font awesome icon component */
    Vue.component('FontAwesomeIcon', FontAwesomeIcon)

    Vue.config.productionTip = false
}