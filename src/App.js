import React from 'react';
import { StreamApp, StatusUpdateForm, FlatFeed, NotificationDropdown, Activity, LikeButton, CommentField, CommentList  } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import Divider from '@material-ui/core/Divider';
import Layout from './layouts/layout';
class App extends React.Component {
  render() {
    return(
      <Layout>
      <StreamApp
            apiKey="apikey"
            appId="api_id"
            token="token"
      >
         <FlatFeed
         style={{fontFamily: 'serif',  color: '#141823',fontSize: '19px',}}
         feedGroup="timeline"
          notify
          Activity={(props) =>
            <Activity {...props}
              Footer={() => (
                <div style={ {padding: '8px 16px'} }>
                  <LikeButton {...props} />
                </div>
              )}
            />
          }
       
          />
           <Divider />
      </StreamApp>
      </Layout>
    );
  }
}

export default App;
