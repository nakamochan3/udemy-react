import React from "react";
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name:"Taro", age: 10 },
    { name:"Hanalo", age: 5 },
    { name: "NoName" }
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age = {profile.age} key={index}/>
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi , I am a {props.name}!And I am {props.age} years ols</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
 