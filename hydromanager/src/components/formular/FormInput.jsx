import "./FormStyle.css";

function FormInput({title,value,name}){

    return (
        <div className='form-item-wrapper'>
            <h1 className="form-item-title">{title}</h1>
            <input type='text' className='form-item-input' name={name} value={value}></input>
        </div>
    )

}
export default FormInput