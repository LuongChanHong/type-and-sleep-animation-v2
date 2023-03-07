const ROOT_VARIABLE = 460;
const calculate = (value) => value * ROOT_VARIABLE;

// ===============================================
// CSS VARIABLE - START ==========================
// ===============================================

const BORDER_RADIUS_ALL = {
  sleeping_cat: 0.02,
  coding_cat: 0.02,
  mouth: 0.11,
  hand: 0.11,
  tail: 0.11,
  laptop: 0.11,
  laptopBefore: 0.11,
  laptopAfter: 0.011,
  logo: 0.11,
  c_face: 0.11,
  c_eye: 0.11,
};
const BORDER_RADIUS_TL = {
  s_face: 0.11,
  ear: 0.07,
  bubble: 0.11,
  s_body: 0.35,
};
const BORDER_RADIUS_TR = { s_face: 0.11, bubble: 0.11, s_body: 0.3 };
const BORDER_RADIUS_BR = { s_face: 0.11, s_eye: 0.033, bubble: 0.11 };
const BORDER_RADIUS_BL = { s_eye: 0.033, bubble: 0.011, s_body: 0.11 };
const BORDER_ALL = { s_eye: 0.004 };
const BORDER_TOP = { nose: 0.033 };
const BORDER_LEFT = { nose: 0.02, c_body: 0.07 };
const BORDER_RIGHT = { nose: 0.02, c_body: 0.07 };
const BORDER_BOTTOM = { c_body: 0.22 };
const WIDTH = {
  sleeping_cat: 1,
  coding_cat: 1,
  face: 0.33,
  ear: 0.07,
  eye: 0.033,
  mouth: 0.054,
  bubble: 0.04,
  s_body: 0.43,
  c_body: 0.2,
  hand: 0.05,
  tail: 0.22,
  laptop: 0.2,
  laptopBefore: 0.22,
  laptopAfter: 0.22,
  logo: 0.043,
  whisker: 0.07,
  whisker_before: 0.07,
  whisker_after: 0.07,
};
const HEIGHT = {
  sleeping_cat: 0.8,
  coding_cat: 0.8,
  face: 0.22,
  ear: 0.07,
  eye: 0.033,
  mouth: 0.054,
  bubble: 0.04,
  s_body: 0.33,
  hand: 0.05,
  tail: 0.043,
  laptop: 0.043,
  laptopBefore: 0.043,
  laptopAfter: 0.18,
  logo: 0.043,
  whisker: 0.004,
  whisker_before: 0.004,
  whisker_after: 0.004,
};
const TOP = {
  ear: -0.04,
  eye: 0.08,
  mouth: 0.12,
  hand_l: 0.16,
  c_face: 0.22,
  whisker: 0.03,
  whisker_before: -0.02,
  whisker_after: 0.02,
  c_body: 0.21,
};
const LEFT = {
  ear: 0.07,
  eye: 0.12,
  s_eyeBefore: 0.08,
  mouth: 0.15,
  hand_l: 0.07,
  hand_r: 0.13,
  c_face: 0.33,
  nose: 0.03,
  c_tail: -0.15,
  whisker_l: -0.05,
  whisker_r: 0.08,
};
const BOTTOM = {
  s_face: 0.13,
  bubble: 0.09,
  c_tail: -0.21,
  laptop: 0.13,
  laptopAfter: 0.04,
  logo: 0.11,
};
const RIGHT = {
  s_face: 0.24,
  bubble: 0.09,
  s_body: 0.3,
  s_tail: 0.33,
  s_laptop: 0.07,
  c_laptop: 0.2,
  laptopBefore: 0.15,
  laptopAfter: 0.011,
  logo: 0.1,
};

const BOX_SHADOW = { ear: 0.11, mouth: 0.04, c_eye: 0.09 };

// ===============================================
// CSS VARIABLE - END ============================
// ===============================================

// ===============================================
// ANIMATION CONTAINER - START ===================
// ===============================================

const cat = document.querySelector(".cat");

const styleLable = {
  position: cat.style.position || "relative",
  backgroundColor: cat.style.backgroundColor || "cyan",
  borderRadius: cat.style.borderRadius || "10px",
  // width: cat.style.width || `${rootVariable}px`,
  // height: cat.style.height || `${rootVariable * 0.7}px`,
  width: cat.style.width || "fit-content",
  height: cat.style.height || `fit-content`,
};
const arr = Object.keys(styleLable);

