# ember-cli-noui-slider

This README outlines the details of collaborating on this Ember addon.

## Usage

``` handlebars
{{noui-slider step=10 onUpdate="onUpdate" onChange="onChange" start=start min=minValue max=maxValue}}
```

## Options
* step
```
Default: 1
Accepted values: number
```

* min
```
Default: 0
Accepted values: number
```

* max
```
Default: 100
Accepted values: number
```

* start
```
Default: [min, max]
Accepted values: array[string, string]
```

* onChange
```
An action closure to handle the change event.
It fires when a user stops sliding.
```

* onUpdate
```
An action closure to handle the update event.
It fires every time the slider values are changed, Additionally, it fires immediately when bound.
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-noui-slider`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
