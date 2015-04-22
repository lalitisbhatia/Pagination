'use strict';
var paginationApp = angular.module('paginationApp',[]);
paginationApp.factory('utilityService', function($log,$filter,$q,$location ){
  var service = {

    getTimeSlots: function(start,count){
      var results = {};
      results.totalCount = this.TimeSlots.length;
      var retArr = [];

      for(var i=(start-1)*count;i<(start-1)*count+count-1;i++){
        if(this.TimeSlots[i]){
          retArr.push(this.TimeSlots[i]);
        }
      }
      results.searchData = retArr;
      return results;
    },

    TimeSlots: [
      '00:00:00', '00:15:00', '00:30:00', '00:45:00',
      '01:00:00', '01:15:00', '01:30:00', '01:45:00',
      '02:00:00', '02:15:00', '02:30:00', '02:45:00',
      '03:00:00', '03:15:00', '03:30:00', '03:45:00',
      '04:00:00', '04:15:00', '04:30:00', '04:45:00',
      '05:00:00', '05:15:00', '05:30:00', '05:45:00',
      '06:00:00', '06:15:00', '06:30:00', '06:45:00',
      '07:00:00', '07:15:00', '07:30:00', '07:45:00',
      '08:00:00', '08:15:00', '08:30:00', '08:45:00',
      '09:00:00', '09:15:00', '09:30:00', '09:45:00',
      '10:00:00', '10:15:00', '10:30:00', '10:45:00',
      '11:00:00', '11:15:00', '11:30:00', '11:45:00',
      '12:00:00', '12:15:00', '12:30:00', '12:45:00',
      '13:00:00', '13:15:00', '13:30:00', '13:45:00',
      '14:00:00', '14:15:00', '14:30:00', '14:45:00',
      '15:00:00', '15:15:00', '15:30:00', '15:45:00',
      '16:00:00', '16:15:00', '16:30:00', '16:45:00',
      '17:00:00', '17:15:00', '17:30:00', '17:45:00',
      '18:00:00', '18:15:00', '18:30:00', '18:45:00',
      '19:00:00', '19:15:00', '19:30:00', '19:45:00',
      '20:00:00', '20:15:00', '20:30:00', '20:45:00',
      '21:00:00', '21:15:00', '21:30:00', '21:45:00',
      '22:00:00', '22:15:00', '22:30:00', '22:45:00',
      '23:00:00', '23:15:00', '23:30:00', '23:45:00'
    ]
  };


  return service;
});


paginationApp.controller('paginateController',['$scope','$log','utilityService',function($scope,$log,utilityService) {
  $scope.init = function(){
    console.log('paginate controller initialised');
    $scope.pageNum = 1;
    $scope.resCount = 10;
    $scope.results = [];
    $scope.getResults();
  };

  $scope.getResults = function(){
    var data = utilityService.getTimeSlots($scope.pageNum,$scope.resCount);
    $scope.results = data.searchData;
    $scope.totalResults = data.totalCount;
  };

}]);
