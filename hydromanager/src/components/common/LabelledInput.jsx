function LabelledInput({inputName,labelText,inputValue,onChange}) {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-bold'>{labelText}</label>
            <input name={inputName} type='text' className='bg-zinc-200 px-2 w-full' value={inputValue} onChange={(e)=>onChange(e.target.name,e.target.value)}/>
        </div>
    )
}
export default LabelledInput