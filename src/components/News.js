import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { exerciseOptions, fetchData } from './fetchData';


const News = (props) => {
    const [news,setNews] = useState([])
    const [loading,setLoading] = useState(true)

    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


    const updateNews= async ()=> {
        props.setProgress(10);
        setLoading(true);
        let parsedData = await fetchData(`https://current-news.p.rapidapi.com/news/${props.message}`, exerciseOptions);
        props.setProgress(50);
        setNews(parsedData.news);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.message)} - NewsNuke`;
        updateNews();
        //eslint-disable-next-line
    },[])

        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsNuke - Top {capitalizeFirstLetter(props.message)} Headlines</h1>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && news.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
        )
    }

News.defaultProps = {
    message: 'general',
}

News.propTypes = {
    message: PropTypes.string,
}
export default News
