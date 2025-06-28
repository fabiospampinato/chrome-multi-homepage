
/* MAIN */

const options = (): void => {

  const textarea = document.querySelector ( 'textarea' );

  if ( !textarea ) return;

  /* CHROME -> TEXTAREA */

  const updateTextarea = ( urls: string ): void => {
    if ( !urls ) return;
    textarea.value = urls;
  };

  chrome.storage.sync.get ( 'urls', ({ urls }) => {
    updateTextarea ( urls );
  });

  /* TEXTAREA -> CHROME */

  const updateChrome = (): void => {
    const urls = textarea.value;
    chrome.storage.sync.set ({ urls });
  };

  textarea.addEventListener ( 'change', updateChrome );
  textarea.addEventListener ( 'input', updateChrome );

};

/* INIT */

options ();
