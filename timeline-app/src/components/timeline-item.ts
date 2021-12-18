import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { SharedStyles } from '../SharedStyles';

@customElement('timeline-item')
export class TimelineItem extends LitElement {
  static styles = 
  [
    SharedStyles,
    css`
    :host {
      display: block;
      width: fit-content;
    }

    .timeline-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .img-container {
      width: 300px;
      height: 300px;
      overflow: hidden;
      transition: transform 1.5s ease;
    }

    .img-container img {
      transition: transform 1.5s ease;
      width: 300px;
      height: 300px;
    }

    .img-container:hover {
      transform: scale(1.3, 1.8);
    }

    .img-container:hover img {
      transform: scale(1.5);
    }

    .line {
      height: 300px;
      width: 2px;
      background-color: red;
      margin-bottom: 12px;
    }

    .decade {
      font-size: 1.6rem;
      letter-spacing: 2.5px;
    }
  `
  ];

  @property({ type: String }) title = 'Hey there';

  render() {
    return html`
      <div class="timeline-item">
        <div class="img-container">
          <img src="https://picsum.photos/375/475" alt="">
        </div>
        <div class="line"></div>
        <span class="decade">1930s</span>
      </div>
    `;
  }

  onImageMouseOver() {
    console.log('here');
    this.setAttribute('expand', '');
  }

  onImageMouseOut() {
    this.removeAttribute('expand');
  }
}
