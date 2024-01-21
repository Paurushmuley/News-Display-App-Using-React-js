import React, { Component } from 'react'
import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : '6',
        category : 'general'
        
    }
    static propTypes = {
        pageSize : PropTypes.number,
        country : PropTypes.string,
        category : PropTypes.string
    }
    constructor(){
        super();
        // console.log("THis is a constructor in the new component");
        this.state = {
            articles: [],
            loading: false,
            page : 1
        }
    }
    //apiKey=3ff5b73fed81498e810dce5295979a2e update this with your api key download from new api
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ff5b73fed81498e810dce5295979a2e&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    }
    handlePrevClick=async()=>{
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ff5b73fed81498e810dce5295979a2e&page=${this.state.page -1}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page +1,
            articles:parsedData.articles,
            loading: false
        })
    }
    handleNextClick=async()=>{
        console.log("Next")
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ff5b73fed81498e810dce5295979a2e&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page +1,
            articles:parsedData.articles,
            loading: false
        })
    }
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Present News - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row" >
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key = {element.title}>
                        <Newitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} publishedDate={element.publishedAt?element.publishedAt.slice(11,16):""} publishedAt =  {element.publishedAt?element.publishedAt.slice(0,10):""} imageUrl = {element.urlToImage} newsUrl={element.url} />
                    </div>;
                    })}
                </div>
                <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" id = "nexbtn" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div>
        )
    }
}
export default News