arr.map((item) => {
  cat.style[item] = styleLable[item];
});

// ===============================================
// ANIMATION CONTAINER - END =====================
// ===============================================

// ===============================================
// ANIMATION HTML/CSS - START ====================
// ===============================================

cat.innerHTML = `<input type="checkbox"
style="
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
"
/>
<div
class="sleeping_cat"
style="
  background-color: #ffffff;
  width: ${calculate(WIDTH.coding_cat) + "px"};
  height: ${calculate(HEIGHT.coding_cat) + "px"};
  border-radius: ${calculate(BORDER_RADIUS_ALL.coding_cat) + "px"};
  display: none;
"
>
<div
  class="s_face"
  style="
    background-color: var(--gray-III);
    width: ${calculate(WIDTH.face) + "px"};
    height: ${calculate(HEIGHT.face) + "px"};
    border-radius: ${calculate(BORDER_RADIUS_TL.s_face) + "px"} ${
  calculate(BORDER_RADIUS_TR.s_face) + "px"
} ${calculate(BORDER_RADIUS_BR.s_face) + "px"} 0;
    position: absolute;
    bottom: ${calculate(BOTTOM.s_face) + "px"};
    right: ${calculate(RIGHT.s_face) + "px"};
  "
>
  <div
    class="ear"
    style="
      background: var(--gray-III);
      width: ${calculate(WIDTH.ear) + "px"};
      height: ${calculate(HEIGHT.ear) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_TL.ear) + "px"} 0 0 0;
      position: absolute;
      top: ${calculate(TOP.ear) + "px"};
      left: ${calculate(LEFT.ear) + "px"};
      box-shadow: ${calculate(BOX_SHADOW.ear) + "px"} 0px var(--gray-III);
    "
  ></div>
  <div
    class="s_eye"
    style="
      width: ${calculate(WIDTH.eye) + "px"};
      height: ${calculate(HEIGHT.eye) + "px"};
      position: absolute;
      top: ${calculate(TOP.eye) + "px"};
      left: ${calculate(LEFT.eye) + "px"};
      border: ${calculate(BORDER_ALL.s_eye) + "px"} solid black;
      border-radius: 0 0 ${calculate(BORDER_RADIUS_BR.s_eye) + "px"} ${
  calculate(BORDER_RADIUS_BL.s_eye) + "px"
};
      border-top: none;
    "
  >
    <div
      class="s_eyeBefore"
      style="
        width: ${calculate(WIDTH.eye) + "px"};
        height: ${calculate(HEIGHT.eye) + "px"};
        position: absolute;
        border: ${calculate(BORDER_ALL.s_eye) + "px"} solid black;
        border-radius: 0 0 ${calculate(BORDER_RADIUS_BR.s_eye) + "px"} ${
  calculate(BORDER_RADIUS_BL.s_eye) + "px"
};
        left: ${calculate(LEFT.s_eyeBefore) + "px"};
        border-top: none;
      "
    ></div>
  </div>
  <div
    class="mouth"
    style="
    background-color: var(--gray-IV);
    width: ${calculate(WIDTH.mouth) + "px"};
    height: ${calculate(HEIGHT.mouth) + "px"};
    position: absolute;
    top: ${calculate(TOP.mouth) + "px"};
    left: ${calculate(LEFT.mouth) + "px"};
    border-radius: ${calculate(BORDER_RADIUS_ALL.mouth) + "px"};
    box-shadow: ${calculate(BOX_SHADOW.mouth) + "px"} 0 var(--gray-IV);
    "
  >
    <div
      class="nose"
      style="
        width: 0;
        height: 0;
        border-top: ${calculate(BORDER_TOP.nose) + "px"} solid var(--gray-I);
        border-left: ${calculate(BORDER_LEFT.nose) + "px"} solid transparent;
        border-right: ${calculate(BORDER_RIGHT.nose) + "px"} solid transparent;
        position: absolute;
        top: 0px;
        left: ${calculate(LEFT.nose) + "px"};
      "
    ></div>
    <div
      class="whisker_l"
      style="
        position: absolute;
        background-color: black;
        width: ${calculate(WIDTH.whisker) + "px"};
        height: ${calculate(HEIGHT.whisker) + "px"};
        top: ${calculate(TOP.whisker) + "px"};
        left: ${calculate(LEFT.whisker_l) + "px"};
      "
    >
      <div
        class="whisker_lBefore"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_before) + "px"};
          height: ${calculate(HEIGHT.whisker_before) + "px"};
          top: ${calculate(TOP.whisker_before) + "px"};
          left: 0px;
          transform: rotate(17deg);
        "
      ></div>
      <div
        class="whisker_lAfter"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_after) + "px"};
          height: ${calculate(HEIGHT.whisker_after) + "px"};
          top: ${calculate(TOP.whisker_after) + "px"};
          left: 0px;
          transform: rotate(-17deg);
        "
      ></div>
    </div>
    <div
      class="whisker_r"
      style="
        position: absolute;
        background-color: black;
        width: ${calculate(WIDTH.whisker) + "px"};
        height: ${calculate(HEIGHT.whisker) + "px"};
        top: ${calculate(TOP.whisker) + "px"};
        left: ${calculate(LEFT.whisker_r) + "px"};
      "
    >
      <div
        class="whisker_rBefore"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_before) + "px"};
          height: ${calculate(HEIGHT.whisker_before) + "px"};
          top: ${calculate(TOP.whisker_before) + "px"};
          left: 0px;
          transform: rotate(-17deg);
        "
      ></div>
      <div
        class="whisker_rAfter"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_after) + "px"};
          height: ${calculate(HEIGHT.whisker_after) + "px"};
          top: ${calculate(TOP.whisker_after) + "px"};
          left: 0px;
          transform: rotate(17deg);
        "
      ></div>
    </div>
  </div>
  <div
    class="bubble"
    style="
      background-color: rgba(255, 255, 255, 0.4);
      position: absolute;
      width: ${calculate(WIDTH.bubble) + "px"};
      height: ${calculate(HEIGHT.bubble) + "px"};
      bottom: ${calculate(BOTTOM.bubble) + "px"};
      right: ${calculate(RIGHT.bubble) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_TL.bubble) + "px"} ${
  calculate(BORDER_RADIUS_TR.bubble) + "px"
} ${calculate(BORDER_RADIUS_TR.bubble) + "px"} ${
  calculate(BORDER_RADIUS_BL.bubble) + "px"
};
      transform-origin: bottom left;
    "
  ></div>
  <div
    class="s_body"
    style="
      position: absolute;
      background-color: var(--gray-III);
      width: ${calculate(WIDTH.s_body) + "px"};
      height: ${calculate(HEIGHT.s_body) + "px"};
      bottom: 0;
      right: ${calculate(RIGHT.s_body) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_TL.s_body) + "px"} ${
  calculate(BORDER_RADIUS_TR.s_body) + "px"
} 0 ${calculate(BORDER_RADIUS_BL.s_body) + "px"};
      transform-origin: bottom right;
    "
  ></div>
  <div
    class="s_tail"
    style="
      background: linear-gradient(
        to right,
        var(--gray-III),
        var(--gray-I)
      );
      height: ${calculate(HEIGHT.tail) + "px"};
      width: ${calculate(WIDTH.tail) + "px"};
      position: absolute;
      bottom: 0;
      right: ${calculate(RIGHT.s_tail) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.tail) + "px"};
    "
  ></div>
</div>
<div
  class="s_laptop"
  style="
    background-color: var(--gray-VIII);
    width: ${calculate(WIDTH.laptop) + "px"};
    height: ${calculate(HEIGHT.laptop) + "px"};
    border-radius: ${calculate(BORDER_RADIUS_ALL.laptop) + "px"};
    position: absolute;
    bottom: ${calculate(BOTTOM.laptop) + "px"};
    right: ${calculate(RIGHT.s_laptop) + "px"};
  "
>
  <div
    class="s_laptopBefore"
    style="
      background-color: var(--gray-VII);
      width: ${calculate(WIDTH.laptopBefore) + "px"};
      height: ${calculate(HEIGHT.laptopBefore) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.laptopBefore) + "px"};
      position: absolute;
      bottom: 0;
      right:  ${calculate(RIGHT.laptopBefore) + "px"};
    "
  ></div>
  <div
    class="s_laptopAfter"
    style="
      background-color: var(--gray-VII);
      width: ${calculate(WIDTH.laptopAfter) + "px"};
      height: ${calculate(HEIGHT.laptopAfter) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.laptopAfter) + "px"};
      transform: skew(-10deg);
      position: absolute;
      bottom: ${calculate(BOTTOM.laptopAfter) + "px"};
      right: ${calculate(RIGHT.laptopAfter) + "px"};
    "
  ></div>
  <div
    class="s_logo"
    style="
      background-color: var(--gray-V);
      width: ${calculate(WIDTH.logo) + "px"};
      height: ${calculate(HEIGHT.logo) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.logo) + "px"};
      position: absolute;
      bottom: ${calculate(BOTTOM.logo) + "px"};
      right: ${calculate(RIGHT.logo) + "px"};
      z-index: 1;
    "
  ></div>
</div>
</div>
<div
class="coding_cat"
style="
  background-color: #ffffff;
  width: ${calculate(WIDTH.coding_cat) + "px"};
  height: ${calculate(HEIGHT.coding_cat) + "px"};
  border-radius: ${calculate(BORDER_RADIUS_ALL.coding_cat) + "px"};
  display: block;
"
>
<div
  class="c_face"
  style="
    background-color: var(--gray-III);
    width: ${calculate(WIDTH.face) + "px"};
    height: ${calculate(HEIGHT.face) + "px"};
    border-radius: ${calculate(BORDER_RADIUS_ALL.c_face) + "px"};
    position: absolute;
    top: ${calculate(TOP.c_face) + "px"};
    left: ${calculate(LEFT.c_face) + "px"};
  "
>
  <div
    class="ear"
    style="
      background: var(--gray-III);
      width: ${calculate(WIDTH.ear) + "px"};
      height: ${calculate(HEIGHT.ear) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_TL.ear) + "px"} 0 0 0;
      position: absolute;
      top: ${calculate(TOP.ear) + "px"};
      left: ${calculate(LEFT.ear) + "px"};
      box-shadow: ${calculate(BOX_SHADOW.ear) + "px"} 0px var(--gray-III);
    "
  ></div>
  <div
    class="c_eye"
    style="
      background-color: black;
      width: ${calculate(WIDTH.eye) + "px"};
      height: ${calculate(HEIGHT.eye) + "px"};
      position: absolute;
      top: ${calculate(TOP.eye) + "px"};
      left: ${calculate(LEFT.eye) + "px"};
      border-top: none;
      border-radius: ${calculate(BORDER_RADIUS_ALL.c_eye) + "px"};
      box-shadow: ${calculate(BOX_SHADOW.c_eye) + "px"} 0 black;
    "
  ></div>
  <div
    class="mouth"
    style="
      background-color: var(--gray-IV);
      width: ${calculate(WIDTH.mouth) + "px"};
      height: ${calculate(HEIGHT.mouth) + "px"};
      position: absolute;
      top: ${calculate(TOP.mouth) + "px"};
      left: ${calculate(LEFT.mouth) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.mouth) + "px"};
      box-shadow: ${calculate(BOX_SHADOW.mouth) + "px"} 0 var(--gray-IV);
    "
  >
    <div
      class="nose"
      style="
        width: 0;
        height: 0;
        border-top: ${calculate(BORDER_TOP.nose) + "px"} solid var(--gray-I);
        border-left: ${calculate(BORDER_LEFT.nose) + "px"} solid transparent;
        border-right: ${calculate(BORDER_RIGHT.nose) + "px"} solid transparent;
        position: absolute;
        top: 0px;
        left: ${calculate(LEFT.nose) + "px"};
      "
    ></div>
    <div
      class="whisker_l"
      style="
        position: absolute;
        background-color: black;
        width: ${calculate(WIDTH.whisker) + "px"};
        height: ${calculate(HEIGHT.whisker) + "px"};
        top: ${calculate(TOP.whisker) + "px"};
        left: ${calculate(LEFT.whisker_l) + "px"};
      "
    >
      <div
        class="whisker_lBefore"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_before) + "px"};
          height: ${calculate(HEIGHT.whisker_before) + "px"};
          top: ${calculate(TOP.whisker_before) + "px"};
          left: 0px;
          transform: rotate(17deg);
        "
      ></div>
      <div
        class="whisker_lAfter"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_after) + "px"};
          height: ${calculate(HEIGHT.whisker_after) + "px"};
          top: ${calculate(TOP.whisker_after) + "px"};
          left: 0px;
          transform: rotate(-17deg);
        "
      ></div>
    </div>
    <div
      class="whisker_r"
      style="
        position: absolute;
        background-color: black;
        width: ${calculate(WIDTH.whisker) + "px"};
        height: ${calculate(HEIGHT.whisker) + "px"};
        top: ${calculate(TOP.whisker) + "px"};
        left: ${calculate(LEFT.whisker_r) + "px"};
      "
    >
      <div
        class="whisker_rBefore"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_before) + "px"};
          height: ${calculate(HEIGHT.whisker_before) + "px"};
          top: ${calculate(TOP.whisker_before) + "px"};
          left: 0px;
          transform: rotate(-17deg);
        "
      ></div>
      <div
        class="whisker_rAfter"
        style="
          position: absolute;
          background-color: black;
          width: ${calculate(WIDTH.whisker_after) + "px"};
          height: ${calculate(HEIGHT.whisker_after) + "px"};
          top: ${calculate(TOP.whisker_after) + "px"};
          left: 0px;
          transform: rotate(17deg);
        "
      ></div>
    </div>
  </div>
  <div
    class="c_body"
    style="
      position: absolute;
      width: ${calculate(WIDTH.c_body) + "px"};
      height: 0;
      border-bottom: ${
        calculate(BORDER_BOTTOM.c_body) + "px"
      } solid var(--gray-III);
      border-left: ${calculate(BORDER_LEFT.c_body) + "px"} solid transparent;
      border-right: ${calculate(BORDER_RIGHT.c_body) + "px"} solid transparent;
      top: ${calculate(TOP.c_body) + "px"};
      left: 0px;
    "
  >
    <div class="c_hand">
      <div
        class="c_hand_l"
        style="
          background-color: var(--gray-IV);
          position: absolute;
          width: ${calculate(WIDTH.hand) + "px"};
          height: ${calculate(HEIGHT.hand) + "px"};
          border-radius: ${calculate(BORDER_RADIUS_ALL.hand) + "px"};
          top: ${calculate(TOP.hand_l) + "px"};
          left: ${calculate(LEFT.hand_l) + "px"};
        "
      ></div>
      <div
        class="c_hand_r"
        style="
          background-color: var(--gray-IV);
          position: absolute;
          width: ${calculate(WIDTH.hand) + "px"};
          height: ${calculate(HEIGHT.hand) + "px"};
          border-radius: ${calculate(BORDER_RADIUS_ALL.hand) + "px"};
          top: 0px;
          left: ${calculate(LEFT.hand_r) + "px"};
        "
      ></div>
    </div>
  </div>
  <div
    class="c_tail"
    style="
      background: linear-gradient(
        to left,
        var(--gray-III),
        var(--gray-I)
      );
      height: ${calculate(HEIGHT.tail) + "px"};
      width: ${calculate(WIDTH.tail) + "px"};
      position: absolute;
      bottom: ${calculate(BOTTOM.c_tail) + "px"};
      left: ${calculate(LEFT.c_tail) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.tail) + "px"};
    "
  ></div>
</div>
<div
  class="c_laptop"
  style="
    background-color: var(--gray-VIII);
    width: ${calculate(WIDTH.laptop) + "px"};
    height: ${calculate(HEIGHT.laptop) + "px"};
    border-radius: ${calculate(BORDER_RADIUS_ALL.laptop) + "px"};
    position: absolute;
    bottom: ${calculate(BOTTOM.laptop) + "px"};
    right: ${calculate(RIGHT.c_laptop) + "px"};
  "
>
  <div
    class="c_laptopBefore"
    style="
      background-color: var(--gray-VII);
      width: ${calculate(WIDTH.laptopBefore) + "px"};
      height: ${calculate(HEIGHT.laptopBefore) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.laptopBefore) + "px"};
      position: absolute;
      bottom: 0;
      right:  ${calculate(RIGHT.laptopBefore) + "px"};
    "
  ></div>
  <div
    class="c_laptopAfter"
    style="
      background-color: var(--gray-VII);
      width: ${calculate(WIDTH.laptopAfter) + "px"};
      height: ${calculate(HEIGHT.laptopAfter) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.laptopAfter) + "px"};
      transform: skew(-10deg);
      position: absolute;
      bottom: ${calculate(BOTTOM.laptopAfter) + "px"};
      right: ${calculate(RIGHT.laptopAfter) + "px"};
    "
  ></div>
  <div
    class="c_logo"
    style="
      background-color: var(--gray-V);
      width: ${calculate(WIDTH.logo) + "px"};
      height: ${calculate(HEIGHT.logo) + "px"};
      border-radius: ${calculate(BORDER_RADIUS_ALL.logo) + "px"};
      position: absolute;
      bottom: ${calculate(BOTTOM.logo) + "px"};
      right: ${calculate(RIGHT.logo) + "px"};
      z-index: 1;
    "
  ></div>
</div>
</div>`;

