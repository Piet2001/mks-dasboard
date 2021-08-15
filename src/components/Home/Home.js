import React from 'react'

const Home = (props) => {
    return (
        <div>
            Welkom in het mks-dashboard.<br />
            <br />
            Hier kun je door het invoeren van je session_id veel info krijgen over jou spel.<br />
            Bijvoorbeeld hoeveel voertuigen en gebouwen je bezet van ieder type.<br />

            Momenteel zijn wij nog bezig met de ontwikkeling hierdoor is het mogelijk dat niet alles werkt zoals het zou moeten.
            <br />
            <br />

            <input name='sessionId' type='text' onChange={e => props.setSessionId(e.target.value)} />
        </div >
    )
}

export default Home
