const Item=()=>{
    const mapItems=["Blessie","Asis","Manoj","Newjin"]

    return(
        <ul>
            {
                mapItems.map((data,index)=>(
                    <li>{data}</li>
                ))
            }
        </ul>
    )
}
export default Item