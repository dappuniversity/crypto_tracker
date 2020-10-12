import React, { Component } from 'react';
import chart from '../logos/chart.png';
import btc from '../logos/btc.png';
import eth from '../logos/eth.png';
import link from '../logos/link.png';
import ada from '../logos/ada.png';
import xmr from '../logos/xmr.png';
import yfi from '../logos/yfi.png';
import lend from '../logos/lend.png';
import comp from '../logos/comp.png';
import uni from '../logos/uni.png';
import gnt from '../logos/gnt.png';

const axios = require("axios");

class App extends Component {

  // TODO: LOAD DATA FROM API HERE...

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-monospace text-white">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chart} width="30" height="30" className="d-inline-block align-top" alt="" />
            Crypt0 Track3r
          </a>
          {/* TODO: Code goes here... */}
        </nav>
        &nbsp;
          <div className="container-fluid mt-5 w-50 p-3">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex text-center">
                  <table className="table table-striped table-hover table-fixed table-bordered text-monospace">
                    <caption>Data Source:
                      <a target="_blank" rel="noopener noreferrer" href="https://coinpaprika.com/">coinpaprika</a>
                    </caption>
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Market Cap</th>
                      </tr>
                    </thead>
                      <tbody>
                        {/* TODO: Code goes here... */}
                      </tbody>
                  </table>
              </main>
            </div>
          </div>
      </div>
    );
  }
}

export default App;