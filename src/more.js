   // console.log(data);
    // const [name, setName] = useState('abas')
    const [items, setItems] = useState(data)

    // const [filteredItems, setFilteredItems] = useState(filtered)

    const filter = (id) => {
        const filtered = items.filter(item => item.id !== id)
        setItems(filtered)
        // console.log(filteredItems);
    }

    return (
        <>
            {items.map(item => {
                const { id, img, email, name, gender, university } = item
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <button onClick={() => filter(id)}>clcik me</button>
                    </div>
                )
            })}
        </>
    )