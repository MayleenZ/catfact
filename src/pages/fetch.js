import { useState, useEffect } from "react";

function CatFact2() {

    //use state functionality 
    // query of api, catfact 
    const [query, setQuery] = useState("1")
    const [catfact, setCatFact] = useState(null)

    //api call - fetch async await within try catch 
    useEffect(() => {
        try {
            const fetchAPI = async () => {
                const response = await fetch(`https://meowfacts.herokuapp.com/?id=${query}`)
                const data = await response.json()
                console.log(data);
                setCatFact(data)
                return data
            }
            fetchAPI()
        } catch (error) {
            console.error()
        }
    }, [query])


    //event handler (submit) onSubmit 
    function handleSubmit(e){
        e.preventDefault()
        setQuery(e.target.elements.query.value)
    }


    return (
        <div>
            <h1>Cat Fact 2 : fetchAPI</h1>
            <form onSubmit={handleSubmit}>
                <label>Cat Fact Number:</label>
                <input type = "number" name = "query"/>
                <input type = "submit" />
            </form>
           {catfact && <p>{catfact.data}</p>} 
        </div>
    )
}

export default CatFact2
