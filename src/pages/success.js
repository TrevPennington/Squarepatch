import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const SuccessWrapper = styled.div`
    height: 70vh;
`

const Success = styled.h1`
    padding-top: 20vh;
    width: 50%;
    margin: auto;

    text-align: center;
    letter-spacing: 1.2px;
    font-size: 1.4em;

    & em {
        font-style: italic;
        font-weight: 600;
        border-bottom: 2px solid ${props => props.theme.colors.indySplash};
    }
`

export default () => {
    return (
        <Layout location='/success'>
            <SuccessWrapper>
                <Success>
                    Thanks for reaching out! We will get back to you ASAP. <em><Link to='/'>Home</Link></em>
                </Success>
            </SuccessWrapper>
        </Layout>
    )
}