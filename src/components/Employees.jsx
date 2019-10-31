import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData, fetchJsFromCDN } from '../store/actions';

require('../styles/datatable.css');

const $ = require("jquery");
global.jQuery = $;

class Employees extends Component {



  componentDidMount = () => {
    this.props.fetchJsFromCDN("https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js")
      .then(resp => this.props.fetchJsFromCDN("https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js"))
      .then(resp => this.props.getTableData());
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSet && nextProps.dataSet.length > 0) this.dataTableInit(nextProps.dataSet)
  }

  componentWillUnmount = () => {
    if (typeof this.table !== 'undefined') {
      this.table.destroy();
    }
  };

  dataTableInit = (dataSet) => {
    this.$tbl = $(this.tbl);
    this.table = this.$tbl.DataTable({
      data: dataSet,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start date" },
        { title: "Salary" }
      ]
    });
  };

  render() {
    return (
      <div>
        <table
          className="table table-striped table-bordered"
          width="100% "
          ref={el => {
            this.tbl = el;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataSet: state.tableReducer.tableData
  }
}

export default withRouter(connect(mapStateToProps, { getTableData, fetchJsFromCDN })(Employees));
