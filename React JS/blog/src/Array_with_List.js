export default function Array(){

    // const students = ["Sumit" , "saurabh" , "tejas" , "Aditya" , "Aman" , "Yash"];
    const students = [
            {name:"Sumit" , email:"abc@gmail.com" , id:12},
            {name:"Saurabh" , email:"xyz@gmail.com" , id:2},
            {name:"Aditya" , email:"pqr@gmail.com" , id:14}
        ]

    return(
        <div>
            <h1> Handle array with list</h1>
            <table border="3">
                <tr>
                    <td> name</td>
                    <td> email</td>
                    <td> id</td>
                </tr>
            {
                students.map((item)=>
                    <tr>
                        <td> {item.name}</td>
                        <td> {item.email}</td>
                        <td> {item.id}</td>
                    </tr>
                )
            }
            </table>
        </div>
    )
}

/* Why we use map instead of loop?
 	Because return statement supports map but does not support loop.
*/