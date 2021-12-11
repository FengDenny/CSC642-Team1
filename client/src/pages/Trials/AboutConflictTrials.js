import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../stimulate-backend/data/conflict-free.json";

export default function AboutConflictTrials() {
  const { id } = useParams();
  const conflict = trials["Conflict-Free"].find(
    (trials) => trials.id === Number(id)
  );
  return (
    <div>
      {conflict ? (
        <div>
           <h1>{conflict .title}</h1>
          <p>{conflict .description}</p>

          <h1>Legals</h1>
          <div>
          <a href=" # " >  Legals Information</a> 
          <p></p>
          <a href=" # " >  Legals Disclosures</a> </div>
          <p></p>
          <h1>Eligibility</h1>
          {conflict .eligibility.map((el) => el.eligible && el.eligible.map((id) => <div>
          <p>{id.requirement_one}</p>
          <p>{id.requirement_two}</p>
          <p>{id.requirement_three}</p></div>
          ))}
          {conflict .eligibility.map((el) => el.ineligible && el.ineligible.map((id) => <div>
          <p>{id.requirement_one}</p>
          <p>{id.requirement_two}</p>
          <p>{id.requirement_three}</p>
          
          <h1>Prerequisite</h1> 
          <p>                 </p> 
          <p></p></div>
          ))}

         
          <h1>Details</h1>    
          <p>Participant : {conflict .participants}</p>
          <p>ID:         {conflict .id}</p>
          <p>Payout:     {conflict .price}</p>
          <p>Study Type: </p>
          <p>Start Date: </p>
          <p>End Date: </p>
          <p>Last Update: </p>
        </div>
    
      ) : (
        <h1> Sorry, but this trials doesn't exist yet!</h1>
      )}
    </div>
  );
}
