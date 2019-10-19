import React, {useState, useEffect} from 'react';
import './Landing.css';
import {Badge} from 'react-bootstrap';
import { useSpring, useTransition, animated, config } from 'react-spring'
import {Transition} from 'react-spring/renderprops'
import Wallpaper from '../../assets/wallpapers';


const slides = [
    { id: 0, url: Wallpaper.redSmoke },
    { id: 1, url: Wallpaper.blueSmoke },
    { id: 2, url: Wallpaper.jokerSmoke },
    { id: 3, url: Wallpaper.greenSmoke },
    { id: 4, url: Wallpaper.purpleSmoke },
]

const Landing = () => {
    const [index, setIndex] = useState(0);
    const transitions = useTransition(slides[index], slides[index].id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });
    // const props = useSpring({opacity: 1, from: {opacity: 0}});
    // let i = -1;
    // useEffect(() => {
    //     setInterval(() => {
    //         i++;
    //         setbgImg(slides[(i)%4].url);
    //     }, 3000)
    // }, [])
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 5), 2000), []);

    return (
        transitions.map(({ item, props, key}) => (
            <animated.div className="landing"
                          key={key}
                          className="bg"
                          style={{
                              ...props,
                              backgroundImage: `url(${item.url})`
                          }}
            >
                <div className="overlay"></div>
                <div className="description-box">
                    <h1>Wei | Programming <Badge variant="secondary">DEV</Badge></h1>
                    <p>Passion . Reality . Creation</p>
                </div>
            </animated.div>
        ))
        // transitions.map(({ item, props, key }) => (
        //     <animated.div
        //         key={key}
        //         className="bg"
        //         style={
        //             { ...props,
        //                 backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
        //                 backgroundSize: `cover`,
        //                 height: '80vh',
        //             }
        //         }
        //     >
        //         {/*<div className="description-box">*/}
        //             {/*<h1>Wei | Programming <Badge variant="secondary">DEV</Badge></h1>*/}
        //             {/*<p>Passion . Reality . Creation</p>*/}
        //         {/*</div>*/}
        //     </animated.div>
        // ))
    );
}

export default Landing;