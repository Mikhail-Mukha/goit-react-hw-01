import React from 'react'
import Profile from './components/Profile/Profile'

const App = ({name,}) => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
    );
  };

export default App