import './Button.css'
const Button=(props)=>{
return(
    <button className='button_style'>{props.children}</button>
)
}
export default Button