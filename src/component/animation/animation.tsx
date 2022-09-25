import React, { useState } from 'react'
import './animation.css'


// 当对于使用webpack时，注意css-loader的加载

export default function AnimationForMain() {

    const [opened, open] = useState(true);


    return (

        <div>
            ---
            <button onClick={() => open(!opened)}>switch</button>
            <div className={opened ? 'div-open' : 'div-shrink'}>

            </div>
            <div className={['div-open', opened ? 'div-shrink' : null].join(' ')}>
                this is extension param.
                <div style={{ backgroundColor: 'green' }}></div>
            </div>

            <div className={opened ? 'show' : 'hide'}>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }}></div>
            </div>
            ---
        </div>

    )
}


