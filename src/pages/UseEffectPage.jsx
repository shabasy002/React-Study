
import BeginnerUseffect from '/src/component/BeginnerUseffect'
// import GameTimer from '/src/component/TimerGame'
import Setsession from '/src/component/Setsession'
import Countdown from '/src/component/Countdown'
import ThemeSwitch from '/src/component/ThemeSwitch'
import LoginLogoutSession from '/src/component/LoginLogout'
import Card from '../component/Card'

function UseEffectPage(){
    return(
        <>
        <Card title={"hello world!"} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
        <LoginLogoutSession/>
       <ThemeSwitch/>
       <Countdown/>
      <BeginnerUseffect/>
       <Setsession/>
        </>
         
    )
}

export default UseEffectPage;