// ===============================================
// ANIMATION HTML/CSS - END ======================
// ===============================================

// ===============================================
// SWITCHING AMIMATION EVENT - START =============
// ===============================================

const checkBox = cat.querySelector("input");
const sleeping_cat = cat.querySelector(".sleeping_cat");
const coding_cat = cat.querySelector(".coding_cat");

// ẩn/hiện animation khi click checkbox
checkBox.addEventListener("click", function () {
  if (checkBox.checked) {
    sleeping_cat.style.display = "block";
    coding_cat.style.display = "none";
  } else {
    sleeping_cat.style.display = "none";
    coding_cat.style.display = "block";
  }
});

// ===============================================
// SWITCHING AMIMATION EVENT - END ===============
// ===============================================

// ===============================================
// ANIMATION KEY FRAMES - START ==================
// ===============================================

// BLINK ANIMATION

const typingEye = document.querySelector(".c_eye");

const blinkKeyframes = [
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },

  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },

  { transform: "scaleY(1)" },
  { transform: "scaleY(1)" },
  { transform: "scaleY(0.3)" },
  { transform: "scaleY(1)" },
];

const blinkAnimaOptions = {
  duration: 3000,
  iterations: Infinity,
  easing: "ease-out",
};

typingEye.animate(blinkKeyframes, blinkAnimaOptions);

