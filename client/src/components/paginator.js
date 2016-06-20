import React from 'react';
import { Component } from 'react';

class Paginator extends Component {
    
    render() {
        var pages = Math.ceil(this.props.total/this.props.pageSize);
        return (
            <div className="container">
                <div className="row padding">
                    <div className="col-xs-4 nopadding">
                        <button type="button" className="btn btn-default"  onClick={this.props.previous}>
                            <span className="glyphicon glyphicon-chevron-left" >"Previous"</span>
                        </button>
                    </div>
                    <div className="col-xs-4 text-center">
                        <div className="legend">{this.props.total}, "page", {this.props.page}, "/", {pages}>
                        </div>
                    </div>
                    <div className="col-xs-4 nopadding">
                        <button type="button" className="btn btn-default pull-right"  onClick={this.props.next}>"Next"
                            <span className="glyphicon glyphicon-chevron-right" >"Previous"</span>
                        </button>
                    </div>
                </div>
            </div>
            
            );
        
    } 
}

var Paginator = React.createClass({displayName: "Paginator",

    render: function () {
        var pages = Math.ceil(this.props.total/this.props.pageSize);
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "row padding", style: {height: "40px"}}, 
                    React.createElement("div", {className: "col-xs-4 nopadding"}, 
                        React.createElement("button", {type: "button", className: "btn btn-default" + (this.props.page <= 1 ? " hidden" : ""), onClick: this.props.previous}, 
                            React.createElement("span", {className: "glyphicon glyphicon-chevron-left", "aria-hidden": "true"}), " Previous"
                        )
                    ), 
                    React.createElement("div", {className: "col-xs-4 text-center"}, 
                        React.createElement("div", {className: "legend"}, this.props.total, " beers • page ", this.props.page, "/", pages)
                    ), 
                    React.createElement("div", {className: "col-xs-4 nopadding"}, 
                        React.createElement("button", {type: "button", className: "btn btn-default pull-right" + (this.props.page >= pages ? " hidden" : ""), onClick: this.props.next}, 
                        "Next ", React.createElement("span", {className: "glyphicon glyphicon-chevron-right", "aria-hidden": "true"})
                        )
                    )
                )
            )
        );
    }
});
