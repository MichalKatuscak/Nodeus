var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <h1>{this.props.headline}</h1>
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;