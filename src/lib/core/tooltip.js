/**
 * Svelte action for tooltips
 * Usage: <span use:tooltip={"Tooltip text"}>Content</span>
 */

/**
 * @param {HTMLElement} node
 * @param {string} text
 */
export function tooltip(node, text) {
    function update(newText) {
        text = newText;
        if (text) {
            node.setAttribute("data-tooltip", text);
            node.classList.add("has-tooltip");
        } else {
            node.removeAttribute("data-tooltip");
            node.classList.remove("has-tooltip");
        }
    }

    // Initial setup
    update(text);

    return {
        update,
        destroy() {
            node.removeAttribute("data-tooltip");
            node.classList.remove("has-tooltip");
        },
    };
}
