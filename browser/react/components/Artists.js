import React from 'react';
import {Link} from 'react-router';

import AppContainer from '../containers/AppContainer';

const Artists = (props) => {

  return (
    <div>
      <h3>Artists</h3>
        <div className="list-group">
        {
          props.artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Artists;
