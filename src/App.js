import React, { Component } from 'react'
import contacts from './contacts.json'

const fiveContact = contacts.slice(0,5)


export class App extends Component {
  state = {
    contacts : fiveContact
  }

 addRandom = () => {
   const stateCopy = [ ...this.state.contacts]
   stateCopy.push(contacts[Math.floor(Math.random() * contacts.length)])

   this.setState({
     contacts: stateCopy
   })
 }

 sortByName = () => {
   const stateCopy = [ ...this.state.contacts]
   stateCopy.sort((a,b) => a.name.localeCompare(b.name))

   this.setState({
     contacts: stateCopy
   })
 }



  render() {
    return (
      <div className='App'>
        <button onClick={this.addRandom} >Add a random contact</button>
        <button onClick={this.sortByName} >Sort contacts by name</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map(celebrity => {
              return (
                <tr>
                 
                 <td><img src={celebrity.pictureUrl}></img></td>
                  <td>{celebrity.name}</td>
                  <td>{celebrity.popularity}</td>
                  
               </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
