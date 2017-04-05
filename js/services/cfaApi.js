(function() {
    'use strict';

    cfmIssuesApp.factory('cfaApi', function($http) {
        var brigadeName = 'CodeForFtL',
            apiUrl = 'https://api.github.com/search/';

        function getSearch(pageCount, pageNumber, type) {
            var currentPage = pageNumber || 1;
            var url = apiUrl + type + '?per_page=' + pageCount + '&page=' + currentPage + '&q=user:' + brigadeName,
               options = {
                    headers: {
                       //'User-Agent': 'node.js'
                      
                    }
                }; 

            if(type === 'issues') url = url + '+state:open';

            return $http.get(url, options)
                .then(function (res) {
                    return res.data;
                    return res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
                });
           
        }
                         

        return {
            getSearch: getSearch
        };

    });

})();
