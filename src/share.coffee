class Share extends ShareUtils
  constructor: (@element, options) ->
    
    @el =
      head: document.getElementsByTagName('head')[0]
      body: document.getElementsByTagName('body')[0]

    @config =
      enabled_networks: 0
      protocol: if ['http', 'https'].indexOf(window.location.href.split(':')[0]) is -1 then 'https://' else '//'
      url: window.location.href
      caption: null
      title: @default_title()
      image: @default_image()
      description: @default_description()

      ui:
        flyout: 'top center'
        button_text: 'Teilen'
        button_font: true
        icon_font: true

      networks:
        google_plus:
          enabled: true
          url: null
          mobile_only: false
        twitter:
          enabled: true
          url: null
          description: null # Text
          mobile_only: false
        facebook:
          enabled: true
          load_sdk: true
          url: null
          app_id: null
          title: null
          caption: null
          description: null
          image: null
          mobile_only: false
        pinterest:
          enabled: true
          url: null
          image: null
          description: null
          mobile_only: false
        whatsapp:
          mobile_only: true
          enabled: true
          title: null
          body: null
          url: null       # Subject
        email:
          enabled: true
          title: null       # Subject
          description: null # Body
          mobile_only: false

    @setup(@element, options)
    return @


  setup: (element, opts) ->
    ## Record all instances
    instances = document.querySelectorAll(element) # TODO: Use more efficient method.

    ## Extend config object
    @extend(@config, opts, true)

    ## Apply missing network-specific configurations
    @set_global_configuration()
    @normalize_network_configuration
    ## Inject Icon Fontset
    @inject_icons() if @config.ui.icon_font

    ## Inject Google's Lato Fontset (if enabled)
    @inject_fonts() if @config.ui.button_font

    ## Inject Facebook JS SDK (if Facebook is enabled)
    @inject_facebook_sdk() if @config.networks.facebook.enabled and @config.networks.facebook.load_sdk

    ## Loop through and initialize each instance
    @setup_instance(element, index) for instance, index in instances

    return


  setup_instance: (element, index) ->
    ## Get instance - (Note: Reload Element. gS/qSA doesn't support live NodeLists)
    instance = document.querySelectorAll(element)[index] # TODO: Use more efficient method.

    ## Hide instance
    @hide(instance)

    ## Add necessary classes to instance (Note: FF doesn't support adding multiple classes in a single call)
    @add_class(instance, "sharer-#{index}")

    ## Get instance - (Note: Reload Element. gS/qSA doesn't support live NodeLists)
    instance = document.querySelectorAll(element)[index] # TODO: Use more efficient method.

    if instance.dataset.url isnt undefined or null
      opts =
        networks:
          facebook:
            url: instance.dataset.url
          twitter:
            url: instance.dataset.url
          pinterest:
            url: instance.dataset.url
          whatsapp:
            url: instance.dataset.url
          email:
            url: instance.dataset.url 
          google_plus:
            url: instance.dataset.url            
      @extend(@config, opts, true)
            
    if instance.dataset.title isnt undefined or null
      opts =
        networks:
          facebook:
            title: instance.dataset.title
          twitter:
            title: instance.dataset.title
          pinterest:
            title: instance.dataset.title
          whatsapp:
            title: instance.dataset.title
          email:
            title: instance.dataset.title 
          google_plus:
            title: instance.dataset.title
      @extend(@config, opts, true)
      
    if instance.dataset.description isnt undefined or null
      opts =
        networks:
          facebook:
            description: instance.dataset.description
          twitter:
            description: instance.dataset.description
          pinterest:
            description: instance.dataset.description
          whatsapp:
            description: instance.dataset.description
          email:
            description: instance.dataset.description 
          google_plus:
            description: instance.dataset.description
      @extend(@config, opts, true)    
    
    if instance.dataset.image isnt undefined or null
      opts =
        networks:
          facebook:
            image: instance.dataset.image
          twitter:
            image: instance.dataset.image
          pinterest:
            image: instance.dataset.image
          whatsapp:
            image: instance.dataset.image
          email:
            image: instance.dataset.image 
          google_plus:
            image: instance.dataset.image
      @extend(@config, opts, true)
    
    if instance.dataset.sdk isnt undefined or null
      check = if typeof(instance.dataset.sdk) is 'false' || 'False' then instance.dataset.sdk = false else instance.dataset.sdk = true
      opts =
        networks:
          facebook:
            load_sdk: check
      @extend(@config, opts, true)                                
        
    else
      # nothing

    ## Inject HTML and CSS
    @inject_css(instance)
    @inject_html(instance)

    ## Show instance
    @show(instance)

    label    = instance.getElementsByTagName("label")[0]
    button   = instance.getElementsByClassName("social")[0]
    networks = instance.getElementsByTagName('li')

    @add_class(button, "networks-#{@config.enabled_networks}")

    ## Add listener to activate buttons
    label.addEventListener "click", => @event_toggle(button)

    ## Add listener to activate networks and close button
    _this = @
    for network, index in networks
      network.addEventListener "click", ->
        _this.event_network(instance, @)
        _this.event_close(button)


  ##########
  # EVENTS #
  ##########


  event_toggle: (button) ->
    if @has_class(button, "active")
      @event_close(button)
    else
      @event_open(button)

  event_open: (button)  ->
    if @has_class(button, "load")
      @remove_class(button, "load")

    @add_class(button, "active")

  event_close: (button) -> @remove_class(button, "active")

  event_network: (instance, network) ->
    name = network.getAttribute("data-network")
    @hook("before", name, instance)
    @["network_#{name}"]()
    @hook("after", name, instance)


  ##############
  # PUBLIC API #
  ##############


  open:   -> @public("open")
  close:  -> @public("close")
  toggle: -> @public("toggle")

  public: (action) ->
    for instance, index in document.querySelectorAll(@element)
      button = instance.getElementsByClassName("social")[0]
      @["event_#{action}"](button)



  ############################
  # NETWORK-SPECIFIC METHODS #
  ############################


  network_facebook: ->
      
    if @config.networks.facebook.load_sdk
      if not window.FB then return console.error "The Facebook JS SDK hasn't loaded yet."

      FB.ui
        method:       'feed',
        name:         @config.networks.facebook.title
        link:         @config.networks.facebook.url
        picture:      @config.networks.facebook.image
        caption:      @config.networks.facebook.caption
        description:  @config.networks.facebook.description
    else
      @popup('https://www.facebook.com/sharer/sharer.php', u: @config.networks.facebook.url)

  network_twitter: ->
    @popup('https://twitter.com/intent/tweet', text: @config.networks.twitter.description, url: @config.networks.twitter.url)

  network_google_plus: ->
    @popup('https://plus.google.com/share', url: @config.networks.google_plus.url)

  network_pinterest: ->
    @popup('https://www.pinterest.com/pin/create/button', url: @config.networks.pinterest.url, media: @config.networks.pinterest.image, description: @config.networks.pinterest.description)

  network_email: ->
    @popup('mailto:', subject: @config.networks.email.title, body: @config.networks.email.description)

  network_whatsapp: ->
    @link('WhatsApp://send', text: @config.networks.whatsapp.title, body: @config.networks.whatsapp.description)


  #############
  # INJECTORS #
  #############


  # Notes
  # - Must be https:// due to CDN CORS caching issues
  # - To include the full entypo set, change URL to: https://www.sharebutton.co/fonts/entypo.css
  inject_icons: -> @inject_stylesheet("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css")
  inject_fonts: -> @inject_stylesheet("https://fonts.googleapis.com/css?family=Lato:900&text=#{@config.ui.button_text}")

  inject_stylesheet: (url) ->
    unless @el.head.querySelector("link[href=\"#{url}\"]")
      link = document.createElement("link")
      link.setAttribute("rel", "stylesheet")
      link.setAttribute("href", url)
      @el.head.appendChild(link)

  inject_css: (instance) ->
    selector = ".#{instance.getAttribute('class').split(" ").join(".")}"

    unless @el.head.querySelector("meta[name='sharer#{selector}']")
      @config.selector = selector # TODO: Temporary

      css   = getStyles(@config)
      style = document.createElement("style")
      style.type = "text/css"

      # IE9 Fix
      if style.styleSheet
        style.styleSheet.cssText = css
      else
        style.appendChild document.createTextNode(css)

      @el.head.appendChild style

      delete @config.selector # TODO: Temporary

      meta = document.createElement("meta")
      meta.setAttribute("name", "sharer#{selector}")
      @el.head.appendChild(meta)

  inject_html: (instance) ->
    instance.innerHTML = "<label class='entypo-export'><i class='fa fa-share-alt' style='display: inline;'></i><span>#{@config.ui.button_text}</span></label><div class='social load #{@config.ui.flyout}'><ul><li class='fa fa-pinterest-p' data-network='pinterest'></li><li class='fa fa-twitter' data-network='twitter'></li><li class='fa fa-facebook' data-network='facebook'><span class='count'>10</span></li><li class='fa fa-google-plus' data-network='google_plus'></li><li class='fa fa-paper-plane' data-network='email'></li><li class='fa fa-whatsapp' data-network='whatsapp'></li></ul></div>"

  inject_facebook_sdk: ->
    if !window.FB && @config.networks.facebook.app_id && !@el.body.querySelector('#fb-root')
      script      = document.createElement("script")
      script.text = "window.fbAsyncInit=function(){FB.init({appId:'#{@config.networks.facebook.app_id}',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='#{@config.protocol}connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')"
      fb_root     = document.createElement("div")
      fb_root.id  = "fb-root"
      @el.body.appendChild(fb_root)
      @el.body.appendChild(script)


  ###########
  # HELPERS #
  ###########

  hook: (type, network, instance) ->
    fn = @config.networks[network][type]

    if typeof(fn) is "function"
      opts = fn.call(@config.networks[network], instance)
      unless opts is undefined
        opts = @normalize_filter_config_updates(opts)
        @extend(@config.networks[network], opts, true)
        @normalize_network_configuration()

    return


  default_title: ->
    ## Get default title
    if content = (document.querySelector('meta[property="og:title"]') ||
                  document.querySelector('meta[name="twitter:title"]'))
      content.getAttribute('content')
    else if content = document.querySelector('title')
      content.innerText

  default_image: ->
    ## Get default image
    if content = (document.querySelector('meta[property="og:image"]') ||
                         document.querySelector('meta[name="twitter:image"]'))
      content.getAttribute('content')

  default_description: ->
    ## Get default description
    if content = (document.querySelector('meta[property="og:description"]') ||
                               document.querySelector('meta[name="twitter:description"]') ||
                               document.querySelector('meta[name="description"]'))
      content.getAttribute('content')
    else
      ''
    
  set_global_configuration: ->
    ## Update network-specific configuration with global configurations
    for network, options of @config.networks
      for option of options
        unless @config.networks[network][option]?
          @config.networks[network][option] = @config[option]

      ## Check for enabled networks and display them

      if @config.networks[network].mobile_only is true and @is_iphone_or_ipod() is true
        display = 'block'
        @config.enabled_networks += 1
        @config.networks[network].display = display
      else
        display = 'none'
        @config.networks[network].display = display
        if @config.networks[network].mobile_only is false or null and @is_iphone_or_ipod() is false
          if @config.networks[network].enabled
            display = 'block'
            @config.enabled_networks += 1
            @config.networks[network].display = display
          else
            display = 'none'
            @config.networks[network].display = display




  normalize_network_configuration: ->
    ## Don't load FB SDK if FB app_id isn't present
    unless @config.networks.facebook.app_id
      @config.networks.facebook.load_sdk = false

    ## Encode Twitter description for URL
    unless @is_encoded(@config.networks.twitter.description)
      @config.networks.twitter.description = encodeURIComponent(@config.networks.twitter.description)

    ## Typecast Facebook app_id to a String
    if typeof(@config.networks.facebook.app_id) is 'number'
      @config.networks.facebook.app_id = @config.networks.facebook.app_id.toString()


  normalize_filter_config_updates: (opts) ->
    if @config.networks.facebook.app_id isnt opts.app_id
      console.warn "You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."
      delete opts.app_id

    if @config.networks.facebook.load_sdk isnt opts.load_sdk
      console.warn "You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."
      delete opts.app_id

    return opts
