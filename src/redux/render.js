import { addMessage } from "./state";
import { loadPage } from "./../index";

export let RenderPage = (message) => {
    addMessage(message);
    loadPage();
}