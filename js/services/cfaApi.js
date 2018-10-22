(function() {
    'use strict';

    cfmIssuesApp.factory('cfaApi', function($http) {
        var brigadeName = 'Code-for-Miami',
            apiUrl = 'https://api.github.com/search/';

        function getSearch(pageCount, pageNumber, type) {
            var currentPage = pageNumber || 1;
            var url = apiUrl + type + '?per_page=' + pageCount + '&page=' + currentPage + '&q=user:' + brigadeName;

            if(type === 'issues') url = url + '+state:open';

            return $http.get(url)
                .then(function (res) {
                    return res.data;
                });
        }

        return {
            getSearch: getSearch
        };

    });

})();
