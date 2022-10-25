import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out this wonderful Team ! </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem  
                        src='images/jb.jpg'
                        text='Freelancer Software Engineer at Upwork & Co-Founder of IZSoftwares'
                        label='Beryl NGONGA '
                        path='/services'
                    />
                    <CardItem  
                        src='images/k.JPG'
                        text='  
Graphic | Motion | Ui/ Ux Design at IZSoftwares'
                        label='Kevin Sonfo'
                        path='/services'
                    />
                    <CardItem  
                        src='images/o.jpg'
                        text=' 
Senior Java Software Engineer at IZSoftwares'
                        label='Yanick Che'
                        path='/services'
                    />
                  
                </ul>
            </div>
        </div>      
    </div>
  )
}

export default Cards
