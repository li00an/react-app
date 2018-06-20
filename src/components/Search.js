import React from 'react';

function Search(props) {
    if(!props.search) return null;
    return(
        <div className="search-wrapper">
            {props.search.map( (searchItem, i) => {
                return(
                    <div className="search-result" key={i}>
                        <div className="search-item">
                            <p>{searchItem.name}</p>
                            <div className="search-box">
                                <img className="search-image" src={searchItem.image.medium} alt={searchItem.name} />
                                {searchItem.rating.average ? <div className="search-rating">{searchItem.rating.average}</div> : ''}
                            </div>
                            <p className="search-gengre">{searchItem.genres.join(', ')}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
export default Search;
