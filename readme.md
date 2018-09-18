# fng-ckeditor

Documentation for getting a WYSIWYG field in forms-angular

## CKEditor Version 5

### Usage

Add the following lines to your index.html (or equivalent) file

    <script src="//cdn.ckeditor.com/ckeditor5/11.0.1/classic/ckeditor.js"></script>

Register the directive:

    angular.module('myApp',['ngCkeditor5'])

In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', add: 'ckeditor5'}}

## CKEditor Version 4

### Usage

    npm install github:esvit/ng-ckeditor


Add the following lines to your index.html (or equivalent) file

    <script src="//cdn.ckeditor.com/4.9.1/standard/ckeditor.js"></script>
    <script src="ng-ckeditor/ng-ckeditor.js"></script>

In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', add: 'ckEditor'}}
