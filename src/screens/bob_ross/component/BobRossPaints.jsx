import React, {useContext} from 'react'
import "./BobRossPaints.css"
import AppContext from '../../../context/AppContext';
import { useEffect } from 'react';
export default function BobRossPaints() {
    const {dogs} = useContext(AppContext);
    useEffect(() => {
        dogs.addDog('chubber');
    }, []);
    return (
        <div>
            <p> {dogs.dogs}</p>
            <h1>Robert Norman Ross</h1>
            <p>Robert Norman Ross was an American painter, art instructor, and television host. He was the creator and host of The Joy of Painting, an instructional television program that aired from 1983 to 1994 on PBS in the United States, and also aired in Canada, Latin America, and Europe.</p>
            <img style={{width: "500px", height: "500px"}} src="http://cdn.cnn.com/cnnnext/dam/assets/190904125051-bob-ross-underpastelskies-2803.jpg" alt="Bob Ross"/>
        </div>
    )
}
