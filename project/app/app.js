module.exports = require('angular').module('browserify', [])
                .controller('titleController',['$scope', ($scope) =>{
                        $scope.title = 'Browserify !!!';
                }]);