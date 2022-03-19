import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import TrashCan from '../assets/trashcan.svg'
import { db } from '../firebase/config'
import { deleteDoc, doc } from 'firebase/firestore'

//style
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div classname='error'>No Recipes to load...</div>
  }

  const handleClick = (id) => {
    deleteDoc(doc(db, 'recipes', id))
  }

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <img
            className='delete'
            src={TrashCan}
            onClick={() => {
              handleClick(recipe.id)
            }}
            alt='Delete Icon'
          />
        </div>
      ))}
    </div>
  )
}

export default RecipeList
