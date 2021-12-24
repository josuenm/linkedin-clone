import { useState } from "react"
import { Container, RegisterContainer } from "./styles"
import { auth } from "../../firebase"

import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";
import { Head } from "../Head";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice"

export function Register() {

    // Email Regex
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // Password Regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')

    const [isReveal, setIsReveal] = useState(false)
    const [passwordStatus, setPasswordStatus] = useState('Exibir')
    const [passwordType, setPasswordType] = useState('password')

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false
    })

    // Reveal password
    function actionPassword() {
        if(isReveal) {
            setIsReveal(false)
            setPasswordStatus('Exibir')
            setPasswordType('password')
        } else {
            setIsReveal(true)
            setPasswordStatus('Ocultar')
            setPasswordType('text')
        }
    }

    function register(e) {
        e.preventDefault()

        // Check if everything is ok
        fullName === '' && setErrors(prev => ({...prev, name: true}))
        !emailRegex.test(String(email).toLowerCase()) && setErrors(prev => ({...prev, email: true}))
        !passwordRegex.test(String(password)) && setErrors(prev => ({...prev, password: true}))

        if(fullName !== '' && email !== '' && password !== '') {
            if(errors.name === false && errors.email === false && errors.password === false) {
                // Everything is ok
    
                setErrors({
                    name: false,
                    email: false,
                    password: false
                })
    
                auth.createUserWithEmailAndPassword(String(email).toLocaleLowerCase(), String(password)).then((userAuth) => {
                    userAuth.user.updateProfile({
                        displayName: fullName,
                        photoUrl: profileUrl,
                    }).then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: fullName,
                                photoUrl: profileUrl,
                                isLogged: true
                            })
                        )
                    })
                }).catch((error) => {
                    error.code === 'auth/email-already-in-use' && (
                        setErrors(prev => ({...prev, exists: true}))
                    )
                })
            }
        }
    }

    return(
        <Container>
            <Head 
                title="Cadastre-se | LinkedIn" 
                description="Mais de 500 milhões de usuários | Gerencie sua identidade profissional. Crie e interaja com sua rede profissional. Obtenha acesso a informações, conhecimento e oportunidades."
            />

            <header>
                <p className="register__headerLogo">
                    Linked<span>in</span> clone
                </p>

                <h2 className="register__headerHeadline">Aproveite sua vida profissional ao máximo</h2>
                <div className="register__mobile__headerHeadline">
                    <h2>
                        Cadastre-se já no LinkedIn <div className="line__divisor"></div> é grátis!
                    </h2>
                </div>
            </header>

            <main>
                <RegisterContainer>
                    <form action="" method="" onSubmit={register}>
                        <div className="register__input">
                            <label htmlFor="fullName">Nome completo</label>
                            <input 
                            type="text" 
                            name="fullName" 
                            value={fullName} 
                            onChange={({target}) => setFullName(target.value)} 
                            className={errors.name ? 'inputError' : ''}
                            />
                            <p className="register__inputError register__inputErrorName">
                                {errors.name && 'Insira seu nome completo.'}
                            </p>
                        </div>

                        <div className="register__input">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            className={errors.email || errors.exists ? 'inputError' : ''}
                            onChange={({target}) => setEmail(target.value)} />
                            <p className="register__inputError register__inputErrorEmail">
                                {errors.email && 'Insira um e-mail válido.'}
                                {errors.exists && 'Este email já esta em uso!'}
                            </p>
                        </div>

                        <div className="register__input">
                            <label htmlFor="profileUrl">URL da foto de perfil (opcional)</label>
                            <input 
                            type="text" 
                            name="profileUrl" 
                            value={profileUrl} 
                            onChange={({target}) => setProfileUrl(target.value)} />
                        </div>

                        <div className="register__input">
                            <div className="register__inputPassword">
                                <label htmlFor="password">Senha (6 ou mais caracteres)</label>
                                <input 
                                type={passwordType} 
                                name="password" 
                                value={password}
                                onChange={({target}) => setPassword(target.value)}
                                />
                                <div  className="register__inputPassword__reveal" onClick={actionPassword}>
                                    <span>{passwordStatus}</span>
                                </div>
                            </div>
                            <p className="register__inputError register__inputErrorPassoword">
                                {errors.password && 'Insira uma senha válida.'}
                            </p>
                        </div>

                        <div className="register__disclaimer">
                            <p>
                                Ao clicar em Aceite e cadastre-se, você aceita o <span>Contrato do Usuário</span>, a <span>Política de Privacidade</span> e a <span>Política de Cookies</span> do LinkedIn Clone.
                            </p>
                        </div>

                        <input 
                        type="submit" 
                        value="Aceite e cadastre-se" 
                        className="register__submit" />

                        <input 
                        type="submit" 
                        value="Continuar" 
                        className="register__mobile__submit register__submit" />

                    </form>

                    <div className="register__divider">
                        <span>ou</span>
                    </div>

                    <div className="register__otherSignUps">
                        <button>
                            <GoogleIcon className="register__otherSignUpsIcon" />
                            Cadastre-se com Google
                        </button>
                    </div>

                    <p className="register__login">
                        Já se cadastrou no LinkedIn? <Link to="/login">Entre</Link>
                    </p>
                </RegisterContainer>
                
                <p className="register__footer">
                    Você quer criar uma página para uma empresa? <span>Obter ajuda</span>
                </p>

            </main>
        </Container>
    )
}