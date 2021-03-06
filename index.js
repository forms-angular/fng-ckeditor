angular.module('fng.ckeditor',[]).directive('ckeditor5', editorDirective);

function editorDirective () {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            custom: '=',
            config: '=',
            plugins: '=',
            removePlugins: '=',
            replaceConfig: '=',
            replaceToolbar: '=',
            replacePlugins: '=',
            toolbar: '='
        },
        link: function(scope, element, attrs, ngModel) {
            'ngInject';
            var constructConfigArray = function(customItems, defaultItems, replace) {
                if (!customItems) return defaultItems;
                if (customItems && replace) return customItems;
                return defaultItems.concat(customItems);
            };

            var constructConfig = function() {
                var config = scope.config;
                var plugins = scope.plugins;
                var removePlugins = scope.removePlugins;
                var replaceConfig = scope.replaceConfig;
                var replacePlugins = scope.replacePlugins;
                var replaceToolbar = scope.replaceToolbar;
                var toolbar = scope.toolbar;

                if (!config && !toolbar && !plugins) return;
                if (config && replaceConfig) return config;

                // construct the plugins, if replacePlugins is truthy, we only provide the given plugins
                var defaultPlugins = classicEditor.build.plugins.map(function(plugin) {return plugin.pluginName});
                var customPlugins = constructConfigArray(plugins, defaultPlugins, replacePlugins);

                // construct the toolbar, if replaceToolbar is truthy, we only provide the given toolbar config
                var defaultToolbar = classicEditor.build.config.toolbar.items;
                var customToolbar = constructConfigArray(toolbar, defaultToolbar, replaceToolbar);

                return Object.assign({}, {
                    plugins: customPlugins,
                    removePlugins: removePlugins,
                    toolbar: customToolbar
                }, config);
            };

            var isTextarea = element[0].tagName.toLowerCase() === 'textarea';
            if (!isTextarea) {
                throw new Error('element is not a textarea');
            }

            const customConfig = {
				toolbar: {
					items: [
						'heading',
						'|',
						'bold',
						'italic',
						'underline',
						'bulletedList',
						'numberedList',
						'|',
						'fontBackgroundColor',
						'fontColor',
						'outdent',
						'indent',
						'|',
						'link',
						'imageUpload',
						'blockQuote',
						'insertTable',
						'mediaEmbed',
						'undo',
						'redo',
						'horizontalLine',
						'removeFormat',
						'htmlEmbed'
					]
				},
				language: 'en',
				image: {
					toolbar: [
						'imageTextAlternative',
						'imageStyle:full',
						'imageStyle:side'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells',
						'tableCellProperties',
						'tableProperties'
					]
				},
				licenseKey: '',
			};
            ClassicEditor.create(
                element[0],
                attrs.custom !== undefined ? customConfig : constructConfig()
            ).then(function(instance) {
                var setData = function() {
                    var data = instance.getData();
                    var value = ngModel.$viewValue || '';

                    if (data !== value) {
                        instance.setData(value);
                    }
                };

                var setModel = function() {
                    var data = instance.getData();
                    ngModel.$setViewValue(data);
                    ngModel.$render();
                };

                scope.$watch(function() {return ngModel.$viewValue}, setData);
                instance.model.document.on('change', setModel);
            });
        }
    };
}
