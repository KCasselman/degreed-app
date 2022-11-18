import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: `<button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor, 'border-radius': borderRadius, 'position': position, 'bottom': bottom, 'right': right, 'margin': margin, 'padding': padding, 'border': border, 'color': color, 'font-weight': fontWeight, 'font-family': fontFamily, 'font-size': fontSize }"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * What border radius to use
   */
  @Input()
  borderRadius?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * What position value to use
   */
  @Input()
  position?: string;

  /**
   * What bottom value to use
   */
  @Input()
  bottom?: string;

  /**
   * What right value to use
   */
  @Input()
  right?: string;

  /**
   * What margin to use
   */
   @Input()
   margin?: string;

  /**
   * What padding to use
   */
   @Input()
   padding?: string;

  /**
   * What border to use
   */
   @Input()
   border?: string;

  /**
   * What color to use
   */
   @Input()
   color?: string;

  /**
   * What font weight to use
   */
   @Input()
   fontWeight?: string;

  /**
   * What font family to use
   */
   @Input()
   fontFamily?: string;

  /**
   * What font size to use
   */
   @Input()
   fontSize?: string;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
