import React, {Component} from 'react';
import classNames from 'classnames';

export class Listbox extends Component {
    
    onOptionClick(event, option, index) {
        this.props.onChange({
            originalEvent: event,
            value: option.value,
            index: index
        });
        event.preventDefault();
    }

    render() {
        var styleClass = classNames('ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        return (
            <div className={styleClass} style={this.props.style}>
                <ul className="ui-listbox-list">
                    {this.props.options && this.props.options.map((option, index) => {
                        var listItemContent = this.props.itemTemplate ? this.props.itemTemplate(option) : option.label,
                        selected = this.props.value != null && this.props.value === option.value,
                        listItemStyleClass = classNames('ui-listbox-item ui-corner-all',{'ui-state-highlight': selected}),
                        listItem = <li className={listItemStyleClass} key={option.value}
                                        onClick={(event) => this.onOptionClick(event, option, index)}>
                                        {listItemContent}
                                    </li>;
                        return listItem;
                    })}
                </ul>
            </div>
        );
    }
}

Listbox.defaultProps = {
    value: null,
    options: null,
    onChange: null,
    itemTemplate: null,
    style: null,
    className: null
};

Listbox.propTypes = {
    value: React.PropTypes.object,
    options: React.PropTypes.array,
    onChange: React.PropTypes.func,
    itemTemplate: React.PropTypes.func,
    style: React.PropTypes.object,
    className: React.PropTypes.string
};