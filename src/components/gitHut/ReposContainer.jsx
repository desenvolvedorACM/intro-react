import React, { Component } from "react"
import { fetchRepos } from "../../service/repos-api"
import ReposList from './ReposList'

//StateFullComponent
class ReposContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      username: ''
    }

    this.handleChance = this.handleChance.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //
  
  handleChance(ev){
    console.log(ev.target.value)
    //debugger
    this.setState({username: ev.target.value});
  }

  handleSubmit(ev){
    ev.preventDefault()

    fetchRepos(this.state.username)
    .then(resp => {
       console.log(`Dados: ${resp.data}`);
       this.setState({repos: resp.data});

    }).catch(erro => {
        console.log(`Erro: ${erro}`);
    });
  }


  //è executada quando o componente é montado e executado.
  /*componentDidMount() {

    fetchRepos("desenvolvedorACM")
        .then(resp => {
           console.log(`Dados: ${resp.data}`);
           this.setState({repos: resp.data});

        }).catch(erro => {
            console.log(`Erro: ${erro}`);
        });
  }*/

  render() {
    return (
        <div>
            <h1 style={{ background: '#cdcdcd', textAlign: 'center', padding: '10px' }}>Lista de repositórios</h1>
            <form action="#" onSubmit={this.handleSubmit}>
                <input style={{ width: '250px', padding: '10px', border: '2px solid #808080'}}
                 onChange={ this.handleChance }
                 type="text" 
                 placeholder="informe o seu parametro" />
            </form>

            <ReposList repos={this.state.repos}></ReposList>
        </div>
    )
  }
}

export default ReposContainer;
