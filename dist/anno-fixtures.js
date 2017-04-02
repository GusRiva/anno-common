var Anno = Anno || {}; Anno["fixtures"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	"Annotation": {
		"ok": {
			"anno1.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno1",
				"type": "Annotation",
				"body": "http://example.org/post1",
				"target": "http://example.com/page1"
			},
			"anno10.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno10",
				"type": "Annotation",
				"body": {
					"type": "Choice",
					"items": [
						{
							"id": "http://example.org/note1",
							"language": "en"
						},
						{
							"id": "http://example.org/note2",
							"language": "fr"
						}
					]
				},
				"target": "http://example.org/website1"
			},
			"anno14.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno14",
				"type": "Annotation",
				"creator": "http://example.org/user1",
				"created": "2015-01-28T12:00:00Z",
				"modified": "2015-01-29T09:00:00Z",
				"generator": "http://example.org/client1",
				"generated": "2015-02-04T12:00:00Z",
				"body": {
					"id": "http://example.net/review1",
					"creator": "http://example.net/user2",
					"created": "2014-06-02T17:00:00Z"
				},
				"target": "http://example.com/restaurant1"
			},
			"anno15.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno15",
				"type": "Annotation",
				"creator": {
					"id": "http://example.org/user1",
					"type": "Person",
					"name": "My Pseudonym",
					"nickname": "pseudo",
					"email_sha1": "58bad08927902ff9307b621c54716dcc5083e339"
				},
				"generator": {
					"id": "http://example.org/client1",
					"type": "Software",
					"name": "Code v2.1",
					"homepage": "http://example.org/client1/homepage1"
				},
				"body": "http://example.net/review1",
				"target": "http://example.com/restaurant1"
			},
			"anno16.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno16",
				"type": "Annotation",
				"audience": {
					"id": "http://example.edu/roles/teacher",
					"type": "schema:EducationalAudience",
					"schema:educationalRole": "teacher"
				},
				"body": "http://example.net/classnotes1",
				"target": "http://example.com/textbook1"
			},
			"anno17.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno17",
				"type": "Annotation",
				"motivation": "commenting",
				"body": "http://example.net/comment1",
				"target": {
					"id": "http://example.com/video1",
					"type": "Video",
					"accessibility": "captions"
				}
			},
			"anno18.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno18",
				"type": "Annotation",
				"motivation": "bookmarking",
				"body": [
					{
						"type": "TextualBody",
						"value": "readme",
						"purpose": "tagging"
					},
					{
						"type": "TextualBody",
						"value": "A good description of the topic that bears further investigation",
						"purpose": "describing"
					}
				],
				"target": "http://example.com/page1"
			},
			"anno19.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno19",
				"type": "Annotation",
				"rights": "https://creativecommons.org/publicdomain/zero/1.0/",
				"body": {
					"id": "http://example.net/review1",
					"rights": "http://creativecommons.org/licenses/by-nc/4.0/"
				},
				"target": "http://example.com/product1"
			},
			"anno2.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno2",
				"type": "Annotation",
				"body": {
					"id": "http://example.org/analysis1.mp3",
					"format": "audio/mpeg",
					"language": "fr"
				},
				"target": {
					"id": "http://example.gov/patent1.pdf",
					"format": "application/pdf",
					"language": [
						"en",
						"ar"
					],
					"textDirection": "ltr",
					"processingLanguage": "en"
				}
			},
			"anno20.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno20",
				"type": "Annotation",
				"canonical": "urn:uuid:dbfb1861-0ecf-41ad-be94-a584e5c4f1df",
				"via": "http://other.example.org/anno1",
				"body": {
					"id": "http://example.net/review1",
					"rights": "http://creativecommons.org/licenses/by/4.0/"
				},
				"target": "http://example.com/product1"
			},
			"anno21.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno21",
				"type": "Annotation",
				"body": {
					"type": "SpecificResource",
					"purpose": "tagging",
					"source": "http://example.org/city1"
				},
				"target": {
					"id": "http://example.org/photo1",
					"type": "Image"
				}
			},
			"anno22.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno22",
				"type": "Annotation",
				"body": {
					"source": "http://example.org/page1",
					"selector": "http://example.org/paraselector1"
				},
				"target": {
					"source": "http://example.com/dataset1",
					"selector": "http://example.org/dataselector1"
				}
			},
			"anno23.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno23",
				"type": "Annotation",
				"body": {
					"source": "http://example.org/video1",
					"purpose": "describing",
					"selector": {
						"type": "FragmentSelector",
						"conformsTo": "http://www.w3.org/TR/media-frags/",
						"value": "t=30,60"
					}
				},
				"target": "http://example.org/image1"
			},
			"anno24.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno24",
				"type": "Annotation",
				"body": "http://example.org/note1",
				"target": {
					"source": "http://example.org/page1.html",
					"selector": {
						"type": "CssSelector",
						"value": "#elemid > .elemclass + p"
					}
				}
			},
			"anno25.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno25",
				"type": "Annotation",
				"body": "http://example.org/note1",
				"target": {
					"source": "http://example.org/page1.html",
					"selector": {
						"type": "XPathSelector",
						"value": "/html/body/p[2]/table/tr[2]/td[3]/span"
					}
				}
			},
			"anno26.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno26",
				"type": "Annotation",
				"body": "http://example.org/comment1",
				"target": {
					"source": "http://example.org/page1",
					"selector": {
						"type": "TextQuoteSelector",
						"exact": "anotation",
						"prefix": "this is an ",
						"suffix": " that has some"
					}
				}
			},
			"anno27.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno27",
				"type": "Annotation",
				"body": "http://example.org/review1",
				"target": {
					"source": "http://example.org/ebook1",
					"selector": {
						"type": "TextPositionSelector",
						"start": 412,
						"end": 795
					}
				}
			},
			"anno28.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno28",
				"type": "Annotation",
				"body": "http://example.org/note1",
				"target": {
					"source": "http://example.org/diskimg1",
					"selector": {
						"type": "DataPositionSelector",
						"start": 4096,
						"end": 4104
					}
				}
			},
			"anno29.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno29",
				"type": "Annotation",
				"body": "http://example.org/road1",
				"target": {
					"source": "http://example.org/map1",
					"selector": {
						"id": "http://example.org/svg1",
						"type": "SvgSelector"
					}
				}
			},
			"anno3.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno3",
				"type": "Annotation",
				"body": {
					"id": "http://example.org/video1",
					"type": "Video"
				},
				"target": {
					"id": "http://example.org/website1",
					"type": "Text"
				}
			},
			"anno30.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno30",
				"type": "Annotation",
				"body": "http://example.org/road1",
				"target": {
					"source": "http://example.org/map1",
					"selector": {
						"type": "SvgSelector",
						"value": "<svg:svg> ... </svg:svg>"
					}
				}
			},
			"anno31.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno31",
				"type": "Annotation",
				"body": "http://example.org/comment1",
				"target": {
					"source": "http://example.org/page1.html",
					"selector": {
						"type": "RangeSelector",
						"startSelector": {
							"type": "XPathSelector",
							"value": "//table[1]/tr[1]/td[2]"
						},
						"endSelector": {
							"type": "XPathSelector",
							"value": "//table[1]/tr[1]/td[4]"
						}
					}
				}
			},
			"anno32.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno32",
				"type": "Annotation",
				"body": "http://example.org/comment1",
				"target": {
					"source": "http://example.org/page1",
					"selector": {
						"type": "FragmentSelector",
						"value": "para5",
						"refinedBy": {
							"type": "TextQuoteSelector",
							"exact": "Selected Text",
							"prefix": "text before the ",
							"suffix": " and text after it"
						}
					}
				}
			},
			"anno33.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno33",
				"type": "Annotation",
				"body": "http://example.org/note1",
				"target": {
					"source": "http://example.org/page1",
					"state": {
						"id": "http://example.org/state1"
					}
				}
			},
			"anno34.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno34",
				"type": "Annotation",
				"body": "http://example.org/note1",
				"target": {
					"source": "http://example.org/page1",
					"state": {
						"type": "TimeState",
						"cached": "http://archive.example.org/copy1",
						"sourceDate": "2015-07-20T13:30:00Z"
					}
				}
			},
			"anno35.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno35",
				"type": "Annotation",
				"body": "http://example.org/description1",
				"target": {
					"source": "http://example.org/resource1",
					"state": {
						"type": "HttpRequestState",
						"value": "Accept: application/pdf"
					}
				}
			},
			"anno36.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno36",
				"type": "Annotation",
				"body": "http://example.org/comment1",
				"target": {
					"source": "http://example.org/ebook1",
					"state": {
						"type": "TimeState",
						"sourceDate": "2016-02-01T12:05:23Z",
						"refinedBy": {
							"type": "HttpRequestState",
							"value": "Accept: application/pdf",
							"refinedBy": {
								"type": "FragmentSelector",
								"value": "page=10",
								"conformsTo": "http://tools.ietf.org/rfc/rfc3778"
							}
						}
					}
				}
			},
			"anno37.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno37",
				"type": "Annotation",
				"stylesheet": "http://example.org/style1",
				"body": "http://example.org/comment1",
				"target": {
					"source": "http://example.org/document1",
					"styleClass": "red"
				}
			},
			"anno38.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno38",
				"type": "Annotation",
				"stylesheet": {
					"type": "CssStylesheet",
					"value": ".red { color: red }"
				},
				"body": "http://example.org/body1",
				"target": {
					"source": "http://example.org/target1",
					"styleClass": "red"
				}
			},
			"anno39.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno39",
				"type": "Annotation",
				"body": "http://example.org/comment1",
				"target": {
					"source": "http://example.edu/article.pdf",
					"selector": "http://example.org/selectors/html-selector1",
					"renderedVia": {
						"id": "http://example.com/pdf-to-html-library",
						"type": "Software",
						"schema:softwareVersion": "2.5"
					}
				}
			},
			"anno4.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno4",
				"type": "Annotation",
				"body": "http://example.org/description1",
				"target": {
					"id": "http://example.com/image1#xywh=100,100,300,300",
					"type": "Image",
					"format": "image/jpeg"
				}
			},
			"anno40.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno40",
				"type": "Annotation",
				"body": "http://example.org/note1",
				"target": {
					"source": "http://example.org/image1",
					"scope": "http://example.org/page1"
				}
			},
			"anno41.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno41",
				"type": "Annotation",
				"motivation": "commenting",
				"creator": {
					"id": "http://example.org/user1",
					"type": "Person",
					"name": "A. Person",
					"nickname": "user1"
				},
				"created": "2015-10-13T13:00:00Z",
				"generator": {
					"id": "http://example.org/client1",
					"type": "Software",
					"name": "Code v2.1",
					"homepage": "http://example.org/homepage1"
				},
				"generated": "2015-10-14T15:13:28Z",
				"stylesheet": {
					"id": "http://example.org/stylesheet1",
					"type": "CssStylesheet"
				},
				"body": [
					{
						"type": "TextualBody",
						"purpose": "tagging",
						"value": "love"
					},
					{
						"type": "Choice",
						"items": [
							{
								"type": "TextualBody",
								"purpose": "describing",
								"value": "I really love this particular bit of text in this XML. No really.",
								"format": "text/plain",
								"language": "en",
								"creator": "http://example.org/user1"
							}
						]
					}
				],
				"target": {
					"type": "SpecificResource",
					"styleClass": "mystyle",
					"source": "http://example.com/document1",
					"state": [
						{
							"type": "HttpRequestState",
							"value": "Accept: application/xml",
							"refinedBy": {
								"type": "TimeState",
								"sourceDate": "2015-09-25T12:00:00Z"
							}
						}
					],
					"selector": {
						"type": "FragmentSelector",
						"value": "xpointer(/doc/body/section[2]/para[1])",
						"refinedBy": {
							"type": "TextPositionSelector",
							"start": 6,
							"end": 27
						}
					}
				}
			},
			"anno5.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno5",
				"type": "Annotation",
				"body": {
					"type": "TextualBody",
					"value": "<p>j'adore !</p>",
					"format": "text/html",
					"language": "fr"
				},
				"target": "http://example.org/photo1"
			},
			"anno6.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno6",
				"type": "Annotation",
				"bodyValue": "Comment text",
				"target": "http://example.org/target1"
			},
			"anno7.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno7",
				"type": "Annotation",
				"body": {
					"type": "TextualBody",
					"value": "Comment text",
					"format": "text/plain"
				},
				"target": "http://example.org/target1"
			},
			"anno8.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno8",
				"type": "Annotation",
				"target": "http://example.org/ebook1"
			},
			"anno9.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno9",
				"type": "Annotation",
				"body": [
					"http://example.org/description1",
					{
						"type": "TextualBody",
						"value": "tag1"
					}
				],
				"target": [
					"http://example.org/image1",
					"http://example.org/image2"
				]
			},
			"dummy_anno1.json": {
				"body": {
					"type": [
						"TextualBody"
					]
				},
				"target": "x://foo"
			},
			"minimal-array-target.json": {
				"id": "http://example.org",
				"body": {
					"type": [
						"TextualBody"
					],
					"value": "bla"
				},
				"target": [
					{
						"source": "x://foo"
					}
				]
			},
			"minimal-object-target.json": {
				"id": "http://example.org",
				"body": {
					"type": [
						"TextualBody"
					],
					"value": "bla"
				},
				"target": {
					"source": "x://foo"
				}
			},
			"minimal-string-target.json": {
				"id": "http://example.org",
				"body": {
					"type": [
						"TextualBody"
					],
					"value": "bla"
				},
				"target": "x://foo"
			}
		},
		"notOk": {
			"anno11.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno11",
				"type": "Annotation",
				"motivation": "commenting",
				"body": {
					"type": "TextualBody",
					"value": "These pages together provide evidence of the conspiracy"
				},
				"target": {
					"type": "Composite",
					"items": [
						"http://example.com/page1",
						"http://example.org/page6",
						"http://example.net/page4"
					]
				}
			},
			"anno12.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno12",
				"type": "Annotation",
				"motivation": "tagging",
				"body": {
					"type": "TextualBody",
					"value": "important"
				},
				"target": {
					"type": "List",
					"items": [
						"http://example.com/book/page1",
						"http://example.com/book/page2",
						"http://example.com/book/page3",
						"http://example.com/book/page4"
					]
				}
			},
			"anno13.json": {
				"@context": "http://www.w3.org/ns/anno.jsonld",
				"id": "http://example.org/anno13",
				"type": "Annotation",
				"motivation": "classifying",
				"body": "http://example.org/vocab/art/portrait",
				"target": {
					"type": "Independents",
					"items": [
						"http://example.com/image1",
						"http://example.net/image2",
						"http://example.com/image4",
						"http://example.org/image9"
					]
				}
			}
		}
	}
};

/***/ })
/******/ ]);