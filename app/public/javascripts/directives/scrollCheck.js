app.directive('scrollCheck', function($window) {
    return {
      link: function(scope, element, attrs){
        $(window).scroll(function() { 
          console.log("here is not there");
          if($(window).scrollTop() + $(window).height() == $(document).height()) {
          alert("bottom!");
        }
      });
    }
  };
});