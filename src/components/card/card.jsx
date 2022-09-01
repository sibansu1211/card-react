import './card.css';
 export const Card =(props)=>{
    return (
        <main>
            <ul className='card-container'>
                <li style={{borderTop:`4px solid ${props.bordercolor}`}} className="feature-card">
                <h2>{props.title}</h2>
                <p>
                    {props.desc}
                </p>
                <img src={props.image} alt={'fehdff'}/>
                </li>
            </ul>
        </main>
    )
 }