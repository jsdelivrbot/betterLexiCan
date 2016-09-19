<html>

<head>
    <title>粵語審音配詞字庫 </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <style>
        input[type="search"] {
            -webkit-appearance: textfield;
        }
        
        a {
            color: inherit;
            text-decoration: none;
        }
        
        html,
        body {
            height: 100vh;
            width: 100vw;
            overflow: hidden;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: "Helvetica Neue", Arial, sans-serif, "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed";
            background-color: #EEE;
            height: auto;
            width: 100%;
            overflow: hidden;
        }
        
        form {
            display: inline-block;
        }
        
        #title {
            display: inline-block;
        }
        
        #head {
            height: auto;
            width: 100%;
            color: white;
            text-align: center;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fa5858+0,f97575+50,fa5858+100 */
            background: #fa5858;
            /* Old browsers */
            background: -moz-linear-gradient(left, #fa5858 0%, #f97F7F 50%, #fa5858 100%);
            /* FF3.6-15 */
            background: -webkit-linear-gradient(left, #fa5858 0%, #f97F7F 50%, #fa5858 100%);
            /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, #fa5858 0%, #f97F7F 50%, #fa5858 100%);
            /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa5858', endColorstr='#fa5858', GradientType=1);
            /* IE6-9 */
            font-size: 20px;
            line-height: 45px;
            z-index: 999;
        }
        
        #info {
            display: inline-block;
            width: 100vw;
            max-width: 500px;
            font-size: 12px;
            text-align: center;
            height: auto;
            vertical-align: bottom;
            display: none;
        }
        
        #info ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        #info ul li {
            float: left;
            margin-bottom: 0px;
            margin-top: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 15px;
            line-height: 24px;
        }
        
        #infoRadicals:before {
            content: "部首:";
        }
        
        #infoStrokes:before {
            content: "筆劃:";
        }
        
        #infoChangjie:before {
            content: "倉頡碼:";
        }
        
        #infoBig5:before {
            content: "Big5:";
        }
        
        #infoPronunciationType:before {
            content: "字音分類:";
        }
        
        #infoUnicode:before {
            content: "Unicode:";
        }
        
        #infoFrequency:before {
            content: "頻序/頻次:";
        }
        
        #infoDictionary1:before {
            content: "漢語大字典:";
        }
        
        #infoDictionary2:before {
            content: "康熙字典:";
        }
        
        #infoMandarin:before {
            content: "普通話:";
        }
        
        #infoEnglish:before {
            content: "英譯:";
        }
        
        #infoMatthews:before {
            content: "Matthews:";
        }
        
        #results {
            overflow-y: scroll;
            overflow-x: hidden;
            max-height: calc(100vh - 100px);
            min-height: calc(100vh - 80px);
            height: calc(100vh - 20vw);
            z-index: -1;
        }
        
        #searchInput {
            background: #ffbaba;
            border-radius: 100px;
            border: 0px;
            width: 90vw;
            height: 3vw;
            min-height: 32px;
            max-width: 400px;
            font-size: 22px;
            text-align: center;
            color: white;
            padding: 0;
            margin: 0;
            padding-left: 100px;
        }
        
        .resultItem:active {
            background: #DDD;
        }
        
        .resultItem {
            background: #FFF;
            min-height: 45px;
            height: auto;
            border-top: 1px #AAA solid;
            border-left: 0px;
            border-right: 0px;
            word-wrap: break-word;
            padding-left: 10px;
            padding-right: 10px;
        }
        
        #result div:last-child {
            border-bottom: 1px #AAA solid;
        }
        
        .resultPronunciation {
            display: inline-block;
            font-size: 56px;
            text-align: left;
        }
        
        .resultConsonant {
            float: left;
            color: #fa5858;
            margin: 0;
            padding: 0;
            border: 0;
        }
        
        .resultVowel {
            float: left;
            color: #fabf58;
            margin: 0;
            padding: 0;
            border: 0;
        }
        
        .resultTone {
            color: #58acfa;
            margin: 0;
            padding: 0;
            border: 0;
        }
        
        .resultOrigin {
            display: inline-block;
            font-size: 10px;
            color: #AAA;
        }
        
        .resultMeaning {
            display: inline-block;
        }
        
        .resultHomophone {
            display: inline-block;
            width: 100%;
            border-top: 2px dashed #AAA;
            margin-top: 10px;
        }
        
        .resultHomophone ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .resultHomophone ul li {
            float: left;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
        }
        
        .radicalsImg {
            filter: grayscale(100%) invert(100%);
            margin-bottom: -6px;
        }
        
        .searchType {
            display: inline-block;
            background: #ffbaba;
            border: 0px;
            width: 18vw;
            max-width: 120px;
            min-width: 60px;
            -webkit-appearance: none;
            -moz-appearance: none;
            float: left;
            height: calc(0.4vw + 29px);
            border: 0;
            font-size: 20px;
            text-align: center;
            color: white;
            padding-left: 5px;
            margin: 0;
        }
        
        #selectConsonant {
            width: 15vw;
            max-width: 80px;
            min-width: 60px;
        }
        
        #selectTone {
            width: 15vw;
            max-width: 70px;
            min-width: 50px;
        }
        
        #selectSearchType {
            width: 100px;
        }
        
        .verticalLine {
            border-left: 2px solid #faa;
        }
        
        .searchContainerDiv {
            height: 3vw;
            min-height: 32px;
            display: inline-block;
        }
        
        #divSearchType {
            height: 3vw;
            min-height: 32px;
            color: #faa;
            background: white;
            display: inline-block;
            line-height: 36px;
            padding: 0;
            margin: 0;
            width: 90px;
            border-radius: 100px 0px 0px 100px;
            vertical-align: top;
        }
        
        #searchByPronuncation {
            display: inline-block;
            padding: 0;
            margin: 0;
            display: none;
        }
    </style>
    <script src="http://rawgit.com/wilsonlmh/lexi-can-api/master/crawler.js"></script>
    <script src="big5.js"></script>
    <script type="text/javascript">
        function init() {
            if (window.navigator.standalone == true) {
                document.getElementById("title").innerHTML = "&nbsp;";
                document.getElementById("title").style.fontSize = "12px";
                document.getElementById("title").style.lineHeight = "12px";
            }
        }

        function ajax(url, callback, method) {
            method = method || 'GET';
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                callback(xhttp);
            };
            xhttp.open(method, url, true);
            xhttp.send();
        }

        function requestCallbackCharacter(xhttp) {
            var result;
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                html = document.createElement("html");
                html.innerHTML = xhttp.responseText;
                result = crawlChineseWord(html);
                console.log(result);
                var outputHTML = "";
                for (i = 0; i < result.list.length; i++) {
                    var output = '<div class="resultItem">';
                    output += '<div class="resultPronunciation">';
                    output += '<div class="resultConsonant">' + result.list[i].consonant + '</div><div class="resultVowel">' + result.list[i].vowel + '</div> <span class="resultTone">' + result.list[i].tone + '</span> </div>';
                    output += '<div class="resultOrigin">';
                    for (j = 0; j < result.list[i].origin.length; j++) {
                        output += result.list[i].origin[j];
                        if ((j != result.list[i].origin.length - 1) && (result.list[i].origin.length > 1)) {
                            output += "<br/>";
                        }
                    }
                    output += '</div><div style="float:right;"><br/><img width="24px" height="24px" src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/volume_up.png" /></div><br/>';
                    output += '<div class="resultMeaning">';
                    output += result.list[i].meaning;
                    output += '</div><br/>';
                    output += '<div class="resultHomophone"><ul>';
                    for (j = 0; j < result.list[i].homophone.length; j++) {
                        output += '<li onclick="searchByCharacter(\'' + result.list[i].homophone[j] + '\')">' + result.list[i].homophone[j] + '</li>';
                    }
                    output += '</ul></div></div>';
                    outputHTML += output;
                }
                console.log(outputHTML);
                document.getElementById('results').innerHTML = outputHTML;
                document.getElementById("infoRadicals").innerHTML = '<img class="radicalsImg" src="' + result.baseInfo.radicals.img + '" />';
                document.getElementById("infoStrokes").innerText = result.baseInfo.strokes;
                document.getElementById("infoChangjie").innerText = result.baseInfo.changjie;
                document.getElementById("infoPronunciationType").innerText = result.baseInfo.pronunciation_type;
                document.getElementById("infoUnicode").innerText = "U+" + result.reference.unicode;
                document.getElementById("infoBig5").innerText = result.baseInfo.big5;
                document.getElementById("infoFrequency").innerText = result.baseInfo.freq_rate + "/" + result.baseInfo.frequency;
                document.getElementById("infoDictionary1").innerText = result.reference.dictionary1;
                document.getElementById("infoDictionary2").innerText = result.reference.dictionary2;
                document.getElementById("infoMandarin").innerText = result.reference.mandarin;
                document.getElementById("infoEnglish").innerText = result.reference.english;
                document.getElementById("infoMatthews").innerText = result.reference.matthews;
                document.getElementById("info").style.display = "inline-block";
            }
        }

        function requestCallbackPronuncation(xhttp) {
            var result;
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                html = document.createElement("html");
                html.innerHTML = xhttp.responseText;
                result = crawlPronunciation(html);
                var outputHTML = "";
                for (i = 0; i < result.length; i++) {
                    var output = '<div class="resultItem">';
                    output += '<div class="resultPronunciation">';
                    output += '<div class="resultConsonant">' + result[i].consonant + '</div><div class="resultVowel">' + result[i].vowel + '</div> <span class="resultTone">' + result[i].tone + '</span> </div>';
                    output += '<div class="resultOrigin">';
                    output += ''; //None
                    output += '</div><div style="float:right;"><br/><img width="24px" height="24px" src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/volume_up.png" /></div><br/>';
                    output += '<div class="resultMeaning">';
                    output += '';
                    output += '</div><br/>';
                    output += '<div class="resultHomophone"><ul>';
                    for (j = 0; j < result[i].homophone.length; j++) {
                        output += '<li onclick="searchByCharacter(\'' + result[i].homophone[j] + '\')">' + result[i].homophone[j] + '</li>';
                    }
                    output += '</ul></div></div>';
                    outputHTML += output;
                }
                document.getElementById('results').innerHTML = outputHTML;
            }
        }

        function searchTypeToggle(e) {
            var target = document.getElementById("divSearchType");
            var tmp = target.innerText;
            target.innerText = target.getAttribute("altText");
            target.setAttribute("altText", tmp);
            var searchByPronuncation = document.querySelector("#searchByPronuncation");
            var searchInput = document.querySelector("#searchInput");
            if (JSON.parse(target.getAttribute("isSearchByCharacter"))) {
                searchByPronuncation.style.display = "inline-block";
                searchInput.setAttribute("store", searchInput.value);
                searchInput.value = "";
            }
            else {
                searchByPronuncation.style.display = "none";
                searchInput.value = searchInput.getAttribute("store");
            }
            target.setAttribute("isSearchByCharacter", String(!JSON.parse(target.getAttribute("isSearchByCharacter"))));
        }

        function searchByCharacter(char) {
            var searchInput = document.getElementById("searchInput");
            if (!JSON.parse(divSearchType.getAttribute("isSearchByCharacter"))) {
                searchTypeToggle();
            }
            searchInput.value = char;
            ajax("http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/search.php?q=" + encodeBig5URIComponent(char), requestCallbackCharacter);
        }

        function search(e) {
            var divSearchType = document.getElementById("divSearchType");
            var searchInput = document.getElementById("searchInput");
            var selectConsonant = document.getElementById("selectConsonant");
            var selectVowel = document.getElementById("selectVowel");
            var selectTone = document.getElementById("selectTone");
            if (!JSON.parse(divSearchType.getAttribute("isSearchByCharacter"))) {
                //拼音
                if (selectConsonant.options[selectConsonant.selectedIndex].value != "-" || selectVowel.options[selectVowel.selectedIndex].value != "-") {
                    ajax("http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/pho-rel.php?s1=" + selectConsonant.options[selectConsonant.selectedIndex].value + "&s2=" + selectVowel.options[selectVowel.selectedIndex].value + "&s3=" + selectTone.options[selectTone.selectedIndex].value, requestCallbackPronuncation);
                }
                document.getElementById("info").style.display = "none";
            }
            else {
                //單字
                if (searchInput.value.length > 0) {
                    searchByCharacter(searchInput.value);
                }
            }
            e.preventDefault();
            return false;
        }

        function encodeBig5URIComponent(t) {
            return EncodedUTF8ToBig5(encodeURIComponent(t))
        }
    </script>
