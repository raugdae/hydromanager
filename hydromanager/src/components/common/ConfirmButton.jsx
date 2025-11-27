function ConfirmButton({submit = false, children = 'Enregistrer'}) {

    return (
    <button className='bg-lime-600 rounded-2xl px-2 border-lime-800 border-2 hover:cursor-pointer hover:bg-lime-300 hover:text-lime-800 w-48'type={submit?'submit':''}>{children}</button>
)

}
export default ConfirmButton