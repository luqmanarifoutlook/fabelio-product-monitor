'use strict';

// Global components list
let components = window.components = {};

components.loaderCircle = {
	selector: '.page-loader-progress',
	script: './assets/js/progress-circle.min.js',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			node.style.visibility = 'visible';

			let
				instance = new ProgressCircle({
					node: node
				}),
				intervalId = setInterval( function () {
					if ( instance.params.angle < 355 ) {
						let increment = ( 360 - instance.params.angle ) * 0.07;
						instance.render( instance.params.angle + increment );
					} else {
						clearInterval( intervalId );
						instance.render( 355 );
					}
				}, 20 );

			window.addEventListener( 'components:ready', function () {
				clearInterval( intervalId );
				instance.render( 360 );
			})
		});
	}
};

components.pageReveal = {
	selector: '.page',
	init: function () {
		window.addEventListener( 'components:ready', function () {
			window.dispatchEvent( new Event( 'resize' ) );
			document.documentElement.classList.add( 'components-ready' );

			setTimeout( function () {
				document.documentElement.classList.add( 'page-loaded' );
			}, 500 );
		}, { once: true } );
	}
};

components.fontAwesome = {
	selector: '[class*="fa-"]',
	styles: './assets/css/font-awesome.css'
};

components.mdi = {
	selector: '[class*="mdi-"]',
	styles: './assets/css/mdi.css'
};

components.grid = {
	selector: '.container, .container-fluid, .row, [class*="col-"]',
	styles: './assets/css/grid.css'
};

components.section = {
	selector: 'section',
	styles: './assets/css/section.css'
};

components.serviceSection = {
	selector: '.service-section',
	styles: './assets/css/service-section.css'
};

components.footer = {
	selector: 'footer',
	styles: './assets/css/footer.css'
};

components.button = {
	selector: '.btn',
	styles: './assets/css/button.css'
};

components.link = {
	selector: '.link',
	styles: './assets/css/link.css'
};

components.input = {
	selector: '.form-group, .input-group, .form-check, .custom-control, .form-control',
	styles: './assets/css/input.css'
};

components.checkboxColor = {
	selector: '.checkbox-color',
	styles: './assets/css/checkbox-color.css'
};

components.checkboxTag = {
	selector: '.checkbox-tag',
	styles: './assets/css/checkbox-tag.css'
};

components.figure = {
	selector: '.figure',
	styles: './assets/css/figure.css'
};

components.imageMask = {
	selector: '.image-mask',
	styles: './assets/css/image-mask.css'
};

components.position = {
	selector: '[class*="position-"], [class*="fixed-"], [class*="sticky-"]',
	styles: './assets/css/position.css'
};

components.code = {
	selector: 'code',
	styles: [
		'./assets/code/code.css',
		'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500&display=swap'
	]
};

components.effect = {
	selector: '.effect',
	styles: './assets/css/effect.css'
};

components.dropCap = {
	selector: '.drop-cap',
	styles: './assets/css/drop-cap.css'
};

components.fontHeebo = {
	selector: 'html',
	styles: 'https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700&display=swap'
};

components.intenseIcons = {
	selector: '[class*="int-"]',
	styles: './assets/css/intense-icons.css'
};

components.intenseThin = {
	selector: '[class*="ith-"]',
	styles: './assets/css/intense-thin.css'
};

components.currentDevice = {
	selector: 'html',
	script: './assets/js/current-device.min.js'
};

components.textBox = {
	selector: '.text-box',
	styles: './assets/css/text-box.css'
};

components.contentRow = {
	selector: '.content-row',
	styles: './assets/css/content-row.css'
};

components.rdNavbar = {
	selector: '.rd-navbar',
	styles: [
		'./assets/css/rd-navbar.css'
	],
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/util.min.js',
		'./assets/js/current-device.min.js',
		'./assets/js/rd-navbar.min.js'
	],
	dependencies: 'currentDevice',
	init: function ( nodes ) {
		let promises = [];

		nodes.forEach( function ( node ) {
			promises.push( new Promise ( function ( resolve ) {
				let
					backButtons = node.querySelectorAll( '.navbar-navigation-back-btn' ),
					params = parseJSON( node.getAttribute( 'data-rd-navbar' ) ),
					defaults = {
						stickUpClone: false,
						anchorNav: false,
						autoHeight: false,
						stickUpOffset: '1px',
						responsive: {
							0: {
								layout: 'rd-navbar-fixed',
								deviceLayout: 'rd-navbar-fixed',
								focusOnHover: 'ontouchstart' in window,
								stickUp: false
							},
							992: {
								layout: 'rd-navbar-fixed',
								deviceLayout: 'rd-navbar-fixed',
								focusOnHover: 'ontouchstart' in window,
								stickUp: false
							},
							1200: {
								layout: 'rd-navbar-fullwidth',
								deviceLayout: 'rd-navbar-fullwidth',
								stickUp: true,
								stickUpOffset: '1px',
								autoHeight: true
							}
						},
						callbacks: {
							onStuck: function () {
								// document.documentElement.classList.add( 'rd-navbar-stuck' );
                                document.documentElement.classList.remove( 'rd-navbar-stuck' );
							},
							onUnstuck: function () {
                                document.documentElement.classList.remove( 'rd-navbar-stuck' );
                                document.documentElement.classList.remove( 'rd-navbar--is-stuck' );
							},
							onDropdownToggle: function () {
								if ( this.classList.contains( 'opened' ) ) {
									this.parentElement.classList.add( 'overlaid' );
								} else {
									this.parentElement.classList.remove( 'overlaid' );
								}
							},
							onDropdownClose: function () {
								this.parentElement.classList.remove( 'overlaid' );
							},
							onDomAppend: function () {
								resolve()
							}
						}
					},
					xMode = {
						stickUpClone: false,
						anchorNav: false,
						responsive: {
							0: {
								stickUp: false,
								stickUpClone: false
							},
							992: {
								stickUp: false,
								stickUpClone: false
							},
							1200: {
								stickUp: false,
								stickUpClone: false
							}
						},
						callbacks: {
							onDropdownOver: function () { return false; }
						}
					},
					navbar = node.RDNavbar = new RDNavbar( node, Util.merge( window.xMode ? [ defaults, params, xMode ] : [ defaults, params ] ) );

				if ( backButtons.length ) {
					backButtons.forEach( function ( btn ) {
						btn.addEventListener( 'click', function () {
							let
								submenu = this.closest( '.rd-navbar-submenu' ),
								parentmenu = submenu.parentElement;
	
							navbar.dropdownToggle.call( submenu, navbar );
						});
					});
				}
			}) );
		});

		return Promise.all( promises );
	}
};

