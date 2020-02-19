import React from 'react';
import './global.css';

export default class App extends React.Component {

    render() {
        return (
            <div id="app">

                <aside>

                    <strong>Cadastrar</strong>
                    <form>
                        <label htmlFor={github_username}>Usuário do Git Hub</label>
                        <input name={github_username} id={github_username} required/>

                        <label htmlFor={techs}>Tecnologias</label>
                        <input name={techs} id={techs} required/>

                        <label htmlFor={github_username}>Usuário do Git Hub</label>
                        <input name={github_username} id={github_username} required/>
                    </form>
                </aside>
                <main>

                </main>
            </div>
        );
    }
}

