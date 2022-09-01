import { Card } from '../card/card';
import './page.css';
import person from '../../assets/img/person.svg';
import groups from '../../assets/img/groups.svg';
import calculate from '../../assets/img/calculate.svg';
import tips from '../../assets/img/tips.svg';
const  cardsData =[{
    'title': 'Supervisor',
    'desc': 'Lorem Ipsum is simply dummy text of the printing',
    'image': person,
    'borderColor':'#5FD5CD'
},
{'title': 'Team Builder',
    'desc': 'Lorem Ipsum is simply dummy text of the printing',
    'image': groups,
    'borderColor':'#EB6875'
},
{
    'title': 'Karma',
    'desc': 'Lorem Ipsum is simply dummy text of the printing',
    'image': tips,
    'borderColor':'#EAC357'
},
{
    'title': 'calculate',
    'desc': 'Lorem Ipsum is simply dummy text of the printing',
    'image': calculate,
    'borderColor':'#199FB2'
}

]

 export const Page =()=>{
    return (
       <>
  <header>
    <h1>
    Reliable, efficient delivery <br/>
    <strong>Powered by Technology</strong>
    </h1>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industrys standard dummy
    </p>
  </header>     
  {
    cardsData.map((ele,idx) =>{
        return <Card title ={ele.title} desc={ele.desc}
        image={ele.image} bordercolor={ele.borderColor}></Card>

    })

  }
  
  </> 
    )
 }