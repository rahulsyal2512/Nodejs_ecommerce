import React, { Component } from 'react';
import './assignment.css';
import Helper from '../Helper/helper';
import Header from '../Header/header';
import $ from 'jquery';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';
import { bindActionCreators } from "redux";
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import {fetchBatches ,onPostAssignment} from '../../../action/batches'

class Assignment extends Component {

    notify1 = (msg) => {

        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    notify = (msg) => {

        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            batch_id: 0,
            loader: true,
            reset: true,
            _isUploaded: false,
            _isBatchSelected: false,
            cookieSave: ''
        };
        //  if(cookie.load('token')===undefined){
        //     this.props.history.push('/');
        // }
    }
    dropdown = (e) => {
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        this.setState({
            batch_id: selectedValue,
            _isBatchSelected: false
        });
    }

    fileSend = (e) => {
        this.setState({
            file: e.target.files[0],
            _isUploaded: false
        });
    }
    // fetchPosts = () => {
    //     console.log("Fetching");
    //     let res = Helper("batches", "GET");
    //     res.then((res) => {
    //         this.setState({
    //             posts: res,
    //         });
    //         console.log(res);
    //     });

    // }
    submit = () => {
        if (this.state.file === null || this.state.batch_id === 0) {
            if (this.state.file === null) {
                this.setState({
                    _isUploaded: true
                });
            }
            if (this.state.batch_id === 0) {
                this.setState({
                    _isBatchSelected: true
                });
            }
        }

        else {
            this.props.onPostAssignment(this.state.file,this.state.batch_id);
            // this.toggleLoader();
            // let data = new FormData();
            // data.append('batch_id', this.state.batch_id);
            // data.append('file', this.state.file);

            // let body = data

            // let res = Header("assignments", 'POST', body);
            // res.then((res) => {
            //     if (res.msg === 1) {
            //         this.notify1("Upload Successfull");
            //     }
            //     else {
            //         this.notify("Upload Failed");
            //     }
            //     this.toggleLoader();
            // });
            // this.empty();
        }
    }

    empty = () => {
        this.setState({
            batch_id: 0,
            file: null
        })
        $("#fileInputId").val(null);
        $("#exampleFormControlSelect1").prop('selectedIndex', 0);
    }

    render() {
        console.log(this.props)
        return (
            <div className="row">
            <Loader loader={this.state.loader} />
                <ToastContainer autoClose={4000} />
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title"> Upload A File</h4>
                            <p className="card-category"></p>
                        </div>
                        <form>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4 col-xs-2 col-lg-4 col-md-4 ">
                                        <div className="form-group">
                                            <label >Select Batch</label>
                                            <div className="col-lg-6 col-md-6">
                                            </div>
                                            <select className="form-control ml-3" data-style="btn btn-link" id="exampleFormControlSelect1"
                                                accept="image/*,application/pdf " onChange={(e) => { this.dropdown(e) }} required >
                                                <option value="Select from Below.." hidden>Select from Below..</option>
                                                {
                                                    this.props.batches.map((post, i) => {
                                                        return (
                                                            <option key={i} value={post.id}>{post.batch_name}</option>
                                                        );
                                                    })
                                                }
                                            </select>
                                            {this.state._isBatchSelected ?
                                                <div style={{ color: "red", marginTop: "6px", marginLeft: "18px" }}>&#9888; Batch is Required!</div >
                                                :
                                                <div></div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-5 ml-1">
                                    <div className="col-md-6 col-lg-10">
                                        <input type="file" className="change" name="pic" accept="image/*" id="fileInputId" onChange={(e) => this.fileSend(e)} accept="application/pdf, image/*" required />
                                        {this.state._isUploaded ?
                                            <div style={{ color: "red", marginTop: "6px" }}>&#9888; Upload Your File First!</div >
                                            :
                                            <div></div>
                                        }
                                    </div>

                                    <div className="col-md-6 col-lg-12 mr-0">
                                        <button type="button" className="btn btn-primary pull-right" onClick={(e) => this.submit(e)}>UPLOAD</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        );
    }
    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        })
    }
    componentDidMount() {
        this.props.onFetchBatches();
        this.toggleLoader();
        this.setState({ cookieSave: cookie.load('token') })

    }
}
const mapStateToProps = state => {
    return {
        batches:state.batches.items,
    }
}
const mapActionsToProps = (dispatch) => {
    return bindActionCreators(
    {
      onFetchBatches: ()=>  fetchBatches(),
      onPostAssignment:(batch_id, file)=> onPostAssignment(batch_id,file)
    },dispatch);
  };

export default connect(mapStateToProps, mapActionsToProps)(Assignment);