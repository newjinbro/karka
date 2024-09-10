import Mobile from './db.json'
const Details=()=>{
cd 
    return(
        <table border={1}>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Model_Name</td>
                    <td>Price</td>
                    <td>Image</td>

                </tr>
                
            </thead>
            <tbody>
                {
                    Mobile.mobiles.map((data,index)=>(
                        <tr >
                            <td>{index+1}</td>
                            <td>{data.model_name}</td>
                            <td>${data.price}</td>
                            <td>
                                <img src={data.image_link} alt={data.image_link} style={{borderRadius:"50%",height:"100px",width:"100px"}} />
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Details