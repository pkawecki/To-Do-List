import { getCardsForSearchResults } from '../../redux/cardRedux';
import { connect } from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const string = props.match.params.string;
  const cards = getCardsForSearchResults(state, string);

  return{
    string,
    cards,
  };
};

export default connect(mapStateToProps)(SearchResults);