import {Plus} from 'lucide-react';

function AddButton ({handleButtonClick}) {
    return (<button onClick={(handleButtonClick)}>
        <Plus
            size={48}
            color={"green"}
            className={
              "hover:cursor-pointer hover:stroke-black hover:bg-emerald-800"
            }
          />
    </button>)

}
export default AddButton