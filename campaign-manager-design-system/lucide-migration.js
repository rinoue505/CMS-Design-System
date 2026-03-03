(() => {
  const ICON_MAP = {
    "nav-arrow-down": "chevron-down",
    "nav-arrow-right": "arrow-right",
    "nav-arrow-left": "arrow-left",
    "cancel": "x",
    "trash": "trash-2",
    "globe": "globe",
    "edit-pencil": "pencil",
    "shop": "store",
    "warning-circle": "alert-circle",
    "warning-triangle": "triangle-alert",
    "info-circle": "info",
    "calendar": "calendar",
    "clock": "clock-3",
    "plus": "plus",
    "search": "search",
    "download": "download",
    "eye": "eye",
    "click": "mouse-pointer-click",
    "cart": "shopping-cart",
    "dollar-circle": "circle-dollar-sign",
    "star": "star",
    "gift": "gift",
    "trending-up": "trending-up",
    "moon-sat": "moon-star"
  };

  document.querySelectorAll("i.iconoir").forEach((iconNode) => {
    const token = Array.from(iconNode.classList).find(
      (cls) => cls.startsWith("iconoir-") && cls !== "iconoir"
    );
    const key = token ? token.replace("iconoir-", "") : "";
    const lucideIcon = ICON_MAP[key] || "circle";

    iconNode.className = "lucide-icon";
    iconNode.setAttribute("data-lucide", lucideIcon);
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
})();
