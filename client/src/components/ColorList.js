import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const initialNewColor = { color: '', code: {hex: ''}, id: Date.now()}

const ColorList = ({setColors, colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd ] = useState(initialNewColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      console.log(res)
      axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColors(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    })
    .catch(err => {
      console.log(err)
    })


  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(res => {
      console.log(res)
      axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColors(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      
    })
    .catch(err => {
      console.log(err)
    })
  };

  const addNewColor = e => {
    e.preventDefault();
    axiosWithAuth()
    .post(`http://localhost:5000/api/colors`, colorToAdd)
    .then(res => {
      console.log(res)
      axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColors(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      setColorToAdd(initialNewColor)
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing ? (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )
      :
       <form onSubmit={addNewColor}>
         <input placeholder='color' value={colorToAdd.color} onChange={e => setColorToAdd({...colorToAdd, color: e.target.value})} />
         <input placeholder='hex' value={colorToAdd.code.hex} onChange={e => setColorToAdd({...colorToAdd, code: { hex: e.target.value }})} />
         <button type='submit'>Add Color To List</button>
       </form>
      }
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
