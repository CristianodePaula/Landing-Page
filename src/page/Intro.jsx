import React, { useEffect, useRef } from 'react'
import {
  Container, 
  FishContainer,
  Fish,
  BubbleContainer,
  Bubble,
  BoxLeft,
  SobTitle,
  Title,
  Button,
  Text,
  BoxCenter,
  BoxRight,
  Login
} from './IntroStyle'
import fish01 from '../img/fish01.png'
import fish02 from '../img/fish02.png'
import fish03 from '../img/fish03.png'
import fish04 from '../img/fish04.png'
import fish05 from '../img/fish05.png'
import fish06 from '../img/fish06.png'
import fish07 from '../img/fish07.png'
import fish08 from '../img/fish08.png'
import shrimps from '../img/shrimps.png'
import starfish from '../img/starfish.png'
import bubble from '../img/bubble.png'
import {
  welcomeanime, 
  titleAnime, 
  buttonAnime, 
  emergingAnime, 
  fishfloat01Anime,
  fishfloat02Anime, 
  fishfloat03Anime, 
  fishGoBackAnime, 
  shrimpsAnime, 
  starfishAnime
} from '../components/Animation'
import { init } from 'ityped'

export default function Intro() {

  const welcome = useRef()

  useEffect(() => {
    init(welcome.current, {
      showCursor: false,
      backDelay: 100,
      backSpeed: 50,
      startDelay: 6000,
      strings: [
        'Junte-se a ONG Salve os Oceanos', 
        'Ajude-nos em nosso trabalho', 
        'Sua colobaroação é de máxima importância'
      ]
    })
  }, [])

  return (
    <>
      <Container>
        <FishContainer variants={emergingAnime} initial='initial' animate='animate'>
          <Fish src={fish01} variants={fishfloat03Anime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish02} variants={fishGoBackAnime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish03} variants={fishGoBackAnime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish04} variants={fishfloat01Anime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish05} variants={fishfloat03Anime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish06} variants={fishfloat01Anime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish07} variants={fishfloat02Anime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={fish08} variants={fishfloat02Anime} initial='initial' animate='animate' whileHover={{ scale: 0.5 }} />
          <Fish src={shrimps} variants={shrimpsAnime} initial='initial' animate='animate' whileHover={{ scale: 0.5, duration: 5 }} />
          <Fish src={starfish} variants={starfishAnime} initial='initial' animate='animate' whileHover={{ scale: 0.5, duration: 5 }} />
        </FishContainer>
        <BubbleContainer variants={emergingAnime} initial='initial' animate='animate'>
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
          <Bubble src={bubble} />
        </BubbleContainer>
        <BoxLeft>
          <SobTitle variants={welcomeanime} initial='initial' animate='animate' >Seja bem vindo!</SobTitle>
          <Title variants={titleAnime} initial='initial' animate='animate' > Salve os Oceanos</Title>
          <Button variants={buttonAnime} initial='initial' animate='animate' whileHover={{ scale: 1.1 }}>Faça um tour</Button>
        </BoxLeft>
        <BoxCenter>
          <Text ref={welcome}></Text>
        </BoxCenter>
        <BoxRight>
          <Login variants={emergingAnime} initial='initial' animate='animate' whileHover={{ scale: 1.1 }}>Entrar</Login>
        </BoxRight>
      </Container>
    </>
  )
}           