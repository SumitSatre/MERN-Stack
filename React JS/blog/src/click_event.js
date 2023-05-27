 function Mango(){

    function apple(){
        alert("Hi from apple");
    }

    return (
        <div>
            <button onClick={apple}>Click ME!</button>
        </div>
    );
}

export default Mango;