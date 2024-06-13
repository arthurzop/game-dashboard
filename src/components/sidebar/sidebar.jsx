import style from './sidebar.module.css'
import * as I from 'iconoir-react'

export default function Sidebar({ iconColor }) {
    return (
        <I.IconoirProvider
            iconProps={{
                color: iconColor || '#fff',
            }}>
            <div className={style.container}>
                <I.SelectFace3d className={style.logo}/>
                <div className={style.iconContainer}>
                    <I.Home/>
                    <I.Gamepad/>
                    <I.Gift/>
                    <I.Tv/>
                    <I.HalfCookie/>
                    <I.Bag/>
                    <I.ChatBubble/>
                </div>
                <div className={style.addContainer}>
                    <button className={style.addButton}>
                        <I.Plus/>
                    </button>
                </div>
            </div>
        </I.IconoirProvider>
    )
}