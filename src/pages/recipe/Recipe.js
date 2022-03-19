import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import { useTheme } from '../../hooks/useTheme'

//styles
import './Recipe.css'

const Recipe = () => {
  const { mode } = useTheme()
  const { id } = useParams()
  const { document: recipe, isPending, error } = useDocument('recipes', id)

  return (
    <div className={`recipe ${mode}`}>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to make</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>
                <em>{ing}</em>
              </li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe
