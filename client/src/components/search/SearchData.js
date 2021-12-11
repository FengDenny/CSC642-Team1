import React, { useState } from "react";
import SearchTrials from "./SearchTrials";
import { useSelector } from "react-redux";
import LatestTrials from "../../stimulate-backend/data/latest-trials.json";
import futureTrials from "../../stimulate-backend/data/future-trials.json";
import conflictTrials from "../../stimulate-backend/data/conflict-free.json";
import SearchCard from "../../components/card/Cards";

export default function SearchData() {
  const { search } = useSelector((state) => ({ ...state }));
  const { select } = search;

  // Recruiting Latest Search
  const latest = LatestTrials["Latest Trials"]
    .map((trials) => trials)
    .sort(function (a, b) {
      return a.id - b.id;
    })
    .filter((status) => status.detail[0].status === select[0].value)
    .map((item, index) =>
      item.eligibility.map(
        (i) =>
          i.eligible &&
          i.eligible.map(
            (isEligible) =>
              i.ineligible &&
              i.ineligible.map((notEligible) => (
                <>
                  <SearchCard
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
                    btnName={"Learn More"}
                  ></SearchCard>
                </>
              ))
          )
      )
    );
  // Recruiting Conflict Search
  const conflict = conflictTrials["Conflict-Free"]
    .map((trials) => trials)
    .sort(function (a, b) {
      return a.id - b.id;
    })
    .filter((status) => status.detail[0].status === select[0].value)
    .map((item, index) =>
      item.eligibility.map(
        (i) =>
          i.eligible &&
          i.eligible.map(
            (isEligible) =>
              i.ineligible &&
              i.ineligible.map((notEligible) => (
                <>
                  <SearchCard
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
                  ></SearchCard>
                </>
              ))
          )
      )
    );

  // Not Recruiting Future
  const future = futureTrials
    .map((trials) => trials)
    .sort(function (a, b) {
      return a.id - b.id;
    })
    .filter((status) => status.detail[0].status === select[0].value)
    .map((item, index) =>
      item.eligibility.map(
        (i) =>
          i.eligible &&
          i.eligible.map(
            (isEligible) =>
              i.ineligible &&
              i.ineligible.map((notEligible) => (
                <>
                  <SearchCard
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
                    btnName={"Discover"}
                  ></SearchCard>
                </>
              ))
          )
      )
    );

  return (
    <>
      <SearchTrials
        select={select}
        latest={latest}
        conflict={conflict}
        future={future}
      />
    </>
  );
}
