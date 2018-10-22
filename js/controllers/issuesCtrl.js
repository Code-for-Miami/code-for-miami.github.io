(function() {
    'use strict';

    cfmIssuesApp.controller('IssuesController', ['cfaApi', IssuesController]);

    function IssuesController(cfaApi) {
        var model = this;

        model.currentPage = 1;
        model.pageSize = 25;

        model.getIssues = function(newPage) {
            cfaApi.getSearch(model.pageSize, newPage, 'issues').then(function(res) {
                console.log('res', res);
                model.totalCount = res.total_count;
                model.issues = res.items;
            });
        };

        model.getIssues();
    }

}());
