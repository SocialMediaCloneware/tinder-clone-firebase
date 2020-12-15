import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name: "Steve Jobs",
            url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072"
        },

        {
            name: "Mark Zuckerberg",
            url: "https://media.npr.org/assets/img/2018/11/21/gettyimages-962142720-3f4af695a639cbc14deb90e88287cd3c19b676f4-s800-c85.jpg"
        }

    ]);

    

    return (
        <div>
            <h1>I am a tinder card</h1>

            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div
                        style={{backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                     <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards
