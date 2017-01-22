// ==UserScript==
// @name         wug.news拡張（非公式）
// @namespace    http://theoria24.github.io/
// @version      0.1.3
// @description  wug.newsをより便利にしたい
// @author       _theoria
// @match        http://wug.news/
// @grant        none
// ==/UserScript==

(function() {
    $(function() {
        $("div.collapse").append("<ul class='nav navbar-nav navbar-right'><li class='dropdown' style='background-color:black;box-shadow: 0 0 0 3px #5c1 inset;'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' style='color:white;'>拡張機能 <span class='caret'></span></a><ul class='dropdown-menu' role='menu'><li><a class='c_mayu' href='#'>吉岡茉祐</a></li><li><a class='c_airi' href='#'>永野愛理</a></li><li><a class='c_minami' href='#'>田中美海</a></li><li><a class='c_yosino' href='#'>青山吉能</a></li><li><a class='c_nanami' href='#'>山下七海</a></li><li><a class='c_kaya' href='#'>奥野香耶</a></li><li><a class='c_miyu' href='#'>高木美佑</a></li><li><a class='c_reset' href='#' style='color:blue;'>リセット</a></li></ul></li></ul>");
        $('iframe').css({
            'width':'100%'
        });
        $("iframe")[0].contentDocument.location.replace('https://calendar.google.com/calendar/embed?mode=WEEK&height=1024&wkst=2&bgcolor=%23FFFFFF&src=a41gfbhevisjtoefo4acbfumb0%40group.calendar.google.com&color=%23f88888&src=hnb10i2b6qrjomna8ts8en5d4g%40group.calendar.google.com&color=%2323164E&src=ng5qnclj5cau27k25hienbt6t4%40group.calendar.google.com&color=%232F6309&src=h9rn07f4eidtjaq9hrudvhll84%40group.calendar.google.com&color=%235F6B02&src=05mufu3uaf6hq4ke83r4b2inik%40group.calendar.google.com&color=%23875509&src=ed01b7r8h5ck36ab1qihi7onuo%40group.calendar.google.com&color=%23711616&src=ldsb85n3a7q92sfpfop8mtds1g%40group.calendar.google.com&color=%238C500B&src=6r6tqpmr2hpqc7jpbk5id3v43s%40group.calendar.google.com&color=%23865A5A&src=965c10okm9thgls14radqmsje4%40group.calendar.google.com&color=%23AB8B00&src=1bfp7jbnka1a853qq505bjodp8%40group.calendar.google.com&color=%23B1365F&src=80ei961e439uf516sp99qsjkg4%40group.calendar.google.com&color=%23f95ff6&src=ja.japanese%23holiday%40group.v.calendar.google.com&color=%23125A12&src=gank911f9917p4jt1o47sc5q5o%40group.calendar.google.com&color=%2328754E&src=rlctu1bb14bmv83l4gfhr2dhb4%40group.calendar.google.com&color=%232952A3&src=h07pu4n0t1j48palfj3d7mr68k%40group.calendar.google.com&color=%23182C57&ctz=Asia%2FTokyo');
    });
    $("a.c_mayu").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.mayu").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.mayu))").hide();
    });
    $("a.c_airi").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.airi").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.airi))").hide();
    });
    $("a.c_minami").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.minami").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.minami))").hide();
    });
    $("a.c_yosino").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.yoshino").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.yoshino))").hide();
    });
    $("a.c_nanami").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.nanami").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.nanami))").hide();
    });
    $("a.c_kaya").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.kaya").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.kaya))").hide();
    });
    $("a.c_miyu").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
        $("article > section > ul > li > span.miyu").css({
            'font-weight':'bold'
        });
        $("article > section > ul > li:not(:has(span.miyu))").hide();
    });
    $("a.c_reset").click(function() {
        $("article > section > ul > li,article > section > ul > li > span").css({display:'','font-weight':''});
    });
})();
