
/* MAIN */

const worker = (): void => {

  const openUrls = (): void => {
    chrome.storage.sync.get ( 'urls', ({ urls }) => {
      if ( !urls ) return;
      String ( urls )
        .split ( /\r?\n|\r/g )
        .filter ( url => !url.startsWith ( '#' ) )
        .filter ( url => url.trim ().length )
        .map ( url => url.includes ( '://' ) ? url : `https://${url}` )
        .forEach ( url => chrome.tabs.create ({ url }) );
    });
  };

  chrome.action.onClicked.addListener ( openUrls );

};

/* INIT */

worker ();
