import React from 'react';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';

const Artists = (props) => {
  
  return (
    <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          this.props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                <Link to={/**tbd!**/}>{ artist.name }</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Artists;
