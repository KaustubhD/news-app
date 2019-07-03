import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class ListItemLink extends React.Component {
  renderLink = React.forwardRef((itemProps, ref) => (
    <Link to={this.props.to} {...itemProps} innerRef={ref} />
  ));

  render() {
    const { source, idx } = this.props;
    return (
      <ListItem
        button
        disableGutters={false}
        to={`/${source.id}`}
        component={this.renderLink}
        key={idx}
      >
        <ListItemText primary={source.name} secondary={source.category} />
      </ListItem>
    );
  }
}

ListItemLink.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

const Listie = props => {
  props = props.state;
  return (
    <div className="list-container">
      {props.sourceArray
        .filter(sc =>
          props.source ? sc.name.toLowerCase().includes(props.source) : true
        )
        .map((source, idx) => (
          <ListItemLink source={source} key={idx} />
        ))}
    </div>
  );
};

export default Listie;
