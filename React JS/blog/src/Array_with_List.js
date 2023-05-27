import { Table } from 'react-bootstrap';

export default function Array() {

    // const students = ["Sumit" , "saurabh" , "tejas" , "Aditya" , "Aman" , "Yash"];
    const students = [
        {
            name: "Sumit", email: "abc@gmail.com", id: 12, address: [
                { hn: "5", city: "pune", country: "India" },
                { hn: "54", city: "Mumbai", country: "India" },
                { hn: "35", city: "Satara", country: "India" },
            ]
        },

        {
            name: "Saurabh", email: "xyz@gmail.com", id: 2, address: [
                { hn: "5", city: "Gurgaon", country: "India" },
                { hn: "54", city: "Mumbai", country: "India" },
                { hn: "35", city: "Delhi", country: "India" },
            ]
        },

        {
            name: "Aditya", email: "pqr@gmail.com", id: 14, address: [
                { hn: "5", city: "Noida", country: "India" },
                { hn: "54", city: "Bangalore", country: "India" },
                { hn: "35", city: "Kashmir", country: "India" },
            ]
        }
    ]

    return (
        <div>
            <h1> Handle array with list</h1>
            <Table striped bordered hover size="100%" variant="dark">
                <thead>
                    <tr >
                        <td> Number </td>
                        <td> name</td>
                        <td> email</td>
                        <td> id</td>
                        <td> city</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, index) =>
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {item.name}</td>
                                <td> {item.email}</td>
                                <td> {item.id}</td>
                                <td>
                                    <Table striped hover size="100%" style={{ color: "white" }} variant="dark">
                                        <tbody>{
                                            item.address.map((data, i) =>
                                                <tr key={i}>
                                                    <td> {data.hn} </td>
                                                    <td> {data.city} </td>
                                                    <td> {data.country} </td>
                                                </tr>
                                            )
                                        }</tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

/* Why we use map instead of loop?
      Because return statement supports map but does not support loop.
*/