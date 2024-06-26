/**
 * @file A JavaScript file that is included on every page. If we want to apply a
 * script onto every page for consistency, this is the place to do so.
 */

import "./nav.js";

import "./create-preferences.js";
import { setLang } from "./setLang.js";
setLang(localStorage["language"]);
