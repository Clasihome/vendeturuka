import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { EnvironmentOutlined } from '@ant-design/icons';

import { Section, Button } from '../../styled-components';
import Carousel from '../carousels/properties';
import Link from '../link';

const Title = styled.p`
  font-size: 1.5rem;
  //color: ${props => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 2rem;
`
const PropertiesCarouselCont = styled.div`
  min-height: 50vh;
`
const Void = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  left: 0;
  bottom: 0;
`
const Banner = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 3rem 2rem;
  color: #fff;
`

const BannerText = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`


export default ()=>{
  const state = useContext(context);

  return(
    <Section id="properties">
      <Container>
        <Title>
          {state.home.properties.title}
        </Title>
        <PropertiesCarouselCont>
          <Void />
          <Carousel />
        </PropertiesCarouselCont>
        <Banner>
          <Row className="align-items-center">
            <Col xs={12} md={9}>              
              <BannerText>
                <EnvironmentOutlined style={{ marginRight: "1rem", fontSize: "1.5rem" }} />
                {state.home.properties.footer}
              </BannerText>
            </Col>
            <Col xs={12} md={3}>
              <Link paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                <Button
                  block
                >
                  {state.home.properties.buttonText}
                </Button>
              </Link>
            </Col>            
          </Row>
        </Banner>
      </Container>
    </Section>
  )
}