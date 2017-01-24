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
    $scope.selectedSport = {};
});
```



```html
<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="./dist/fancyselect.css"/>
    </head>
    <body ng-app="fancySelectExample" ng-controller="MyController" style="margin-left:100px; margin-top:100px;">
        <p>
            {{selectedSport}}
        </p>

        <fancyselect label="Select your favourite sport." data="sportsList" key="id" display="name" selected="selectedSport"></fancyselect>

        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
        <script src="./app.js"></script>
        <script src="./dist/fancyselect.js"></script>
    </body>
</html>


```
Key attribute is for specifying the unique attribute in json data.
Display attribute is for specifying what is shown in dropdown.
Try to change key and display attribute (e.g display="likes").

## Developing

Pull requests are welcome!

