// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LockScreenMsg = styled.div`
  font-size: 16px;
  color: #e2e8f0;
`

export const LockScreenImage = styled.img`
  width: 100%;
`

export const LockScreenContainer = styled.div`
  width: 150px;
`

export const LockScreenText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
`
export const AppLockButton = styled.button`
  height: 35px;
  width: 90px;
  border: 0px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #06b6d4;
  margin-top: 50px;
  color: #ffffff;
`
