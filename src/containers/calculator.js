import React, { Component } from 'react';
import Display from './display';
import { connect } from 'react-redux';
import { selectButton } from '../actions';
import { bindActionCreators } from 'redux';
// import Display from './display';

class Calculator extends Component {
    renderButtons() {
        return this.props.buttons.map((b, key) => {
             return (
                 <button
                    key={key}
                    onClick={() => selectButton(b)}>
                    {b}
                </button>
             )
        });
    }
  render() {
    return (
      <div>
          <div id="calcBody">
              <Display />
              <div id="button-container">
                {this.renderButtons()}
              </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        buttons: state.buttons
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectButton: selectButton }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
