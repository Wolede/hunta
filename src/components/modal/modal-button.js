import React, { useState } from 'react'
import { Button, Modal as BootModal, ModalHeader, ModalBody } from 'reactstrap'
import Modal from './modal';

const ModalButton = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color={props.color} onClick={toggle} className={props.className}>{props.children}</Button>


            <BootModal isOpen={modal} toggle={toggle} className=''>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
            </BootModal>
        </>
    )
}

export default ModalButton
