	function isWeixin() {
		var a = navigator.userAgent.toLowerCase();
		return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
	}
	function isAndroid() {
		var a = navigator.userAgent,
			b = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1);
		return b
	}
var tplCount = 0;
	!function(a, b) {
		
		function c(a) {
			function b(a, b, c) {
				return a[b] || (a[b] = c())
			}
			var c = b(a, "eqShow", Object);
			return b(c, "templateParser", function() {
				var a = {};
				return function(c, d) {
					if ("hasOwnProperty" === c) throw new Error("hasOwnProperty is not a valid name");
					return d && a.hasOwnProperty(c) && (a[c] = null), b(a, c, d)
				}
			})
		}
		function d(b) {

			templateParser = c(a)
			console.log(templateParser);
		}
		var e = a.eqShow || (a.eqShow = {});
		d(e)
	}(window, document)
	,function(a) {
		function b(a, b, c, d) {
			var e = {},
				f = a / b,
				g = c / d;
			return f > g ? (e.width = c, e.height = c / f) : (e.height = d, e.width = d * f), e
		}
		function c(a, b) {
			"view" == i.mode && b.properties.url && $(a).click(function(a) {
				var c = b.properties.url;
				isNaN(c) ? window.open(c) : eqxiu.pageScroll(c)
			})
		}
		function d(a) {
			$(a).bind("touchstart mousedown", function(a) {
				a.stopPropagation()
			})
		}
		function e(a) {
			a.focus(function(a) {
				eqxiu.pauseAutoFlip()
			}).blur(function(a) {
				$(document).trigger("startAutoFlip")
			})
		}
		function f(a) {
			for (var b = $(a).find("a[data]"), c = 0; c < b.length; c++) if (b[c] && "view" == i.mode) {
				$(b[c]).css("cursor", "pointer");
				var d = $(b[c]).attr("data");
				!
				function(a) {
					b[c].removeAttribute("href"), $(b[c]).click(function(b) {
						eqxiu.pageScroll(a)
					})
				}(d)
			}
		}
		function g(a, b) {
			if (b.trigger) {
				var c = $(a);
				j && clearTimeout(j), b.trigger.sends && b.trigger.sends.length && $.each(b.trigger.sends, function(a, b) {
					c.bind(utilTrigger.getSendType(b.type).name, function() {
						j = setTimeout(function() {
							$.each(b.handles, function(a, b) {
								var c = utilTrigger.getHandleType(b.type).name;
								$.each(b.ids, function(a, b) {
									var d;
									d = $("#inside_" + b, ".phone-view").length ? $("#inside_" + b, ".phone-view") : $("#inside_" + b), d.trigger(c)
								})
							})
						}, 1e3 * b.delay)
					})
				})
			}
		}
		function h(a, b) {
			if (b.sound) {
				var c = $(a),
					d = $("#media").get(0);
				0 == b.sound.src.indexOf("http://") ? b.sound.src = b.sound.src : b.sound.src = PREFIX_FILE_HOST + b.sound.src, utilSound.addAudio(a, b.sound.src), c.click(function() {
					utilSound.play(a, function() {
						d && d.play()
					}, function() {
						d && d.pause()
					})
				})
			}
		}
		var i = a.templateParser("jsonParser", function() {
			function a(a) {
				return function(b, c) {
					a[b] = c
				}
			}

			function b(a, b) {
				
				try {
					var c = l[("" + a.type).charAt(0)](a)
				} catch (d) {
					return
				}

				if (c) {
				var e = $('<li comp-drag comp-rotate class="comp-resize comp-rotate inside" id="inside_' + a.id + '" num="' + a.num + '" ctype="' + a.type + '"></li>');

				var f = $('<div class="element-box">').append($('<div class="element-box-contents">').append(c));
						e.append(f);
					
					if (a.css) {
						var g = 320 - parseInt(a.css.left);
						if (e.css({
							width: g
						}), e.css({
							width: a.css.width,
							height: a.css.height,
							left: a.css.left,
							top: a.css.top,
							zIndex: a.css.zIndex,
							bottom: a.css.bottom,
							transform: a.css.transform
						}), (0 === a.css.boxShadowSize || "0" == a.css.boxShadowSize) && (a.css.boxShadow = "rgba(0,0,0,0) 0 0 0"), "edit" != i.mode && "x" == ("" + a.type).charAt(0)) return e.append(c), e.find(".element-box").css({
							borderStyle: a.css.borderStyle,
							borderWidth: a.css.borderWidth,
							borderColor: a.css.borderColor,
							borderTopLeftRadius: a.css.borderTopLeftRadius,
							borderTopRightRadius: a.css.borderTopRightRadius,
							borderBottomRightRadius: a.css.borderBottomRightRadius,
							borderBottomLeftRadius: a.css.borderBottomLeftRadius,
							boxShadow: a.css.boxShadow,
							backgroundColor: a.css.backgroundColor,
							opacity: a.css.opacity,
							width: "100%",
							height: "100%",
							overflow: "hidden"
						}), e.find("img").css({
							width: "100%"
						}), e;
						isAndroid() && isWeixin() && 4 == a.type && "0px" != a.css.borderRadius && 0 == a.css.borderWidth && a.properties.anim && (a.css.borderWidth = 1, a.css.borderColor = "rgba(0,0,0,0)"), e.css(a.css).css({
							width: "100%",
							height: "100%",
							transform: "none"
						}), e.children(".element-box-contents").css({
							width: "100%",
							height: "100%"
						}), 4 != ("" + a.type).charAt(0) && "n" != ("" + a.type).charAt(0) && "p" != ("" + a.type).charAt(0) && "h" != ("" + a.type).charAt(0) && $(c).css({
							width: a.css.width,
							height: a.css.height
						}),a.css.accessKey && f.attr("data-key",a.css.accessKey),
						a.css.fontStyle && $("head").append("<style>" + a.css.fontStyle + "</style>"),
						"h" == ("" + a.type).charAt(0) && ($(c).find("g").length ? $(c).find("g").attr("fill", a.css.color) : $(c).children().attr("fill", a.css.color), f.children(".element-box-contents").css("position", "relative"))
					}
					return e
				}
			}
			function c(a) {
				var new_obj = new Array;
				var j = 0;
				for(var i in a){
					if(a[i].length != 0){
						
						new_obj[j] = a[i];
						j++;
					}
				}				
				a = new_obj;
				for (var b = 0; b < a.length - 1; b++) for (var c = b + 1; c < a.length; c++) if (parseInt(a[b].css.zIndex, 10) > parseInt(a[c].css.zIndex, 10)) {
					var d = a[b];
					a[b] = a[c], a[c] = d
				}
				for (var e = 0; e < a.length; e++) a[e].css.zIndex = e + 1 + "";
				return a
			}
			function d(a, d, e) {
				d = d.find(".edit_area");
				var f, i = a.elements;
				if(i){
					for (i = c(i), f = 0; f < i.length; f++) {
					var k = b(i[f], e);
					if (!k) continue;
					d.append(k);
					for (var p = 0; p < o.length; p++) o[p](k, i[f], e);

					n[("" + i[f].type).charAt(0)] && (

						n[("" + i[f].type).charAt(0)](k, i[f]), "edit" != e && (g(k, i[f]), h(k, i[f]))
						); 
				"edit" == e && m[("" + i[f].type).charAt(0)] && m[("" + i[f].type).charAt(0)](k, i[f])

					}
				}
			}

			function e() {
				return m
			}
			function f() {
				return l
			}
			function j(a) {
				o.push(a)
			}
			function k() {
				return o
			}
			var l = {},
				m = {},
				n = {},
				o = [],
				p = containerWidth = 320,
				q = containerHeight = 486,
				r = 1,
				s = 1,
				t = {
					getComponents: f,
					getEventHandlers: e,
					addComponent: a(l),
					bindEditEvent: a(m),
					bindAfterRenderEvent: a(n),
					addInterceptor: j,
					getInterceptors: k,
					wrapComp: b,
					mode: "view",
					parse: function(a) {
						
						var b = $('<div class="edit_wrapper" data-scene-id="' + a.def.sceneId + '"><ul eqx-edit-destroy id="edit_area' + a.def.id + '" comp-droppable paste-element class="edit_area weebly-content-area weebly-area-active"></div>'),
							c = this.mode = a.mode;
						this.def = a.def, 
						"view" == c && tplCount++;
						var e = $(a.appendTo);
						return containerWidth = e.width(), containerHeight = e.height(), r = p / containerWidth, 
						    s = q / containerHeight,
						     d(a.def, b.appendTo($(a.appendTo)), c)
					}
				};
			return t
		});

		i.addInterceptor(function(a, b, c) {

			//eqxCommon.animation(a, b, c, i.def.properties)
		}), 
		i.addComponent("2", function(a) {
			var b = document.createElement("div");
			return b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_paragraph editable-text"), a.content && (b.innerHTML = a.content), b.style.cursor = "default", b
		}), 

		i.bindAfterRenderEvent("2", function(a, b) {
			//alert(112233);
			f(a)
		});
		var j
	}(window.eqShow)


	function renderPage(a, b, c) {


		//新增长页的预览效果图函数-start
		function showtpl(a, b) {
			var c, d, e, f, g, h = window.scene ? scene.pageMode : 0,
				i = 0,
				j = {
					touchPos: 0,
					pLen: -486 * (b - 1),
					contain: $("#page" + a),
					cH: mobilecheck() ? $(document).height() : 486,
					stopInertiaMove: !1
				};
			0 == h || 1 == h || 2 == h || 6 == h || 7 == h || 8 == h || 11 == h || 12 == h ? h = "NS" : (h = "WE", $('<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>').appendTo("#page" + a));
			var k = 0,
				l = 0;
			j.contain.on("mousedown touchstart", function(a) {
				return "button" == a.target.tagName.toLowerCase() || a.target.getAttribute("data") || a.target.getAttribute("href") || "8" == a.target.getAttribute("ctype") ? void a.stopPropagation() : (a.stopPropagation(), a.preventDefault(), void(j.touchPos < j.pLen || j.touchPos > 0 || (c = !0, e = 0, j.stopInertiaMove = !0, d = a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientY : a.clientY, "WE" == h && (f = a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientX : a.clientX), l = j.touchPos, k = Date.now())))
			}), 

			j.contain.on("mousemove touchmove", function(a) {
				if (a.stopPropagation(), c) {
					if (e = j.touchPos + (a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientY : a.clientY) - d, "WE" == h && (g = (a.originalEvent.touches ? a.originalEvent.touches[0].clientX : a.clientX) - f, Math.abs(g) > Math.abs(e - j.touchPos) && !scene.property.forbidHandFlip)) {
						if (g > 0) {
							if (5 > g) return;
							eqxiu.prePage()
						} else eqxiu.nextPage();
						return void(c = !1)
					}
					if (e < j.pLen || e > 5) return c = !1, e > 0 && "NS" == h && (
						window.scene.property.forbidHandFlip ? j.touchPos = 0 : eqxiu.prePage()), void(0 > e && "NS" == h && (window.scene.property.forbidHandFlip ? j.touchPos = j.pLen : eqxiu.nextPage()));
					if (e > 0) return;
				
					j.stopInertiaMove = !0, $(this).find(".edit_area").css("transform", "translate3d(0," + (e - i) + "px,0)"), $(this).find(".edit_area").css("-webkit-transform", "translate3d(" + (e - i) + "px,0)");
					var b = Date.now();
					$(document).trigger("pageScrollPos", [e - j.cH]), b - k > 300 && (k = b, l = e), j.stopInertiaMove = !1
				}
			}), 
			j.contain.on("mouseup touchend mouseleave", function(a) {

				if (a.stopPropagation(), c) {
					if (c = !1, mobilecheck() && 0 === e) return void $(a.target).trigger("click");
					if (!(0 > e && e > j.pLen)) return e >= 0 ? void(j.touchPos = 0) : void(j.touchPos = j.pLen);
					j.touchPos = e, "WE" == h && j.contain.find(".u-arrow-bottom").hide();
					var b = Date.now(),
						d = (e - l) / (b - k);
					!
					function(a, b, c, d) {
						
						function e() {
							if (!d.stopInertiaMove) {
								var h = Date.now(),
									j = h - b,
									k = a + j * g;
								if (!(0 > f * k)) {
									var l = (a + k) / 2 * j,
										m = c + l;
									m > 0 || m < d.pLen || (d.timmer = null, d.contain.find(".edit_area").css("transform", "translate3d(0," + (m - i) + "px,0)"), d.contain.find(".edit_area").css("-webkit-transform", "translate3d(0," + (m - i) + "px,0)"), d.touchPos = m, $(document).trigger("pageScrollPos", [m - d.cH]), setTimeout(e, 10))
								}
							}
						}
						var f = 0 > a ? -1 : 1,
							g = f * -6e-4;
						e()
					}(d, b, e, j)
				}
			}), $(document).on("clearTouchPos", function() {
				j.touchPos = 0
			})
		}
		//新增长页的预览效果图函数-end
		a.templateParser("jsonParser").parse({
			def: c[b - 1],
			appendTo: "#page" + b,
			mode: "view"
		});
		var d, e, f = 1,
			g = $(".z-current").width(),
			h = $(".z-current").height();
		imageWidth = $(".m-img").width(), imageHeight = $(".m-img").height(), g / h >= 320 / 486 ? (f = h / 486, d = (g / f - 320) / 2) : (f = g / 320, e = (h / f - 486) / 2), window != window.top && $(".phoneBox .nr").css({
			width: "100%",
			height: "100%",
			overflow: "hidden",
			"transform-origin": "top left",
			transform: "scale(" + f + ")"
		}), e && $(".edit_area").css({
			marginTop: e
		}), d && $(".edit_area").css({
			marginLeft: d
		}), tplCount == c.length && $("#eqMobileViewport").attr("content", "width=320, initial-scale=" + f + ", maximum-scale=" + f + ", user-scalable=no"),

		//添加长页时编辑预览页面的效果
		c[b - 1].properties && c[b - 1].properties.longPage && showtpl(b, c[b - 1].properties.longPage)
	}

	var c =[],b=1;
	$.ajax({
			url:'json/test.json',
			cache: !0,
			type: "GET",
			async: !1,
			error: function(a) {
					alert("Connection error")
			},
			success: function(a) {
				c[0] = JSON.parse(a).obj;
				b=  1;
			}
		});

	function i(a, b) {
			var c = 0;

			for (var e = 1; e <= a.length; e++) {

				$('<section class="main-page"><div class="m-img" id="page' + e + '"></div></section>').appendTo(".phone-view"); 
				a.length > 1 && ($('<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>').appendTo("#page" + e), $('<section class="u-arrow-right"><div class="pre-wrap-right"><div class="pre-box3"><div class="pre3"></div></div><div class="pre-box4"><div class="pre4"></div></div></div></section>').appendTo("#page" + e));
				 1 == e && $(".phone-view .main-page").eq(0).addClass("z-current");

				var f = e;
				renderPage(eqShow, f, a)
			}
			0 === c || 1 == c || 2 == c || 6 == c || 7 == c || 8 == c || 11 == c || 12 == c ? $(".phone-view .u-arrow-right").hide() : (3 == c || 4 == c || 5 == c || 9 == c || 10 == c) && $(".phone-view .u-arrow-bottom").hide()
		}
	i(c, b)
	