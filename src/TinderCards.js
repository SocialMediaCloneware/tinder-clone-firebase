import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name: "Steve Jobs",
            url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
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
