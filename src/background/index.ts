
/* IMPORT */

import '../../resources/icon/icon-16.png';
import '../../resources/icon/icon-32.png';
import '../../resources/icon/icon-48.png';
import '../../resources/icon/icon-64.png';
import '../../resources/icon/icon-128.png';
import '../../resources/icon/icon-256.png';
import './hot_reload';
import * as _ from 'lodash';

/* OPEN TABS */

async function openTabs () {

  chrome.storage.sync.get ( 'urls', ({ urls }) => {

    let toOpen = ['options.html'];

    if ( urls && urls.length ) {

      urls = urls.split ( '\n' )
                 .filter ( _.identity )
                 .map ( url => url.includes ( '://' ) ? url : `http://${url}` );

      if ( urls.length ) toOpen = urls;

    }

    toOpen.forEach ( url => chrome.tabs.create ({ url }) );

  });

}

chrome.browserAction.onClicked.addListener ( openTabs );
