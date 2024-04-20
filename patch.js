// ==UserScript==
// @name	Mongolian Beef Script
// @namespace	nat.is-a.dev
// @match	https://neal.fun/infinite-craft/*
// @grant	unsafeWindow
// @run-at	document-end
// @version	1.0
// @author	Natasquare
// @require 	https://unpkg.com/wanakana
// @require https://raw.githubusercontent.com/surferseo/intl-segmenter-polyfill/master/dist/bundled.js
// @description not yet
// ==/UserScript==

unsafeWindow.IntlSegmenterPolyfillBundled = IntlSegmenterPolyfillBundled;

(function() {
    const closeIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNjAwIj48cGF0aCBkPSJNMzAwLjAwMDAyLDM0OS44MzIzM0w2MC4xMDc4Miw1ODkuNzIzMzJjLTYuNTQ2ODksNi41NDc2OS0xNC43NzY0Myw5Ljg5NzE4LTI0LjY4ODYsMTAuMDQ4NTEtOS45MTEzOCwuMTUyMS0xOC4yOTIyNC0zLjE5NzQtMjUuMTQyNTYtMTAuMDQ4NTFDMy40MjU1Nyw1ODIuODcyOTgsLjAwMDAyLDU3NC41Njc4LDAsNTY0LjgwNzc0Yy4wMDAwMi05Ljc2MDA3LDMuNDI1NTctMTguMDY1MjYsMTAuMjc2NjYtMjQuOTE1NTZsMjM5Ljg5MTAxLTIzOS44OTIyTDEwLjI3NjY4LDYwLjEwNzc4QzMuNzI4OTksNTMuNTYwOTIsLjM3OTUsNDUuMzMxMzYsLjIyODE3LDM1LjQxOTIyLC4wNzYwNywyNS41MDc4OCwzLjQyNTU3LDE3LjEyNywxMC4yNzY2OCwxMC4yNzY2NiwxNy4xMjcwMiwzLjQyNTUzLDI1LjQzMjIsMCwzNS4xOTIyNiwwczE4LjA2NTI2LDMuNDI1NTMsMjQuOTE1NTYsMTAuMjc2NjZsMjM5Ljg5MjIsMjM5Ljg5MDk3TDUzOS44OTIyMiwxMC4yNzY1OWM2LjU0Njg2LTYuNTQ3NzIsMTQuNzc2NDMtOS44OTcyLDI0LjY4ODU2LTEwLjA0ODUxLDkuOTExMzQtLjE1MjE3LDE4LjI5MjIyLDMuMTk3MzgsMjUuMTQyNTYsMTAuMDQ4NTEsNi44NTExMyw2Ljg1MDI3LDEwLjI3NjY2LDE1LjE1NTUyLDEwLjI3NjY2LDI0LjkxNTU2cy0zLjQyNTUzLDE4LjA2NTIyLTEwLjI3NjY2LDI0LjkxNTU2bC0yMzkuODkwOTcsMjM5Ljg5MjI3LDIzOS44OTEwNSwyMzkuODkyMmM2LjU0NzcyLDYuNTQ2ODksOS44OTcyLDE0Ljc3NjQzLDEwLjA0ODUxLDI0LjY4ODYsLjE1MjE3LDkuOTExMzgtMy4xOTczOCwxOC4yOTIyNC0xMC4wNDg1MSwyNS4xNDI1Ni02Ljg1MDI3LDYuODUxMS0xNS4xNTU1MiwxMC4yNzY2NC0yNC45MTU1NiwxMC4yNzY2Ni05Ljc2MDA0LS4wMDAwMi0xOC4wNjUyMi0zLjQyNTU3LTI0LjkxNTU2LTEwLjI3NjY2bC0yMzkuODkyMjctMjM5Ljg5MTAxWiIvPjwvc3ZnPg==';
    const logo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzNiAzNic+PHBhdGggZmlsbD0nI0ZGQ0M0RCcgZD0nTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTgnLz48cGF0aCBmaWxsPScjNjY0NTAwJyBkPSdNMjIgMjdjMCAyLjc2My0xLjc5MSAzLTQgMy0yLjIxIDAtNC0uMjM3LTQtMyAwLTIuNzYxIDEuNzktNiA0LTYgMi4yMDkgMCA0IDMuMjM5IDQgNnptOC0xMmMtLjEyNCAwLS4yNS0uMDIzLS4zNzEtLjA3Mi01LjIyOS0yLjA5MS03LjM3Mi01LjI0MS03LjQ2MS01LjM3NC0uMzA3LS40Ni0uMTgzLTEuMDgxLjI3Ny0xLjM4Ny40NTktLjMwNiAxLjA3Ny0uMTg0IDEuMzg1LjI3NC4wMTkuMDI3IDEuOTMgMi43ODUgNi41NDEgNC42MjkuNTEzLjIwNi43NjMuNzg3LjU1OCAxLjMtLjE1Ny4zOTItLjUzMy42My0uOTI5LjYzek02IDE1Yy0uMzk3IDAtLjc3Mi0uMjM4LS45MjktLjYyOS0uMjA1LS41MTMuMDQ0LTEuMDk1LjU1Ny0xLjMgNC42MTItMS44NDQgNi41MjMtNC42MDIgNi41NDItNC42MjkuMzA4LS40NTYuOTI5LS41NzcgMS4zODctLjI3LjQ1Ny4zMDguNTgxLjkyNS4yNzUgMS4zODMtLjA4OS4xMzMtMi4yMzIgMy4yODMtNy40NiA1LjM3NEM2LjI1IDE0Ljk3NyA2LjEyNCAxNSA2IDE1eicvPjxwYXRoIGZpbGw9JyM1REFERUMnIGQ9J00yNCAxNmg0djE5bC00LS4wNDZWMTZ6TTggMzVsNC0uMDQ2VjE2SDh2MTl6Jy8+PHBhdGggZmlsbD0nIzY2NDUwMCcgZD0nTTE0Ljk5OSAxOGMtLjE1IDAtLjMwMy0uMDM0LS40NDYtLjEwNS0zLjUxMi0xLjc1Ni03LjA3LS4wMTgtNy4xMDUgMC0uNDk1LjI0OS0xLjA5NS4wNDYtMS4zNDItLjQ0Ny0uMjQ3LS40OTQtLjA0Ny0xLjA5NS40NDctMS4zNDIuMTgyLS4wOSA0LjQ5OC0yLjE5NyA4Ljg5NSAwIC40OTQuMjQ3LjY5NC44NDguNDQ3IDEuMzQyLS4xNzYuMzUtLjUyOS41NTItLjg5Ni41NTJ6bTE0IDBjLS4xNSAwLS4zMDMtLjAzNC0uNDQ2LS4xMDUtMy41MTMtMS43NTYtNy4wNy0uMDE4LTcuMTA1IDAtLjQ5NC4yNDgtMS4wOTQuMDQ3LTEuMzQyLS40NDctLjI0Ny0uNDk0LS4wNDctMS4wOTUuNDQ3LTEuMzQyLjE4Mi0uMDkgNC41MDEtMi4xOTYgOC44OTUgMCAuNDk0LjI0Ny42OTQuODQ4LjQ0NyAxLjM0Mi0uMTc2LjM1LS41MjkuNTUyLS44OTYuNTUyeicvPjxlbGxpcHNlIGZpbGw9JyM1REFERUMnIGN4PScxOCcgY3k9JzM0JyByeD0nMTgnIHJ5PScyJy8+PGVsbGlwc2UgZmlsbD0nI0U3NUE3MCcgY3g9JzE4JyBjeT0nMjcnIHJ4PSczJyByeT0nMicvPjwvc3ZnPg==";
    const css = `
.recent {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 9px;
    border: 0px;
    border-bottom: 1px;
    border-style: solid;
    border-color: var(--border-color);
}
.recent-title {
    margin: 4px;
    font-size: 15px;
    font-family: Roboto, sans-serif;
    color: var(--text-color);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    pointer-events: none;
}
.item.instance::before {
    content: attr(tooltip);
    position: absolute;
    font-size: 13px;
    top: 0;
    left: 50%;
    transform: translate(-50%, calc(-100% - 2px));
    color: inherit;
    white-space: pre;
}
.settings-container {
    display: flex;
    flex-direction: column;
    gap: 28px;
    min-width: 30vw;
}

.setting-block {
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 16.4px;
}

.setting-block h1 {
    font-size: 20px;
    font-family: Roboto, sans-serif;
    line-height: 35px;
    color: var(--text-color);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    display: flex;
    justify-content: space-between;
}

.settings-header {
    font-size: 20px;
    font-family: Roboto, sans-serif;
    color: var(--text-color);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: -21px;
}

.setting-block p {
    max-width: calc(100% - 5vw);
}

.setting-block label[for*="input"] {
    float: left;
    margin-right: 7px;
    margin-top: 5px;
}

.setting-block .text-input {
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 5px 7px;
    color: var(--text-color);
    outline: 0;
    font-size: 16.4px;
    width: calc(100% - 5vw);
}
.setting-block .text-input::placeholder {
    color: var(--border-color);
}
.setting-block .text-input-container {
    overflow: hidden;
}

.checkbox-container {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 30px;
    cursor: pointer;
}

.checkbox-container input {
    opacity: 0;
    width: 0;
    height: 0;
}

.checkbox-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--border-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 15px;
    z-index: -2;
}

.checkbox-slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: var(--background-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    z-index: -1;
}

.dark-mode .checkbox-slider:before {
    background-color: var(--text-color);
}

input:checked + .checkbox-slider {
    background-color: #70b565;
}

input:checked + .checkbox-slider:before {
    transform: translateX(19px);
}

.setting-block:has(input[type="checkbox"]:not(:checked)) .input-wrapper {
    margin-top: -33px;
    opacity: 0;
}

.input-wrapper {
    transition: 0.4s;
}

.sidebar .items > div:nth-child(1) {
		display: var(--display-all-items);
}
`

    function injectCSS({
        styles
    }) {
        styles.appendChild(document.createTextNode(css.trim()));
        document.getElementsByTagName('head')[0].appendChild(styles);
    }

    let settings = JSON.parse(localStorage.getItem("mbs-settings")) || {
        tooltipLimit: 2,
        tooltipHandlers: {},
        pannableBoard: true,
        recentElements: false,
        recentLimit: 10,
        allowVariations: false,
        displayAllItems: true
    };

    function removeActives(instances) {
        const nodes = instances.querySelectorAll(".item.instance");
        for (const node of nodes) {
            node.classList.remove("active");
        }
    }

    const space = String.fromCharCode(160);
    let tooltipCache = {};

    const tooltipHandlers = [{
        id: "romaji",
        name: "Romaji",
        priority: 1,
        description: "Translates kana into romaji whenever possible.",
        enabled: false,
        condition: (e) => wanakana.toRomaji(e.text) !== e.text,
        handle(element, tooltips) {
            tooltips.push(`🇯🇵 ${space}${wanakana.toRomaji(element.text)}`);
        }
    }, {
        id: "charcode",
        name: "Charcode",
        priority: 0,
        description: "Displays the UTF-16 code of the character.",
        enabled: false,
        condition: (e) => [...e.text].length === 1,
        handle(element, tooltips) {
            tooltips.push(`🔡 ${space}U+${element.text.codePointAt().toString(16).toUpperCase().padStart(4, "0")}`);
        }
    }, {
        id: "curly",
        name: "Curly",
        priority: 2,
        description: "Shows whether the element includes curly quotation marks.",
        enabled: false,
        condition: (e) => e.text.includes("“") || e.text.includes("”"),
        handle(element, tooltips) {
            tooltips.push("Curly quoted")
        }
    }, {
        id: "fromcharcode",
        name: "Fromcharcode",
        priority: 0,
        description: "Turns UTF-6 codes to their actual character.",
        enabled: false,
        condition: (e) => /[Uu]\+[0-9a-fA-F]{4,5}/.test(e.text),
        handle(element, tooltips) {
            let res = element.text;
            const matches = res.match(/[Uu]\+[0-9a-fA-F]{4,5}/g) ?? [];
            for (const match of matches) res = res.replace(match, String.fromCodePoint(parseInt(match.slice(2), 16)));
            tooltips.push(`🔢 ${space}${res}`)
        }
    }]

    function addEventOnMutation(instances, mutations) {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0)
                for (const node of mutation.addedNodes) {
                    // node order: emoji, text, comment
                    const element = {
                            emoji: node.childNodes[0]?.textContent?.trim(),
                            text: node.childNodes[1]?.textContent?.trim()
                        },
                        tooltips = tooltipCache[element.text] ?? [];

                    if (!element.text) continue;

                    if (!tooltips.length) {
                        for (const handler of tooltipHandlers.sort((a, b) => a.priority - b.priority)) {
                            if (!handler.enabled) continue;
                            if (typeof handler.condition === "function" && handler.condition(element))
                                handler.handle(element, tooltips)
                        }
                        tooltipCache[element.text] = tooltips;
                    }

                    node.setAttribute("tooltip", tooltips.join("\n"));
                    node.classList.add("active");
                    node.addEventListener("mousedown", () => node.classList.add("active"));
                }
            if (mutation.removedNodes.length > 0) removeActives(instances);
        }
    }

    function addActiveClass({
        instances
    }) {
        const instanceObserver = new MutationObserver((mutations) => {
            addEventOnMutation(instances, mutations);
        });
        instanceObserver.observe(instances, {
            childList: true,
            subtree: true
        });

        instances.addEventListener("mouseup", () => removeActives(instances))
    }

    function addDialogHiddenClass() {
        const modals = [...document.querySelectorAll(".modal")];
        for (const modal of modals) {
            const closeContainer = modal.querySelector(".close-button-container");
            if (!closeContainer) continue;
            closeContainer.addEventListener("click", (e) => {
                e.stopPropagation();
                modal.classList.add('hidden');
                const state = window.getComputedStyle(modal, null).getPropertyValue("-webkit-animation");
                if (state?.endsWith("running none") || state?.endsWith("none running")) return modal.close();
                modal.addEventListener('webkitAnimationEnd', function() {
                    modal.classList.remove('hidden');
                    modal.close();
                    modal.removeEventListener('webkitAnimationEnd', arguments.callee, false);
                }, false);
            }, true);
        }
    }

    const mouseData = {
        down: false,
        x: null,
        y: null,
        deltaX: null,
        deltaY: null
    }

    function moveInstances() {
        for (const instance of unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.instances) {
            if (!instance.elem) continue;
            // won't matter since the z-index is reset upon picking up
            instance.elem.style.setProperty("z-index", -1);
            const translate = instance.elem.style.getPropertyValue("translate").split(" ").map((x) => parseInt(x));
            if (translate.length === 1) translate.push(0);
            translate[0] -= mouseData.deltaX;
            translate[1] -= mouseData.deltaY;
            instance.elem.style.translate = translate.map((x) => x + "px").join(" ");
            instance.top -= mouseData.deltaY;
            instance.left -= mouseData.deltaX;
        }
    }

    function makePannable({
        container,
        instances,
        sidebar
    }) {
        container.addEventListener("mousedown", function(e) {
            if (e.ctrlKey) {
                mouseData.down = true;
                mouseData.x = e.pageX;
                mouseData.y = e.pageY;
            }
        });
        container.addEventListener("mouseup", function() {
            mouseData.down = false;
        })
        container.addEventListener("mousemove", function(e) {
            if (e.which === 1 && mouseData.down) {
                mouseData.deltaX = mouseData.x - e.pageX;
                mouseData.deltaY = mouseData.y - e.pageY;
                mouseData.x = e.pageX;
                mouseData.y = e.pageY;
                moveInstances()
            }
        });
        unsafeWindow.addEventListener("resize", function(e) {
            e.stopImmediatePropagation();
            for (const instance of unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.instances) {
                if (!instance.elem) continue;
                instance.elem.style.setProperty("z-index", -1);
            }
        }, true);
    }

    const recentContainer = document.createElement("div");
    const recentTitle = document.createElement('div');
    let recentElements;

    function initRecentElements(elements) {
        recentContainer.classList.add('recent');
        recentTitle.classList.add('recent-title');
        recentTitle.appendChild(document.createTextNode('Recent Elements'));
        recentContainer.appendChild(recentTitle);
        recentElements = JSON.parse(sessionStorage.getItem("recent-elements")) ?? [];
        if (recentElements.length === 0)
            recentContainer.style.display = 'none';
        updateRecentElements();
        elements.pinnedContainer.after(recentContainer);
    }

    function updateRecentElements() {
        recentContainer.innerHTML = "";
        recentContainer.appendChild(recentTitle);
        if (recentElements.length > 0)
            recentContainer.style.display = 'block';
        for (const recentElement of recentElements) {
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('item');
            const elementEmoji = document.createElement('span');
            elementEmoji.classList.add('item-emoji');
            elementEmoji.appendChild(document.createTextNode(recentElement.emoji ?? '⬜'));
            elementDiv.appendChild(elementEmoji);
            elementDiv.appendChild(document.createTextNode(` ${recentElement.text} `));
            elementDiv.addEventListener('mousedown', (e) => {
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].selectElement(e, cloneInto(recentElement, unsafeWindow));
            });
            recentContainer.appendChild(elementDiv);
        }
        sessionStorage.setItem("recent-elements", JSON.stringify(recentElements));
    }

    function logCrafts() {
        const getCraftResponse = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].getCraftResponse;
        unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].getCraftResponse = exportFunction((...args) => new window.Promise(async (resolve) => {
            const response = await getCraftResponse(...args);
            const args0 = args[0].wrappedJSObject === undefined ? args[0] : args[0].wrappedJSObject;
            const args1 = args[1].wrappedJSObject === undefined ? args[1] : args[1].wrappedJSObject;
            const ingredients = args0.text.localeCompare(args1.text, "en") === -1 ? [args0, args1] : [args1, args0];
            const first = ingredients[0];
            const second = ingredients[1];

            const result = {
                text: response.result,
                emoji: response.emoji,
                discovered: response.isNew
            };

            if (
                first.text === "" ||
                second.text === "" ||
                result.text === "" ||
                result.text === "Nothing"
            ) return resolve(response);

            if (settings.recentElements) {
                let all = ingredients.map((i) => ({
                    text: i.text,
                    emoji: i.emoji,
                    discovered: i.discovered
                })).concat(result);
                if (!settings.allowVariations) all = all.map((e) => unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.elements.find((x) => x.text.toLowerCase() === e.text.toLowerCase()) || e);
                for (const element of all) {
                    const index = recentElements.findIndex((e) => e.text === element.text);
                    if (index !== -1) recentElements.splice(index, 1);
                    recentElements.unshift(element);
                }
                recentElements = recentElements.slice(0, settings.recentLimit);
                updateRecentElements();
            }

            if (
                settings.allowVariations &&
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.elements.findIndex((e) => e.text === result.text) === -1 &&
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.elements.find((e) => e.text.toLowerCase() === result.text.toLowerCase())
            ) {
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.elements.push(result);
                localStorage.setItem("infinite-craft-data", JSON.stringify({
                    elements: JSON.parse(localStorage.getItem("infinite-craft-data")).elements.concat(result)
                }));
            }

            resolve(response);
        }), unsafeWindow);
    }

    unsafeWindow.Array_prototype_find = Array.prototype.find;
    function patchArrayFind() {
        if (!settings.allowVariations) {
            Array.prototype.find = unsafeWindow.Array_prototype_find;
            return console.log("Restored Array.prototype.find");
        }
        Array.prototype.find = function(...a) {
            if (a[0].toString() === "function(element){return element.text.toLowerCase()===d.text.toLowerCase()}") {
                const low = String.prototype.toLowerCase;
                String.prototype.toLowerCase = String.prototype.toString;
                const f = unsafeWindow.Array_prototype_find.apply(this, a);
                String.prototype.toLowerCase = low;
                if (f) return f;
            }
            return unsafeWindow.Array_prototype_find.apply(this, a)
        }
        console.log("Patched Array.prototype.find");
    }

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    function watchSidebarElement(sidebar, element, name) {
        const observer = new ResizeObserver((entries) => {
            sidebar.style.setProperty(`--${name}-height`, `${entries[0].target.clientHeight + 1}px`);
            if (isOverflown(element)) element.classList.add("overflown");
            else element.classList.remove("overflown");
        });
        observer.observe(element);
    }

    function logContainerHeights({
        sidebar,
        pinnedContainer
    }) {
        watchSidebarElement(sidebar, pinnedContainer, "pinnedContainer");
        watchSidebarElement(sidebar, recentContainer, "recentContainer");
    }

    function loadSettings(elements) {
        localStorage.setItem("mbs-settings", JSON.stringify(settings));
        // load tooltip options
        tooltipCache = {};
        for (const [id, config] of Object.entries(settings.tooltipHandlers)) {
            Object.assign(tooltipHandlers.find((x) => x.id === id), config);
        }

        patchArrayFind();

        document.documentElement.style.setProperty("--display-all-items", settings.displayAllItems ? "block" : "none");
    }

    const settingsModal = document.createElement('dialog');
    const settingsTitle = document.createElement('h1');
    const settingsContainer = document.createElement('div');
    let settingsEntries = [{
            header: "General"
        },
        {
            name: "Pannable Board",
            description: "Makes the board pannable using Ctrl + LMB.",
            toggle: true,
            toggleState: () => settings.pannableBoard,
            toggleHandle: () => {
                settings.pannableBoard = !settings.pannableBoard;
                loadSettings();
            },
            inputs: false
        },
        {
            name: "Recent Elements",
            description: "Displays recently used elements in the sidebar.",
            toggle: true,
            toggleState: () => settings.recentElements,
            toggleHandle: () => {
                settings.recentElements = !settings.recentElements;
                loadSettings();
            },
            inputs: [{
                label: "Limit:",
                content: () => settings.recentLimit,
                handle() {
                    const v = parseInt(this.value);
                    if (isNaN(v)) {
                        this.value = settings.recentLimit;
                        return;
                    }
                    this.value = v;
                    settings.recentLimit = v
                    loadSettings();
                }
            }]
        },
        {
            name: "Display All Elements",
            description: "Disabling this will hide the element list when you're not searching.",
            toggle: true,
            toggleState: () => settings.displayAllItems,
            toggleHandle: () => {
                settings.displayAllItems = !settings.displayAllItems;
                loadSettings();
            },
            inputs: false
        },
        {
            header: "Tooltips"
        },
        {
            name: "Tooltip Count",
            description: "Limits the amount of tooltips to show for each element.",
            inputs: [{
                label: "Count:",
                content: () => settings.tooltipLimit,
                handle() {
                    const v = parseInt(this.value);
                    if (isNaN(v)) {
                        this.value = settings.tooltipLimit;
                        return;
                    }
                    this.value = v;
                    settings.tooltipLimit = v;
                    loadSettings();
                }
            }]
        }
    ]

    for (const handler of tooltipHandlers) settingsEntries.push({
        name: `Tooltip: ${handler.name}`,
        description: handler.description,
        toggle: true,
        toggleState: () => settings.tooltipHandlers[handler.id]?.enabled ?? handler.enabled,
        toggleHandle: () => {
            settings.tooltipHandlers[handler.id] ??= {};
            settings.tooltipHandlers[handler.id].enabled = !(settings.tooltipHandlers[handler.id].enabled ?? handler.enabled);
            loadSettings();
        },
        inputs: [{
            label: "Priority:",
            content: () => (settings.tooltipHandlers[handler.id]?.priority ?? handler.priority)?.toString(),
            handle() {
                const v = parseInt(this.value);
                if (isNaN(v)) {
                    this.value = handler.priority.toString();
                    return;
                }
                settings.tooltipHandlers[handler.id] ??= {};
                settings.tooltipHandlers[handler.id].priority = v;
                loadSettings();
            }
        }]
    });

    settingsEntries = settingsEntries.concat([{
            header: "Experimental"
        },
        {
            name: "Allow Variations",
            description: "Normally, you can only have one casing variation of an element in your save. This setting bypasses that.",
            toggle: true,
            toggleState: () => settings.allowVariations,
            toggleHandle: () => {
                settings.allowVariations = !settings.allowVariations;
                loadSettings();
            },
            inputs: false
        },
    ]);

    async function initSettingsModal(elements) {
        settingsModal.classList.add('modal');
        elements.container.appendChild(settingsModal);
        const settingsHeader = document.createElement('div');
        settingsHeader.classList.add('modal-header');
        settingsTitle.classList.add('modal-title');
        settingsTitle.appendChild(document.createTextNode('Settings'));
        settingsHeader.appendChild(settingsTitle);
        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.classList.add('close-button-container');
        const closeButton = document.createElement('img');
        closeButton.src = closeIcon.trim();
        closeButton.classList.add('close-button');
        closeButtonContainer.appendChild(closeButton);
        settingsHeader.appendChild(closeButtonContainer);
        settingsModal.appendChild(settingsHeader);
        settingsContainer.classList.add('settings-container');
        settingsModal.appendChild(settingsContainer);

        for (let i = 0; i < settingsEntries.length; i++) {
            const entry = settingsEntries[i];
            if (entry.header) {
                const header = document.createElement("h1");
                header.appendChild(document.createTextNode(entry.header));
                header.classList.add("settings-header");
                settingsContainer.appendChild(header);
                continue;
            }
            const block = document.createElement("div");
            block.classList.add("setting-block");
            const name = document.createElement("h1");
            name.appendChild(document.createTextNode(entry.name));
            block.appendChild(name);
            if (entry.toggle) {
                const checkboxContainer = document.createElement("label");
                checkboxContainer.classList.add("checkbox-container");
                const checkbox = document.createElement("input");
                checkbox.classList.add("checkbox");
                checkbox.setAttribute("type", "checkbox");
                checkboxContainer.appendChild(checkbox);
                checkbox.checked = entry.toggleState();
                checkbox.addEventListener("change", entry.toggleHandle);
                const slider = document.createElement("span");
                slider.classList.add("checkbox-slider");
                checkboxContainer.appendChild(slider);
                name.appendChild(checkboxContainer);
            }
            const description = document.createElement("p");
            description.appendChild(document.createTextNode(entry.description));
            block.appendChild(description);
            if (entry.inputs)
                for (let j = 0; j < entry.inputs.length; j++) {
                    const input = entry.inputs[j];
                    const id = `settings-${i}-input-${j}`

                    const inputWrapper = document.createElement("div");
                    inputWrapper.classList.add("input-wrapper");

                    const inputContainer = document.createElement("div");
                    inputContainer.classList.add("text-input-container");
                    const textInput = document.createElement("input");
                    textInput.id = id;
                    textInput.classList.add("text-input");
                    textInput.setAttribute("value", input.content());
                    textInput.addEventListener("focusout", input.handle);
                    inputContainer.appendChild(textInput);
                    const label = document.createElement("label");
                    label.setAttribute("for", id)
                    label.appendChild(document.createTextNode(input.label));

                    inputWrapper.appendChild(label);
                    inputWrapper.appendChild(inputContainer);

                    block.appendChild(inputWrapper);
                }
            settingsContainer.appendChild(block);
        }

        const settingsOpenContainer = document.createElement('div');
        settingsOpenContainer.classList.add('setting');
        settingsOpenContainer.appendChild(document.createTextNode('MBS Settings'));
        const settingsImage = document.createElement('img');
        settingsImage.src = logo.trim();
        settingsOpenContainer.appendChild(settingsImage);
        elements.settingsContent.appendChild(settingsOpenContainer);

        settingsOpenContainer.addEventListener("click", () => settingsModal.showModal());
    }

    window.addEventListener('load', async () => {
        const elements = {
            container: document.querySelector(".container"),
            instances: document.querySelector('.instances'),
            sidebar: document.querySelector(".sidebar"),
            pinnedContainer: document.querySelector(".pinned"),
            styles: document.createElement('style'),
            settingsContent: document.querySelector(".settings-content"),
            particles: document.querySelector(".particles")
        }

        initSettingsModal(elements);
        loadSettings();
        injectCSS(elements);
        addActiveClass(elements);
        addDialogHiddenClass();
        logContainerHeights(elements);
        logCrafts();

        if (settings.recentElements) initRecentElements(elements);
        if (settings.pannableBoard) makePannable(elements);

        const reqFrame = unsafeWindow.requestAnimationFrame;
        unsafeWindow.requestAnimationFrame = function () {
            unsafeWindow.requestAnimationFrame = reqFrame;
            elements.particles.remove();
        }
    }, false);
})()