components.regula = {
	selector: '[data-constraints]',
	styles: './assets/css/regula.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/regula.min.js'
	],
	init: function ( nodes ) {
		let elements = $( nodes );

		// Custom validator - phone number
		regula.custom({
			name: 'PhoneNumber',
			defaultMessage: 'Invalid phone number format',
			validator: function() {
				if ( this.value === '' ) return true;
				else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test( this.value );
			}
		});

		for (let i = 0; i < elements.length; i++) {
			let o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) o.addClass("form-control-last-child");
		}

		elements.on('input change propertychange blur', function (e) {
			let $this = $(this), results;

			if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return;
			if ($this.parents('.rd-mailform').hasClass('success')) return;

			if (( results = $this.regula('validate') ).length) {
				for (let i = 0; i < results.length; i++) {
					$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
				}
			} else {
				$this.siblings(".form-validation").text("").parent().removeClass("has-error")
			}
		}).regula('bind');

		let regularConstraintsMessages = [
			{
				type: regula.Constraint.Required,
				newMessage: "The text field is required."
			},
			{
				type: regula.Constraint.Email,
				newMessage: "The email is not a valid email."
			},
			{
				type: regula.Constraint.Numeric,
				newMessage: "Only numbers are required"
			},
			{
				type: regula.Constraint.Selected,
				newMessage: "Please choose an option."
			}
		];


		for (let i = 0; i < regularConstraintsMessages.length; i++) {
			let regularConstraint = regularConstraintsMessages[i];

			regula.override({
				constraintType: regularConstraint.type,
				defaultMessage: regularConstraint.newMessage
			});
		}
	}
};

components.rdMailform = {
	selector: '.rd-mailform',
	styles: [
		'./assets/css/rd-mailform.css',
		'./assets/css/intense-icons.css',
		'./assets/css/font-awesome.css',
		'./assets/css/mdi.css'
	],
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/rd-mailform.min.js',
	],
	init: function ( nodes ) {
		let i, j, k,
			$captchas = $( nodes ).find( '.recaptcha' ),
			msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};

		if ( $captchas.length ) {
			$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
		}

		/**
		 * @desc Check if all elements pass validation
		 * @param {object} elements - object of items for validation
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function isValidated(elements, captcha) {
			let results, errors = 0;

			if (elements.length) {
				for (let j = 0; j < elements.length; j++) {

					let $input = $(elements[j]);
					if ((results = $input.regula('validate')).length) {
						for (k = 0; k < results.length; k++) {
							errors++;
							$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
						}
					} else {
						$input.siblings(".form-validation").text("").parent().removeClass("has-error")
					}
				}

				if (captcha) {
					if (captcha.length) {
						return validateReCaptcha(captcha) && errors === 0
					}
				}

				return errors === 0;
			}
			return true;
		}

		/**
		 * @desc Validate google reCaptcha
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function validateReCaptcha(captcha) {
			let captchaToken = captcha.find('.g-recaptcha-response').val();

			if (captchaToken.length === 0) {
				captcha
				.siblings('.form-validation')
				.html('Please, prove that you are not robot.')
				.addClass('active');
				captcha
				.closest('.form-wrap')
				.addClass('has-error');

				captcha.on('propertychange', function () {
					let $this = $(this),
						captchaToken = $this.find('.g-recaptcha-response').val();

					if (captchaToken.length > 0) {
						$this
						.closest('.form-wrap')
						.removeClass('has-error');
						$this
						.siblings('.form-validation')
						.removeClass('active')
						.html('');
						$this.off('propertychange');
					}
				});

				return false;
			}

			return true;
		}

		/**
		 * @desc Initialize Google reCaptcha
		 */
		window.onloadCaptchaCallback = function () {
			for (let i = 0; i < $captchas.length; i++) {
				let
					$captcha = $($captchas[i]),
					resizeHandler = (function() {
						let
							frame = this.querySelector( 'iframe' ),
							inner = this.firstElementChild,
							inner2 = inner.firstElementChild,
							containerRect = null,
							frameRect = null,
							scale = null;

						inner2.style.transform = '';
						inner.style.height = 'auto';
						inner.style.width = 'auto';

						containerRect = this.getBoundingClientRect();
						frameRect = frame.getBoundingClientRect();
						scale = containerRect.width/frameRect.width;

						if ( scale < 1 ) {
							inner2.style.transform = 'scale('+ scale +')';
							inner.style.height = ( frameRect.height * scale ) + 'px';
							inner.style.width = ( frameRect.width * scale ) + 'px';
						}
					}).bind( $captchas[i] );

				grecaptcha.render(
					$captcha.attr('id'),
					{
						sitekey: $captcha.attr('data-sitekey'),
						size: $captcha.attr('data-size') ? $captcha.attr('data-size') : 'normal',
						theme: $captcha.attr('data-theme') ? $captcha.attr('data-theme') : 'light',
						callback: function () {
							$('.recaptcha').trigger('propertychange');
						}
					}
				);

				$captcha.after("<span class='form-validation'></span>");

				if ( $captchas[i].hasAttribute( 'data-auto-size' ) ) {
					resizeHandler();
					window.addEventListener( 'resize', resizeHandler );
				}
			}
		};

		for ( i = 0; i < nodes.length; i++ ) {
			let
				$form = $(nodes[i]),
				formHasCaptcha = false;

			$form.attr('novalidate', 'novalidate').ajaxForm({
				data: {
					"form-type": $form.attr("data-form-type") || "contact",
					"counter": i
				},
				beforeSubmit: function (arr, $form, options) {
					if ( window.xMode ) return;

					let
						form = $(nodes[this.extraData.counter]),
						inputs = form.find("[data-constraints]"),
						output = $("#" + form.attr("data-form-output")),
						captcha = form.find('.recaptcha'),
						captchaFlag = true;

					output.removeClass("active error success");

					if (isValidated(inputs, captcha)) {

						// veify reCaptcha
						if (captcha.length) {
							let captchaToken = captcha.find('.g-recaptcha-response').val(),
								captchaMsg = {
									'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
									'CPT002': 'Something wrong with google reCaptcha'
								};

							formHasCaptcha = true;

							$.ajax({
								method: "POST",
								url: "assets/rd-mailform/reCaptcha.php",
								data: {'g-recaptcha-response': captchaToken},
								async: false
							})
							.done(function (responceCode) {
								if (responceCode !== 'CPT000') {
									if (output.hasClass("snackbar")) {
										output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon int-check"></span>'+ captchaMsg[responceCode] +'</div></div>');

										setTimeout(function () {
											output.removeClass("active");
										}, 3500);

										captchaFlag = false;
									} else {
										output.html(captchaMsg[responceCode]);
									}

									output.addClass("active");
								}
							});
						}

						if (!captchaFlag) {
							return false;
						}

						form.addClass('form-in-process');

						if (output.hasClass("snackbar")) {
							output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon fa-circle-o-notch fa-spin"></span>Sending</div></div>');
							output.addClass("active");
						}
					} else {
						return false;
					}
				},
				error: function (result) {
					if ( window.xMode ) return;

					let
						output = $("#" + $(nodes[this.extraData.counter]).attr("data-form-output")),
						form = $(nodes[this.extraData.counter]);

					output.text(msg[result]);
					form.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}
				},
				success: function (result) {
					if ( window.xMode ) return;

					let
						form = $(nodes[this.extraData.counter]),
						output = $("#" + form.attr("data-form-output")),
						select = form.find('select');

					form
					.addClass('success')
					.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}

					result = result.length === 5 ? result : 'MF255';
					output.text(msg[result]);

					if (result === "MF000") {
						if (output.hasClass("snackbar")) {
							output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon int-check"></span>'+ msg[result] +'</div></div>');
						} else {
							output.addClass("active success");
						}
					} else {
						if (output.hasClass("snackbar")) {
							output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon int-warning"></span>'+ msg[result] +'</div></div>');
						} else {
							output.addClass("active error");
						}
					}

					form.clearForm();

					if (select.length) {
						select.select2("val", "");
					}

					form.find('input, textarea').trigger('blur');

					setTimeout(function () {
						output.removeClass("active error success");
						form.removeClass('success');
					}, 3500);
				}
			});
		}
	}
};

