import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {text: '', data: []}

  onText = event => {
    this.setState({text: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {text, data} = this.state
    console.log(text)
    const newText = {id: uuidv4(), t: text, l: text.length}
    this.setState(prevState => ({data: [...prevState.data, newText], text: ''}))
  }

  render() {
    const {text, data} = this.state

    return (
      <div className="mainContainer">
        <div className="FPart">
          <h1>
            Count the characters like a <br /> Boss...
          </h1>
          <div className="resultSection">
            {data.length > 0 ? (
              <ul>
                {data.map(e => (
                  <li key={e.id}>
                    <p className="addedText">
                      {e.t} : {e.l}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                className="noImgView"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="SPart">
          <h1 className="Title">Character Counter</h1>
          <form className="inputBar" onSubmit={this.onAdd}>
            <input
              className="chInput"
              type="text"
              placeholder="Enter the Characters here"
              value={text}
              onChange={this.onText}
            />
            <button type="submit" className="addBtn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
