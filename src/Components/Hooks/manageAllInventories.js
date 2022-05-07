// import { useEffect, useState } from "react";

// const manageAllInventories = () => {
//     const [allInventories, setAllInventories] = useState([]);
//     useEffect(() => {
//         fetch('https://desolate-meadow-44441.herokuapp.com/manageInventory')
//             .then(res => res.json())
//             .then(data => setAllInventories(data));
//     }, []);
//     return [allInventories, setAllInventories];
// }
// export default manageAllInventories;