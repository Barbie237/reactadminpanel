import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1> What can we offers? </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem  
                        src='images/custom.jpg'
                        text=' We convert your idea into solid, safe, and reliable custom software with our 
                        full-cycle software development services, including: Web app solution,  Mobile app solutions, UI/UX '
                        label='Custom software development '
                        path='/services'
                    />
                    <CardItem  
                        src='images/mobd.png'
                        text='Our team can provide support at any stage of custom mobile app development, from creating a 
                        proof-of-concept app to an MVP:
Cross-platform apps for iOS and Android
Hybrid and mobile web
Native apps development'
                        label='Mobile App Development Services
'
                        path='/services'
                    />
                    <CardItem  
                        src='images/sftd.png'
                        text=' Offshore software development services cut costs and optimize business processes. We provide:
On-time delivery
A dedicated team
Flexible pricing'
                        label='Offshore Software Development'
                        path='/services'
                    />
                    <CardItem  
                        src='images/sdev.png'
                        text=' We create business software solutions to solve workflow issues that enterprises often face, including:

Integration of advanced technology apps
Business process management
Production process automation'
                        label='Enterprise Software Development'
                        path='/services'
                    />
                    <CardItem  
                        src='images/it.jpg'
                        text=' Our team covers all IT strategies and provides IT consulting services that help optimize your business and make it grow:

System integration
Data analytics
Internet of Things'
                        label='IT Consulting'
                        path='/services'
                    />
                    <CardItem  
                        src='images/softint.jpg'
                        text='We connect IT systems, microservices & migrate data, including cloud-based data, from one database to another by providing:

Data integration
API integration
Service-oriented architecture (SOA)'
                        label='Software Integration'
                        path='/services'
                    />

                  
                </ul>
            </div>
        </div>      
    </div>
  )
}

export default Cards
