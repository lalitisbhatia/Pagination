paginationApp.directive("resultsPaginate", function ($compile) {
  var template = '';
  return {
    restrict:'EA',

    link: function(scope, elem, attrs){
      console.debug(attrs);

      var resPerPage = attrs.resPerPage;
      var watchData = attrs.watchData;
      var searchFunction = attrs.searchFunction;
      var pagenumVar = attrs.pagenumVar;
      var prevText='';
      var resText='';
      var nextText='';
      console.log(resPerPage);
      scope.$watch(watchData, function (newValue) {
        var totalCnt = attrs.totalCount;
        var pgNum = attrs.pageNum;

        if(newValue ) {
          var elemText = '';
          console.debug('New value');


          if (totalCnt > 0) {
            //console.debug(totalCnt);
            //console.debug(pgNum);
            if (Math.floor((totalCnt - ((pgNum - 1) * resPerPage)) / resPerPage) >= 1) {
              //console.log(Math.floor((totalCnt - ((pgNum - 1) * resPerPage)) / resPerPage));
              //nextText = ' Next ' + resPerPage + ' Results';
              nextText = "<a href='' ng-click='" + pagenumVar+"="+pagenumVar + "+1;"  + searchFunction + "'" + " ><span>" + ' Next ' + resPerPage  + "</span></a>";
              resText = 'Results ' + ((pgNum - 1) * resPerPage + 1) + '-' + (pgNum * resPerPage) + ' of ' + totalCnt;
            }
            else {
              nextText = '';
              resText = 'Results ' + ((pgNum - 1) * resPerPage + 1) + '-' + totalCnt + ' of ' + totalCnt;
            }

            if (pgNum > 1) {
              //prevText = ' Previous ' + resPerPage + ' Results';
              prevText ="<a href='' ng-click='" + pagenumVar+"="+pagenumVar + "-1;" + searchFunction + "' >" + ' Previous ' + resPerPage  + "</a>";
            }
            else {
              prevText = '';
            }
            //console.debug(resText);
            //console.debug(nextText);
            //elem.text(prevText + ' ' + resText + ' ' + nextText)
            elem.html(prevText + "&nbsp;|&nbsp;<span >" + resText + "</span>&nbsp;|&nbsp;" + nextText);
            $compile(elem.contents())(scope);
          }
        }
      });

    }
  }


});