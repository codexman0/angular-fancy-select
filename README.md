# Angular FancySelect

Customized html select directives for AngularJS.

Using font awesome for awesome icon.

No other dependency required.

See examples: https://svetoslav0625.github.io/angular-fancy-select/

## Usage

Include `fancyselect` in your module dependencies:

```js
var app = angular.module("fancySelectExample", ['fancyselect']);
```

In your controller, setup the select options and object to hold the selected value:

```js
app.controller("MyController", function($scope) {
    $scope.sportsList = [{
            id : 0,
            name: "Volleyball",
            likes: 5
        }, {
            id: 1,
            name: "Tennis",
            likes:6

        }, {
            id:2,
            name: "Swim",
            likes:3
        },{
            id:4,
            name: "Volleyball",
            likes:10
        },{
            id:5,
            name:"Wrestle",
            likes:20
        }];

        $scope.selectedSport = {
        };

        $scope.sportChanged = function(selectedSport){
            $scope.selectedSport = selectedSport;
        }
});
```

```html

<div ng-app="fancySelectExample" ng-controller="MyController" class="fancyselect-app">
    <p>
        {{selectedSport}}
    </p>

    <fancyselect data-label="Select your favourite sport."
                 data-dataset="sportsList"
                 data-model="selectedSport"
                 data-key="id"
                 data-display="name"
                 data-on-change="sportChanged(selected)">
    </fancyselect>
</div>

```


## Developing

Pull requests are welcome!

