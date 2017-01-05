// ==UserScript==
// @name         wug.news拡張（非公式）
// @namespace    http://theoria24.github.io/
// @version      0.1
// @description  wug.newsをより便利にしたい
// @author       _theoria
// @match        http://wug.news/
// @match        http://sandbox.localhost/wug.news/
// @grant        none
// ==/UserScript==

(function() {
    $(function() {
        $("div.collapse").append("<ul class='nav navbar-nav navbar-right'><li class='dropdown' style='background-color:black;box-shadow: 0 0 0 3px #5c1 inset;'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' style='color:white;'>拡張機能 <span class='caret'></span></a><ul class='dropdown-menu' role='menu'><li><a class='c_mayu' href='#'>吉岡茉祐</a></li><li><a class='c_airi' href='#'>永野愛理</a></li><li><a class='c_minami' href='#'>田中美海</a></li><li><a class='c_yosino' href='#'>青山吉能</a></li><li><a class='c_nanami' href='#'>山下七海</a></li><li><a class='c_kaya' href='#'>奥野香耶</a></li><li><a class='c_miyu' href='#'>高木美佑</a></li><li><a class='c_reset' href='#' style='color:blue;'>リセット</a></li></ul></li></ul>");
//        $('li.dropdown').css({
//            'background-color':'black'
//        });
    });
    $("a.c_mayu").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".mayu").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.mayu))").hide();
    });
    $("a.c_airi").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".airi").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.airi))").hide();
    });
    $("a.c_minami").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".minami").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.minami))").hide();
    });
    $("a.c_yosino").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".yoshino").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.yoshino))").hide();
    });
    $("a.c_nanami").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".nanami").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.nanami))").hide();
    });
    $("a.c_kaya").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".kaya").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.kaya))").hide();
    });
    $("a.c_miyu").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
        $(".miyu").parent("article > section > ul > li").css({
            'font-size':'18px'
        });
        $("article > section > ul > li:not(:has(span.miyu))").hide();
    });
    $("a.c_reset").click(function() {
        $("article > section > ul > li").css({'font-size':'',display:''});
    });
})();