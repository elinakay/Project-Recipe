import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [photoError, setPhotoError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate photo URL
    if (!validateURL(photo)) {
      setPhotoError("Invalid URL");
      return;
    }

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
    setPhotoError("");
  };

  const validateURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
  type="text"
  name="name"
  id="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Name"
  required
  style={{ width: "50px" }} 
/>
<input
  type="text"
  name="cuisine"
  id="cuisine"
  value={cuisine}
  onChange={(e) => setCuisine(e.target.value)}
  placeholder="Cuisine"
  required
  style={{ width: "50px" }} 
/>
<input
  type="text"
  name="photo"
  id="photo"
  value={photo}
  onChange={(e) => setPhoto(e.target.value)}
  placeholder="Photo URL"
  required
  style={{ width: "50px" }} 
/>
<textarea
  name="ingredients"
  id="ingredients"
  value={ingredients}
  onChange={(e) => setIngredients(e.target.value)}
  placeholder="Ingredients"
  required
  style={{ width: "30px" }} 
></textarea>
<textarea
  name="preparation"
  id="preparation"
  value={preparation}
  onChange={(e) => setPreparation(e.target.value)}
  placeholder="Preparation"
  required
  style={{ width: "30px" }} 
></textarea>

        <button type="submit">Create</button>
      </div>
      {photoError && <div className="error-message">{photoError}</div>}
    </form>
  );
}

export default RecipeCreate;


