var app = angular.module("fancyselect", []);

app.directive("fancyselect", ['$rootScope','$parse',function($rootScope,$parse) {
    return {
        restrict: "E",
        templateUrl: "./dist/fancyselect.templ.html",
        scope: {
            label: "@",
            dataset: "=",
            model: "=",
            uniqueKey: "@",
            displayKey: "@",
            onChange: "&"
//            transclude: true
        },
        link: function(scope,element,attrs) {

            // initialize the local scope variables
            scope.bShowList = false;
            scope.bShowLabel = true;
            scope.selectedItem = angular.copy(scope.model);

            // when you select the item in the list
            scope.selectItem = function(item) {
                scope.bShowLabel = false;
                scope.selectedItem = item;
            };

            // a function to check the item in the loop is currently selected item and returns true/false
            scope.isSelectedItem = function(item) {
                return item[scope.uniqueKey] === scope.selectedItem[scope.uniqueKey];
            };

            // a function to show/hide the body of dropdown
            scope.toggleList = function() {
                scope.bShowList = !scope.bShowList;
            };

            // a function that detects the mouse click and decide to collapse the dropdown.
            angular.element(document).on("click", function(e) {
                var target =  angular.element(e.target);
                if (!$(target[0]).is(".fancyselect-display.clicked") && !$(target[0]).parents(".fancyselect-display.clicked").length > 0) {
                    scope.$apply(function () {
                        scope.bShowList = false;
                    });
                }
            });

            // this watcher calls the callback in the parent controller with the newly changed model.
            scope.$watch("selectedItem", function(value) {
                scope.bShowLabel = scope.selectedItem[scope.uniqueKey] === undefined;
                scope.selectedValue = scope.selectedItem[scope.displayKey];
                $parse(attrs.onChange)(scope.$parent, {selected: scope.selectedItem });
            });
        }
    }
}]);
