
var React = require('react');
var $ = require('jquery');

var SearchForm = React.createClass({

  render: function() {
    return(
      <div className="row text-center">
        <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-2">
          <form id="searchForm" encType="multipart/form-data" action="/search" method="post" className="form-inline">
            <select name="category" className="form-control">
              <option value="tops">Top</option>
              <option value="bottoms">Bottom</option>
              <option value="shoes">Shoes</option>
              <option value="outerwear">Outerwear</option>
            </select>
            <div className="form-group">
              <input type="text" placeholder="Color" name="itemColor" id="itemColor" className="form-control" />
              <input type="text" placeholder="Warmth" name="itemWarmth" id="itemWarmth" className="form-control" />
              <input type="text" placeholder="Pattern" name="itemPattern" id="itemPattern" className="form-control" />
              <input type="text" placeholder="Formality" name="itemFormality" id="itemFormality" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" value="Search" name="submit" className="btn btn-success" />
            </div>
          </form>
        </div>
      </div>
  )}
});
module.exports = SearchForm;
