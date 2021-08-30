var jb = {
};


jb.holdingPage = function(options)
{
    
    var opts = {
        Title: options.Title,
        Message: options.Message,
        Image: options.Image,
        CTAs: options.CTAs,
        Header: options.Header,
    }

    function init()
    {
        var el = $(options.Element);

        $("title").text(opts.Title);
        $("img", el).attr("src", opts.Image);
        $("p", el).text(opts.Message);
        $("#cta", el).html(opts.CTAs);
        $("h1", el).text(opts.Header);
    }

    init();

    console.log(opts);
}