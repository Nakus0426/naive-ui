import { fadeInScaleUpTransition } from '../../../_styles/transitions/fade-in-scale-up.cssr'
import { fadeInTransition } from '../../../_styles/transitions/fade-in.cssr'
import { c, cB, cM, } from '../../../_utils/cssr'
import { DRAGGABLE_CLASS } from '../composables'

// vars:
// --n-bezier-ease-out
// --n-box-shadow
// --n-color
// --n-text-color
export default c([
  cB('modal-container', `
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    display: flex;
  `),
  cB('modal-mask', `
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
  `, [
    fadeInTransition({
      enterDuration: '.25s',
      leaveDuration: '.25s',
      enterCubicBezier: 'var(--n-bezier-ease-out)',
      leaveCubicBezier: 'var(--n-bezier-ease-out)'
    })
  ]),
  cB('modal-body-wrapper', `
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: visible;
  `, [
    cB('modal-scroll-content', `
      min-height: 100%;
      display: flex;
      position: relative;
    `),
    cM('penetrate', `pointer-events: none;`)
  ]),
  cB('modal', `
    position: relative;
    align-self: center;
    color: var(--n-text-color);
    margin: auto;
    box-shadow: var(--n-box-shadow);
    pointer-events: all;
  `, [
    fadeInScaleUpTransition({
      duration: '.25s',
      enterScale: '.5'
    }),
    c(`.${DRAGGABLE_CLASS}`, `
      cursor: move;
      user-select: none;
    `),
  ])
])
