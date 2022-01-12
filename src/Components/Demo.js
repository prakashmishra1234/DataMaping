import React, { useState } from 'react'
import './Demo.css';

function Demo(props) {

    const [copied, setCopied] = useState([]);
    const [destination, setDestination] = useState([])

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


    const onCopy = (key) => {
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
                                            console.log(typeof [], item[key])


                                            return (
                                                <div className="card card-body cardBody">
                                                    {typeof item[key] != "object" ? <button onClick={() => onCopy(key)}>{key}:{item[key]}</button> :
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

                    <button onClick={() => { setDestination(copied) }}>Name {destination.map((item) => {
                        return item.name + ", "
                    }) ?? ""}</button>
                    <button href="#">Id</button>
                    <button href="#">Street</button>
                    <button href="#">Pincode</button>
                    <button href="#">Email</button>
                    <button href="#">Phone</button>
                </ul>
            </div>
        </div>
    )
}
export default Demo
