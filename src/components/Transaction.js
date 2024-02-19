import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FaPenToSquare } from "react-icons/fa6"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Transaction({ transaction }) {
    // Fetching Delete and Edit Function From Global COntext Using useContext
    const { deleteTransaction, editTransaction } = useContext(GlobalContext)
    // Condition for plus minus sign if amount is greater or less than 0
    // Sign value will show in the transactionlist with amount
    const sign = transaction.amount < 0 ? "-" : "+";
    // States for Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // States for input value for Modal
    const [textvalue, setTextValue] = useState("");
    const [amountvalue, setAmountValue] = useState("");


    return (
        <div>
            <li className={transaction.amount < 0 ? "minus" : "plus"}>

                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}<button onClick={() => {

                    handleShow()
                }} className='deleteBtn' style={{ left: "-8%", background: "#9c88ff" }}><FaPenToSquare size={16} /></button>

                </span>
                <button className='deleteBtn' onClick={() => deleteTransaction(transaction.id)}>x</button>

            </li>
            <Modal show={show} onHide={handleClose} size="lg" className='modal-position horizontal-position'>
                <Modal.Header>
                    <Modal.Title><h2>Edit Item</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: "20vw", margin: "auto" }}>
                        <input type="text" placeholder='Text...' value={textvalue} onChange={(e) => { setTextValue(e.target.value) }} style={{ margin: "10px", borderRadius: "10px" }} />
                        <input type="text" placeholder='Amount...' value={amountvalue} onChange={(e) => { setAmountValue(e.target.value) }} style={{ margin: "10px", borderRadius: "10px" }} />

                    </div>






                </Modal.Body>
                <Modal.Footer>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", margin: "10px" }}>
                        <Button variant="secondary" onClick={handleClose} style={{ width: "10vw", margin: "auto", borderRadius: "10px" }}>
                            Close
                        </Button>

                        <Button variant="secondary" onClick={() => { editTransaction(transaction.id, textvalue, amountvalue); }} style={{ width: "10vw", margin: "auto", borderRadius: "10px" }}>
                            Submit
                        </Button>
                    </div>

                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Transaction