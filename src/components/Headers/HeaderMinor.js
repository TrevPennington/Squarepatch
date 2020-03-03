import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";


import { ShoppingBag } from 'styled-icons/boxicons-regular/ShoppingBag';

const HeaderMinorStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    

    h1 {
        font-size: ${props => props.headSize || "2em"};
        text-transform: uppercase;
        letter-spacing: 5px;
    }
`

const ShopName = styled.h1`
    padding: 20px;
    width: 50%;
    text-align: left;
    font-family: sans-serif;
    font-weight: 100;
    letter-spacing: 3.5px;
    text-transform: lowercase;
    @media (max-width: 600px) {
        width: 100%;
      }
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

const CartSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
`

const ItemCount = styled.p`
    width: 27px;
    border: 1px solid peru;
    border-radius: 100%;
    background-color: peru;
    text-align: center;
    font-size: 1em;
    color: whitesmoke;
    transform: translateY(-12px);
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
            <HeaderMinorStyled headSize={this.props.font}>
                <ShopName>
                    <LinkStyled to='/'>
                        {this.props.shopName}
                    </LinkStyled>
                </ShopName>
                <CartSummary className="snipcart-summary">
                    <a href="#" className="snipcart-checkout"> 
                    <ShoppingBag size='40px' color='#555' />
                    <ItemCount className='itemCount'>{this.state.items}</ItemCount>
                    </a>
                </CartSummary>

            </HeaderMinorStyled>
        )
    }

}

export default HeaderMinor;