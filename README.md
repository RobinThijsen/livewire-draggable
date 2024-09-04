# Livewire Draggable

A plugin/wrapper around [Shopify's draggable package](https://github.com/Shopify/draggable/tree/master/src/Sortable). It makes implementing draggable interfaces super simple using Livewire.

## Installation

> Note: this package only supports Livewire v3. If you are using v2, use version `0.3.0` of this package.

### NPM
```
npm install livewire-draggable --save-dev
```
Import the package in your bundle:
```
import 'livewire-draggable'
// Or.
require('livewire-draggable')
```
## Usage

For simple layouts that only require simple sorting like a todo list, add the `wire:draggable`, `wire:draggable-item`, and `wire:draggable-zone` attributes to your markup as follows.

