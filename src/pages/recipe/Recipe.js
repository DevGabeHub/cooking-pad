import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

//styles
import './Recipe.css'

const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipe && (
        <>
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
        </>
      )}
    </div>
  )
}

export default Recipe
