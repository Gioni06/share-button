(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Share = f()}})(function(){var define,module,exports;
function getStyles(config){ return ""+config.selector+"{width:92px;height:20px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"+config.selector+" .social.networks-1,"+config.selector+" .social.networks-1 ul{width:60px}"+config.selector+" [class*=entypo-]:before{font-family:font-awesome,sans-serif}"+config.selector+" label,"+config.selector+" label span{font-family:TradeGothicW01-BoldExte,sans-serif}"+config.selector+" label{font-size:14px;cursor:pointer;margin:0;padding:10px 30px;border-radius:40px;height:40px;background-color:transparent;color:#d3204d;border:1px solid #d3204d;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;-ms-transition:all .3s ease;transition:all .3s ease}"+config.selector+" label:hover{opacity:.8}"+config.selector+" label span{text-transform:uppercase;font-size:.9em;font-weight:700;-webkit-font-smoothing:antialiased;padding-left:6px}"+config.selector+" .social{opacity:0;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;-o-transition:all .4s ease;-ms-transition:all .4s ease;transition:all .4s ease;margin-left:-15px;visibility:hidden}"+config.selector+" .social.top{-ms-transform-origin:0 0;transform-origin:0 0;margin-top:-80px}"+config.selector+" .social.bottom,"+config.selector+" .social.top{-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0}"+config.selector+" .social.bottom{-ms-transform-origin:0 0;transform-origin:0 0;margin-top:5px}"+config.selector+" .social.middle{margin-top:-34px}"+config.selector+" .social.middle.right{-ms-transform-origin:5% 50%;transform-origin:5% 50%;margin-left:105px}"+config.selector+" .social.networks-1.center,"+config.selector+" .social.networks-1.left,"+config.selector+" .social.right{margin-left:14px}"+config.selector+" .social.middle.left,"+config.selector+" .social.middle.right{-webkit-transform-origin:5% 50%;-moz-transform-origin:5% 50%;-o-transform-origin:5% 50%}"+config.selector+" .social.middle.left{-ms-transform-origin:5% 50%;transform-origin:5% 50%}"+config.selector+" .social.load{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"+config.selector+" .social.networks-1.middle.left{margin-left:-70px}"+config.selector+" .social.networks-2,"+config.selector+" .social.networks-2 ul{width:120px}"+config.selector+" .social.networks-2.center{margin-left:-13px}"+config.selector+" .social.networks-2.left{margin-left:-44px}"+config.selector+" .social.networks-2.middle.left{margin-left:-130px}"+config.selector+" .social.networks-3,"+config.selector+" .social.networks-3 ul{width:180px}"+config.selector+" .social.networks-3.center{margin-left:-45px}"+config.selector+" .social.networks-3.left{margin-left:-102px}"+config.selector+" .social.networks-3.middle.left{margin-left:-190px}"+config.selector+" .social.networks-4,"+config.selector+" .social.networks-4 ul{width:240px}"+config.selector+" .social.networks-4.center{margin-left:-50px}"+config.selector+" .social.networks-4.left{margin-left:162px}"+config.selector+" .social.networks-4.middle.left{margin-left:-250px}"+config.selector+" .social.networks-5,"+config.selector+" .social.networks-5 ul{width:300px}"+config.selector+" .social.networks-5.center{margin-left:-75px}"+config.selector+" .social.networks-5.left{margin-left:-225px}"+config.selector+" .social.networks-5.middle.left{margin-left:-320px}"+config.selector+" .social.networks-6,"+config.selector+" .social.networks-6 ul{width:350px}"+config.selector+" .social.networks-6.center{margin-left:-110px}"+config.selector+" .social.networks-6.left{margin-left:-225px}"+config.selector+" .social.networks-6.middle.left{margin-left:-320px}"+config.selector+" .social.active{opacity:1;-webkit-transition:all .4s ease;-moz-transition:all .4s ease;-o-transition:all .4s ease;-ms-transition:all .4s ease;transition:all .4s ease;visibility:visible}"+config.selector+" .social.active.top{-webkit-transform:scale(1)translateY(-10px);-moz-transform:scale(1)translateY(-10px);-o-transform:scale(1)translateY(-10px);-ms-transform:scale(1)translateY(-10px);transform:scale(1)translateY(-10px)}"+config.selector+" .social.active.bottom{-webkit-transform:scale(1)translateY(15px);-moz-transform:scale(1)translateY(15px);-o-transform:scale(1)translateY(15px);-ms-transform:scale(1)translateY(15px);transform:scale(1)translateY(15px)}"+config.selector+" .social.active.middle.right{-webkit-transform:scale(1)translateX(10px);-moz-transform:scale(1)translateX(10px);-o-transform:scale(1)translateX(10px);-ms-transform:scale(1)translateX(10px);transform:scale(1)translateX(10px)}"+config.selector+" .social.active.middle.left{-webkit-transform:scale(1)translateX(-10px);-moz-transform:scale(1)translateX(-10px);-o-transform:scale(1)translateX(-10px);-ms-transform:scale(1)translateX(-10px);transform:scale(1)translateX(-10px)}"+config.selector+" .social ul{position:relative;left:0;right:0;height:46px;color:#fff;margin:auto;padding:0;list-style:none}"+config.selector+" .social ul li{font-size:23px;border-radius:50px;cursor:pointer;margin-right:10px;width:50px;padding:12px 0;float:left;height:24px;position:relative;z-index:2;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;text-align:center;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;-ms-transition:all .3s ease;transition:all .3s ease}"+config.selector+" .social ul li span.count{position:absolute;display:inline-block;top:-15px;font-size:11px;background-color:#fff;color:#d3204d;width:30px;height:30px;line-height:30px;border-radius:23px;left:27px;font-weight:700;font-family:'Open Sans',sans-serif;-webkit-font-smoothing:antialiased}"+config.selector+" .social ul li:hover{color:rgba(0,0,0,.5)}"+config.selector+" .social ul li:last-child{margin-right:0}"+config.selector+" .social li[class*=facebook]{background:#3b5998;display:"+config.networks.facebook.display+"}"+config.selector+" .social li[class*=twitter]{background:#6cdfea;display:"+config.networks.twitter.display+"}"+config.selector+" .social li[class*=google-plus]{background:#e34429;display:"+config.networks.google_plus.display+"}"+config.selector+" .social li[class*=pinterest]{background:#c5282f;display:"+config.networks.pinterest.display+"}"+config.selector+" .social li[class*=whatsapp]{background:#4dc247;display:"+config.networks.whatsapp.display+"}"+config.selector+" .social li[class*=paper-plane]{background:#42c5b0;display:"+config.networks.email.display+"}"};var ShareUtils;

if ((!("classList" in document.documentElement)) && Object.defineProperty && typeof HTMLElement !== "undefined") {
  Object.defineProperty(HTMLElement.prototype, "classList", {
    get: function() {
      var ret, self, update;
      update = function(fn) {
        return function(value) {
          var classes, index;
          classes = self.className.split(/\s+/);
          index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(" ");
        };
      };
      self = this;
      ret = {
        add: update(function(classes, index, value) {
          ~index || classes.push(value);
        }),
        remove: update(function(classes, index) {
          ~index && classes.splice(index, 1);
        }),
        toggle: update(function(classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
          }
        }),
        contains: function(value) {
          return !!~self.className.split(/\s+/).indexOf(value);
        },
        item: function(i) {
          return self.className.split(/\s+/)[i] || null;
        }
      };
      Object.defineProperty(ret, "length", {
        get: function() {
          return self.className.split(/\s+/).length;
        }
      });
      return ret;
    }
  });
}

String.prototype.to_rfc3986 = function() {
  var tmp;
  tmp = encodeURIComponent(this);
  return tmp.replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
};


/*
 */

ShareUtils = (function() {
  function ShareUtils() {}

  ShareUtils.prototype.extend = function(to, from, overwrite) {
    var hasProp, prop;
    for (prop in from) {
      hasProp = to[prop] !== undefined;
      if (hasProp && typeof from[prop] === "object") {
        this.extend(to[prop], from[prop], overwrite);
      } else {
        if (overwrite || !hasProp) {
          to[prop] = from[prop];
        }
      }
    }
  };

  ShareUtils.prototype.hide = function(el) {
    return el.style.display = "none";
  };

  ShareUtils.prototype.show = function(el) {
    return el.style.display = "block";
  };

  ShareUtils.prototype.has_class = function(el, class_name) {
    return el.classList.contains(class_name);
  };

  ShareUtils.prototype.add_class = function(el, class_name) {
    return el.classList.add(class_name);
  };

  ShareUtils.prototype.remove_class = function(el, class_name) {
    return el.classList.remove(class_name);
  };

  ShareUtils.prototype.is_encoded = function(str) {
    str = str.to_rfc3986();
    return decodeURIComponent(str) !== str;
  };

  ShareUtils.prototype.is_iphone_or_ipod = function() {
    return navigator.userAgent.indexOf('iPhone') !== -1 || navigator.userAgent.indexOf('iPod') !== -1 || navigator.userAgent.indexOf('iPad') !== -1;
  };

  ShareUtils.prototype.encode = function(str) {
    if (typeof str === "undefined" || this.is_encoded(str)) {
      return str;
    } else {
      return str.to_rfc3986();
    }
  };

  ShareUtils.prototype.popup = function(url, params) {
    var k, popup, qs, v;
    if (params == null) {
      params = {};
    }
    popup = {
      width: 500,
      height: 350
    };
    popup.top = (screen.height / 2) - (popup.height / 2);
    popup.left = (screen.width / 2) - (popup.width / 2);
    qs = ((function() {
      var results;
      results = [];
      for (k in params) {
        v = params[k];
        results.push(k + "=" + (this.encode(v)));
      }
      return results;
    }).call(this)).join('&');
    if (qs) {
      qs = "?" + qs;
    }
    return window.open(url + qs, 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + popup.left + ",top=" + popup.top + ",width=" + popup.width + ",height=" + popup.height);
  };

  ShareUtils.prototype.link = function(url, params) {
    var k, qs, v;
    if (params == null) {
      params = {};
    }
    qs = ((function() {
      var results;
      results = [];
      for (k in params) {
        v = params[k];
        results.push(k + "=" + (this.encode(v)));
      }
      return results;
    }).call(this)).join('&');
    if (qs) {
      qs = "?" + qs;
    }
    alert(url + qs);
    return window.location.href = url + qs;
  };

  return ShareUtils;

})();
var Share,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Share = (function(superClass) {
  extend(Share, superClass);

  function Share(element1, options) {
    this.element = element1;
    this.el = {
      head: document.getElementsByTagName('head')[0],
      body: document.getElementsByTagName('body')[0]
    };
    this.config = {
      enabled_networks: 0,
      protocol: ['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//',
      url: window.location.href,
      caption: null,
      title: this.default_title(),
      image: this.default_image(),
      description: this.default_description(),
      ui: {
        flyout: 'top center',
        button_text: 'Teilen',
        button_font: true,
        icon_font: true
      },
      networks: {
        google_plus: {
          enabled: true,
          url: null,
          mobile_only: false
        },
        twitter: {
          enabled: true,
          url: null,
          description: null,
          mobile_only: false
        },
        facebook: {
          enabled: true,
          load_sdk: true,
          url: null,
          app_id: null,
          title: null,
          caption: null,
          description: null,
          image: null,
          mobile_only: false
        },
        pinterest: {
          enabled: true,
          url: null,
          image: null,
          description: null,
          mobile_only: false
        },
        whatsapp: {
          mobile_only: true,
          enabled: true,
          title: null,
          body: null,
          url: null
        },
        email: {
          enabled: true,
          title: null,
          description: null,
          mobile_only: false
        }
      }
    };
    this.setup(this.element, options);
    return this;
  }

  Share.prototype.setup = function(element, opts) {
    var i, index, instance, instances, len;
    instances = document.querySelectorAll(element);
    this.extend(this.config, opts, true);
    this.set_global_configuration();
    this.normalize_network_configuration;
    if (this.config.ui.icon_font) {
      this.inject_icons();
    }
    if (this.config.ui.button_font) {
      this.inject_fonts();
    }
    if (this.config.networks.facebook.enabled && this.config.networks.facebook.load_sdk) {
      this.inject_facebook_sdk();
    }
    for (index = i = 0, len = instances.length; i < len; index = ++i) {
      instance = instances[index];
      this.setup_instance(element, index);
    }
  };

  Share.prototype.setup_instance = function(element, index) {
    var _this, button, check, i, instance, label, len, network, networks, opts, results;
    instance = document.querySelectorAll(element)[index];
    this.hide(instance);
    this.add_class(instance, "sharer-" + index);
    instance = document.querySelectorAll(element)[index];
    if (instance.dataset.url !== void 0 || null) {
      opts = {
        networks: {
          facebook: {
            url: instance.dataset.url
          },
          twitter: {
            url: instance.dataset.url
          },
          pinterest: {
            url: instance.dataset.url
          },
          whatsapp: {
            url: instance.dataset.url
          },
          email: {
            url: instance.dataset.url
          },
          google_plus: {
            url: instance.dataset.url
          }
        }
      };
      this.extend(this.config, opts, true);
    }
    if (instance.dataset.title !== void 0 || null) {
      opts = {
        networks: {
          facebook: {
            title: instance.dataset.title
          },
          twitter: {
            title: instance.dataset.title
          },
          pinterest: {
            title: instance.dataset.title
          },
          whatsapp: {
            title: instance.dataset.title
          },
          email: {
            title: instance.dataset.title
          },
          google_plus: {
            title: instance.dataset.title
          }
        }
      };
      this.extend(this.config, opts, true);
    }
    if (instance.dataset.description !== void 0 || null) {
      opts = {
        networks: {
          facebook: {
            description: instance.dataset.description
          },
          twitter: {
            description: instance.dataset.description
          },
          pinterest: {
            description: instance.dataset.description
          },
          whatsapp: {
            description: instance.dataset.description
          },
          email: {
            description: instance.dataset.description
          },
          google_plus: {
            description: instance.dataset.description
          }
        }
      };
      this.extend(this.config, opts, true);
    }
    if (instance.dataset.image !== void 0 || null) {
      opts = {
        networks: {
          facebook: {
            image: instance.dataset.image
          },
          twitter: {
            image: instance.dataset.image
          },
          pinterest: {
            image: instance.dataset.image
          },
          whatsapp: {
            image: instance.dataset.image
          },
          email: {
            image: instance.dataset.image
          },
          google_plus: {
            image: instance.dataset.image
          }
        }
      };
      this.extend(this.config, opts, true);
    }
    if (instance.dataset.sdk !== void 0 || null) {
      check = typeof instance.dataset.sdk === 'false' || 'False' ? instance.dataset.sdk = false : instance.dataset.sdk = true;
      opts = {
        networks: {
          facebook: {
            load_sdk: check
          }
        }
      };
      this.extend(this.config, opts, true);
    } else {

    }
    this.inject_css(instance);
    this.inject_html(instance);
    this.show(instance);
    label = instance.getElementsByTagName("label")[0];
    button = instance.getElementsByClassName("social")[0];
    networks = instance.getElementsByTagName('li');
    this.add_class(button, "networks-" + this.config.enabled_networks);
    label.addEventListener("click", (function(_this) {
      return function() {
        return _this.event_toggle(button);
      };
    })(this));
    _this = this;
    results = [];
    for (index = i = 0, len = networks.length; i < len; index = ++i) {
      network = networks[index];
      results.push(network.addEventListener("click", function() {
        _this.event_network(instance, this);
        return _this.event_close(button);
      }));
    }
    return results;
  };

  Share.prototype.event_toggle = function(button) {
    if (this.has_class(button, "active")) {
      return this.event_close(button);
    } else {
      return this.event_open(button);
    }
  };

  Share.prototype.event_open = function(button) {
    if (this.has_class(button, "load")) {
      this.remove_class(button, "load");
    }
    return this.add_class(button, "active");
  };

  Share.prototype.event_close = function(button) {
    return this.remove_class(button, "active");
  };

  Share.prototype.event_network = function(instance, network) {
    var name;
    name = network.getAttribute("data-network");
    this.hook("before", name, instance);
    this["network_" + name]();
    return this.hook("after", name, instance);
  };

  Share.prototype.open = function() {
    return this["public"]("open");
  };

  Share.prototype.close = function() {
    return this["public"]("close");
  };

  Share.prototype.toggle = function() {
    return this["public"]("toggle");
  };

  Share.prototype["public"] = function(action) {
    var button, i, index, instance, len, ref, results;
    ref = document.querySelectorAll(this.element);
    results = [];
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      instance = ref[index];
      button = instance.getElementsByClassName("social")[0];
      results.push(this["event_" + action](button));
    }
    return results;
  };

  Share.prototype.network_facebook = function() {
    if (this.config.networks.facebook.load_sdk) {
      if (!window.FB) {
        return console.error("The Facebook JS SDK hasn't loaded yet.");
      }
      return FB.ui({
        method: 'feed',
        name: this.config.networks.facebook.title,
        link: this.config.networks.facebook.url,
        picture: this.config.networks.facebook.image,
        caption: this.config.networks.facebook.caption,
        description: this.config.networks.facebook.description
      });
    } else {
      return this.popup('https://www.facebook.com/sharer/sharer.php', {
        u: this.config.networks.facebook.url
      });
    }
  };

  Share.prototype.network_twitter = function() {
    return this.popup('https://twitter.com/intent/tweet', {
      text: this.config.networks.twitter.description,
      url: this.config.networks.twitter.url
    });
  };

  Share.prototype.network_google_plus = function() {
    return this.popup('https://plus.google.com/share', {
      url: this.config.networks.google_plus.url
    });
  };

  Share.prototype.network_pinterest = function() {
    return this.popup('https://www.pinterest.com/pin/create/button', {
      url: this.config.networks.pinterest.url,
      media: this.config.networks.pinterest.image,
      description: this.config.networks.pinterest.description
    });
  };

  Share.prototype.network_email = function() {
    return this.popup('mailto:', {
      subject: this.config.networks.email.title,
      body: this.config.networks.email.description
    });
  };

  Share.prototype.network_whatsapp = function() {
    return this.link('WhatsApp://send', {
      text: this.config.networks.whatsapp.title,
      body: this.config.networks.whatsapp.description
    });
  };

  Share.prototype.inject_icons = function() {
    return this.inject_stylesheet("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
  };

  Share.prototype.inject_fonts = function() {
    return this.inject_stylesheet("https://fonts.googleapis.com/css?family=Lato:900&text=" + this.config.ui.button_text);
  };

  Share.prototype.inject_stylesheet = function(url) {
    var link;
    if (!this.el.head.querySelector("link[href=\"" + url + "\"]")) {
      link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", url);
      return this.el.head.appendChild(link);
    }
  };

  Share.prototype.inject_css = function(instance) {
    var css, meta, selector, style;
    selector = "." + (instance.getAttribute('class').split(" ").join("."));
    if (!this.el.head.querySelector("meta[name='sharer" + selector + "']")) {
      this.config.selector = selector;
      css = getStyles(this.config);
      style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      this.el.head.appendChild(style);
      delete this.config.selector;
      meta = document.createElement("meta");
      meta.setAttribute("name", "sharer" + selector);
      return this.el.head.appendChild(meta);
    }
  };

  Share.prototype.inject_html = function(instance) {
    return instance.innerHTML = "<label class='entypo-export'><i class='fa fa-share-alt' style='display: inline;'></i><span>" + this.config.ui.button_text + "</span></label><div class='social load " + this.config.ui.flyout + "'><ul><li class='fa fa-pinterest-p' data-network='pinterest'></li><li class='fa fa-twitter' data-network='twitter'></li><li class='fa fa-facebook' data-network='facebook'><!--span class='count'>10</span--></li><li class='fa fa-google-plus' data-network='google_plus'></li><li class='fa fa-paper-plane' data-network='email'></li><li class='fa fa-whatsapp' data-network='whatsapp'></li></ul></div>";
  };

  Share.prototype.inject_facebook_sdk = function() {
    var fb_root, script;
    if (!window.FB && this.config.networks.facebook.app_id && !this.el.body.querySelector('#fb-root')) {
      script = document.createElement("script");
      script.text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')";
      fb_root = document.createElement("div");
      fb_root.id = "fb-root";
      this.el.body.appendChild(fb_root);
      return this.el.body.appendChild(script);
    }
  };

  Share.prototype.hook = function(type, network, instance) {
    var fn, opts;
    fn = this.config.networks[network][type];
    if (typeof fn === "function") {
      opts = fn.call(this.config.networks[network], instance);
      if (opts !== void 0) {
        opts = this.normalize_filter_config_updates(opts);
        this.extend(this.config.networks[network], opts, true);
        this.normalize_network_configuration();
      }
    }
  };

  Share.prototype.default_title = function() {
    var content;
    if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
      return content.getAttribute('content');
    } else if (content = document.querySelector('title')) {
      return content.innerText;
    }
  };

  Share.prototype.default_image = function() {
    var content;
    if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
      return content.getAttribute('content');
    }
  };

  Share.prototype.default_description = function() {
    var content;
    if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
      return content.getAttribute('content');
    } else {
      return '';
    }
  };

  Share.prototype.set_global_configuration = function() {
    var display, network, option, options, ref, results;
    ref = this.config.networks;
    results = [];
    for (network in ref) {
      options = ref[network];
      for (option in options) {
        if (this.config.networks[network][option] == null) {
          this.config.networks[network][option] = this.config[option];
        }
      }
      if (this.config.networks[network].mobile_only === true && this.is_iphone_or_ipod() === true) {
        display = 'block';
        this.config.enabled_networks += 1;
        results.push(this.config.networks[network].display = display);
      } else {
        display = 'none';
        this.config.networks[network].display = display;
        if (this.config.networks[network].mobile_only === false || null && this.is_iphone_or_ipod() === false) {
          if (this.config.networks[network].enabled) {
            display = 'block';
            this.config.enabled_networks += 1;
            results.push(this.config.networks[network].display = display);
          } else {
            display = 'none';
            results.push(this.config.networks[network].display = display);
          }
        } else {
          results.push(void 0);
        }
      }
    }
    return results;
  };

  Share.prototype.normalize_network_configuration = function() {
    if (!this.config.networks.facebook.app_id) {
      this.config.networks.facebook.load_sdk = false;
    }
    if (!this.is_encoded(this.config.networks.twitter.description)) {
      this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description);
    }
    if (typeof this.config.networks.facebook.app_id === 'number') {
      return this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString();
    }
  };

  Share.prototype.normalize_filter_config_updates = function(opts) {
    if (this.config.networks.facebook.app_id !== opts.app_id) {
      console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly.");
      delete opts.app_id;
    }
    if (this.config.networks.facebook.load_sdk !== opts.load_sdk) {
      console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly.");
      delete opts.app_id;
    }
    return opts;
  };

  return Share;

})(ShareUtils);
 return Share;
});