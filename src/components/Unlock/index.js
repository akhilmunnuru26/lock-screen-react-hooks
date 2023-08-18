import {useState} from 'react'
import {
  MainContainer,
  LockScreenImage,
  LockScreenContainer,
  LockScreenText,
  AppLockButton,
} from './styledComponents'

const Unlock = () => {
  const [device, setDevice] = useState({
    isDeviceLocked: true,
  })

  const {isDeviceLocked} = device

  const imageUrls = isDeviceLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altText = isDeviceLocked ? 'lock' : 'unlock'

  const toggleButton = () => {
    setDevice(prevState => ({
      isDeviceLocked: !prevState.isDeviceLocked,
    }))
  }

  let lockScreenMsg = 'Your Device is Locked'

  const buttonText = isDeviceLocked ? 'Unlock' : 'Lock'

  if (isDeviceLocked) {
    lockScreenMsg = 'Your Device is Locked'
  } else {
    lockScreenMsg = 'Your Device is Unlocked'
  }

  return (
    <MainContainer>
      <LockScreenContainer>
        <LockScreenImage src={imageUrls} alt={altText} />
      </LockScreenContainer>
      <LockScreenText>{lockScreenMsg}</LockScreenText>
      <AppLockButton onClick={toggleButton} type="button">
        {buttonText}
      </AppLockButton>
    </MainContainer>
  )
}

export default Unlock
