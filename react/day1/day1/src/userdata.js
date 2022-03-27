// const Userdata = () =>{


// }

function Userdata(props) {
console.log(props)
    return (
        <>

            <p>Username:{props.user.name}</p>
            <p>Position:{props.user.position} </p>
            <button></button>
        </>
    )

}
export default Userdata;