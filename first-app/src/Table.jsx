const Table=()=>{
    const mapItems=["Blessie","Asis","Manoj","Newjin"]

    return(
        <table border={2}>
            <thead>
                <tr >
                    <td>S.no</td>
                    <td>Name</td>
                </tr>
            </thead>

            <tbody>
            {
                mapItems.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
export default Table