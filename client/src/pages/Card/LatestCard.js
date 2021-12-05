import React from "react";
import Card from "../../components/card/Cards";
import trials from "../../data/latest-trials.json";

export default function LatestCard() {
  return (
    <>
      {/* show only 4 cards  */}
      {trials["Latest Trials"] &&
        trials["Latest Trials"].slice(0, 4).map((item, index) =>
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