// ===============================================

// TYPING ANIMATION

const leftHand = document.querySelector(".c_hand_l");
const rightHand = document.querySelector(".c_hand_r");

const leftHandKeyFrames = [
  { transform: "none", height: `${calculate(HEIGHT.hand)}px` },
  {
    transform: `translateY(${calculate(-0.15)}px)`,
    height: `${calculate(0.08)}px`,
  },
  { transform: "none", height: `${calculate(HEIGHT.hand)}px` },
];

const rightHandKeyFrames = [
  { transform: "none", height: `${calculate(HEIGHT.hand)}px` },
  {
    transform: `translateY(${calculate(0.15)}px)`,
    height: `${calculate(0.08)}px`,
  },
  { transform: "none", height: `${calculate(HEIGHT.hand)}px` },
];

const typeAnimaOptions = {
  duration: 500,
  iterations: Infinity,
  easing: "linear",
};

leftHand.animate(leftHandKeyFrames, typeAnimaOptions);
rightHand.animate(rightHandKeyFrames, typeAnimaOptions);

// ===============================================

// BREATHING ANIMATION

const sleepingBody = document.querySelector(".s_body");

const bodyKeyFrames = [
  { transform: "none" },
  { transform: "scale(0.9, 1.05)" },
  { transform: "none" },
];

const breathingAnimaOptions = {
  duration: 3000,
  iterations: Infinity,
  easing: "ease-out",
};

sleepingBody.animate(bodyKeyFrames, breathingAnimaOptions);

// ===============================================

// BUBBLE ANIMATION

const bubble = document.querySelector(".bubble");

const bubbleKeyFrames = [
  {
    transform: "scale(1)",
  },
  {
    transform: "scale(1.7)",
  },
  {
    transform: "scale(1)",
  },
];

const bubbleAnimaOptions = {
  duration: 3000,
  iterations: Infinity,
  easing: "ease-out",
};

bubble.animate(bubbleKeyFrames, bubbleAnimaOptions);

// ===============================================
// ANIMATION KEY FRAMES - END ====================
// ===============================================
