import React, {Component} from 'react'

class App extends Component {
state = {
  nome: "Hellen",
  idade: 23,
  comidaFavorita: "Sushi",
  musicasFavoritas: [
    "Azul sem Fim", "Devil in a New Dress", "Pour it Up"
  ]

}

  render(){
    return(
      <main>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>

        <ul>
          <li>{this.state.musicasFavoritas[0]}</li>
          <li>{this.state.musicasFavoritas[1]}</li>
          <li>{this.state.musicasFavoritas[2]}</li>
        </ul>
      </main>
    )
  }
}

export default App