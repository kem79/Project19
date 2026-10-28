//
//  Action.js
//  Project19-javascript-injection
//
//  Created by Marc on 16/10/2026.
//
var Action = function() {};

Action.prototype = {

// called before it is run
run: function(parameters) {
    parameters.completionFunction({"URL": document.URL, "title": document.title})
},

// called after it is run
finalize: function(parameters) {
    var customJavaScript = parameters["customJavaScript"];
    eval(customJavaScript);
}

};

var ExtensionPreprocessingJS = new Action
