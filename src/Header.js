import PropTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <div> 
    <h1 style = {{color:'red', backgroundcolor:'blue'}}> This is H1 tag </h1>
    {title}
    
    </div>
  )
}

Header.defaultProps =  {
    title: "This is the default props"
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }


export default Header