const Square = ({color,hexValue,isDarkText,setIsDarkText}) => {
  return (
    <section 
    className="app" 
    style={{
      backgroundColor : color,
      color : isDarkText ? '#000' : '#fff'
    }}>
      <h2>{color ? color : "Empty Color Value"}</h2>
      <h2>{hexValue ? hexValue : null}</h2>
    </section>
  )
}
Square.defaultProps = {
  color : "Empty Color Value"
}
export default Square