import styled from "styled-components"

export const Container = styled.section`
    header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 5rem;
        padding: 0 3.5rem;

        @media (max-width: 575.98px) {
            padding: 0 2rem;
        }

        p {
            font-size: 1.75rem;
            font-weight: bold;
            color: var(--blue-active);
            margin: 0;
            cursor: pointer;
            
            span {
                font-size: 1.4rem;
                color: #fff;
                background: var(--blue-active);
                border-radius: .15rem;
                padding: 0 .2rem;
                margin-left: 3px;
            }
        }
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .register {
            margin-top: 2rem;

            a {
                margin-top: .5rem;
                font-size: 1rem;
                font-weight: 600;
                color: var(--blue-active);
                padding: .3rem .5rem;
                border-radius: 3rem;
                cursor: pointer;

                transition: background .2s;
                &:hover {
                    background: var(--blue-50);
                    text-decoration: underline;
                }
            }
        }
    }
`

export const LoginContainer = styled.div`
    width: 352px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);;
    padding: 24px 24px 12px 24px;
    border-radius: .5rem;

    @media (max-width: 991.98px) {
        box-shadow: none;
        padding: 0;
    }

    .login__header {
        h2 {
            margin: 0;
            font-size: 2rem;
            font-weight: 600;
        }

        p {
            width: 90%;
            margin: 0;
            font-size: .9rem;
        }
    }

    .login__body {
        margin: .5rem 0;

        .error {
            color: red;
            margin: 0;
            margin-left: .5rem;
        }

        .login__bodyInput {

            & + .login__bodyInput {
                margin-top: 1rem;
                margin-bottom: .5rem;
            }

            position: relative;
            width: 100%;
            height: 3.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: text;
            
            &:hover {
                border-color: #000;
            }

            input {
                padding: 1rem 0 0 1rem;
                width: inherit;
                height: inherit;
                border: 1px solid var(--black-a60);
                border-radius: .25rem;
                outline: none;
                font-size: 1.1rem;

                &:focus {
                    border: 2px solid var(--blue-active);
                }
            }

            label {
                position: absolute;
                width: inherit;
                height: inherit;
                pointer-events: none;
                
                span {
                    position: absolute;
                    top: 50%;
                    left: 1rem;
                    transform: translateY(-50%);
                    transition: all .2s ease;
                    font-size: 1.2rem;
                    color: var(--black-a60);
                }
            }
            
            input:focus + label span, 
            input:invalid + label span,
            input.inputFocus + label span {
                transform: translateY(-120%);
                font-size: .9rem;
                color: var(--black-a90);
            }

            .login__bodyPasswordReveal {
                position: absolute;
                top: 50%;
                right: 8px;
                transform: translateY(-50%);
                background: #fff;
                padding: 5px 0;

                span {
                    color: var(--blue-active);
                    padding: 0 7px 3px 7px;
                    border-radius: 3rem;
                    font-weight: 600;
                    cursor: pointer;

                    transition: background .2s;
                    &:hover {
                        background: var(--blue-50);
                    }
                }
            }
        }

        .login__bodyForgotPassword {
            background: none;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            color: var(--blue-active);
            padding: .5rem;
            border-radius: 3rem;

            transition: background .2s;
            &:hover {
                background: var(--blue-50);
                text-decoration: underline;
            }
        }

        .login__bodySubmit {
            display: block;
            width: 100%;
            border-radius: 3rem;
            font-size: 1rem;
            font-weight: 600;
            margin-top: 1rem;
            padding: 1rem 2rem;
            background: var(--blue-active);
            border: none;
            color: #fff;

            transition: background .2s;
            &:hover {
                background: var(--blue-a80);
            }
        }

        .login__bodyDivider {
            position: relative;
            width: 100%;
            margin: 1rem auto;
            text-align: center;
            color: var(--black-a60);

            &:before {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                width: 40%;
                height: .3px;
                background: gray;
                opacity: .3;
            }

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                width: 40%;
                height: .3px;
                background: gray;
                opacity: .3;
            }
        }

        .login__otherLogins {
            display: flex;
            flex-direction: column;
            
            button {
                color: var(--black-a60);
                background: none;
                font-weight: 600;
                font-size: 1rem;
                padding: 1rem 2rem;

                border-radius: 3rem;
                border: 1px solid var(--black-a60);

                transition: all 0.1s;
                &:hover {
                    background: var(--black-a08);
                    box-shadow: inset 0 0 0 1px var(--black-a60);
                }

                & + button {
                    margin-top: 1rem;
                }

                .login__otherLoginsIcon {
                    margin-right: .5rem;
                    transform: translateY(20%);
                }

                .appleIcon {
                    color: #000;
                }
            }
        }
    }

`