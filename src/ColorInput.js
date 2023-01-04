const ColorInput = ({handleChange,color}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <label className="label">Add Color Name:</label>
    <input 
    className="input_box"
    type="text"
    onChange={(e)=>handleChange(e)}
    value={color}
    autoFocus
    required
    ></input>
    </form>
  )
}
export default ColorInput