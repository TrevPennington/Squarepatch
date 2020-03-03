import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';
import Footer from "../components/footer"

import HeaderMain from './Headers/HeaderMain';
import HeaderMinor from './Headers/HeaderMinor';


const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 100%;

`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const ExternalLink = styled.a`
  color: #c59fc5;
`


class Layout extends React.Component {

  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "Squareforest"
    let header

    if (location.pathname === rootPath) { // TODO: give bigger section or add a big text component bc it is home
      header = (
        <HeaderMinor shopName={siteName} font="1.5em" >
        </HeaderMinor>
      )
    } else {
      header = (
        <HeaderMinor shopName={siteName} font="1em" >
        </HeaderMinor>
      )
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            {header}
            <MainSection>{children}</MainSection>
            <Footer />
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
