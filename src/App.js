import React from "react";


const App = () => {
  const profiles = [
    {name:"Taro", age: 10},
    {name:"Hanako"},
    {age: 90}
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

User.defaultProps = {
  name: "Noname",
  age: "-"
}

export default App;
 