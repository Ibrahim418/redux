import React from 'react'

const Filter = () => {
    
    return (
        <div>
          <form class="filter-input">
              <input type="radio" id="all" name="filter"/>
              <label for="all">All</label><input type="radio" id="done" name="filter"/>
              <label for="done">Done</label><input type="radio" id="undone" name="filter"/>
              <label for="undone">Not-done</label></form>  
        </div>
    )
}

export default Filter
