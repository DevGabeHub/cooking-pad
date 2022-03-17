import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//styles
import './Searchbar.css'

const Searchbar = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchbar">Search</label>
        <input type="text" onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  )
}

export default Searchbar
