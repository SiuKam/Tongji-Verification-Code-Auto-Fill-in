// ==UserScript==
// @name         同济大学统一身份认证自动填充验证码
// @namespace    https://greasyfork.org/zh-CN/scripts/375971
// @version      0.3
// @description  自动填充同济大学统一验证页面的验证码
// @author       SiucheukKam
// @match        https://ids.tongji.edu.cn:8443/*
// @grant        none
// ==/UserScript==

(function() {
    document.forms['IDPLogin']['Txtidcode'].value = String(document.getElementById('ehong-code').innerText);
})();