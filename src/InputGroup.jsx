const InputGroup = ({ id, label, placeholder, type, value, "data-key": dataKey, onChange }) => {
  return (
    <div className="input-group">
        <label htmlFor={id}>
            <span>{label}</span>
        </label>

        {type === "textarea" ?
             (<textarea
             id={id}
             placeholder={placeholder}
             onChange={onChange}
             value={value}
             data-key={dataKey}
           ></textarea>)
            :
        (<input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        data-key={dataKey}
        onChange={onChange}
        />)
        }  
      
    </div>
  )
}

export default InputGroup
