import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    addRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cuisine">Cuisine:</label>
              </td>
              <td>
                <input
                type="text"
                name="cuisine"
                id="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
                />
              </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="photo">Photo URL:</label>
                </td>
                <td>
                  <input
                  type="text"
                  name="photo"
                  id="photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  required
                  />
                </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="ingredients">Ingredients:</label>
                  </td>
                  <td>
                    <textarea
                    name="ingredients"
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                    ></textarea>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <textarea
                      name="preparation"
                      id="preparation"
                      value={preparation}
                      onChange={(e) => setPreparation(e.target.value)}
                      required
                      ></textarea>
                    </td>
                    </tr>
                    <tr>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
