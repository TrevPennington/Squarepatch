import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Banner from "./banner.js";
import { ShoppingBag } from 'styled-icons/boxicons-regular/ShoppingBag';
import './nav.css'

const HeaderMinorStyled = styled.div`
    position: sticky; 
    top: -55px;
    box-shadow: 1px 1px 40px rgba(0,0,0,0.1);
    width: 100%;
    margin: auto;
    z-index: 99;
    padding-top: -2px;
    background-color: cornsilk;

    @media(max-width: 900px) {
        top: -105px;
    }
`

const Div = styled.div`

    width: 100%;
    height: 90px;
    margin: auto;
    padding-left: 20vw;
    padding-right: 20vw;
    padding-top: -10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.text};
    @media(max-width: 450px) {
        padding-left: 15px;
        padding-right: 15px;
    }
`

const Home = styled.h1`
    color: #efefef;
    font-size: 1.4em;
    letter-spacing: 3px;
`

const Links = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #efefef;
    font-size: 2em;
    letter-spacing: 3px;
    & > * {
        font-size: 0.5em;
    }
    @media(max-width: 900px) {
        justify-content: flex-end;
    }
`

const LinkHome = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;

`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    @media(max-width: 900px) {
        // font-size: 0.3em;
        // margin-right: 3vw;
        // align-self: center;
        display: none;
    }
`

const CartSummary = styled.div`
    margin-bottom: 15px;
 
`

const ItemCount = styled.p`
    
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
      
        let cart = () => { if(this.state.items) { //if cart has an item in it
            return ( 
            <CartSummary className="snipcart-summary">
                <a href="#" className="snipcart-checkout"> 
                <ShoppingBag size='33px' />
                <ItemCount className='bagFull'></ItemCount>
                </a>
            </CartSummary>
        ) } else { //if cart is empty
            return (
            <CartSummary className="snipcart-summary">
            <a href="#" className="snipcart-checkout"> 
            <ShoppingBag size='33px' />
            <ItemCount className='bagEmpty'></ItemCount>
            </a>
        </CartSummary>
            )
        }}

        return (
            <HeaderMinorStyled headSize={this.props.font}>
                <Banner style={{backgroundColor: `white`}}/>
                <Div background={this.props.background}>
                    <Home>
                        <LinkHome to='/'>
                            Squarepatch
                        </LinkHome>
                    </Home>

                    <Links>
                        <LinkStyled to='/blog'>
                            <p>blog</p>
                        </LinkStyled>

                        <LinkStyled to='/about'>
                            <p>about</p>
                        </LinkStyled>

                        {cart()}

                    </Links>

                </Div>

            </HeaderMinorStyled>
        )
    }

}

export default HeaderMinor;

