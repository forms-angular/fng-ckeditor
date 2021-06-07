# fng-ckeditor

Documentation for getting a WYSIWYG field in forms-angular

## CKEditor Version 5

### Usage

#### For default Classic build

Add the following lines to your index.html (or equivalent) file

    <script src="//cdn.ckeditor.com/ckeditor5/xx.xx.xx/classic/ckeditor.js"></script>

In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', add: 'ckeditor5'}}

Register the directive:

    angular.module('myApp',['fng.ckeditor'])

#### For fng custom build

Add the following lines to your index.html (or equivalent) file

    <script src="fng-ckeditor/v5-custom/build/ckeditor.js"></script>

In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', add: 'ckeditor5 custom'}}

Register the directive:

    angular.module('myApp',['fng.ckeditor'])


## CKEditor Version 4

### Usage

    npm install github:esvit/ng-ckeditor


Add the following lines to your index.html (or equivalent) file

    <script src="//cdn.ckeditor.com/4.9.1/standard/ckeditor.js"></script>
    <script src="ng-ckeditor/ng-ckeditor.js"></script>

In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', add: 'ckEditor'}}
