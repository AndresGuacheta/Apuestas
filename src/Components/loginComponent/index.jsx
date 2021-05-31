import React, { Component } from "react";
import "./stylelogin.css";

class loginComponent extends Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    add=() => {
        this.myRef.current.classList.add("right-panel-active");
    }
    remove=() =>{
        this.myRef.current.classList.remove("right-panel-active");
    }
    render() {
        return (
            <div>
             <div className="container" id="container" ref={this.myRef}>
                <div className="form-container sign-up-container" >
                    <form action="#">
                        <h1>Crear cuenta</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>o usa tu email para registrarte</span>
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Contraseña" />
                        <button >Registrarse</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Iniciar sesión</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>o usa tu cuenta</span>
                        <input type="email" placeholder="Correo" />
                        <input type="password" placeholder="Contraseña" />
                        <a href="#">Olvidaste tu Contraseña?</a>
                        <button>Iniciar Sesión</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Registrate</h1>
                            <p>Ingresa tus datos personales y comienza la aventura</p>
                            <button className="ghost" id="signUp" onClick={this.add}>Registrate</button>
                        </div>
                        <div class="overlay-panel overlay-left">
                            <h2>¿Ya tienes cuenta?</h2>
                            <p>Si ya tienes cuenta, inicia sesion¡</p>
                            <button class="ghost" id="signIn" onClick={this.remove}>Iniciar sesion</button>
			            </div>
                    </div>
                </div>
            </div>

            </div>
            );
    }
}
export default loginComponent;