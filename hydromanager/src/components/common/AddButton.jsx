import {Plus} from 'lucide-react';

function AddButton ({handleButtonClick}) {
    return (<button onClick={(handleButtonClick)}>
        <Plus
            size={48}
            color={"green"}
            className={
              "hover:cursor-pointer hover:stroke-black hover:rotate-90 transition-transform"
              
            }
          />
    </button>)

}
export default AddButton