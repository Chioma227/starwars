// export default function App() {
// const [datas, setDatas] = useState(data)

// function SetInterval(){

// }
// const setInterval = () => {

// }

const [filteredItems, setFilteredItems] = useState(items)

    const [items, setItems] = useState(data)
    
    const filterMale = () => {
        const filtered = items.filter((item) =>{
            return(
                item.gender === "Male"
            )
        })
        setFilteredItems(filtered)
        console.log(filteredItems);
    }

//     const filterFemale = () => {
//         const filtered = items.filter(item => item.gender === "Female")
//         setFilteredItems(filtered)
//         console.log(filteredItems);
//     }
//     return (
//         <>
//             {filteredItems.map(item => {
//                 const { id, img, email, name, gender, university } = item
//                 return (
//                     <div key={id}>
//                         <h1>{name}</h1>
//                     </div>
//                 )
//             })}
//             <button onClick={() => setFilteredItems(items)}>all</button>
//             <button onClick={filterMale}>male</button>
//             <button onClick={filterFemale}>female</button>

//         </>
//     )
// }
// const changeName = () => {
//     setName('me')
// }
// const cardContent = data.map((user) => {

//     return (
//         <div>
//             <Card
//                 img={user.img}
//                 key={user.id}
//                 name={user.name}
//                 email={user.email}
//                 gender={user.gender}
//                 university={user.university}
//             />
//             <h1>{name}</h1>
//             <button onClick={changeName}>
//                 click me
//             </button>
//         </div>
//     )
// })
// return (
//     <div className="d-flex">
//         <Sidebar />
//         <div className="grid">
//             {cardContent}
//         </div>
//     </div>
// )





























s