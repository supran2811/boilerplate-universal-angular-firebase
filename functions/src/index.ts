import * as functions from 'firebase-functions';
import * as angularUniversal from './expressFirebase';


export let ssrApp = angularUniversal.trigger({
    index: __dirname + '/index-server.html',
    main: __dirname + '/main',
    enableProdMode: true,
    cdnCacheExpiry: 600,
    browserCacheExpiry: 300,
    staleWhileRevalidate: 120
});
