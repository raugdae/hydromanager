import { useState, useEffect } from "react";


function EventDashboard() {

  if(!localStorage.getItem('eventid')) 
    return(<div>Merci de sélectionner un évènement</div>)
  else{
    return (
    <div className=" border-2 grid grid-cols-4 grid-rows-4 w-full max-h-4/5 gap-2">
      <div className='bg-green-200'></div>
      <div className='bg-amber-200'></div>
    </div>
  );
  }
}
export default EventDashboard;
