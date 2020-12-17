import {Router} from '@vaadin/router';
import "./main-component.js";
import "./article-destination.js";
import "./destinationMain.js";
import "./destination-page.js";
import "./main-wrapper.js";

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
    {
        path: '/', component: 'main-wrapper',
        children: [
            {path: '/', component: 'main-component'},
            {path: '/destinations', component: 'article-destination'},
            {path: '/destinations/:id', component: 'destination-page'}
        ]
    },

]);
