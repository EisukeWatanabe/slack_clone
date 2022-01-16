import { Vue as IVue, VueConstructor } from "vue/types/vue";
import Vue from "vue";

import VModal from "vue-js-modal";

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

function getScrollingElement(): Element | null {
  try {
    if ("scrollingElement" in document) {
      return document.scrollingElement;
    }
    // Fallback for legacy browsers
    if (navigator.userAgent.indexOf("WebKit") != -1) {
      return (document as any).body ?? null;
    }
    return (document as any).documentElement ?? null;
  } catch {
    return null;
  }
}

let scrollTop = 0;

export function showModal(
  vueInstance: IVue,
  modalComponent: VueConstructor,
  props: Record<string, any>,
  options: any = {}
): void {
  options = Object.assign(
    {
      height: "auto",
      width: 800,
      scrollable: true,
    },
    options
  );

  if (window.innerWidth < options.width) {
    options.width = window.innerWidth - 16;
  }

  scrollTop = getScrollingElement()?.scrollTop ?? 0;

  vueInstance.$modal.show(modalComponent, props, options, {
    "before-close": (/* event: any */) => {},
    closed: () => {
      const scrollingElement = getScrollingElement();
      if (scrollingElement != null) {
        // モーダルを開く前のスクロール位置を復元（最上部に戻るバグがあるため）
        scrollingElement.scrollTop = scrollTop;
      }
    },
  });
}
