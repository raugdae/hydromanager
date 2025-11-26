function GroupModal ({isOpen, onClose, data,children}){
    return (
        <div>
        <div className='fixed inset-0 bg-black opacity-50'></div>
        {children}
    </div>)
}

export default GroupModal