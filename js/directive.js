angular.module('ImageCarouselDirective',[]).directive('imageCarousel', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/imagecarousel.html'
  };
});

angular.module('AudioPlayerDirective',[]).directive('audioPlayer', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/audioplayer.html'
  };
});

angular.module('VideoPlayerDirective',[]).directive('videoPlayer', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/videoplayer.html'
  };
});