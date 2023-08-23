import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps ={
      country:"in",
      pageSize: 6,
      category:"General"
  }

  static propsType ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  captializeFirstLetter= (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state={
        articles: [],
        loading: false,
        page:1,
        totalResults:0
    }
    document.title=`${this.captializeFirstLetter(this.props.category)}--Insight-Feed`
  }

  async componentDidMount(){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0453ttgg7ggttgd2241d68dbf02eb64&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      console.log("Api called")
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles , totalResults:parsedData.totalResults ,loading:false})
    
    } 
    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f097fnnnhd2241d6fdnhgne9550dg64d75&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      console.log("Api called")
      let parsedData = await data.json()
      this.setState({
        page: this.state.page - 1,
        articles:parsedData.articles,
        loading:false
      })
    }

    handleNextClick =async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0970274ad2241d68a2e92502eb64d75&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles,
        loading:false
      })
    }

    fetchMoreData= async()=>{
      this.setState({page: this.page +1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f034t027fkfbjkjewf23345wf2eb64d75&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        loading:false,
    })
  };


  render() {
    return (
        <div className='container my-3'>
          <h1 style={{textAlign:'center' , margin:'35px 0px' , marginTop:'90px',color:'black'}}>InsightFeed-Top {this.props.category} HeadLine</h1>
         {/*{this.state.loading &&<Spinner/>}*/} 
         <InfiniteScroll
         dataLength={this.state.articles.length}
         next={this.fetchMoreData}
         hasMore={this.state.articles !== this.totalResults}
         loader={<Spinner></Spinner>}
         >
          <div className='row'>
            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                  <NewsItem title={element.title} description={element.description}
                  imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
              </div>        
             })}
          </div>
          </InfiniteScroll>
        
        </div>
    )
  }
}

export default News
