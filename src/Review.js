import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props)  => {
  const [state, setState] = useState({ name: '', gender: '', age: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, gender, age } = steps;
    setState({ name, gender, age });
  }, [props])

    const { name, gender, age } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Solicitud</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Edad</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;