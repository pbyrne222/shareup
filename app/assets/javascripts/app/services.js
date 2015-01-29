var services = [];

  angular.module('myApp.services', ['ngResource'])
  .factory('ArticleService', function($resource) {
    return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
      fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
    });
  });
  .service('FeedList', function ($rootScope, FeedLoader) {
    this.get = function() {
      var feedSources = [
    {title: 'Huffington Post', url: 'http://feeds.huffingtonpost.com/huffingtonpost/raw_feed'},
    ];
    if (feeds.length === 0) {
      for (var i=0; i<feedSources.length; i++) {
        FeedLoader.fetch({q: feedSources[i].url, num: 10}, {}, function (data) {
          var feed = data.responseData.feed;
          feeds.push(feed);
        });
      }
    }
    return feeds;
  };
  })
  .controller('FeedCtrl', function ($scope, FeedList) {
    $scope.feeds = FeedList.get();
    $scope.$on('FeedList', function (event, data) {
      $scope.feeds = data;
    });
  });
