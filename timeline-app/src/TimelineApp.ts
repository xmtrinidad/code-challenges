import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { SharedStyles } from './SharedStyles';

import './components/timeline-item';

export class TimelineApp extends LitElement {
  static styles = 
  [
    SharedStyles,
    css`
    :host {
      display: block;
    }
  `
  ];

  @property({ type: String }) title = 'Hey there';

  render() {
    return html`
      <div class="timeline">
        <timeline-item></timeline-item>
      </div>
    `;
  }
}