components.campaignMonitor = {
	selector: '.campaign-mailform',
	styles: './assets/css/rd-mailform.css',
	script: './assets/js/jquery-3.4.1.min.js',
	init: function ( nodes ) {
		/**
		 * @desc Check if all elements pass validation
		 * @param {object} elements - object of items for validation
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function isValidated(elements, captcha) {
			let results, errors = 0;

			if (elements.length) {
				for (let j = 0; j < elements.length; j++) {

					let $input = $(elements[j]);
					if ((results = $input.regula('validate')).length) {
						for (let k = 0; k < results.length; k++) {
							errors++;
							$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
						}
					} else {
						$input.siblings(".form-validation").text("").parent().removeClass("has-error")
					}
				}

				if (captcha) {
					if (captcha.length) {
						return validateReCaptcha(captcha) && errors === 0
					}
				}

				return errors === 0;
			}
			return true;
		}

		let $nodes = $(nodes);

		for ( let i = 0; i < $nodes.length; i++ ) {
			let $campaignItem = $($nodes[i]);

			$campaignItem.on('submit', $.proxy(function (e) {
				e.preventDefault();

				let data = {},
					url = this.attr('action'),
					dataArray = this.serializeArray(),
					$output = $("#" + $nodes.attr("data-form-output")),
					$this = $(this);

				for ( let i = 0; i < dataArray.length; i++) {
					data[dataArray[i].name] = dataArray[i].value;
				}

				$.ajax({
					data: data,
					url: url,
					dataType: 'jsonp',
					error: function (resp, text) {
						$output.html('Server error: ' + text);

						setTimeout(function () {
							$output.removeClass("active");
						}, 4000);
					},
					success: function (resp) {
						$output.html(resp.Message).addClass('active');

						setTimeout(function () {
							$output.removeClass("active");
						}, 6000);
					},
					beforeSend: function (data) {
						// Stop request if inputs are invalid
						if ( window.xMode || !isValidated( $this.find( '[data-constraints]' ) ) )
							return false;

						$output.html('Submitting...').addClass('active');
					}
				});

				// Clear inputs after submit
				let inputs = $this[0].getElementsByTagName('input');
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].value = '';
					let label = document.querySelector( '[for="'+ inputs[i].getAttribute( 'id' ) +'"]' );
					if( label ) label.classList.remove( 'focus', 'not-empty' );
				}

				return false;
			}, $campaignItem));
		}
	}
};

components.mailchimp = {
	selector: '.mailchimp-mailform',
	styles: './assets/css/rd-mailform.css',
	script: './assets/js/jquery-3.4.1.min.js',
	init: function ( nodes ) {
		let $nodes = $( nodes );

		for ( let i = 0; i < $nodes.length; i++ ) {
			let
				$mailchimpItem = $($nodes[i]),
				$email = $mailchimpItem.find('input[type="email"]');

			// Required by MailChimp
			$mailchimpItem.attr('novalidate', 'true');
			$email.attr('name', 'EMAIL');

			$mailchimpItem.on('submit', $.proxy( function ( $email, event ) {
				event.preventDefault();

				let
					$this = this,
					data = {},
					url = $this.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
					dataArray = $this.serializeArray(),
					$output = $("#" + $this.attr("data-form-output"));

				for ( let i = 0; i < dataArray.length; i++ ) {
					data[dataArray[i].name] = dataArray[i].value;
				}

				$.ajax({
					data: data,
					url: url,
					dataType: 'jsonp',
					error: function (resp, text) {
						$output.html('Server error: ' + text);

						setTimeout(function () {
							$output.removeClass("active");
						}, 4000);
					},
					success: function (resp) {
						$output.html(resp.msg).addClass('active');
						$email[0].value = '';
						var $label = $('[for="'+ $email.attr( 'id' ) +'"]');
						if ( $label.length ) $label.removeClass( 'focus not-empty' );

						setTimeout(function () {
							$output.removeClass("active");
						}, 6000);
					},
					beforeSend: function (data) {
						var isValidated = (function () {
							var results, errors = 0;
							var elements = $this.find('[data-constraints]');
							var captcha = null;
							if (elements.length) {
								for (var j = 0; j < elements.length; j++) {

									var $input = $(elements[j]);
									if ((results = $input.regula('validate')).length) {
										for (var k = 0; k < results.length; k++) {
											errors++;
											$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
										}
									} else {
										$input.siblings(".form-validation").text("").parent().removeClass("has-error")
									}
								}

								if (captcha) {
									if (captcha.length) {
										return validateReCaptcha(captcha) && errors === 0
									}
								}

								return errors === 0;
							}
							return true;
						})();

						// Stop request if builder or inputs are invalid
						if ( window.xMode || !isValidated ) return false;

						$output.html('Submitting...').addClass('active');
					}
				});

				return false;
			}, $mailchimpItem, $email ));
		}
	}
};

components.multiswitch = {
	selector: '[data-multi-switch]',
	styles: './assets/css/multiswitch.css',
	script: [
		'./assets/js/current-device.min.js',
		'./assets/js/multiswitch.js'
	],
	dependencies: 'rdNavbar',
	init: function ( nodes ) {
		let click = device.ios() ? 'touchstart' : 'click';

		nodes.forEach( function ( node ) {
			if ( node.tagName === 'A' ) {
				node.addEventListener( click, function ( event ) {
					event.preventDefault();
				});
			}

			MultiSwitch( Object.assign( {
				node: node,
				event: click,
			}, parseJSON( node.getAttribute( 'data-multi-switch' ) ) ) );
		});
	}
};

components.multiswitchTargetSlide = {
	selector: '[data-multi-switch-target-slide]',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/multiswitch.js'
	],
	dependencies: 'multiswitch',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let params = parseJSON( node.getAttribute( 'data-multi-switch-target-slide' ) );

			if ( !node.multiSwitchTarget.groups.active.state ) node.style.display = 'none';

			node.addEventListener( 'switch:active', function () {
				let $this = $( this );

				if ( this.multiSwitchTarget.groups.active.state ) {
					$this.stop().slideDown( params );
				} else {
					$this.stop().slideUp( params );
				}
			});
		});
	}
};

components.swiper = {
	selector: '.swiper-container',
	styles: './assets/css/swiper.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/swiper.min.js',
		'./assets/js/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				slides = node.querySelectorAll( '.swiper-slide[data-slide-bg]' ),
				params = parseJSON( node.getAttribute( 'data-swiper' ) ),
				defaults = {
					speed: 1000,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					autoplay: {
						delay: 5000
					}
				},
				xMode = {
					autoplay: false,
					loop: false,
					simulateTouch: false
				};

			// Set background image for slides with `data-slide-bg` attribute for Novi Builder
			slides.forEach( function ( slide ) {
				slide.style.backgroundImage = 'url('+ slide.getAttribute( 'data-slide-bg' ) +')';
			});

			new Swiper( node, Util.merge( window.xMode ? [ defaults, params, xMode ] : [ defaults, params ] ) );
		});
	}
};

components.owl = {
	selector: '.owl-carousel',
	styles: './assets/owl-carousel/owl.carousel.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/owl.carousel.min.js',
		'./assets/js/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				params = parseJSON( node.getAttribute( 'data-owl' ) ),
				defaults = {
					items: 1,
					margin: 40,
					loop: true,
					mouseDrag: true,
					stagePadding: 0,
					nav: false,
					navText: [],
					dots: false,
					autoplay: true,
					autoplayHoverPause: true
				},
				xMode = {
					autoplay: false,
					loop: false,
					mouseDrag: false
				},
				generated = {
					autoplay: node.getAttribute( 'data-autoplay' ) !== 'false',
					loop: node.getAttribute( 'data-loop' ) !== 'false',
					mouseDrag: node.getAttribute( 'data-mouse-drag' ) !== 'false',
					responsive: {}
				},
				aliaces = [ '-', '-xs-', '-sm-', '-md-', '-lg-', '-xl-', '-xxl-' ],
				values =  [ 0, 480, 576, 768, 992, 1200, 1600 ],
				responsive = generated.responsive;

			for ( let j = 0; j < values.length; j++ ) {
				responsive[ values[ j ] ] = {};

				for ( let k = j; k >= -1; k-- ) {
					if ( !responsive[ values[ j ] ][ 'items' ] && node.getAttribute( 'data' + aliaces[ k ] + 'items' ) ) {
						responsive[ values[ j ] ][ 'items' ] = k < 0 ? 1 : parseInt( node.getAttribute( 'data' + aliaces[ k ] + 'items' ), 10 );
					}
					if ( !responsive[ values[ j ] ][ 'stagePadding' ] && responsive[ values[ j ] ][ 'stagePadding' ] !== 0 && node.getAttribute( 'data' + aliaces[ k ] + 'stage-padding' ) ) {
						responsive[ values[ j ] ][ 'stagePadding' ] = k < 0 ? 0 : parseInt( node.getAttribute( 'data' + aliaces[ k ] + 'stage-padding' ), 10 );
					}
					if ( !responsive[ values[ j ] ][ 'margin' ] && responsive[ values[ j ] ][ 'margin' ] !== 0 && node.getAttribute( 'data' + aliaces[ k ] + 'margin' ) ) {
						responsive[ values[ j ] ][ 'margin' ] = k < 0 ? 30 : parseInt( node.getAttribute( 'data' + aliaces[ k ] + 'margin' ), 10 );
					}
				}
			}

			node.owl = $( node );
			$( node ).owlCarousel( Util.merge( window.xMode ? [ defaults, params, generated, xMode ] : [ defaults, params, generated ] ) );
		});
	}
};

components.slick = {
	selector: '.slick-slider',
	styles: './assets/css/slick.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/slick.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				breakpoint = { sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1600 }, // slick slider uses desktop first principle
				responsive = [];

			// Making responsive parameters
			for ( let key in breakpoint ) {
				if ( node.hasAttribute( 'data-slick-'+ key ) ) {
					responsive.push({
						breakpoint: breakpoint[ key ],
						settings: parseJSON( node.getAttribute( 'data-slick-'+ key ) )
					});
				}
			}

			$( node ).slick({ responsive: responsive });
		});
	}
};

components.counter = {
	selector: '[data-counter]',
	styles: './assets/counter/counter.css',
	script: [
		'./assets/js/util.min.js',
		'./assets/counter/counter.min.js',
	],
	init: function ( nodes ) {
		let observer = new IntersectionObserver( function ( entries ) {
			let observer = this;

			entries.forEach( function ( entry ) {
				let node = entry.target;

				if ( entry.isIntersecting ) {
					node.counter.run();
					observer.unobserve( node );
				}
			});
		}, {
			rootMargin: '0px',
			threshold: 1.0
		});

		nodes.forEach( function ( node ) {
			let counter = aCounter( Object.assign( {
				node: node,
				duration: 1000
			}, parseJSON( node.getAttribute( 'data-counter' ) ) ) );

			if ( window.xMode ) {
				counter.run();
			} else {
				observer.observe( node );
			}
		})
	}
};

components.animate = {
	selector: '[data-animate]',
	styles: './assets/css/animate.css',
	script: './assets/js/current-device.min.js',
	init: function ( nodes ) {
		if ( window.xMode || device.macos() ) {
			nodes.forEach( function ( node ) {
				let params = parseJSON( node.getAttribute( 'data-animate' ) );
				node.classList.add( 'animated', params.class );
			});
		} else {
			let observer = new IntersectionObserver( function ( entries ) {
				let observer = this;

				entries.forEach( function ( entry ) {
					let
						node = entry.target,
						params = parseJSON( node.getAttribute( 'data-animate' ) );

					if ( params.delay ) node.style.animationDelay = params.delay;
					if ( params.duration ) node.style.animationDuration = params.duration;

					if ( entry.isIntersecting ) {
						node.classList.add( 'animated', params.class );
						observer.unobserve( node );
					}
				});
			}, {
				threshold: .5
			});

			nodes.forEach( function ( node ) {
				observer.observe( node );
			});
		}
	}
};

components.progressLinear = {
	selector: '.progress-linear',
	styles: './assets/progress-linear/progress-linear.css',
	script: [
		'./assets/js/util.min.js',
		'./assets/counter/counter.min.js'
	],
	init: function ( nodes ) {
	let observer = new IntersectionObserver( function ( entries ) {
		let observer = this;

		entries.forEach( function ( entry ) {
			let node = entry.target;

			if ( entry.isIntersecting ) {
				node.counter.run();
				observer.unobserve( node );
			}
		});
	}, {
		rootMargin: '0px',
		threshold: 1.0
	});

	nodes.forEach( function ( node ) {
		let
			bar = node.querySelector( '.progress-linear-bar' ),
			counter = node.counter = aCounter({
				node: node.querySelector( '.progress-linear-counter' ),
				duration: 500,
				onStart: function ( value ) {
					bar.style.width = this.params.to +'%';
				}
			});

		if ( window.xMode ) {
			counter.run();
		} else {
			observer.observe( node );
		}
	});
	}
};

components.progressCircle = {
	selector: '.progress-circle',
	styles: './assets/progress-circle/progress-circle.css',
	script: [
	'./assets/js/util.min.js',
	'./assets/counter/counter.min.js',
	'./assets/progress-circle/progress-circle.min.js'
	],
	init: function ( nodes ) {
		let observer = new IntersectionObserver( function ( entries ) {
			let observer = this;

			entries.forEach( function ( entry ) {
				let node = entry.target;

				if ( entry.isIntersecting ) {
					node.counter.run();
					observer.unobserve( node );
				}
			});
		}, {
			rootMargin: '0px',
			threshold: 1.0
		});

		nodes.forEach( function ( node ) {
			let
				progress = new ProgressCircle({
					node: node.querySelector( '.progress-circle-bar' )
				}),
				counter = node.counter = aCounter({
					node: node.querySelector( '.progress-circle-counter' ),
					duration: 500,
					onUpdate: function ( value ) {
						progress.render( value * 3.6 );
					}
				});

			if ( window.xMode ) {
				counter.run();
			} else {
				observer.observe( node );
			}
		});
	}
};

components.countdown = {
	selector: '[ data-countdown ]',
	styles: './assets/countdown/countdown.css',
	script: [
		'./assets/js/util.min.js',
		'./assets/progress-circle/progress-circle.min.js',
		'./assets/countdown/countdown.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			aCountdown( Object.assign( {
				node:  node,
				tick:  100
			}, parseJSON( node.getAttribute( 'data-countdown' ) ) ) );
		} )
	}
};

components.select2 = {
	selector: '.select2',
	styles: './assets/select2/select2.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/select2/select2.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				params = parseJSON( node.getAttribute( 'data-select2-options' ) ),
				defaults = {
					dropdownParent: $( '.page' ),
					minimumResultsForSearch: Infinity
				};

			$( node ).select2( $.extend( defaults, params ) );
		});
	}
};

components.rdSearch = {
	selector: '[data-rd-search]',
	styles: './assets/rd-search/rd-search.css',
	script: './assets/rd-search/rd-search.js',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			new RDSearch( Object.assign( {
				form: node,
				handler: 'assets/rd-search/rd-search.php',
				output: '.rd-search-results'
			}, parseJSON( node.getAttribute( 'data-rd-search' ) ) ) );
		});
	}
};

components.rdRange = {
	selector: '.rd-range',
	styles: './assets/rd-range/rd-range.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/rd-range/rd-range.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).RDRange({});
		});
	}
};

components.maskedinput = {
	selector: '[data-masked]',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/maskedinput/jquery.maskedinput.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).mask( node.getAttribute( 'data-masked' ) );
		});
	}
};

components.spinner = {
	selector: '[data-spinner]',
	styles: './assets/spinner/spinner.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/jquery/jquery-ui.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				params = parseJSON( node.getAttribute( 'data-spinner' ) ),
				defaults = {
					min: 0,
					step: 1
				};

			$( node ).spinner( $.extend( defaults, params ) );
		});
	}
};

components.lightgallery = {
	selector: '[data-lightgallery]',
	styles: './assets/lightgallery/lightgallery.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/lightgallery/lightgallery.min.js',
		'./assets/js/util.min.js'
	],
	init: function ( nodes ) {
		if ( !window.xMode ) {
			nodes.forEach( function ( node ) {
				node = $( node );
				let
					defaults = {
						thumbnail: true,
						selector: '.lightgallery-item',
						youtubePlayerParams: {
							modestbranding: 1,
							showinfo: 0,
							rel: 0,
							controls: 0
						},
						vimeoPlayerParams: {
							byline : 0,
							portrait : 0,
							color : 'A90707'
						}
					},
					options = parseJSON( node.attr( 'data-lightgallery' ) );

				node.lightGallery( Util.merge( [ defaults, options ] ) );
			});
		}
	}
};

components.datetimepicker = {
	selector: '[data-datetimepicker]',
	styles: [
		'./assets/css/button.css',
		'./assets/css/dropdown.css',
		'./assets/css/intense-icons.css',
		'./assets/css/datetimepicker.css'
	],
	script: [
		'./assets/moment-js/moment-js.min.js',
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/datetimepicker/datetimepicker.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				$node = $( node ),
				params = parseJSON( $node.attr( 'data-datetimepicker' ) ),
				defaults = {
					format: 'L LT',
					widgetParent: $node.parent().hasClass( 'input-group' ) ? $node.parent().parent() : $node.parent(),
					icons: {
						time: 'int-clock',
						date: 'int-calendar',
						up: 'int-arrow-up',
						down: 'int-arrow-down',
						previous: 'int-arrow-left',
						next:     'int-arrow-right',
					}
				};

			if ( params.inline && params.target ) {
				let $target = $( params.target );
				delete params.target;

				$node.on( 'dp.change', function( event ) {
					$target.val( event.date.format( params.format || 'L LT' ) );
				});

				params.widgetParent = null;
			}

			if ( ( device.ios() || device.android() ) && !params.inline ) {
				let
					windowClickHandler = ( function ( event ) {
						if ( !this.data( 'DateTimePicker' ).widgetParent()[0].contains( event.target ) ) {
							this.data( 'DateTimePicker' ).hide();
							window.removeEventListener( 'touchstart', windowClickHandler );
						}
					}).bind( $node ),
					inputClickHandler = ( function ( event ) {
						event.preventDefault();
						this.data( 'DateTimePicker' ).show();
						window.addEventListener( 'touchstart', windowClickHandler );
					}).bind( $node );

				params.focusOnShow = false;
				$node.on( 'mousedown', inputClickHandler );
			}

			$node.datetimepicker( $.extend( defaults, params ) );
		});
	}
};

components.fullcalendar = {
	selector: '.fullcalendar',
		styles: './assets/fullcalendar/fullcalendar.css',
		script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/jquery/jquery-ui.min.js',
		'./assets/moment-js/moment-js.min.js',
		'./assets/fullcalendar/fullcalendar.min.js',
	],
		init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).fullCalendar({
				header: {
					left: '',
					center: 'prev,title,next',
					right: '',
				},
				editable: true,
				droppable: true,
				drop: function() {
					// is the "remove after drop" checkbox checked?
					if (!$(this).hasClass('event-recurring')) {
						$(this).remove();
					}
				},
				eventRender: function(event, element) {
					$(element).append( "<span class='event-close int-close'></span>" );
					$(element).find('.event-close').click(function() {
						$( node ).fullCalendar('removeEvents',event._id);
					});
				},
				weekNumbers: false,
				weekNumbersWithinDays : true,
				eventLimit: true,
				events: node.hasAttribute( 'data-fullcalendar-event' ) ? parseJSON( node.getAttribute( 'data-fullcalendar-event' ) ) : null
			});
		} )
	}
};

components.vide = {
	selector: '.vide',
		styles: './assets/vide/vide.css',
		script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/vide/vide.min.js',
	],
		init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				$element = $( node ),
				path = $element.data('vide-bg'),
				options = $element.data('vide-options');

			$element.vide( path, options );

			if ( window.xMode ) {
				let video = node.querySelector( 'video' );
				video.pause();
			}
		} )
	}
};

components.video = {
	selector: '.video',
	styles: './assets/video/video.css'
};

components.icon = {
	selector: '.icon',
	styles: './assets/css/icon.css'
};

components.logo = {
	selector: '.logo',
	styles: './assets/css/logo.css'
};

components.badge = {
	selector: '.badge',
	styles: './assets/css/badge.css'
};

components.table = {
	selector: '.table',
	styles: './assets/table/table.css'
};

components.tableCart = {
	selector: '.table-cart',
	styles: './assets/table-cart/table-cart.css'
};

components.bradcrumb = {
	selector: '.breadcrumb',
	styles: './assets/breadcrumb/breadcrumb.css'
};

components.accordion = {
	selector: '.accordion',
	styles: [
		'./assets/accordion/accordion.css',
		'./assets/css/intense-icons.css'
	]
};

components.pagination = {
	selector: '.pagination, .pag',
	styles: [
		'./assets/pagination/pagination.css',
		'./assets/pag/pag.css',
		'./assets/css/intense-icons.css'
	]
};

components.thumbnailBorder = {
	selector: '.thumbnail-border',
	styles: './assets/thumbnail-border/thumbnail-border.css'
};

components.thumbnailLight = {
	selector: '.thumbnail-light',
	styles: './assets/thumbnail-light/thumbnail-light.css'
};

components.thumbnailBorder = {
	selector: '.thumbnail-border',
	styles: './assets/thumbnail-border/thumbnail-border.css'
};

components.thumbnailSmall = {
	selector: '.thumbnail-small',
	styles: './assets/thumbnail-small/thumbnail-small.css'
};

components.thumbnailJanes = {
	selector: '.thumbnail-janes',
	styles: './assets/thumbnail-janes/thumbnail-janes.css'
};

components.thumbnailTamaz = {
	selector: '.thumbnail-tamaz',
	styles: './assets/thumbnail-tamaz/thumbnail-tamaz.css'
};

components.thumbnailConnor = {
	selector: '.thumbnail-connor',
	styles: './assets/thumbnail-connor/thumbnail-connor.css'
};

components.thumbnailFrode = {
	selector: '.thumbnail-frode',
	styles: './assets/thumbnail-frode/thumbnail-frode.css'
};

components.thumbnailScaleup = {
	selector: '.thumbnail-scaleup',
	styles: './assets/thumbnail-scaleup/thumbnail-scaleup.css'
};

components.thumbnailUpward = {
	selector: '.thumbnail-upward',
	styles: './assets/thumbnail-upward/thumbnail-upward.css'
};

components.thumbnailUpShadow = {
	selector: '.thumbnail-up-shadow',
	styles: './assets/thumbnail-up-shadow/thumbnail-up-shadow.css'
};

components.thumbnailJosip = {
	selector: '.thumbnail-josip',
	styles: './assets/thumbnail-josip/thumbnail-josip.css'
};

components.thumbnailZoom = {
	selector: '.thumbnail-zoom',
	styles: [
		'./assets/thumbnail-zoom/thumbnail-zoom.css',
		'./assets/css/intense-icons.css'
	]
};

components.thumbnailRotate = {
	selector: '.thumbnail-rotate',
	styles: './assets/thumbnail-rotate/thumbnail-rotate.css'
};

components.thumbnailGumba = {
	selector: '.thumbnail-gumba',
	styles: './assets/thumbnail-gumba/thumbnail-gumba.css'
};

components.thumbnailCalma = {
	selector: '.thumbnail-calma',
	styles: './assets/thumbnail-calma/thumbnail-calma.css'
};

components.thumbnailLouis = {
	selector: '.thumbnail-louis',
	styles: './assets/thumbnail-louis/thumbnail-louis.css'
};

components.gallery = {
	selector: '.gallery',
	styles: './assets/gallery/gallery.css'
};

components.pricingBox = {
	selector: '.pricing',
	styles: './assets/pricing/pricing.css'
};

components.pricingTable = {
	selector: '.pricing-table',
	styles: './assets/pricing-table/pricing-table.css'
};

components.pricingList = {
	selector: '.pricing-list',
	styles: './assets/pricing-list/pricing-list.css'
};

components.plans = {
	selector: '.plans',
	styles: './assets/plans/plans.css'
};

components.blog = {
	selector: '.blog',
	styles: './assets/blog/blog.css'
};

components.blogArticle = {
	selector: '.blog-article',
	styles: './assets/blog-article/blog-article.css'
};

components.post = {
	selector: '.post',
	styles: './assets/post/post.css'
};

components.postMeta = {
	selector: '.post-meta',
	styles: './assets/post-meta/post-meta.css'
};

components.postShare = {
	selector: '.post-share',
	styles: './assets/post-share/post-share.css'
};

components.product = {
	selector: '.product',
	styles: './assets/product/product.css'
};

components.productOverview = {
	selector: '.product-overview',
	styles: './assets/product-overview/product-overview.css'
};

components.productToolbar = {
	selector: '.product-toolbar',
	styles: './assets/product-toolbar/product-toolbar.css'
};

components.widget = {
	selector: '.widget',
	styles: './assets/widget/widget.css'
};

components.offerBox = {
	selector: '.offer-box',
	styles: './assets/offer-box/offer-box.css'
};

components.tag = {
	selector: '.tag',
	styles: './assets/css/tag.css'
};

components.intro = {
	selector: '.intro',
	styles: './assets/css/intro.css'
};

components.alert = {
	selector: '.alert',
	styles: './assets/css/alert.css'
};

components.snackbar = {
	selector: '.snackbar',
	styles: './assets/css/snackbar.css'
};

components.rights = {
	selector: '.rights',
	styles: './assets/css/rights.css'
};

components.iframe = {
	selector: '.iframe',
	styles: './assets/css/iframe.css'
};

components.gmap = {
	selector: '.google-map',
		styles: './assets/google-map/google-map.css',
		script: [
		'//maps.google.com/maps/api/js?key=AIzaSyBHij4b1Vyck1QAuGQmmyryBYVutjcuoRA&libraries=geometry,places&v=quarterly',
		'./assets/google-map/google-map.js'
	],
	init: function ( nodes ) {
		let promises = [];

		nodes.forEach( function ( node ) {
			let
				defaults = {
					node: node,
					center: { lat: 0, lng: 0 },
					zoom: 4,
				},
				params = parseJSON( node.getAttribute( 'data-settings' ) ),
				sMap = new SimpleGoogleMap( Object.assign( defaults, params ) );

			promises.push( new Promise ( function ( resolve ) {
				sMap.map.addListener( 'tilesloaded', resolve );
			}) );
		});

		return Promise.all( promises );
	}
};

components.gmapMarkerInfo = {
	selector: '[data-marker-info]',
		init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			node.addEventListener( 'click', function () {
				let
					params = parseJSON( this.getAttribute( 'data-marker-info' ) ),
					map = document.querySelector( params.mapId ).simpleGoogleMap;

				map.showInfo( params.markerId );
			});
		});
	}
};

components.nav = {
	selector: '.nav',
	styles: './assets/css/nav.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/popper.js',
		'./assets/js/bootstrap.min.js'
	],
		init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).on( 'click', function ( event ) {
				event.preventDefault();
				$( this ).tab( 'show' );
			});
			$( node ).find( 'a[data-toggle="tab"]' ).on( 'shown.bs.tab', function () {
				window.dispatchEvent( new Event( 'resize' ) );
			});
		});
	}
};

components.isotope = {
	selector: '.isotope-wrap',
	styles: './assets/css/isotope.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/isotope.min.js'
	],
	init: function ( nodes ) {
		function setFilterActive ( filterGroup, activeItem ) {
			if ( !activeItem.classList.contains( 'active' ) ) {
				for ( let n = 0; n < filterGroup.length; n++ ) filterGroup[ n ].classList.remove( 'active' );
				activeItem.classList.add( 'active' );
			}
		}

		nodes.forEach( function ( node ) {
			let
				isotopeItem = $( '.isotope' ),
				isotopeFilters = node.querySelectorAll( '[data-isotope-filter]' );

			isotopeItem.isotope({
				itemSelector: '.isotope-item'
			});

			isotopeFilters.forEach( function ( filter ) {
				filter.addEventListener( 'click', function () {
					setFilterActive( isotopeFilters, filter );
					isotopeItem.isotope( {
						filter: $( this ).attr( 'data-isotope-filter' )
					} );
				} );
			} );
		});
	}
};

components.highchartsDouble = {
	selector: '[data-highcharts-double="container"]',
		styles: './assets/css/highchart.css',
		script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/highchart.min.js',
		'./assets/js/highchart-double.init.js'
	],
		init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$.getJSON( node.getAttribute( 'data-file' ), initHighchartsDouble.bind( node ) );
		});
	}
};

components.highcharts = {
	selector: '.highcharts-container',
		styles: './assets/highchart/highchart.css',
		script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/highchart.min.js'
	],
		init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			Highcharts.chart( node, parseJSON( node.getAttribute( 'data-highcharts-options' ) ) );
		});
	}
};

components.flotchart = {
	selector: '.flotchart-container',
	styles: './assets/css/flotchart.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/js/flotchart.min.js',
		'./assets/js/flotchart-resize.js',
		'./assets/js/flotchart-pie.js',
		'./assets/js/flotchart-tooltip.js'
	],
	dependencies: 'nav',
		init: function ( nodes ) {
		let options = {
			colors: ['#6b39bd', '#28A8FF', '#31c77f', '#F19711', '#E72660', '#C728FF'],
			grid: {
				show: true,
				aboveData: true,
				color: '#bebebe',
				clickable: true,
				hoverable: true
			},
			xaxis: {
				color: '#bebebe', // color for value in flotchart.scss
			},
			yaxis: {
				color: '#bebebe' // color for value in flotchart.scss
			},
			tooltip: {
				show: true,
				content: '%x : %y.0',
				defaultTheme: false
			},
			series: {
				lines: {
					lineWidth: 2
				},
				bars: {
					fillColor: { colors: [ { opacity: 0.7 }, { opacity: 1.0 } ] }
				}
			}
		};

		nodes.forEach( function ( node ) {
			$.plot(
				$( node ),
				JSON.parse( node.getAttribute( 'data-flotchart-data' ) ),
				JSON.parse( node.getAttribute( 'data-flotchart-options' ) ) || options
			);
		})
	}
};

components.pendedIFrame = {
	selector: '[data-pended-iframe]',
		init: function ( nodes ) {
		nodes.forEach( function( node ) {
			let loader = ( function () {
				node.setAttribute( 'src', node.getAttribute( 'data-pended-iframe' ) );
			}).bind( node );

			window.addEventListener( 'classSwitching', loader );
			window.addEventListener( 'components:stylesReady', loader );
		});
	}
};

components.parallax = {
	selector: '.parallax',
	styles: './assets/css/parallax.css',
	script: './assets/js/parallax.min.js',
	dependencies: 'currentDevice',
	init: function ( nodes ) {
		parallax({
			useBgPos: false,
			useTransform3d: false,
			oninit: function ( layer ) {
				setTimeout( function () { layer.resize(); }, 500 )
			}
		});
	}
};

components.parallaxJs = {
	selector: '.parallax-js',
	styles: './assets/css/parallax-js.css',
	script: './assets/js/parallax-js.min.js',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			new Parallax( node );
		});
	}
};

components.tab = {
	selector: '.tab',
	styles: './assets/css/tab.css'
};

components.snackbar = {
	selector: '.snackbar',
	styles: './assets/css/snackbar.css'
};

components.divider = {
	selector: '.divider',
	styles: './assets/css/divider.css'
};

components.dividerLayout = {
	selector: '.divider-layout',
	styles: './assets/css/divider-layout.css'
};

components.blurb = {
	selector: '.blurb',
	styles: [
		'./assets/css/media.css',
		'./assets/css/blurb.css'
	]
};

components.person = {
	selector: '.person',
	styles: './assets/css/person.css'
};

components.rating = {
	selector: '.rating',
	styles: './assets/css/rating.css'
};

components.award = {
	selector: '.award',
	styles: './assets/css/award.css'
};

components.quote = {
	selector: '.quote',
	styles: [
		'./assets/css/media.css',
		'./assets/css/quote.css'
	]
};

components.service = {
	selector: '.service',
	styles: './assets/css/service.css'
};

components.layout = {
	selector: '.layout',
	styles: './assets/css/layout.css'
};

components.quoteSimple = {
	selector: '.quote-simple',
	styles: [
		'./assets/css/media.css',
		'./assets/css/quote-simple.css'
	]
};

components.comment = {
	selector: '.comment',
	styles: [
		'./assets/css/media.css',
		'./assets/css/comment.css'
	]
};

components.review = {
	selector: '.review',
	styles: './assets/css/review.css'
};

components.partner = {
	selector: '.partner',
	styles: './assets/css/partner.css'
};

components.list = {
	selector: '.list',
	styles: [
		'./assets/css/list.css',
		'./assets/css/intense-icons.css'
	]
};

components.sitelist = {
	selector: '.sitelist',
	styles: [
		'./assets/css/sitelist.css',
		'./assets/css/intense-icons.css'
	]
};

components.dl = {
	selector: 'dl',
	styles: './assets/css/dl.css'
};

components.media = {
	selector: '.media',
	styles: './assets/css/media.css'
};

components.jumbotron = {
	selector: '.jumbotron',
	styles: './assets/css/jumbotron.css'
};

components.accentBox = {
	selector: '.accent-box',
	styles: './assets/css/accent-box.css'
};

components.iconBox = {
	selector: '.icon-box',
	styles: './assets/css/icon-box.css'
};

components.toTop = {
	selector: 'html',
	styles: './assets/css/to-top.css',
	script: './assets/js/jquery-3.4.1.min.js',
	init: function () {
		if ( !window.xMode ) {
			let node = document.createElement( 'div' );
			node.className = 'to-top int-arrow-up';
			document.body.appendChild( node );

			node.addEventListener( 'mousedown', function () {
				this.classList.add( 'active' );

				$( 'html, body' ).stop().animate( { scrollTop:0 }, 500, 'swing', (function () {
					this.classList.remove( 'active' );
				}).bind( this ));
			});

			document.addEventListener( 'scroll', function () {
				if ( window.scrollY > window.innerHeight ) node.classList.add( 'show' );
				else node.classList.remove( 'show' );
			});
		}
	}
};

components.textRotator = {
	selector: '.text-rotator',
	styles: [
		'./assets/css/animate.css',
		'./assets/css/text-rotator.css'
	],
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/css/text-rotator.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).rotator();
		});
	}
};

components.anchorLink = {
	selector: '[data-anchor-link]',
	script: './assets/js/jquery-3.4.1.min.js',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				anchor = document.querySelector( node.getAttribute( 'href' ) ),
				offset = 50;

			node.addEventListener( 'click', function ( event ) {
				event.preventDefault();
				let top = $(anchor).offset().top - offset;
				$( 'html, body' ).stop().animate( { scrollTop: top }, 500, 'swing' );
			});
		});
	}
};

components.liveAnchor = {
	selector: '[data-live-anchor]',
	styles: './assets/css/live-anchor.css',
	script: [
		'./assets/js/jquery-3.4.1.min.js',
		'./assets/css/live-anchor.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			new LiveAnchor({
				link: node,
				anchor: node.getAttribute( 'href' ),
				offset: 100
			});
		});
	}
};


/**
 * Wrapper to eliminate json errors
 * @param {string} str - JSON string
 * @returns {object} - parsed or empty object
 */
function parseJSON ( str ) {
	try {
		if ( str )  return JSON.parse( str );
		else return {};
	} catch ( error ) {
		return {};
	}
}

/**
 * Returns version of IE or false, if browser is not Internet Explorer
 * @see {@link https://gist.github.com/gaboratorium/25f08b76eb82b1e7b91b01a0448f8b1d}
 * @returns {number|boolean}
 */
function detectIE () {
	let
		ua = window.navigator.userAgent,
		msie = ua.indexOf( 'MSIE ' ),
		trident = ua.indexOf( 'Trident/' ),
		edge = ua.indexOf( 'Edge/' );

	if ( msie > 0 ) {
		return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
	}

	if ( trident > 0 ) {
		let rv = ua.indexOf( 'rv:' );
		return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
	}

	if ( edge > 0 ) {
		return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
	}

	return false;
}

// Main
window.addEventListener( 'load', function () {
	new ZemezCore({
		components: components,
		observeDOM: window.xMode
	});
});
