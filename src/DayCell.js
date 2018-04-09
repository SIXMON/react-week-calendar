import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    startSelection: PropTypes.func.isRequired,
    disabledSelection: PropTypes.bool,
};

class DayCell extends React.Component {
    handleMouseDown = e => {
        if (e.button === 0 && !this.props.disabledSelection) {
            this.props.startSelection();
        }
    };

    render() {
        return (
            <div
                onMouseDown={this.handleMouseDown}
                className={`dayCell ${this.props.disabledSelection ? "dayCell-disabled" : ""}`}
                role="presentation"
            >
                {""}
            </div>
        );
    }
}

DayCell.propTypes = propTypes;
export default DayCell;
