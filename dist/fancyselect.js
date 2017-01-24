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
            scope.bShowList = false;
            scope.bShowLabel = true;
            scope.selectedItem = angular.copy(scope.model);

            scope.selectItem = function(item) {
                scope.bShowLabel = false;
                scope.selectedItem = item;
            };

            scope.isSelectedItem = function(item) {
                return item[scope.uniqueKey] === scope.selectedItem[scope.uniqueKey];
            };

            scope.toggleList = function() {
                scope.bShowList = !scope.bShowList;
            };

            angular.element(document).on("click", function(e) {
                var target =  angular.element(e.target);
                if (!$(target[0]).is(".fancyselect-display.clicked") && !$(target[0]).parents(".fancyselect-display.clicked").length > 0) {
                    scope.$apply(function () {
                        scope.bShowList = false;
                    });
                }
            });

            scope.$watch("selectedItem", function(value) {
                scope.bShowLabel = scope.selectedItem[scope.uniqueKey] === undefined;
                scope.selectedValue = scope.selectedItem[scope.displayKey];
                $parse(attrs.onChange)(scope.$parent, {selected: scope.selectedItem });
            });
        }
    }
}]);
