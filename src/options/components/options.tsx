
/* IMPORT */

import * as _ from 'lodash';
import * as React from "react";

/* OPTIONS */

class Options extends React.Component {

  _change; _save; _textarea;

  constructor ( props ) {

    super ( props );

    this._change = this.change.bind ( this );
    this._save = _.debounce ( this.save.bind ( this ), 150 );

  }

  componentDidMount () {

    chrome.storage.sync.get ( 'urls', ({ urls }) => {
      if ( !urls ) return;
      this._textarea.value = urls;
    });

  }

  change ( event ) {

    this._save ( event.target.value );

  }

  save ( urls ) {

    chrome.storage.sync.set ({ urls });

  }

  render () {

    return (
      <div id="options">
        <h1>Multi Homepage</h1>
        <p>List below all the urls you want to open when clicking the extension icon. One url per row.</p>
        <textarea placeholder="List of urls..." ref={x => this._textarea = x} onChange={this._change}></textarea>
      </div>
    );

  }

}

/* EXPORT */

export default Options;
