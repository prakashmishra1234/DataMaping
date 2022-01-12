import React, { useState } from 'react'
import './Demo.css';

function Demo(props) {
    const employees = [
        {
            name: "Prakash1",
            id: 1033029,
            Address: [
                {
                    street: 402,
                    Pincode: "200001",
                    Contact: [
                        {
                            email: "abc@gmail.com",
                            phone: 9507041006,
                        }]
                }]
        },
        {
            name: "Prakash2",
            id: 1033029,
            Address: [
                {
                    street: 402,
                    Pincode: "200001",
                    Contact: [
                        {
                            email: "abc@gmail.com",
                            phone: 9507041006
                        }]
                }]
        }, {
            name: "Prakash3",
            id: 1033029,
            Address: [
                {
                    street: 402,
                    Pincode: "200001",
                    Contact: [
                        {
                            email: "abc@gmail.com",
                            phone: 9507041006
                        }]
                }]
        },
        {
            name: "Prakash4",
            id: 1033029,
            Address: [
                {
                    street: 402,
                    Pincode: "200001",
                    Contact: [
                        {
                            email: "abc@gmail.com",
                            phone: 9507041006
                        }]
                }]
        },
    ]

    const [copied, setCopied] = useState([]);
    const [name, setName] = useState([]);
    const [id, setId] = useState([]);
    const [street, setStreet] = useState([]);
    const [pin, setPin] = useState([]);
    const [email, setEmail] = useState([]);
    const [mob, setMob] = useState([]);

    const onDrag = (key) => {
        const arr = []
        employees.map((item) => {
            arr.push({ [key]: item[key] })
        })
        setCopied(arr)
    }

    console.log({ copied })
    const Card = ({ employees, title = "" }) => {

        return (
            <>
                {
                    employees.map((item, index) => {

                        var id = '';
                        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        var charactersLength = characters.length;
                        for (var i = 0; i < charactersLength; i++) {
                            id += "Example" + characters.charAt(Math.floor(Math.random() *
                                charactersLength));
                        }
                        return (
                            <div>
                                <p>
                                    <a className="btn btn-primary buttonCss" data-toggle="collapse" href={"#" + id} role="button" aria-expanded="false" aria-controls={id}>
                                        {!title ? "Employees" : title}
                                    </a>
                                </p>
                                <div className="collapse" id={id}>

                                    {
                                        Object.keys(item).map((key) => {
                                            // console.log(typeof [], item[key])

                                            return (
                                                <div className="card card-body cardBody">
                                                    {typeof item[key] != "object" ? <button draggable onDragStart={() => { onDrag(key) }}>{key}:{item[key]}</button> :
                                                        < Card employees={item[key]} title={key} />
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div className='containers'>
            <div className='parentDiv'>
                <Card employees={employees} />
            </div>
            <div>
                <ul className='unorderedList'>

                    <button onDragEnd={() => { setName(copied) }}>Name {name.map((item) => {
                        return item.name + ", "
                    }) ?? ""}</button>

                    <button onClick={() => { setId(copied) }}>Id {id.map((item) => {
                        return item.id + ", "
                    }) ?? ""}</button>

                    <button onClick={() => { setStreet(copied) }}>Street {street.map((item) => {
                        return item.street + ", "
                    }) ?? ""}</button>

                    <button onClick={() => { setPin(copied) }}>Pincode {pin.map((item) => {
                        return item.pin + ", "
                    }) ?? ""}</button>

                    <button onClick={() => { setEmail(copied) }}>Email {email.map((item) => {
                        return item.pin + ", "
                    }) ?? ""}</button>

                    <button onClick={() => { setMob(copied) }}>Phone {mob.map((item) => {
                        return item.pin + ", "
                    }) ?? ""}</button>


                </ul>
            </div>
        </div>
    )
}
export default Demo
