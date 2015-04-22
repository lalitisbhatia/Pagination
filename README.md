#Pagination Directive
- generic directive that can be used easily on any search page
- this example illustrates the use on the pagination.html page.
- use as attribute or element and specify the following attributes that refer to scope elements<br>
    -- watch-data    // this is the name of the scope variable that holds the search results<br>
    -- search-function   // name of the function that is called to get search results<br>
    -- pagenum-var   // name of the scope variable that holds the page number<br>
    -- page-num   // value of the page num<br>
    -- res-per-page   // no of results per page<br>
    -- total-count   // any call to searc sohuld send the total count<br>

- The example here has an illustrative controller and a utility service example that returns mock data for search.

## Usage
 Simply add to html like this:<br>
 ```
    <results-paginate watch-data="results" search-function="getResults();" pagenum-var="pageNum" res-per-page="{{resCount}}" page-num="{{pageNum}}" total-count="{{totalResults}}"></results-paginate>
 ```