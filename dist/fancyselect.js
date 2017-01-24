var app = angular.module("fancyselect", []);

app.directive("fancyselect", function($rootScope) {
    return {
        restrict: "E",
        templateUrl: "./dist/fancyselect.templ.html",
        scope: {
            label: "@",
            data: "=",
            selected: "=",
            key: "@",
            display: "@"
        },
        link: function(scope) {
            scope.bShowList = false;
            scope.bShowLabel = true;

            scope.selectItem = function(item) {
                scope.bShowLabel = false;
                scope.selected = item;
            };

            scope.isSelectedItem = function(item) {
                return item[scope.key] === scope.selected[scope.key];
            };

            scope.showList = function() {
                scope.bShowList = true;
            };

            angular.element(document).on("click", function(e) {
                var target =  angular.element(e.target);
                if (!$(target[0]).is(".fancyselect-display.clicked") && !$(target[0]).parents(".fancyselect-display.clicked").length > 0)
                    scope.$apply(function() {
                        scope.bShowList = false;
                    });
            });

            scope.$watch("selected", function(value) {
                scope.bShowLabel = scope.selected[scope.key] === undefined;
                scope.selectedValue = scope.selected[scope.display];
            });
        }
    }
});
