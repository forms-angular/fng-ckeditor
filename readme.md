# fng-ckeditor

Plugin for forms-angular that adds ckEditor support.

## Usage

    bower install fng-ckeditor
    
Add the following lines to your index.html (or equivalent) file

    <link rel="stylesheet" href="/bower_components/jquery-ui/themes/smoothness/jquery-ui.css">
    <script src="/bower_components/ng-ckeditor/ng-ckeditor.js"></script>
    <script src="/bower_components/ckeditor/ckeditor.js"></script>    
    
In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', editor: 'ckEditor'}}
