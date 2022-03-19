import RecipeList from '../../components/RecipeList'

//import collection
import { useCollection } from '../../hooks/useCollection'

//styles
import './Home.css'

const Home = () => {
  const { documents: recipes, isPending, error } = useCollection('recipes')

  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Home
