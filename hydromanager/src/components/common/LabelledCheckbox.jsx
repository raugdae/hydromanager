function LabelledCheckbox({inputName,labelText,inputValue,onChange}) {
    return (
        <div className='flex flex-row gap-2'>
            <input name={inputName} type='checkbox' className='bg-zinc-200 px-2' checked={inputValue} onChange={(e)=>onChange(e.target.name,e.target.checked)}/>
            <label className='font-bold'>{labelText}</label>
            
        </div>
    )
}
export default LabelledCheckbox