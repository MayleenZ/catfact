import axios from "axios";
import { useEffect, useState } from "react";

function CatFact1() {
  const [catfact, setCatfact] = useState(null);
  const [query, setQuery] = useState('1');

  useEffect(() => {
    const getCatFact = async () => {
      try {
        const response = await axios.get(`https://meowfacts.herokuapp.com/?id=${query}`);
        setCatfact(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCatFact();
  }, [query]);
  //runs the effect whenever the value of the 'query' dependency changes. by including [query] as the dependency array, the effect will be triggered when query state is updated

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
  };

  return (
    <div>
      <h1>Cat Fact 1 : Axios API</h1>
      <form onSubmit={handleSubmit}>
        <label>Cat Fact Number: </label>
        <input type="number" name="query" />
        <input type="submit" value="submit" />
      </form>
      {catfact && <p>{catfact.data}</p>}
    </div>
  );
}

export default CatFact1;
