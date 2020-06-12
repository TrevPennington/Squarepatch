import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";


import { ShoppingBag } from 'styled-icons/boxicons-regular/ShoppingBag';

const HeaderMinorStyled = styled.div`
    top: 0;
    position: sticky;
    box-shadow: 1px 1px 40px rgba(0,0,0,0.1);
    width: 100%;
    margin: auto;
    padding-top: 6px;
    padding-bottom: 6px;
    z-index: 99;
    background-color: white;
`

const Div = styled.div`
    width: 75vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 600px) {
        width: 90vw;
    }
`

const Home = styled.h1`
    
    font-size: 1.4em;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-align: left;
`

const Links = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 2em;
    letter-spacing: 3px;
    & > * {
        font-size: 0.5em;
    }
    @media(max-width: 600px) {
        justify-content: flex-end;
    }
`

const LinkHome = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    @media(max-width: 600px) {
        font-size: 0.6em;
        font-weight: 400;
        align-self: center;
    }
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    @media(max-width: 600px) {
        // font-size: 0.3em;
        // margin-right: 3vw;
        // align-self: center;
        display: none;
    }
`

const CartSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    padding-top: 3px;
`

const ItemCount = styled.p`
    width: 27px;
    border: 1px solid peru;
    border-radius: 100%;
    background-color: peru;
    text-align: center;
    font-size: 1em;
    color: whitesmoke;
    transform: translateY(-15px);
    z-index: 999;
`

class HeaderMinor extends Component {
    state = {
        items: 0
    }

    updateItemTotal = (qty) => {
        this.setState({ items: qty })
    }



    componentDidMount() {
        if (window.Snipcart) {

            //this allows it to work when switching pages
            var count = window.Snipcart.api.items.count();
            this.updateItemTotal(count)

            //this allows it to work when you add or change items
            window.Snipcart.subscribe('cart.closed', () => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            });

            //this allows it to work on refreshing the page
            window.Snipcart.subscribe('cart.ready', (data) => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            })
        }
    }

    componentWillUnmount () {
        window.Snipcart.unsubscribe('cart.closed');
        window.Snipcart.unsubscribe('cart.ready');
    }
    

    render() {
        return (
            <HeaderMinorStyled headSize={this.props.font} background={this.props.background}>
                <Div>
                    <Home>
                        <LinkHome to='/'>
                            Squarepatch
                        </LinkHome>
                    </Home>

                    <Links>
                        <LinkStyled to='/blog'>
                            <p>BLOG</p>
                        </LinkStyled>

                        <LinkStyled to='/about'>
                            <p>ABOUT</p>
                        </LinkStyled>
                    
                

                        <CartSummary className="snipcart-summary">
                            <a href="#" className="snipcart-checkout"> 
                            <ShoppingBag size='40px' color='#555' />
                            <ItemCount className='itemCount'>{this.state.items}</ItemCount>
                            </a>
                        </CartSummary>
                    </Links>

                </Div>

            </HeaderMinorStyled>
        )
    }

}

export default HeaderMinor;