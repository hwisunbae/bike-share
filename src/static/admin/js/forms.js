$(document).ready(function(){

    "use strict";

	$('.date-picker').datepicker({
        orientation: "top auto",
        autoclose: true
    });

	$('.time-picker').timepicker();

	$('.color-picker-hex').colorpicker({
        format: 'hex'
    });

    $('.color-picker-rgba').colorpicker();

    //FOR BOOTSTRAP INPUTAGS
    if($("#inputag-1").length > 0) {
        $("#inputag-1").tagsinput();
    }

    $(".inputag-1").tagsinput();

    if($("#inputag-2").length > 0) {

        var names = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
            url: getExactFolder+'/assets/data/names.json',
                filter: function(list) {
                    return $.map(list, function(cityname) {
                    return { name: cityname }; });
                }
            }
        });

        names.initialize();

        $('#inputag-2').tagsinput({
            typeaheadjs: {
                name: 'names',
                displayKey: 'name',
                valueKey: 'name',
                source: names.ttAdapter()
            }
        });
    }

    if($("#inputag-3").length > 0) {
        var cities = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: getExactFolder+'/assets/data/cities.json'
        });

        cities.initialize();

        var elt = $('#inputag-3');
        elt.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'cities',
                displayKey: 'text',
                source: cities.ttAdapter()
            }
        });
        elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
    }

    if($("#inputag-4").length > 0) {
        var cities = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: getExactFolder+'/assets/data/cities.json'
        });
        cities.initialize();

        var elt = $('#inputag-4');
        elt.tagsinput({
            tagClass: function(item) {
            switch (item.continent) {
                case 'Europe'   : return 'label label-primary';
                case 'America'  : return 'label label-danger label-important';
                case 'Australia': return 'label label-success';
                case 'Africa'   : return 'label label-default';
                case 'Asia'     : return 'label label-warning';
            }
            },
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'cities',
                displayKey: 'text',
                source: cities.ttAdapter()
            }
        });

        elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
    }



    //FOR CUSTOM BROWSE FILE
    $(".btn-browse-file").on("click", function(){
        $(this).parent().parent().find("input[type='file']").click();

        $(this).parent().parent().find("input[type='file']").on("change", function(){
            $(this).parent().parent().find("input[type='text']").val($(this).val());
        });
    });


    //FOR TEXTAREA EXPANDABLE
    $('textarea.textarea-expandable').focus(function () {
        $(this).animate({ height: "10em" }, 500);
    });

     $('textarea.textarea-expandable').blur(function () {
        $(this).animate({ height: "3em" }, 500);
    });

    //FOR TEXTAREA AUTOSIZE
    $('.autosize-normal').autosize();
    $('.autosize-animated').autosize({append: "\n"});


    //FOR DATE RANGE PICKER
    if($('#daterange-1').length > 0) {
        $('#daterange-1').daterangepicker();
    }

    if($('#daterange-2').length > 0) {
        $('#daterange-2').daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            locale: {
                format: 'MM/DD/YYYY h:mm A'
            }
        });
    }

    if($('.datepicker').length > 0) {
        if($('.datepicker.daterange').length > 0) {
            $('.datepicker').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true
            }, 
            function(start, end, label) {
                var years = moment().diff(start, 'years');
                alert("You are " + years + " years old.");
            });
        }else{
            $('.datepicker').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true
            });
        }

        
    }

    if($('#daterange-4').length > 0) {
        function cb(start, end) {
            $('#daterange-4 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        cb(moment().subtract(29, 'days'), moment());

        $('#daterange-4').daterangepicker({
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
    }

    //FOR MULTI SELECT
    if ($.isFunction($.fn.multiSelect)) {

        $('#my_multi_select1').multiSelect();
        $('#my_multi_select2').multiSelect({
            selectableOptgroup: true
        });

        $('#my_multi_select3').multiSelect({
            selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
            selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
            afterInit: function(ms) {
                var that = this,
                    $selectableSearch = that.$selectableUl.prev(),
                    $selectionSearch = that.$selectionUl.prev(),
                    selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                    selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

                that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                    .on('keydown', function(e) {
                        if (e.which === 40) {
                            that.$selectableUl.focus();
                            return false;
                        }
                    });

                that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                    .on('keydown', function(e) {
                        if (e.which == 40) {
                            that.$selectionUl.focus();
                            return false;
                        }
                    });
            },
            afterSelect: function() {
                this.qs1.cache();
                this.qs2.cache();
            },
            afterDeselect: function() {
                this.qs1.cache();
                this.qs2.cache();
            }
        });

    }
    

    //FOR TYPEHEAD
    if ($.isFunction($.fn.typeahead)) {

        // basic typeahead

        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {
                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({
                            value: str
                        });
                    }
                });

                cb(matches);
            };
        };

        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        $('#typeahead-1').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'states',
            displayKey: 'value',
            source: substringMatcher(states)
        });



        // prefetch typeahead

        var names = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: getExactFolder+'/assets/data/names.json',
                filter: function(list) {
                    return $.map(list, function(name) {
                        return {
                            name: name
                        };
                    });
                }
            }
        });

        names.initialize();

        $('#typeahead-2').typeahead(null, {
            name: 'names',
            displayKey: 'name',
            source: names.ttAdapter()
        });


        // remote data


        var name_randomizer = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            // You can also prefetch suggestions
            // prefetch: 'data/typeahead-generate.php',
            remote: getExactFolder+'/assets/data/typeahead-generate.php?q=%QUERY'
        });

        name_randomizer.initialize();

        $('#typeahead-3').typeahead({
            hint: true,
            highlight: true
        }, {
            name: 'string-randomizer',
            displayKey: 'value',
            source: name_randomizer.ttAdapter()
        });


        // templating

        var oscar_movies = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: getExactFolder+'/assets/data/typeahead-hp-movies.php?q=%QUERY'
        });

        oscar_movies.initialize();

        $('#typeahead-4').typeahead(null, {
                name: 'oscar-movies',
                displayKey: 'value',
                source: oscar_movies.ttAdapter(),
                templates: {
                    empty: [
                        '<div class="empty-message">',
                        'We cannot find this movie title',
                        '</div>'
                    ].join('\n'),
                    suggestion: Handlebars.compile('<div class="clearfix" style="width:100%;display:inline-block;min-height:60px;height:auto;"><img src="../../../assets/data/{{cover}}" class="img-responsive pull-left" width="30" style="margin-right:10px;" /><strong>{{value}}</strong> &mdash; {{year}}<br /><span style="display:inline-block; height: 22px; overflow: hidden; white-space:nowrap; text-overflow:ellipsis; max-width: 400px;"></span></div>')
                }
            })
            .bind('typeahead:opened', function() {
                $(this).data('ttTypeahead').dropdown.$menu.addClass('overflow-hidden').perfectScrollbar();
            })
            .on('keyup', function() {
                $(this).data('ttTypeahead').dropdown.$menu.perfectScrollbar('update');
            });

    }


    //FOR SELECT2
    if ($.isFunction($.fn.select2)) {

        $(".select2").select2();

        $("#s2example-1").select2({
            placeholder: 'Select your country...',
            allowClear: true
        }).on('select2-open', function() {
            // Adding Custom Scrollbar
            $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
        });


        $("#s2example-2").select2({
            placeholder: 'Choose your favorite US Countries',
            allowClear: true
        }).on('select2-open', function() {
            // Adding Custom Scrollbar
            $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
        });


        $("#s2example-4").select2({
            minimumInputLength: 1,
            placeholder: 'Search',
            ajax: {
                url: getExactFolder+"/assets/data/select2-remote-data.php",
                dataType: 'json',
                quietMillis: 100,
                data: function(term, page) {
                    return {
                        limit: -1,
                        q: term
                    };
                },
                results: function(data, page) {
                    return {
                        results: data
                    }
                }
            },
            formatResult: function(student) {
                return "<div class='select2-user-result'>" + student.name + "</div>";
            },
            formatSelection: function(student) {
                return student.name;
            }

        });
    }


    //FOR UI SLIDERS
    if ($.isFunction($.fn.slider)) {
            $(".slider").each(function(i, el) {
                var $this = $(el),
                    $label_1 = $('<span class="ui-label"></span>'),
                    $label_2 = $label_1.clone(),

                    orientation = getValue($this, 'vertical', 0) != 0 ? 'vertical' : 'horizontal',

                    prefix = getValue($this, 'prefix', ''),
                    postfix = getValue($this, 'postfix', ''),

                    fill = getValue($this, 'fill', ''),
                    $fill = $(fill),

                    step = getValue($this, 'step', 1),
                    value = getValue($this, 'value', 5),
                    min = getValue($this, 'min', 0),
                    max = getValue($this, 'max', 100),
                    min_val = getValue($this, 'min-val', 10),
                    max_val = getValue($this, 'max-val', 90),

                    is_range = $this.is('[data-min-val]') || $this.is('[data-max-val]'),

                    reps = 0;


                // Range Slider Options
                if (is_range) {
                    $this.slider({
                        range: true,
                        orientation: orientation,
                        min: min,
                        max: max,
                        values: [min_val, max_val],
                        step: step,
                        slide: function(e, ui) {
                            var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');

                            $label_1.html(min_val);
                            $label_2.html(max_val);

                            if (fill)
                                $fill.val(min_val + ',' + max_val);

                            reps++;
                        },
                        change: function(ev, ui) {
                            if (reps == 1) {
                                var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                    max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');

                                $label_1.html(min_val);
                                $label_2.html(max_val);

                                if (fill)
                                    $fill.val(min_val + ',' + max_val);
                            }

                            reps = 0;
                        }
                    });

                    var $handles = $this.find('.ui-slider-handle');

                    $label_1.html((prefix ? prefix : '') + min_val + (postfix ? postfix : ''));
                    $handles.first().append($label_1);

                    $label_2.html((prefix ? prefix : '') + max_val + (postfix ? postfix : ''));
                    $handles.last().append($label_2);
                }
                // Normal Slider
                else {

                    $this.slider({
                        range: getValue($this, 'basic', 0) ? false : "min",
                        orientation: orientation,
                        min: min,
                        max: max,
                        value: value,
                        step: step,
                        slide: function(ev, ui) {
                            var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');

                            $label_1.html(val);


                            if (fill)
                                $fill.val(val);

                            reps++;
                        },
                        change: function(ev, ui) {
                            if (reps == 1) {
                                var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');

                                $label_1.html(val);

                                if (fill)
                                    $fill.val(val);
                            }

                            reps = 0;
                        }
                    });

                    var $handles = $this.find('.ui-slider-handle');
                    //$fill = $('<div class="ui-fill"></div>');

                    $label_1.html((prefix ? prefix : '') + value + (postfix ? postfix : ''));
                    $handles.html($label_1);

                    //$handles.parent().prepend( $fill );

                    //$fill.width($handles.get(0).style.left);
                }

            })
        }



        /*------------- Color Slider widget---------------*/

        function hexFromRGB(r, g, b) {
            var hex = [
                r.toString(16),
                g.toString(16),
                b.toString(16)
            ];
            $.each(hex, function(nr, val) {
                if (val.length === 1) {
                    hex[nr] = "0" + val;
                }
            });
            return hex.join("").toUpperCase();
        }

        function refreshSwatch() {
            var red = $("#slider-red").slider("value"),
                green = $("#slider-green").slider("value"),
                blue = $("#slider-blue").slider("value"),
                hex = hexFromRGB(red, green, blue);
            $("#slider-swatch").css("background-color", "#" + hex);
        }


        if ($.isFunction($.fn.slider)) {

            $(function() {
                $("#slider-red, #slider-green, #slider-blue").slider({
                    orientation: "horizontal",
                    range: "min",
                    max: 255,
                    value: 127,
                    slide: refreshSwatch,
                    change: refreshSwatch
                });
                $("#slider-red").slider("value", 235);
                $("#slider-green").slider("value", 70);
                $("#slider-blue").slider("value", 60);
            });
        }


        //FORM RATING 
        $("#input-21f").rating({
            starCaptions: function(val) {
                if (val < 3) {
                    return val;
                } else {
                    return 'high';
                }
            },
            starCaptionClasses: function(val) {
                if (val < 3) {
                    return 'label label-danger';
                } else {
                    return 'label label-success';
                }
            },
            hoverOnClear: false
        });
        
        $('#rating-input').rating({
              min: 0,
              max: 5,
              step: 1,
              size: 'lg',
              showClear: false
           });
           
        $('#btn-rating-input').on('click', function() {
            $('#rating-input').rating('refresh', {
                showClear:true, 
                disabled:true
            });
        });
        
        
        $('.rating .btn-danger').on('click', function() {
            $("#kartik").rating('destroy');
        });
        
        $('.rating .btn-success').on('click', function() {
            $("#kartik").rating('create');
        });
        
        $('#rating-input').on('rating.change', function() {
            alert($('#rating-input').val());
        });
        
        
        $('.rb-rating').rating({'showCaption':true, 'stars':'3', 'min':'0', 'max':'3', 'step':'1', 'size':'xs', 'starCaptions': {0:'status:nix', 1:'status:wackelt', 2:'status:geht', 3:'status:laeuft'}});
        

        //FORM SLIDER
        // Regular slider
            $('#slider1').slider({
              min: 0,
              max: 500,
              slide: function(event, ui)
              {
                $('#slider1-value').text(ui.value);
              }
            });
            
            // Range slider
            $('#slider2').slider({
              min: 0,
              max: 500,
              range: true,
              values: [75, 300],
              slide: function(event, ui)
              {
                $('#slider2-value1').text(ui.values[0]);
                $('#slider2-value2').text(ui.values[1]);
              }
            });
            
            // Step slider
            $('#slider3').slider({
              min: 0,
              max: 500,
              step: 100,
              slide: function(event, ui)
              {
                $('#slider3-value').text(ui.value);
              }
            });

             // Rounded Regular slider
            $('#slider1-rounded').slider({
              min: 0,
              max: 500,
              slide: function(event, ui)
              {
                $('#slider1-value-rounded').text(ui.value);
              }
            });

            $('.project-status').slider({
              min: 0,
              max: 100,
              slide: function(event, ui)
              {
                $('#slider1-value-rounded').text(ui.value);
              }
            });
            
            // Rounded Range slider
            $('#slider2-rounded').slider({
              min: 0,
              max: 500,
              range: true,
              values: [75, 300],
              slide: function(event, ui)
              {
                $('#slider2-value1-rounded').text(ui.values[0]);
                $('#slider2-value2-rounded').text(ui.values[1]);
              }
            });
            
            // Rounded Step slider
            $('#slider3-rounded').slider({
              min: 0,
              max: 500,
              step: 100,
              slide: function(event, ui)
              {
                $('#slider3-value-rounded').text(ui.value);
              }
            });
});

