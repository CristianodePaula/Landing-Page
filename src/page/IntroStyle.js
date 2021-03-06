import styled from 'styled-components'
import background from '../img/background.jpg'
import { mobile } from '../components/Responsive'
import { motion } from 'framer-motion'
import { bubbleAnime } from '../components/Animation'

export const Container = styled.div`
  height: 100vh;
  background: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  ${mobile({
  justifyContent: 'center'
})} 
`
export const FishContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
`
export const Fish = styled(motion.img)`
  height: 45px;
  width: 90px;
  &:nth-child(1) { position: fixed; top: 20%; left: 20% }
  &:nth-child(2) { position: fixed; top: 70%; left: 30% }
  &:nth-child(3) { position: fixed; top: 10%; right: 5% }
  &:nth-child(4) { position: fixed; top: 10%; left: 5% }
  &:nth-child(5) { position: fixed; top: 40%; right: 45% }
  &:nth-child(6) { position: fixed; top: 40%; right: 20% }
  &:nth-child(7) { position: fixed; top: 80%; right: 35% }
  &:nth-child(8) { position: fixed; top: 15%; right: 35% }
  &:nth-child(9) { position: fixed; top: 85%; left: 10% }
  &:nth-child(10) { position: fixed; top:65%; right: 10% }
  ${mobile({
  height: '22px',
  width: '45px'
})}
`
export const BubbleContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
  position: absolute;
`
export const Bubble = styled.img`
  width: 40px;
  margin: 40px; 
  animation: ${bubbleAnime} 7s linear infinite;
  &:nth-child(1) { animation-delay: 2s }
  &:nth-child(2) { animation-delay: 5s }
  &:nth-child(3) { animation-delay: 3s }
  &:nth-child(4) { animation-delay: 1s }
  &:nth-child(5) { animation-delay: 6s }
  &:nth-child(6) { animation-delay: 4s }
  &:nth-child(7) { animation-delay: 2s }
  &:nth-child(8) { animation-delay: 6s }
  &:nth-child(9) { animation-delay: 3s }
  &:nth-child(10) { animation-delay: 4s }
  &:nth-child(11) { animation-delay: 1s }
  ${mobile({
  width: '20px',
  margin: '10px'
})}
`
export const BoxLeft = styled.div`
  position: absolute;
  margin: 100px;
  padding: 10px;
  color: white;
  text-shadow: 3px 3px 3px black;
  z-index: 3;
  ${mobile({
  margin: '0',
  alignItems: 'center',
  textAlign: 'center'
})}
`
export const SobTitle = styled(motion.p)`
  font-size: 30px;
  ${mobile({
  fontSize: '20px'
})}
`
export const Title = styled(motion.h2)`
  font-size: 65px;
  margin-top: 5%;
  ${mobile({
  fontSize: '40px'
})}
`
export const Button = styled(motion.button)`
  height: 50px;
  width: 180px;
  background: transparent;
  color: white;
  cursor: pointer;
  text-shadow: 3px 3px 3px black;
  font-size: 20px;
  border-radius: 30px;
  border-width: 1px;
  border-color: grey;
  font-family: 'Courgette', cursive;
  ${mobile({
  height: '50px',
  width: '120px',
  fontSize: '15px'
})}
`
export const BoxCenter = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  background: transparent;
  top: 5%;
  left: -50%;
  right: -50%;
  ${mobile({
  top: '85%'
})}
`
export const Text = styled.span`
  font-size: 30px;
  color: white;
  text-shadow: 3px 3px 3px black;
  ${mobile({
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '20px',
  Bottom: '20px'
})}
`
export const BoxRight = styled.div`
  position: absolute;
  top: 3%;
  margin-left: 90%;
  padding: 10px;
  ${mobile({
  margin: '5px'
})}
`
export const Login = styled(motion.button)`
  height: 40px; 
  width: 90px;
  font-size: 20px;
  background: transparent;
  color: white;
  text-shadow: 3px 3px 3px black;
  border-radius: 30px;
  cursor: pointer;
  border-width: 1px;
  border-color: grey;
  font-family: 'Courgette', cursive;
  ${mobile({
  height: '30px',
  width: '80px',
  fontSize: '15px'
})}
`