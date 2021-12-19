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
      position: relative;
    }

    .img-container {
      width: 300px;
      height: 300px;
      overflow: hidden;
      transition: transform 1.5s ease;
      transition-delay: .2s;
      filter: grayscale(100%);
    }

    .img-container img {
      transition: transform 1.5s ease;
      width: 300px;
      height: 300px;
      transition-delay: .2s;
    }

    .img-container:hover {
      transform: scale(1.3, 1.8);
      transition-delay: 0s;
    }

    .img-container:hover img {
      transform: scale(1.5);
      transition-delay: 0s;
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

    .timeline-text {
      position: absolute;
      top: 220px;
      left: 20px;
      width: 100%;
      color: #fff;
      pointer-events: none;
    }

    .timeline-text-decade {
      font-size: 1.6rem;
      letter-spacing: 2.5px;
      opacity: 0;
      transition: opacity .5s;
      transition-delay: .5s;
    }

    .timeline-text-about {
      opacity: 0;
      transition: opacity .5s;
      transition-delay: 1s;
    }

    .img-container:hover + .timeline-text .timeline-text-decade,
    .img-container:hover + .timeline-text .timeline-text-about {
      opacity: 1;
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
        <div class="timeline-text">
          <h3 class="timeline-text-decade">1930s</h3>
          <p class="timeline-text-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe necessitatibus corporis voluptas ullam sint totam sapiente ea, quaerat repellat mollitia minus, eaque harum ratione.</p>
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
