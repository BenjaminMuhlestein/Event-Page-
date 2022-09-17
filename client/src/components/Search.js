import React, {useState} from 'react';
import SearchList from './SearchList';

function Search({details}) {
    const [searchField, setSearchField] = useState("");

    cosnt filteredEvent = details.filter(
        event=> {
            return(
                event.name.toLowerCase().include(searchField.toLowerCase())
            )
        }
    )

    const handleChange = e => {
        setSearchField(e.target.value)
    }
    
    function searchList() {
        return(
            <SearchList filteredEvent = {filteredEvent} />
        )
    }

    return(
        <section className="garamond">
            <div className="navy georgia ma0 grow">
                <h2 className="f2">Search Event</h2>
            </div>
            <div className="pa2">
                <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3" type="search" placeholder= "Search Event" onChange = {handleChange}/>
            </div>
            {searchList()}
        </section>
    )

}

export default Search;