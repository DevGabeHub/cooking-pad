import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

//styles
import './Recipe.css'

const Recipe = () => {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className="recipe">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <div>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to make</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>
                <em>{ing}</em>
              </li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  )
}

export default Recipe
