# fng-ckeditor

Documentation for getting a WYSIWYG field in forms-angular

## Usage

    npm install github:esvit/ng-ckeditor


Add the following lines to your index.html (or equivalent) file

    <script src="//cdn.ckeditor.com/4.9.1/standard/ckeditor.js"></script>
    <script src="ng-ckeditor/ng-ckeditor.js"></script>

In your Mongoose schemas you can set up fields like this:
       
    fieldName: {type: String, form: {type: 'textarea', editor: 'ckEditor'}}
