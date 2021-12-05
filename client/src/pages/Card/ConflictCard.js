import React from "react";
import Card from "../../components/card/Cards";
import trials from "../../data/conflict-free.json";

export default function ConflictCard() {
  return (
    <>
      {/* show only 4 cards  */}
      {trials["Conflict-Free"] &&
        trials["Conflict-Free"].slice(0, 4).map((item, index) =>
          item.eligibility.map(
            (i) =>
              i.eligible &&
              i.eligible.map(
                (isEligible) =>
                  i.ineligible &&
                  i.ineligible.map((notEligible) => (
                    //   console.log(notEligible),
                    //   console.log(isEligible),
                    <>
                      <Card
                        key={index}
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
                      ></Card>
                    </>
                  ))
              )
          )
        )}
    </>
  );
}
