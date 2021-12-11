import React from "react";
import Card from "../../components/card/Cards";
import trials from "../../stimulate-backend/data/conflict-free.json";

export default function ConflictCard(props) {
  return (
    <>
      {/* show only 4 cards  */}
      {/* {console.log("After sort:", trials["Conflict-Free"])} */}
      {trials["Conflict-Free"] &&
        trials["Conflict-Free"]
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .slice(0, props.slice)
          .map((item, index) =>
            item.eligibility.map(
              (i) =>
                i.eligible &&
                i.eligible.map(
                  (isEligible) =>
                    i.ineligible &&
                    i.ineligible.map((notEligible) => (
                      <>
                        <Card
                          key={index}
                          id={item.id}
                          price={item.price}
                          title={item.title}
                          eligibility={item.participants}
                          eligibleOne={isEligible.requirement_one}
                          eligibleTwo={isEligible.requirement_two}
                          eligibleThree={isEligible.requirement_three}
                          eligibleFour={isEligible.requirement_four}
                          ineligibleOne={notEligible.requirement_one}
                          ineligibleTwo={notEligible.requirement_two}
                          ineligibleThree={notEligible.requirement_three}
                          ineligibleFour={notEligible.requirement_four}
                          status={item.detail[0].status}
                          btnName={"Participate"}
                        ></Card>
                      </>
                    ))
                )
            )
          )}
    </>
  );
}
