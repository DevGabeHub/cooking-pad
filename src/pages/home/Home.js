import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'

//styles
import './Home.css'

const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch('http://localhost:3000/recipes')
  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Home
