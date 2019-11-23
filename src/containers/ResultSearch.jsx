/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import ListResults from '../components/ListResults';
import ListItem from '../components/ListItem';

/*
const URL = `https://socialexperiences.rodpasquel.now.sh/api/experiences/byDate/{startDate}`;

async function getData(url) {
  const response = await fetch(url);
  const myJson = await response.json();
  return JSON.stringify(myJson);
}

//const { experiences } = getData(URL);
*/

const ResultSearch = (props) => {
  const { experiences } = props;
  console.log('experiences ', experiences);
  return (
    <>
      <Results>
        <ListResults>
          {experiences.map((item) => <ListItem key={item._id} {...item} />)}
        </ListResults>
      </Results>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experiences,
  };
};

/* const mapDispatchToProps = {
  viewExperiences,
}; */

export default connect(mapStateToProps, null)(ResultSearch);
