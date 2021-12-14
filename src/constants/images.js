import NotFoundImg from '../assets/icons/notFound.svg';
import NoFace from '../assets/icons/no-face.svg';
import background1 from '../assets/images/background1.jpg';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.jpg';
import background4 from '../assets/images/background4.jpg';
import background5 from '../assets/images/background5.jpg';
import background6 from '../assets/images/background6.jpg';
import background7 from '../assets/images/background7.jpg';
import background8 from '../assets/images/background8.jpg';
import background9 from '../assets/images/background9.jpg';
import background10 from '../assets/images/background10.jpg';
import background11 from '../assets/images/background11.jpg';
import background12 from '../assets/images/background12.jpg';
import background13 from '../assets/images/background13.jpg';
import background14 from '../assets/images/background14.jpg';
import background15 from '../assets/images/background15.jpg';
import background16 from '../assets/images/background16.jpg';
import background17 from '../assets/images/background17.jpg';

const Images = {
    NotFound: NotFoundImg,
    NoFace: NoFace
}

const background = {
    background1: background1,
    background2: background2,
    background3: background3,
    background4: background4,
    background5: background5,
    background6: background6,
    background7: background7,
    background8: background8,
    background9: background9,
    background10: background10,
    background11: background11,
    background12: background12,
    background13: background13,
    background14: background14,
    background15: background15,
    background16: background16,
    background17: background17,
}

export function randombackGround() {
    return background[Object.keys(background)[Math.floor(Math.random() * Object.keys(background).length)]];
}

export default Images;