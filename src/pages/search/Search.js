import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

//styles
import './Search.css'

const Search = () => {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query
  const { data, isPending, error } = useFetch(url)
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <div className="error">{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Search
