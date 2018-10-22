(function() {
    'use strict';

    cfmIssuesApp.controller('ProjectsController', ['cfaApi', ProjectsController]);

    function ProjectsController(cfaApi) {
        var model = this;

        model.currentPage = 1;
        model.pageSize = 10;

        model.languageOptions = [
            {'key': 'css', 'value': 'CSS'},
            {'key': 'groovy', 'value': 'Groovy'},
            {'key': 'html', 'value': 'HTML'},
            {'key': 'java', 'value': 'Java'},
            {'key': 'javascript', 'value': 'JavaScript'},
            {'key': 'php', 'value': 'PHP'},
            {'key': 'python', 'value': 'Python'},
            {'key': 'ruby', 'value': 'Ruby'}
        ];

        model.getProjects = function(newPage) {
            cfaApi.getSearch(model.pageSize, newPage, 'repositories').then(function(res) {
                console.log('res', res);
                model.totalCount = res.total_count;
                model.projects = res.items;
            });
        };

        model.getProjects();
    }

}());
