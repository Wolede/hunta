import React from 'react'
import { Modal as BootModal, ModalHeader, ModalBody } from 'reactstrap';

const Modal = (props) => {
    return (
        <div>
            <BootModal isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
            </BootModal>
        </div>
    )
}

export default Modal
