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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="cuisine">Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          id="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="photo">Photo URL:</label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        {photoError && <span className="error-message">{photoError}</span>}
      </div>
      <div className="form-row">
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          name="ingredients"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-row">
        <label htmlFor="preparation">Preparation:</label>
        <textarea
          name="preparation"
          id="preparation"
          value={preparation}
          onChange={(e) => setPreparation(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-row">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default RecipeCreate;