</head>

<body onload="init()">
    <div id="head">
        <div id="title">粵語審音配詞字庫</div>
        <br/>
        <form action="#" onSumbit="search()">
            <div style="display:inline-block; position:relative;">
                <input type="search" id="searchInput" value="" maxlength="1" store="" onchange="search(event)" />
                <div style="display:inline-block;position: absolute; top:0; left:0;">
                    <div altText="拼音搜尋" isSearchByCharacter="true" id="divSearchType" onclick="searchTypeToggle(event)">單字搜尋</div>
                    <div id="searchByPronuncation">
                        <div class="searchContainerDiv">
                            <select id="selectConsonant" class="searchType" onchange="search()">
                                <option value="-">聲母</option>
                                <option value="">(無)</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                                <option value="d">d</option>
                                <option value="f">f</option>
                                <option value="g">g</option>
                                <option value="gw">gw</option>
                                <option value="h">h</option>
                                <option value="j">j</option>
                                <option value="k">k</option>
                                <option value="kw">kw</option>
                                <option value="l">l</option>
                                <option value="m">m</option>
                                <option value="n">n</option>
                                <option value="ng">ng</option>
                                <option value="p">p</option>
                                <option value="s">s</option>
                                <option value="t">t</option>
                                <option value="w">w</option>
                                <option value="z">z</option>
                            </select>
                        </div>
                        <div class="searchContainerDiv verticalLine">
                            <select id="selectVowel" class="searchType" onchange="search()">
                                <option value="-">韻母</option>
                                <option value="">(無)</option>
                                <option value="aa">aa</option>
                                <option value="aai">aai</option>
                                <option value="aau">aau</option>
                                <option value="aam">aam</option>
                                <option value="aan">aan</option>
                                <option value="aang">aang</option>
                                <option value="aap">aap</option>
                                <option value="aat">aat</option>
                                <option value="aak">aak</option>
                                <option value="ai">ai</option>
                                <option value="au">au</option>
                                <option value="am">am</option>
                                <option value="an">an</option>
                                <option value="ang">ang</option>
                                <option value="ap">ap</option>
                                <option value="at">at</option>
                                <option value="ak">ak</option>
                                <option value="e">e</option>
                                <option value="ei">ei</option>
                                <option value="eu">eu</option>
                                <option value="em">em</option>
                                <option value="eng">eng</option>
                                <option value="ep">ep</option>
                                <option value="ek">ek</option>
                                <option value="i">i</option>
                                <option value="iu">iu</option>
                                <option value="im">im</option>
                                <option value="in">in</option>
                                <option value="ing">ing</option>
                                <option value="ip">ip</option>
                                <option value="it">it</option>
                                <option value="ik">ik</option>
                                <option value="o">o</option>
                                <option value="oi">oi</option>
                                <option value="ou">ou</option>
                                <option value="on">on</option>
                                <option value="ong">ong</option>
                                <option value="ot">ot</option>
                                <option value="ok">ok</option>
                                <option value="oe">oe</option>
                                <option value="oeng">oeng</option>
                                <option value="oek">oek</option>
                                <option value="eoi">eoi</option>
                                <option value="eon">eon</option>
                                <option value="eot">eot</option>
                                <option value="u">u</option>
                                <option value="ui">ui</option>
                                <option value="un">un</option>
                                <option value="ung">ung</option>
                                <option value="ut">ut</option>
                                <option value="uk">uk</option>
                                <option value="yu">yu</option>
                                <option value="yun">yun</option>
                                <option value="yut">yut</option>
                                <option value="m">m</option>
                                <option value="ng">ng</option>
                            </select>
                        </div>
                        <div class="searchContainerDiv verticalLine">
                            <select id="selectTone" class="searchType" onchange="search()">
                                <option value="-">聲調</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div id="info">
            <ul>
                <li id="infoRadicals"><img class="radicalsImg" src="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/img/rad/rad44.gif" /></li>
                <li id="infoStrokes">9</li>
                <li id="infoChangjie">尸口中月</li>
                <li id="infoPronunciationType">單讀音字</li>
                <li id="infoUnicode">U+5C4C</li>
                <li id="infoBig5">CE78</li>
                <li id="infoFrequency">5881/4</li>
                <li id="infoDictionary1">Pg.0972</li>
                <li id="infoDictionary2">Pg.0229.210</li>
                <li id="infoMandarin">diao3</li>
                <li id="infoEnglish">fuck</li>
                <li id="infoMatthews">0000</li>
            </ul>
        </div>
    </div>
    <div id="results">
        <br/>
        <br/> </div>
</body>

</html>
