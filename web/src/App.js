import React from 'react';
import './global.css';
import './SideBar.css';
import './Main.css';

export default class App extends React.Component {

    render() {
        return (
            <div id="app">

                <aside>
                    <strong>Cadastrar</strong>
                    <form>
                        <div class="input-block">
                            <label htmlFor={"github_username"}>Usuário do Git Hub</label>
                            <input name={"github_username"} id={"github_username"} required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor={"techs"}>Tecnologias</label>
                            <input name={"techs"} id={"techs"} required/>
                        </div>
                        <div className="input-group">
                            <div class="input-block">
                                <label htmlFor={"latitude"}>Latitude</label>
                                <input name={"latitude"} id={"latitude"} required/>
                            </div>
                            <div className="input-block">
                                <label htmlFor={"logitude"}>Longitude</label>
                                <input name={"logitude"} id={"logitude"} required/>
                            </div>
                        </div>
                        <button type={"submit"}>Salvar</button>
                    </form>
                </aside>


                <main>
                    <ul>
                        <li className={"dev-item"}>
                            <header>
                                <img src={"https://avatars0.githubusercontent.com/u/27587399?s=460&v=4"}
                                     alt={"Jefferson Martins"}/>
                                <div className={"user-info"}>
                                    <strong>Jefferson Martins</strong>
                                    <span>ReactJs, React Native, NodeJ</span>
                                </div>
                            </header>
                            <p>
                                Melhora dev do últimos anos, um gênio.
                            </p>
                            <a href={"https://github.com/JeffeMartins"}>Acessar perfil no Github</a>
                        </li>
                        <li className={"dev-item"}>
                            <header>
                                <img src={"https://avatars0.githubusercontent.com/u/27587399?s=460&v=4"}
                                     alt={"Jefferson Martins"}/>
                                <div className={"user-info"}>
                                    <strong>Jefferson Martins</strong>
                                    <span>ReactJs, React Native, NodeJ</span>
                                </div>
                            </header>
                            <p>
                                Melhora dev do últimos anos, um gênio.
                            </p>
                            <a href={"https://github.com/JeffeMartins"}>Acessar perfil no Github</a>
                        </li>
                        <li className={"dev-item"}>
                            <header>
                                <img src={"https://avatars0.githubusercontent.com/u/27587399?s=460&v=4"}
                                     alt={"Jefferson Martins"}/>
                                <div className={"user-info"}>
                                    <strong>Jefferson Martins</strong>
                                    <span>ReactJs, React Native, NodeJ</span>
                                </div>
                            </header>
                            <p>
                                Melhora dev do últimos anos, um gênio.
                            </p>
                            <a href={"https://github.com/JeffeMartins"}>Acessar perfil no Github</a>
                        </li>
                        <li className={"dev-item"}>
                            <header>
                                <img src={"https://avatars0.githubusercontent.com/u/27587399?s=460&v=4"}
                                     alt={"Jefferson Martins"}/>
                                <div className={"user-info"}>
                                    <strong>Jefferson Martins</strong>
                                    <span>ReactJs, React Native, NodeJ</span>
                                </div>
                            </header>
                            <p>
                                Melhora dev do últimos anos, um gênio.
                            </p>
                            <a href={"https://github.com/JeffeMartins"}>Acessar perfil no Github</a>
                        </li>

                    </ul>
                </main>
            </div>
        );
    }
}

