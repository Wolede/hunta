import React, { useState } from 'react'
import { Button, Modal as BootModal, ModalHeader, ModalBody } from 'reactstrap'
// import Modal from './modal';

const ModalButton = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

    return (
        <>
            <Button color={props.color} onClick={toggle} className={props.className}>{props.children}</Button>
            
                {props.video &&
                    <BootModal isOpen={modal} toggle={toggle} className='' external={externalCloseBtn} size="xl" centered>
                        <div className="embed-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fbZO6UBtYTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </BootModal>
                }
                {props.form &&
                    <BootModal isOpen={modal} toggle={toggle} className='' external={externalCloseBtn} centered>
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                    </BootModal>
                }
        </>
    )
}

export default ModalButton
