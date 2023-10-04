const List = ({details,name,changedetails}) => {
 
        return(
            <div>
                <h2>{name}</h2>
                {
                    details.map((det) =>
                    (
                        <div key={det.id}>
                            <h3>{det.Name}</h3>
                            <h3>{det.Location}</h3>
                            <h3>{det.Food}</h3>
                        </div>
                    
                        )
                    )
                }
            </div>
        )
    
}
export default List;