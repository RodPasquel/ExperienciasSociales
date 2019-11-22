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

  return (
    <>
      <Results>
        <ListResults>
          {experiences.map(item => 
            <ListItem key={item._id} {...item} />
          )}
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ListResults>
      </Results>
    </>
  );
};

//export default ResultSearch;

const mapStateToProps = state => {
  return {
    experiences: state.experiences,
  };
};

export default connect(mapStateToProps, null)(ResultSearch);
