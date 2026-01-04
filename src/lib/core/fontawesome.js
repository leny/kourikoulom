import {library, config} from "@fortawesome/fontawesome-svg-core";
import {fad} from "@fortawesome/pro-duotone-svg-icons";
import {fas} from "@fortawesome/pro-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

// Prevent FontAwesome from adding its CSS since we'll handle it manually
config.autoAddCss = false;

// Add all icon packs to the library
library.add(fab, fas, fad);

export {library, config};
