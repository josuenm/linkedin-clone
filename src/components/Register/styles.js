import styled from "styled-components"

export const Container = styled.section`
    background: var(--background-gray);
    height: auto;

    @media (max-width: 991.98px) {
        background: #fff;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: object-fit;
        padding-top: 1rem;

        @media (max-width: 991.98px) {
            align-items: flex-start;
            padding: 0 2rem;
        }

        .register__headerLogo {
            font-size: 2rem;
            font-weight: bold;
            color: var(--blue-active);
            margin: 0;
            cursor: pointer;

            @media (max-width: 991.98px) {
                font-size: 1.2rem;
                margin-top: 1rem;
            }
            
            span {
                font-size: 1.75rem;
                color: #fff;
                background: var(--blue-active);
                border-radius: .15rem;
                padding: 0 .2rem;
                margin-left: 3px;

                @media (max-width: 991.98px) {
                    font-size: 1.2rem;
                }
            }
        }

        .register__headerHeadline {
            font-size: 2rem;
            font-weight: normal;

            @media (max-width: 991.98px) {
                display: none;
            }
        }

        .register__mobile__headerHeadline {
            display: none;

            @media (max-width: 991.98px) {
                display: block;
                width: 100%;
                text-align: center;
            
                h2 {
                    font-size: 1.5rem;
                    font-weight: 600;

                    .line__divisor {
                        position: relative;
                        display: inline-flex;
                        width: 22px;
                        
                        &:after {
                            content: '';
                            position: absolute;
                            top: -7px;
                            left: 0;
                            right: 0;
                            width: 100%;
                            height: 2px;
                            background: #000;
                        }
                    }
                }
            }
        }
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .register__footer {
            font-size: .9rem;

            @media (max-width: 991.98px) {
                display: none;
            }

            span {
                font-weight: 600;
                color: var(--blue-active);
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

export const RegisterContainer = styled.div`
    width: 400px;
    border-radius: .5rem;
    padding: 24px;
    background: #fff;

    @media (max-width: 991.98px) {
        background: none;
    }

    @media (min-width: 575.99px) and (max-width: 991.98px) {
        width: 80%;
    }
    
    label {
        font-size: .9rem;
        color: var(--black-a60);
    }
    input {
        width: 100%;
        border: 1px solid #000;
        border-radius: .25rem;
        padding: .5rem;
        margin-top: .4rem;

        @media (max-width: 991.98px) {
            border: .5px solid var(--black-a60);
        }

        &:focus {
            border-color: var(--black-a60);
            box-shadow: inset 0 0 0 1px var(--black-a60);
            outline: none;
        }
    }
    .inputError {
        border: 1px solid red;

        &:focus {
            border-color: red;
            box-shadow: inset 0 0 0 1px red;
        }
    }

    form {
        .register__input {
            & + .register__input {
                margin: 1rem 0;
            }

            .register__inputPassword {
                position: relative;

                .register__inputPassword__reveal {
                    position: absolute;
                    top: calc(50% + .1rem);
                    right: 8px;
                    color: var(--black-a60);
                    background: #fff;

                    &:hover {
                        text-decoration: underline;
                    }

                    span {
                        cursor: pointer;
                    }
                }
            }

            .register__inputError {
                margin: 0;
                color: red;
                font-size: .9rem;
            }
        }

        .register__disclaimer {
            font-size: .75rem;
            text-align: center;
            color: var(--black-a60);

            @media (max-width: 991.98px) {
                display: none;
            }


            span {
                font-weight: 600;
                color: var(--blue-active);
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .register__submit {
            display: block;
            width: 100%;
            border-radius: 3rem;
            font-size: 1rem;
            font-weight: 600;
            margin-top: 1rem;
            padding: .9rem 2rem;
            background: var(--blue-active);
            border: none;
            color: #fff;

            @media (max-width: 991.98px) {
                display: none;
            }

            transition: background .2s;
            &:hover {
                background: var(--blue-a80);
            }
        }

        .register__mobile__submit {
            display: none;

            @media (max-width: 991.98px) {
                display: block;
            }
        }
    }

    .register__divider {
        position: relative;
        width: 100%;
        margin: 1rem auto;
        text-align: center;
        color: var(--black-a60);

        @media (max-width: 991.98px) {
            display: none;
        }

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

    .register__otherSignUps {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.2rem;

        @media (max-width: 991.98px) {
            margin: 1.2rem 0;
        }
        
        button {
            color: var(--blue-active);
            background: none;
            font-weight: 600;
            font-size: 1rem;
            padding: .4rem 2rem .9rem 2rem;

            border-radius: 3rem;
            border: 1px solid var(--blue-active);

            transition: all 0.1s;
            &:hover {
                background: var(--blue-50);
                box-shadow: inset 0 0 0 1px var(--black-a60);
            }

            & + button {
                margin-top: 1rem;
            }

            .register__otherSignUpsIcon {
                margin-right: .5rem;
                transform: translateY(20%);
                color: gray;
            }
        }
    }

    .register__login {
        text-align: center;

        a {
            font-weight: 600;
            color: var(--blue-active);

            &:hover {
                text-decoration: underline;
            }
        }
    }
`