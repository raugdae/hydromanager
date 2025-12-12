function DeleteButton({submit = false, children = 'Enregistrer',onClick}) {

    return (
    <button className='text-white bg-red-950 rounded-2xl px-2 border-red-800 border-2 hover:cursor-pointer hover:bg-red-300 hover:text-red-800 w-48'type={submit?'submit':'button'} onClick={onClick}>{children}</button>
)

}
export default DeleteButton