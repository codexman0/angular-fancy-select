# Angular FancySelect

Customized html dropdown directive for AngularJS.

Using font awesome for awesome icon.

No other dependency required.

See examples: https://codexman0.github.io/angular-fancy-select/

## Usage

Include `fancyselect` in your module dependencies:

```js
var app = angular.module("fancySelectExample", ['fancyselect']);
```

In your controller, setup the select options and object to hold the selected value:

```js
var app = angular.module("fancySelectExample", ['fancyselect']);

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

    <fancyselect label="Select your favourite sport."
                 dataset="sportsList"
                 model="selectedSport"
                 unique-key="id"
                 display-key="name"
                 on-change="sportChanged(selected)">
    </fancyselect>
</div>

```

## Developing

Pull requests are welcome!

