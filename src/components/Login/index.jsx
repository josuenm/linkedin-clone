import { Container, LoginContainer } from "./styles"
import { Head } from "../Head"

import MailIcon from '@mui/icons-material/Mail';
import AppleIcon from '@mui/icons-material/Apple';
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase"

export function Login() {

    const [isReveal, setIsReveal] = useState(false)
    const [passwordStatus, setPasswordStatus] = useState('exibir')
    const [passwordType, setPasswordType] = useState('password')

    function actionPassword() {
        if(isReveal) {
            setIsReveal(false)
            setPasswordStatus('exibir')
            setPasswordType('password')
        } else {
            setIsReveal(true)
            setPasswordStatus('ocultar')
            setPasswordType('text')
        }
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    function login(e) {
        e.preventDefault()

        auth.signInWithEmailAndPassword(String(email).toLocaleLowerCase(), String(password))
        .catch(errors => {
            switch(errors.code) {
                case 'auth/wrong-password':
                    setError('Email ou senha incorreto')
                    break;

                case 'auth/invalid-email':
                    setError('Email ou senha inválido')
                    break;
                
                case 'auth/user-not-found':
                    setError('Usuário não existe')
                    break;
                
                default:
                    break;
            }
        })
    }


    return (
        <Container>
            <Head 
            title="Entrar ou cadastrar-se no LinkedIn | LinkedIn" 
            description="Entre no LinkedIn para manter contato, compartilhar ideias e desenvolver sua carreira."
            />

            
            <header>
                <p>
                    Linked<span>in</span> clone
                </p>
            </header>
            
            <main>
                <LoginContainer>
                    <div className="login__header">
                        <h2>Entrar</h2>
                        <p>Acompanhe as novidades do seu mundo profissional</p>
                    </div>

                    <div className="login__body">
                        <form onSubmit={login}>
                            <div className="login__bodyInput">
                                <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                className={email !== '' ? 'inputFocus' : ''}
                                onChange={({target}) => setEmail(target.value)}
                                />
                                <label htmlFor="email">
                                    <span>E-mail</span>
                                </label>
                            </div>

                            <div className="login__bodyInput">
                                <input 
                                type={passwordType} 
                                name="password" 
                                value={password}
                                className={password !== '' ? 'inputFocus' : ''}
                                onChange={({target}) => setPassword(target.value)}
                                />
                                <label htmlFor="password">
                                    <span>Senha</span>
                                </label>

                                <div className="login__bodyPasswordReveal">
                                    <span onClick={actionPassword}>{passwordStatus}</span>
                                </div>
                            </div>

                            <p className="error">{error}</p>

                            <button className="login__bodyForgotPassword">Esqueceu a senha</button>

                            <input type="submit" value="Entrar" className="login__bodySubmit" />
                        </form>

                        <div className="login__bodyDivider">
                            <span>ou</span>
                        </div>

                        <div className="login__otherLogins">
                            <button>
                                <MailIcon className="login__otherLoginsIcon mailIcon" />
                                Entrar com SSO
                            </button>

                            <button>
                                <AppleIcon className="login__otherLoginsIcon appleIcon" />
                                Entrar com a Apple
                            </button>
                        </div>
                    </div>
                </LoginContainer>

                <p className="register">
                    Novo no LinkedIn? <Link to="/register" >Cadastrar-se</Link>
                </p>
            </main>
        </Container>
    )
}