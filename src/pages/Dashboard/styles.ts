import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 50px;
`;

export const Form = styled.form<FormProps>`
    max-width: 700px;
    display: flex;
    margin-top: 40px;
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3A3A3A;
        border: 2px solid #FFF;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder{
           color: #A8A8B3;
        }
    }
    button {
        width: 210px;
        height: 70px;
        border: 0;
        border-radius: 0 5px 5px 0;
        background: #04D361;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04D361')};
        }
    }

`;

export const Error = styled.span`
    display: block;
    color: #C53030;
    margin-top: 8px;

    /* font-size: 48px;
    max-width: 450px;
    line-height: 56px; */
`;

export const Repositories = styled.div`
    margin-top: 50px;
    max-width: 700px;
    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;


        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50px;
        }

        div {
            margin-left: 16px;
            flex: 1;
            /* max-width: 500px; */
            strong {
                font-size: 20px;
                color: #3D3D4D
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }

`;
