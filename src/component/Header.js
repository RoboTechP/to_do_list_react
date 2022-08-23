import Button from "./Button"

//impt import prop type
// {title} "This is how you do a prop tile"
// (props) "if you want to do it with prop.name-of-the-prop"
// patter is defaultProps = { title: PropTypes.string}
const Header = ({title}) => {
  const HeaderClick = () => {
    console.log('Header Click')
  }

  return (
    <div className="header"> 
    <h1> {title}</h1>
    <Button onClick = {HeaderClick} className='btn'/>
   
    
    </div>
  )
}


{/* <Button color ='green' text = 'Button 1' size='12px'/>
    <Button color ='black' text = 'Button 2' size='12px'/>
    <Button color ='red' text = 'Button 3'   size='12px'/> */}
// Header.defaultProps =  {
//     title: "This is the default props"
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }
//css in JS
// const headingStyle = {
//   color:'red',
//   backgroundColor:'black'
// }

export default Header