import { useReducer } from "react"

const ObjectName=()=>{
let obj={
    name:"Newjin",
    age:24,
    place:"Nagercoil"
}
let odata=Object.entries(obj)
return(
    <table border={2}>
        <thead>
            <tr>
                
                <td>Name</td>
                <td>Place</td>
            </tr>
        </thead>
        <tbody>
            
        {
                odata.map((data,index)=>(
                    <tr key={index}>
                        <td>{data[0]}</td>
                        <td>{data[1]}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
)

}
export default ObjectName