"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[6675],{6675:function(r,e,n){n.r(e),e.default='import Foundation\r\n\r\nprotocol APIControllerProtocol {\r\n    func didReceiveAPIResults(results: NSArray)\r\n}\r\n\r\nclass APIController {\r\n    var delegate: APIControllerProtocol\r\n\r\n    init(delegate: APIControllerProtocol) {\r\n        self.delegate = delegate\r\n    }\r\n\r\n    func get(path: String) {\r\n        let url = NSURL(string: path)\r\n        let session = NSURLSession.sharedSession()\r\n        let task = session.dataTaskWithURL(url!, completionHandler: {data, response, error -> Void in\r\n            println("Task completed")\r\n            if(error != nil) {\r\n                // If there is an error in the web request, print it to the console\r\n                println(error.localizedDescription)\r\n            }\r\n            var err: NSError?\r\n            if let jsonResult = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: &err) as? NSDictionary {\r\n                if(err != nil) {\r\n                    // If there is an error parsing JSON, print it to the console\r\n                    println("JSON Error \\(err!.localizedDescription)")\r\n                }\r\n                if let results: NSArray = jsonResult["results"] as? NSArray {\r\n                    self.delegate.didReceiveAPIResults(results)\r\n                }\r\n            }\r\n        })\r\n\r\n        // The task is just an object with all these properties set\r\n        // In order to actually make the web request, we need to "resume"\r\n        task.resume()\r\n    }\r\n\r\n    func searchItunesFor(searchTerm: String) {\r\n        // The iTunes API wants multiple terms separated by + symbols, so replace spaces with + signs\r\n        let itunesSearchTerm = searchTerm.stringByReplacingOccurrencesOfString(" ", withString: "+", options: NSStringCompareOptions.CaseInsensitiveSearch, range: nil)\r\n\r\n        // Now escape anything else that isn\'t URL-friendly\r\n        if let escapedSearchTerm = itunesSearchTerm.stringByAddingPercentEscapesUsingEncoding(NSUTF8StringEncoding) {\r\n            let urlPath = "https://itunes.apple.com/search?term=\\(escapedSearchTerm)&media=music&entity=album"\r\n        }\r\n    }\r\n\r\n}'}}]);
//# sourceMappingURL=6675.7ace3ef8.chunk.js.map