var React = require('react');
var {Link, IndexLink} = require('react-router');


// Can also use <a>
// <a href="#/about"> About </a>

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }

    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input ref="search" type="search" placeholder="Search Weather by city"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
