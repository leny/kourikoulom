/**
 * Svelte action for tooltips
 * Usage: <span use:tooltip={"Tooltip text"}>Content</span>
 */

/**
 * @param {HTMLElement} node
 * @param {string} text
 */
export function tooltip(node, text) {
    let isHovered = false;

    function handleMouseEnter() {
        isHovered = true;
        node.title = "";
    }

    function handleMouseLeave() {
        isHovered = false;
        node.title = text || "";
    }

    function update(newText) {
        text = newText;
        if (text) {
            node.setAttribute("data-tooltip", text);
            node.classList.add("has-tooltip");
            if (!isHovered) {
                node.title = text;
            }
        } else {
            node.removeAttribute("data-tooltip");
            node.classList.remove("has-tooltip");
            node.title = "";
        }
    }

    // Initial setup
    update(text);
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return {
        update,
        destroy() {
            node.removeEventListener("mouseenter", handleMouseEnter);
            node.removeEventListener("mouseleave", handleMouseLeave);
            node.removeAttribute("data-tooltip");
            node.classList.remove("has-tooltip");
        },
    };
}
