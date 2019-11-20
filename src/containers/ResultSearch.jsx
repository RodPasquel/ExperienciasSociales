import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import ListResults from '../components/ListResults';
import ListItem from '../components/ListItem';

const ResultSearch = (props) => {
  const { experiences } = props;
  console.log('inside', experiences);
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
