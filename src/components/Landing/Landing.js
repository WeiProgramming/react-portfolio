import React, {useState, useEffect} from 'react';
import './Landing.css';
import {Badge, Modal, Button} from 'react-bootstrap';
import { useSpring, useTransition, animated, config } from 'react-spring'
import {Transition} from 'react-spring/renderprops'
import Wallpaper from '../../assets/wallpapers';
import PDF from 'react-pdf-js';
import { Document, Page } from 'react-pdf';
import pdfs from "../../assets/pdfs/Pdfs";


const slides = [
    { id: 0, url: Wallpaper.redSmoke },
    { id: 1, url: Wallpaper.blueSmoke },
    { id: 2, url: Wallpaper.jokerSmoke },
    { id: 3, url: Wallpaper.greenSmoke },
    { id: 4, url: Wallpaper.purpleSmoke },
]

const Landing = () => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const transitions = useTransition(slides[index], slides[index].id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 5), 4000), []);

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
                    <a href={pdfs.resume} className="btn btn-lg btn-outline-light">Resume</a>
                </div>
                {/*<Modal show={show} onHide={handleClose}>*/}
                    {/*<Modal.Header closeButton>*/}
                        {/*<Modal.Title>Modal heading</Modal.Title>*/}
                    {/*</Modal.Header>*/}
                    {/*<Modal.Body>*/}
                        {/*<iframe src={pdfs.resume} title="title">*/}
                            {/*Press me: <a href={pdfs.resume}>Download PDF</a>*/}
                        {/*</iframe>*/}
                    {/*</Modal.Body>*/}
                    {/*<Modal.Footer>*/}
                        {/*<Button variant="secondary" onClick={handleClose}>*/}
                            {/*Close*/}
                        {/*</Button>*/}
                        {/*<Button variant="primary" onClick={handleClose}>*/}
                            {/*Save Changes*/}
                        {/*</Button>*/}
                    {/*</Modal.Footer>*/}
                {/*</Modal>*/}
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