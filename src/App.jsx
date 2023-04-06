import { useState } from "react"
import { AddCategory, GifGrid } from './components'
function App() {
  const [categories, setCategories] = useState(['Messi'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories]);
  }
  return (
    <div className="App">
      <h1>GifApp</h1>
      <AddCategory
        // onAddCategory = {setCategories}
        onNewCategory={value => onAddCategory(value)}
      />
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category} />
      ))}
    </div>
  )
}

export default App
